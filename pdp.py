import pandas as pd
import math

# Step 1: Upload and load your file in Colab
# Run this to upload:
from google.colab import files
uploaded = files.upload()

# Then load (adjust filename and sheet)
file_path = 'MHG NETWORK_PDP (1).xlsx'  # Corrected filename to match uploaded file
# Data starts after headers; from document, header around row 4 (0-indexed row 3)
df = pd.read_excel(file_path, sheet_name='Network Master', header=3)

# If needed, print columns to check names
# print(df.columns.tolist())

# Step 2: Identify/compute key columns
# From data: weekly volumes are in columns like 'Season' (third one, weekly), 'Off season' (second)
# Cases/truck is 'Cases/truck'
# Truck Type is 'Truck Type predominant' (for grouping later if needed)

# Assuming columns (adjust indices/names based on your df.columns):
# Weekly season volume: often column index around 18-20, but use names if possible.
# For safety, if columns have duplicates, use positions.
# Example adjustment:
weekly_season_col = 'Season.1'  # Or df.columns[18] etc.; check print(df.columns)
weekly_offseason_col = 'Off season.1'
cases_per_truck_col = 'Cases/truck'

# Compute trucks per week (ceil to ensure full truck for remaining cases)
def compute_trucks(weekly_volume, cases_per_truck):
    if pd.isna(weekly_volume) or pd.isna(cases_per_truck) or cases_per_truck == 0:
        return 0
    return math.ceil(weekly_volume / cases_per_truck)

df['Season Trucks/Week'] = df.apply(lambda row: compute_trucks(row[weekly_season_col], row[cases_per_truck_col]), axis=1)
df['Offseason Trucks/Week'] = df.apply(lambda row: compute_trucks(row[weekly_offseason_col], row[cases_per_truck_col]), axis=1)

# Step 3: Updated spread function - 7 days delivery, Sat/Sun ~70% of weekday average
def spread_trucks_7days_adjusted(trucks_per_week):
    """
    Logic:
    - Total trucks must exactly match trucks_per_week.
    - Allocate proportionally: weekdays (Mon-Fri) get full share (5 parts), weekend (Sat-Sun) get 70% each (1.4 parts total).
    - Total parts: 5 + 1.4 = 6.4
    - Compute target trucks for Mon-Fri group and weekend group.
    - Round the Mon-Fri total, adjust weekend to make exact total.
    - Then spread evenly within Mon-Fri (5 days) and within weekend (2 days) using base + remainder.
    - This keeps daily counts as even as possible within groups, while weekend days are ~70% of weekday average.
    """
    if trucks_per_week == 0:
        return [0] * 7

    total_parts = 5 + 1.4  # 6.4
    mon_fri_target_total = trucks_per_week * (5 / total_parts)
    mon_fri_total = round(mon_fri_target_total)

    weekend_total = trucks_per_week - mon_fri_total  # Ensures exact total

    # Spread Mon-Fri
    base_mf = mon_fri_total // 5
    rem_mf = mon_fri_total % 5
    mon_fri_daily = [base_mf + 1 if i < rem_mf else base_mf for i in range(5)]

    # Spread weekend
    if weekend_total < 0:  # Rare edge, but clamp
        weekend_total = 0
    base_w = weekend_total // 2
    rem_w = weekend_total % 2
    weekend_daily = [base_w + 1 if i < rem_w else base_w for i in range(2)]

    return mon_fri_daily + weekend_daily

# Step 4: Apply to dataframe
df['Season Daily'] = df['Season Trucks/Week'].apply(spread_trucks_7days_adjusted)
df['Offseason Daily'] = df['Offseason Trucks/Week'].apply(spread_trucks_7days_adjusted)

# Step 5: Expand to day columns
days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
for i, day in enumerate(days):
    df[f'Season_{day}'] = df['Season Daily'].apply(lambda x: x[i])
    df[f'Offseason_{day}'] = df['Offseason Daily'].apply(lambda x: x[i])

# Drop temporary list columns
df.drop(['Season Daily', 'Offseason Daily'], axis=1, inplace=True)

# Step 6: Aggregate totals per day (for summary like PDP top table)
season_totals = df[[f'Season_{day}' for day in days]].sum()
offseason_totals = df[[f'Offseason_{day}' for day in days]].sum()

print("Season Daily Truck Totals (Mon-Sun):")
print(season_totals)
print("\nTotal Season Trucks/Week (should match sum):", season_totals.sum())

print("\nOff-Season Daily Truck Totals (Mon-Sun):")
print(offseason_totals)
print("\nTotal Off-Season Trucks/Week (should match sum):", offseason_totals.sum())

# Optional: Group by Truck Type for per-type summary
truck_summary_season = df.groupby('Truck Type predominant')[[f'Season_{day}' for day in days]].sum()
print("\nSeason per Truck Type:")
print(truck_summary_season)

# Step 7: Save updated file
output_path = 'updated_pdp_with_7days.xlsx'
df.to_excel(output_path, index=False)
print(f"\nUpdated file saved: {output_path}")
# Download: from google.colab import files; files.download(output_path)