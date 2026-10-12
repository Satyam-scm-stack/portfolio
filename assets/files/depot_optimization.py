import pandas as pd
import numpy as np
from sklearn.cluster import KMeans, DBSCAN
from geopy.distance import geodesic
import folium
from folium.plugins import MarkerCluster
import io
from google.colab import files
import json

# Load the CSV file
# Note: Upload the file to Colab or adjust the path if using Google Drive
df = pd.read_csv('Karnatka_df.csv')

# Function to calculate distance between two lat-long points in kilometers
def calculate_distance(coord1, coord2):
    return geodesic(coord1, coord2).kilometers

# Step 1: Clustering with K-Means to find potential depot locations
coords = df[['Customer_Lat', 'Customer_Long']].values
kmeans = KMeans(n_clusters=5, random_state=42)  # Adjust n_clusters as needed
df['KMeans_Cluster'] = kmeans.fit_predict(coords)
cluster_centers = kmeans.cluster_centers_

# Step 2: Refine clusters with DBSCAN to identify dense regions
dbscan = DBSCAN(eps=0.05, min_samples=5, metric='haversine').fit(np.radians(coords))
df['DBSCAN_Cluster'] = dbscan.labels_

# Step 3: Heuristic optimization to find the optimal depot
max_customers = 0
optimal_depot = None
optimal_depot_lat = None
optimal_depot_long = None
depot_assignment = ['Not Assigned'] * len(df)

for center in cluster_centers:
    depot_lat, depot_long = center
    customers_within_50km = 0
    temp_assignment = ['Not Assigned'] * len(df) # Corrected initialization

    for idx, row in df.iterrows():
        customer_coord = (row['Customer_Lat'], row['Customer_Long'])
        depot_coord = (depot_lat, depot_long)
        distance = calculate_distance(customer_coord, depot_coord)

        if distance <= 50:
            customers_within_50km += 1
            temp_assignment[idx] = 'Assigned'

    if customers_within_50km > max_customers:
        max_customers = customers_within_50km
        optimal_depot = f"Depot_{max_customers}"
        optimal_depot_lat = depot_lat
        optimal_depot_long = depot_long
        depot_assignment = temp_assignment # Update the main assignment list

# Add results to DataFrame
df['Depot_Assignment_Status'] = depot_assignment
df['Optimal_Depot_Name'] = optimal_depot
df['Optimal_Depot_Lat'] = optimal_depot_lat
df['Optimal_Depot_Long'] = optimal_depot_long

# Step 4: Save to Excel
output_columns = ['CustomerCode', 'District', 'Customer_Lat', 'Customer_Long',
                 'Depot_Assignment_Status', 'Optimal_Depot_Name',
                 'Optimal_Depot_Lat', 'Optimal_Depot_Long']
df[output_columns].to_excel('Customer_Depot_Assignment.xlsx', index=False)
# files.download('Customer_Depot_Assignment.xlsx') # Commenting out download for faster iteration

# Step 5: Create interactive HTML map with OpenStreetMap
# Initialize map centered at the optimal depot
m = folium.Map(location=[optimal_depot_lat, optimal_depot_long], zoom_start=8, tiles='OpenStreetMap')

# Add 50 km radius circle and optimal depot marker
folium.Circle(
    location=[optimal_depot_lat, optimal_depot_long],
    radius=50000,  # 50 km in meters
    color='red',
    fill=True,
    fill_opacity=0.2,
    popup=f'Optimal Depot: {optimal_depot}'
).add_to(m)

folium.Marker(
    [optimal_depot_lat, optimal_depot_long],
    popup=f'Optimal Depot: {optimal_depot}',
    icon=folium.Icon(color='red', icon='star') # Pin icon
).add_to(m)


# Create a GeoJSON feature collection for customers
features = []
for idx, row in df.iterrows():
    features.append({
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [row['Customer_Long'], row['Customer_Lat']]
        },
        'properties': {
            'CustomerCode': row['CustomerCode'],
            'District': row['District'],
            'Depot_Assignment_Status': row['Depot_Assignment_Status'],
            'popup_text': f"Customer: {row['CustomerCode']}<br>District: {row['District']}<br>Depot: {row['Depot_Assignment_Status']}"
        }
    })

geojson_data = {
    'type': 'FeatureCollection',
    'features': features
}

# Add a GeoJson layer for all customers (will be controlled by JS filter)
customer_geojson_layer = folium.GeoJson(
    geojson_data,
    marker=folium.features.CircleMarker(radius=3), # Point marker
    tooltip=folium.features.GeoJsonTooltip(fields=['popup_text']),
    style_function=lambda feature: {
        'fillColor': 'green' if feature['properties']['Depot_Assignment_Status'] == 'Assigned' else 'red',
        'color': 'none', # Remove border
        'fillOpacity': 1
    },
    name='Customers' # Name for the layer control (optional here, as JS handles filtering)
) # Do not add to map initially, JS will manage

# Add a JavaScript-based multi-select district filter in the top right
districts = df['District'].unique().tolist()
districts.sort() # Sort districts alphabetically

filter_html = """
<div style="position: fixed; top: 10px; right: 10px; z-index: 9999; background-color: white; padding: 10px; border: 1px solid grey;">
    <label for="district-select">Select District(s):</label>
    <select id="district-select" multiple size="{size}" onchange="filterCustomers()">
        <option value="All" selected>All Districts</option>
        {% for district in districts %}
        <option value="{{ district }}">{{ district }}</option>
        {% endfor %}
    </select>
</div>

<script>
    var map = {{ map_name }};
    var customer_geojson = {{ geojson_data | tojson }};
    var customer_markers = L.featureGroup().addTo(map); // FeatureGroup to hold customer markers

    function filterCustomers() {
        var selectedDistricts = [];
        var selectElement = document.getElementById("district-select");
        for (var i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].selected) {
                selectedDistricts.push(selectElement.options[i].value);
            }
        }

        // Clear existing customer markers
        customer_markers.clearLayers();

        // Add markers for selected districts
        customer_geojson.features.forEach(function(feature) {
            if (selectedDistricts.includes("All") || selectedDistricts.includes(feature.properties.District)) {
                var lat = feature.geometry.coordinates[1];
                var lon = feature.geometry.coordinates[0];
                var color = feature.properties.Depot_Assignment_Status === 'Assigned' ? 'green' : 'red';
                var tooltip_text = feature.properties.popup_text;

                var marker = L.circleMarker([lat, lon], {
                    radius: 3,
                    fillColor: color,
                    color: 'none',
                    fillOpacity: 1
                });
                marker.bindTooltip(tooltip_text);
                marker.addTo(customer_markers); // Add marker to the FeatureGroup
            }
        });
    }

    // Initial display of all markers
    filterCustomers();

</script>
"""

# Calculate size for the select element based on number of districts + 1 (for "All")
select_size = len(districts) + 1
if select_size < 3: # Ensure a minimum size for usability
    select_size = 3

# Render the HTML template with data
from jinja2 import Template
html_template = Template(filter_html)
rendered_html = html_template.render(
    districts=districts,
    geojson_data=geojson_data,
    map_name=m.get_name(),
    size=select_size
)

m.get_root().html.add_child(folium.Element(rendered_html))


# Save map to HTML
m.save('Customer_Depot_Map.html')
files.download('Customer_Depot_Map.html') # Uncomment for download

# Display the map in the Colab environment
from IPython.display import display, HTML
display(HTML('Customer_Depot_Map.html'))


print(f"Optimal Depot: {optimal_depot} at ({optimal_depot_lat}, {optimal_depot_long})")
print(f"Number of customers covered within 50 km: {max_customers}")