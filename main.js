/* ==========================================================
   EDIT THIS BLOCK to change what the site says. No build step.
   ========================================================== */
const CONFIG = {
  github: "https://github.com/krsatyam112",
  linkedin: "",   // paste your profile URL, e.g. "https://www.linkedin.com/in/your-handle"  (hidden while empty)
  email: "kr.satyam112@gmail.com",
  phone: "+91-6370178077",
  location: "Mumbai, India"
};

const ABOUT = "Supply chain and logistics professional with 8+ years across FMCG and e-commerce. I run end-to-end logistics for a zone with 7 depots, 25 direct reports and about 3,500 customers, managing ₹150 Cr+ in annual logistics spend. Alongside the day job I build my own analytics: Python network optimisation, Six Sigma DMAIC and automated planning tools that turn operational data into cost, service and capacity decisions.";

const FACTS = [
  ["₹150 Cr+", "annual logistics spend managed"],
  ["7 depots · 25 reports", "Maharashtra & Goa zone, ~3,500 customers"],
  ["8+ years", "FMCG and e-commerce logistics"]
];

const COMPETENCIES = ["Supply chain strategy & network design", "Transportation planning & cost-to-serve", "Control tower, OTIF & TAT", "Depot & network optimisation", "PDP & fleet / truck planning", "MHE & manpower planning", "Inventory replenishment (eCRS)", "SAP TM", "Lean / Kaizen / 5S", "Logistics analytics & automation"];

const EXPERIENCE = [
  { role: "Zonal Manager, Logistics / Supply Chain Lead", org: "Hindustan Coca-Cola Beverages (HCCB)", when: "Oct 2022 to present · Mumbai",
    points: [
      "Own end-to-end logistics for the Maharashtra & Goa zone: 7 depots, 25 direct reports, about 3,500 customers, across factories, CFAs and the GT, MT, e-commerce and inter-unit channels. Manage ₹150 Cr+ annual logistics spend.",
      "Built and ran a Logistics Control Tower for OTIF, carrier performance and deviation monitoring. Cut order-to-delivery TAT from 52 to 42 hours and delivered ₹13.4M in signed-off logistics savings.",
      "Improved same-day delivery by 65% while sustaining 97%+ NKA fill rate.",
      "Led eCRS data strategy and rollout across MEP distributors: mean days of coverage down from 16 to 12 days, inventory variability (std. dev.) down from 14 to 6 days.",
      "Applied K-Means, ILP/MILP and heuristic optimisation to redesign the Southwest Cluster network (9 new depot locations), identifying about ₹9.24 Cr in network savings. Separately restructured Maharashtra freight rates and dedicated-fleet contracts."
    ] },
  { role: "Operations Lead, Fulfilment Centres", org: "Flipkart", when: "Sep 2021 to Sep 2022",
    points: [
      "Led inbound, outbound, inventory, returns and P&L for large 3PL-managed fulfilment centres serving Flipkart and Myntra.",
      "Partnered with Tech and Product on PAN-India TAAS (Direct Inwarding), balancing peak volume, vendor TAT and shelf-life constraints.",
      "Drove Lean, Kaizen and 5S initiatives to improve throughput and cost efficiency."
    ] },
  { role: "Operations Manager / Ops Team Lead", org: "Rivigo", when: "Jun 2018 to Sep 2021 · East and North regions",
    points: [
      "Progressed from control-tower analytics into on-ground operations leadership.",
      "Cut accidents by about 75% (to 1 per 1.5 lakh km) through driver-behaviour programmes, safety interventions and technology adoption.",
      "Implemented a variable manpower payout model and led union negotiations, achieving about 25% cost reduction."
    ] }
];

const KPIS = [
  ["₹5.5 Cr", "annual logistics savings delivered"],
  ["~₹13 Cr", "further savings identified"],
  ["52 → 42 hrs", "order-to-delivery TAT"],
  ["+65%", "same-day delivery"],
  ["97%+", "NKA fill rate sustained"],
  ["16 → 12 days", "mean days of coverage (eCRS)"]
];

const PROJECTS = [
  {
    id: "bp2027", title: "Transportation Business Plan 2027", period: "Jul 2026 to present", status: "Implementation", team: 28,
    role: "Lead Planner",
    summary: "Bottom-up transportation plan for the Maharashtra & Goa cluster, built on the BP 2026 base.",
    big: "Lead Planner", bigNote: "team of 28, in implementation",
    problem: "The 2027 transportation plan had to be rebuilt bottom-up from volume, lane, vehicle and rate assumptions rather than rolled forward from the previous year.",
    approach: ["Reorganised the BP 2026 workbook as the baseline for 2027.", "Led planning across a 28-person team.", "Linked fleet, trips, rates and cost per case into one planning model."],
    results: ["Currently in implementation. Results will be added once the plan year closes."],
    stack: ["Advanced Excel", "Business planning", "Fleet planning", "CPC modelling"],
    files: [],
    note: "Short on purpose: the source file did not include a written case study. Add problem, approach and results in main.js."
  },
  {
    id: "wada", title: "Shipping, MHE & Manpower Plan, Wada H2 2026", period: "Apr 2026 to Jul 2026", status: "Live operations", team: 60,
    role: "Warehouse operations design lead: dock and MHE throughput design and execution, peak vs lean planning",
    summary: "Sized forklifts, reach trucks, loadalls and shift manpower from production and customer volumes, not a flat headcount.",
    big: "17 / 7 / 2 / 1", bigNote: "forklifts, reach trucks, loadalls, ALD in the fleet baseline",
    problem: "Wada's H2 2026 plan had to absorb changing production, customer and sourcing volumes while keeping shipping capacity, MHE, manpower productivity and cost in balance, without over-staffing or creating dock bottlenecks.",
    approach: [
      "Built an integrated capacity model linking production, customer volume, sourcing and shipping requirements.",
      "Broke shipping into activities: PTS and shipment creation, vehicle planning, invoicing and e-way bills, empties, pallets and ILS, returns, FG unloading and staging, loading, MIS.",
      "Calculated MHE need from working hours, activity volumes, pallet movement rates and equipment productivity, then compared it with owned equipment to find monthly gaps.",
      "Built manpower by shift and activity, with week-off and leave cover, split into permanent and DEO or temporary staff.",
      "Linked Mathadi requirement and cost to actual workload for a 2025 vs 2026 comparison."
    ],
    results: [
      "Model driven by 2026 monthly production, customer and sourcing volumes instead of a static baseline.",
      "MHE need vs available fleet calculated separately for DM/SM forklifts, reach trucks, loadalls and ALDs.",
      "Hiring cost modelled at ₹1,75,750 per DM forklift and ₹1,22,750 per SM forklift.",
      "Shipping manpower structured across 8 core permanent roles plus DEO, across four shifts."
    ],
    stack: ["Advanced Excel", "Activity-based planning", "MHE productivity modelling", "Gap analysis", "CPC modelling"],
    files: []
  },
  {
    id: "depot", title: "Depot Optimisation, SW Cluster", period: "Mar 2025 to Jun 2025", status: "Deployed", team: 45,
    role: "End to end: business case, location identification (ILP and clustering), vendor identification and negotiation, MP training, live operations",
    summary: "Where to place inventory and which customers to serve from it, proven in a business case with every lever priced.",
    big: "₹9.24 Cr", bigNote: "network savings identified across levers",
    problem: "The Southwest network had to be redesigned for volume growth while cutting secondary distribution cost and moving closer to customers. The question was not which depot is cheapest, but where inventory should sit and how customers map to it.",
    approach: [
      "Mapped customer latitude and longitude to find demand clusters and candidate depot locations.",
      "Used K-Means for candidate centres and DBSCAN for dense regions; measured real distances with geodesic calculations.",
      "Picked the candidate covering the most customers within 50 km and validated coverage customer by customer.",
      "Showed depot, 50 km radius and assigned or unassigned customers on an interactive map.",
      "Folded the findings into a commercial business case: primary and secondary freight, warehousing, structural exceptions and plant storage.",
      "Tested remapping of legacy flows such as Bhiwandi, Bhandup and Lote, and combined it with loadability, one-way market sourcing, reverse auction and dedicated-fleet reduction."
    ],
    results: [
      "Dedicated-fleet optimisation was the largest lever: about ₹3.12 Cr in the modelled Mumbai scenario.",
      "Loadability improvement: about ₹2.66 Cr. Structural remapping: about ₹2.02 Cr.",
      "Raising market and one-way sourcing from 10% to 15%: about ₹1.15 Cr. Reverse auction: about ₹29 Lakh.",
      "The redesign adds 9 new depot locations.",
      "Optimised depot placement lowers final-mile cost, accepting more primary freight and warehousing, and the business case shows the net effect."
    ],
    stack: ["Python", "Pandas / NumPy", "Scikit-learn", "K-Means", "DBSCAN", "GeoPandas", "Geopy", "Folium", "Excel business case"],
    files: [["Python code (depot clustering)", "assets/files/depot_optimization.py"], ["White paper (PDF)", "assets/files/depot-location-white-paper.pdf"]]
  },
  {
    id: "rate", title: "Rate Optimisation & Reverse Auction", period: "Jul 2025 to Sep 2025", status: "Live operations", team: 35,
    role: "Ideation, formulation, lane identification, multi-round discussions with transport partners, implementation",
    summary: "One 2026 freight-rate framework across Market, Pool and Dedicated vehicles in Maharashtra.",
    big: "₹1.97 Cr", bigNote: "₹23.8 Lakh market/pool + ₹1.73 Cr dedicated, identified",
    problem: "Maharashtra freight was run on three models, Market, Pool and Dedicated, with different vehicle types, customer segments, distances and local rates. The goal was a data-driven 2026 rate framework and lower fixed cost in the dedicated fleet.",
    approach: [
      "Consolidated freight needs across Nashik, Wada and Pune and segmented the network by operating model.",
      "Built customer-level rates from vehicle type, one-way distance, customer type and lane.",
      "Compared 2025 rates with proposed 2026 rates and set separate structures for GT, Key Accounts, MPB and other customers.",
      "Added commercial clauses: drop, detention and other additional charges.",
      "Built a dedicated-fleet cost model by vehicle type, transporter, location and season, and trimmed fixed cost while holding capacity."
    ],
    results: [
      "Market and pool optimisation: about ₹23.8 Lakh, 1.69% of baseline spend. Nashik about ₹15.28 Lakh (4.17%), Wada market about ₹3.72 Lakh (4.11%), Pune about ₹4.78 Lakh.",
      "Dedicated fleet: about ₹1.73 Cr, spend from about ₹34.80 Cr to ₹33.07 Cr (4.98%), covering 254 vehicles with seasonal needs identified separately.",
      "One Maharashtra view of trips, volume, spend and savings by vehicle type, location, customer and model."
    ],
    stack: ["Advanced Excel", "Rate modelling", "Scenario comparison", "Reverse-auction analysis", "Vehicle-capacity modelling"],
    files: []
  },
  {
    id: "pdp", title: "Primary Dispatch Planning (PDP)", period: "Jul 2025 to Sep 2025", status: "Deployed", team: 60,
    role: "Ideation, framework, formulation, coding and development; briefed logistics, design and sales teams; SPOC for live use",
    summary: "A Python tool that turns weekly volume into a day-wise truck plan that always adds back to the weekly total.",
    big: "100%", bigNote: "weekly-to-daily reconciliation",
    problem: "Primary distribution needed weekly shipment volumes converted into an executable day-wise vehicle plan, respecting truck capacity, season and off-season demand and lower weekend movement.",
    approach: [
      "Converted weekly season and off-season volume into trucks per week from cases per truck, rounding up to whole trucks.",
      "Spread trucks across Monday to Sunday with Saturday and Sunday at about 70% of the weekday average.",
      "Used an exact-total allocation so the daily plan always equals the weekly requirement.",
      "Produced separate Season and Off-Season views, summarised by day and truck type, and exported to Excel."
    ],
    results: [
      "Weekly demand became a 7-day executable vehicle plan.",
      "No fractional trucks and no drift between weekly and daily totals.",
      "Capacity can be reviewed per day and per truck type in both seasons."
    ],
    stack: ["Python", "Pandas", "Rule-based allocation", "Excel export"],
    files: [["Python code (PDP)", "assets/files/pdp.py"]]
  },
  {
    id: "sixsigma", title: "Customer TAT Reduction, Six Sigma Green Belt", period: "West Cluster, Mumbai", status: "Completed", team: null,
    role: "Project Leader across Transportation, Supply Chain, Warehousing, Fleet and MDM",
    summary: "Cut the time Mumbai dedicated vehicles spend per trip, using data from 6,290 trips.",
    big: "52 → 44 hrs", bigNote: "TAT, target was 45 hrs",
    problem: "Mumbai dedicated vehicles averaged 51.63 hours of customer TAT, which hurt vehicle rotation, utilisation and cost per case. The target was 45 hours.",
    approach: [
      "Defined TAT as a measurable quality characteristic split into HCCB TAT, transit TAT and overall TAT.",
      "Mapped the full path: gate report, unloading, loading, invoicing, gate out, customer delivery.",
      "Set the baseline from 6,290 observations: control charts, capability, normality and sigma level (1.99).",
      "Found root causes with cause and effect, Pareto, 5-Why and FMEA: customer detention, en-route idling, dispatch slotting, vehicle availability, plant delays, no real-time visibility.",
      "Introduced GPS visibility, a control tower, detention and delayed-vehicle dashboards, advance staging and eCRS-driven replenishment, with escalation and audit controls."
    ],
    results: [
      "Projected saving of ₹13.58 Mn a year from needing fewer vehicles.",
      "Plant outbound TAT improved from 6.49 to 5.67 hours in the pilot comparison.",
      "About 30 minutes more opportunity from better transporter representative availability at the plant.",
      "Mumbai reached 95% GPS enablement, the highest in the country at the time."
    ],
    stack: ["Six Sigma tools", "Power BI", "GPS / telematics", "Control tower", "Excel analysis"],
    approvals: [
      "Project go-ahead approved on 10 Jan 2024. The proposal set the objective as cutting Mumbai dedicated-vehicle TAT by 4 hours, with no additional investment.",
      "Savings sign-off: on 19 Jan 2024 the projected saving of about ₹13 Mn, from a reduction in the fixed vehicle count, was sent for approval. Pawan Kumar, Finance head, confirmed it."
    ],
    files: [["Live Transit TAT dashboard", "https://krsatyam112.github.io/TRANSIT-TAT-FROM-GATE-TRANSACTION/"]]
  },
  {
    id: "ecrs", title: "eCRS: System-driven Distributor Replenishment", period: "Jul 2024 to Dec 2024", status: "Deployed", team: 80,
    role: "Data extraction and analysis; coordination with sales, distribution and order-taking teams; troubleshooting; liaison with the external consultant",
    summary: "Moved distributor replenishment from manual, sales-driven ordering to inventory norms and automated stock allocation.",
    big: "143 SKUs", bigNote: "Mumbai pilot, A/B/C classified",
    problem: "Manual ordering led to stock-outs, excess stock and inconsistent replenishment. The business needed a scalable, system-driven model that could grow into an All-India connected supply chain.",
    approach: [
      "Built the pilot around SKU inventory norms, customer classification, safety stock, transit time and vehicle capacity.",
      "Worked with Logistics, Sales, Demand Planning, Procurement, Analytics and IT on policies and controls.",
      "Defined master data: SKU class, vehicle types, multisite, maximum inventory and distributor capacity.",
      "Set rules for plan tweaking, multisite stock controls, and ASM and DTL training with field support."
    ],
    results: [
      "Pilot designed for 143 active SKUs in Mumbai across A, B and C classes.",
      "Across MEP distributors, mean days of coverage fell from 16 to 12 days and inventory variability (std. dev.) from 14 to 6 days.",
      "Created the foundation to scale from Mumbai to an All-India model.",
      "A controlled way to balance service level, inventory investment and logistics capacity, especially for low-volume C-class SKUs.",
      "Recognised with an Above and Beyond award (see Recognition)."
    ],
    stack: ["eCRS platform", "MSP portal", "Master-data frameworks", "Inventory policy (DOI)", "Analytics"],
    files: []
  }
];

const TOOLS = [
  { t: "Truck Requirement Builder", d: "Web app that turns weekly volume, variance and skewness into a fleet requirement and a week-by-week execution plan.", href: "https://krsatyam112.github.io/fleet-execution-plan/", label: "Open live tool" },
  { t: "Transit TAT Dashboard", d: "In-house control tower. Reads gate-register or TMS logs, stitches legs into round trips, and tracks TAT, SLA adherence, defaulters and idle time with drilldowns and export.", href: "https://krsatyam112.github.io/TRANSIT-TAT-FROM-GATE-TRANSACTION/", label: "Open live dashboard" },
  { t: "White paper: depot location and customer assignment", d: "Independent paper (30 July 2025). Places four depots for 252 customers in Kerala using k-means++ and Haversine distance, maximising coverage within 100 km.", href: "assets/files/depot-location-white-paper.pdf", label: "Read the PDF" },
  { t: "CS50: Flappy Bird in Scratch", d: "Project from Harvard's CS50 for Business Professionals: events, loops, conditionals, motion and collision detection.", href: "https://scratch.mit.edu/projects/689124323", label: "Play it" }
];

const AWARDS = [
  { img: "assets/awards/network-leadership.jpg", behavior: "Network Leadership", award: "Above and Beyond", pts: "1000 points", from: "Alok Sharma", fromRole: "Executive Director", date: "28 Dec 2023",
    quote: "Thank you for your outstanding contribution in facilitating planning and closure of manning requirements for new lines & also the capability building of the incumbents…" },
  { img: "assets/awards/ecrs-above-and-beyond.jpg", behavior: "Agile", award: "Above and Beyond", pts: "500 points", from: "Dinesh Jadhav", fromRole: "Global VP", date: "29 Jun 2024",
    quote: "Thank you for your excellent support in supporting and driving distributor replenishment and overcoming the challenges of a startup operating model…" },
  { img: "assets/awards/efficiency-ongoing-impact.jpg", behavior: "Efficiency", award: "Ongoing Impact", pts: "500 points", from: "Richard Smith", fromRole: "Zonal Sales VP", date: "10 Jul 2024",
    quote: "Satyam great job in H1, keep up the excellent work! Thankyou" },
  { img: "assets/awards/rivigo-wow-surprise-award.jpg", award: "WOW Surprise Award", from: "Rivigo", fromRole: "", date: "15 Apr 2019", altText: "Certificate of Recognition: WOW Surprise Award, Rivigo, 15 April 2019" }
];

const CERTS = [
  { img: "assets/certs/sap-tm.jpg", t: "SAP S/4HANA Cloud Public Edition, Transportation Management", s: "SAP · Intermediate · Record of Achievement" },
  { img: "assets/certs/cs50.jpg", t: "CS50 Computer Science for Business Professionals", s: "Harvard University · 2022 to 2023 · six assignments", href: "https://cs50.harvard.edu/certificates/64ef5344-e8e2-4d61-9181-cc5e204f0357" },
  { t: "Certified Lean Six Sigma Green Belt", s: "ASCB-USA" },
  { t: "B.Tech, Electrical Engineering", s: "KIIT University · 2014 to 2018" }
];

const SKILLS = {
  "Planning & strategy": ["Business planning", "Network design", "Fleet & rate optimisation", "MHE & manpower planning", "Primary dispatch planning"],
  "Analytics & tools": ["Python", "Pandas", "Scikit-learn", "ILP / MILP", "Geospatial analysis", "Advanced Excel", "Power BI", "HTML / JS dashboards"],
  "Systems & method": ["SAP S/4HANA TM", "Lean Six Sigma", "Control towers", "Dashboards"]
};

/* ---------------- rendering ---------------- */
const $ = (s) => document.querySelector(s);
const el = (tag, attrs = {}, html = "") => { const e = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v)); e.innerHTML = html; return e; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

$("#yr").textContent = new Date().getFullYear();

$("#about-text").textContent = ABOUT;
$("#facts").innerHTML = FACTS.map(([a, b]) => `<li><strong>${esc(a)}</strong><span>${esc(b)}</span></li>`).join("");
$("#competencies").innerHTML = COMPETENCIES.map((c) => `<li>${esc(c)}</li>`).join("");
$("#timeline").innerHTML = EXPERIENCE.map((e) => `<li><h3>${esc(e.role)}</h3><div class="org">${esc(e.org)}</div><p class="when">${esc(e.when)}</p><ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></li>`).join("");

$("#kpis").innerHTML = KPIS.map(([v, l]) => `<div><dt>${esc(v)}</dt><dd>${esc(l)}</dd></div>`).join("");

const ORDER = ["depot","rate","pdp","sixsigma","wada","ecrs","bp2027"];
PROJECTS.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));
PROJECTS.forEach((p) => {
  const li = el("li");
  const live = /live/i.test(p.status) ? " live" : "";
  li.innerHTML = `<button class="prow" type="button" data-id="${p.id}">
    <div><h3>${esc(p.title)}</h3>
    <p class="meta"><span class="tag${live}">${esc(p.status)}</span>${esc(p.period)}${p.team ? " · team of " + p.team : ""}</p>
    <p class="sum">${esc(p.summary)}</p></div>
    <div class="big">${esc(p.big)}<small>${esc(p.bigNote)}</small></div></button>`;
  $("#project-list").appendChild(li);
});

const caseDlg = $("#case");
function openCase(id) {
  const p = PROJECTS.find((x) => x.id === id);
  const link = ([n, h]) => `<li><a href="${esc(h)}" ${h.startsWith("http") ? 'target="_blank" rel="noopener"' : "download"}>${esc(n)}</a></li>`;
  $("#case-body").innerHTML = `
    <h2 id="case-title">${esc(p.title)}</h2>
    <div class="facts"><span>${esc(p.period)}</span><span>${esc(p.status)}</span>${p.team ? `<span>Team of ${p.team}</span>` : ""}</div>
    <h4>My role</h4><p>${esc(p.role)}</p>
    <h4>Problem</h4><p>${esc(p.problem)}</p>
    <h4>What I did</h4><ul>${p.approach.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
    <h4>Results</h4><ul class="result">${p.results.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
    <h4>Tools</h4><div class="chips">${p.stack.map((s) => `<span>${esc(s)}</span>`).join("")}</div>
    ${p.approvals ? `<h4>Approvals</h4><ul>${p.approvals.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>` : ""}
    ${p.files.length ? `<h4>Files and links</h4><ul>${p.files.map(link).join("")}</ul>` : ""}
    ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}`;
  caseDlg.showModal();
  caseDlg.scrollTop = 0;
  history.replaceState(null, "", "#" + id);
}
$("#project-list").addEventListener("click", (e) => { const b = e.target.closest(".prow"); if (b) openCase(b.dataset.id); });
caseDlg.addEventListener("close", () => history.replaceState(null, "", location.pathname));
document.querySelectorAll("dialog").forEach((d) => {
  d.querySelector(".close").addEventListener("click", () => d.close());
  d.addEventListener("click", (e) => { if (e.target === d) d.close(); });
});
if (PROJECTS.some((p) => p.id === location.hash.slice(1))) openCase(location.hash.slice(1));

$("#tool-grid").innerHTML = TOOLS.map((t) => `<div class="tool"><h3>${esc(t.t)}</h3><p>${esc(t.d)}</p><a href="${esc(t.href)}" target="_blank" rel="noopener">${esc(t.label)}</a></div>`).join("");

const viewer = $("#viewer");
function zoom(src, alt) { $("#viewer-img").src = src; $("#viewer-img").alt = alt; viewer.showModal(); }

$("#award-list").innerHTML = AWARDS.map((a) => `<article class="award">
  <img src="${a.img}" alt="${esc(a.altText || `Certificate of recognition: ${a.award} for ${a.behavior}, from ${a.from}, ${a.date}`)}" data-zoom>
  <div><p class="from">${esc(a.from)}</p><p class="role2">${esc([a.fromRole, a.date].filter(Boolean).join(" · "))}</p>
  <p><strong>${esc(a.award)}</strong>${a.behavior ? ` for <strong>${esc(a.behavior)}</strong>` : ""}${a.pts ? ` <span class="pts">${esc(a.pts)}</span>` : ""}</p>
  ${a.quote ? `<blockquote>${esc(a.quote)}</blockquote>` : ""}</div></article>`).join("");

$("#cert-list").innerHTML = CERTS.map((c) => `<div class="cert">${c.img ? `<img src="${c.img}" alt="${esc(c.t)} certificate" data-zoom>` : `<span></span>`}
  <div><p class="t">${esc(c.t)}</p><p>${esc(c.s)}</p>${c.href ? `<p><a href="${esc(c.href)}" target="_blank" rel="noopener">Verify online</a></p>` : ""}</div></div>`).join("");
$("#cert-list").querySelectorAll(".cert").forEach((c) => { if (!c.querySelector("img")) c.style.gridTemplateColumns = "1fr"; });

$("#skills").innerHTML = Object.entries(SKILLS).map(([k, v]) => `<h3>${esc(k)}</h3><ul>${v.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`).join("");

document.addEventListener("click", (e) => { const i = e.target.closest("[data-zoom]"); if (i) zoom(i.src, i.alt); });

const contact = [
  ["Email", CONFIG.email, "mailto:" + CONFIG.email],
  ["Phone", CONFIG.phone, "tel:" + CONFIG.phone.replace(/[^+\d]/g, "")],
  ["LinkedIn", CONFIG.linkedin && "Open profile", CONFIG.linkedin],
  ["GitHub", "krsatyam112", CONFIG.github],
  ["Location", CONFIG.location, ""]
].filter((x) => x[1]);
$("#contact-list").innerHTML = contact.map(([k, v, h]) => `<li><small>${k}</small>${h ? `<a href="${esc(h)}" ${h.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${esc(v)}</a>` : `<span>${esc(v)}</span>`}</li>`).join("");
