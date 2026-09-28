export type Project = {
  slug: string;
  name: string;
  industry: string;
  label: string;
  short: string;
  challenge: string;
  solution: string;
  questions: string[];
  approach: string[];
  kpis: string[];
  insights: string[];
  modeling: string;
  limitation: string;
  tools: string[];
  images: { src: string; alt: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: 'cedarvale-freight-partners',
    name: 'CedarVale Freight Partners',
    industry: 'Logistics operations',
    label: 'Power BI',
    short: 'A five-page logistics report connecting revenue and target performance with delivery reliability, receivables, customer exposure, drivers, and fleet cost.',
    challenge: 'Management needed a single view of commercial performance and service risk. Revenue by itself could not show whether deliveries were reliable, customer balances were being collected, or fleet costs were under control.',
    solution: 'The report moves from an executive overview to operations, finance and customers, and fleet reliability. It combines current results, target comparisons, trends, ranked exceptions, and detailed scorecards.',
    questions: [
      'Where is revenue ahead or behind plan, and which customer segments drive the result?',
      'Which lanes, routes, drivers, or vehicles create the greatest service risk?',
      'How concentrated is open and overdue receivables exposure?',
      'Are fuel, maintenance, and downtime trends threatening reliable delivery?'
    ],
    approach: [
      'I related shipment, customer, route, driver, vehicle, fuel, maintenance, invoice, payment, date, and target data in a dimensional model.',
      'I kept outcome measures separate from diagnostic measures so a user can move from a variance to a likely operating cause.',
      'I used target comparisons, exception panels, trends, and scorecards to support follow-up.'
    ],
    kpis: ['Revenue and target variance', 'Operating result and margin', 'Shipments and revenue per shipment', 'On-time delivery and delay rate', 'Fuel and maintenance cost', 'Downtime hours', 'Open and overdue receivables'],
    insights: [
      'The latest displayed revenue is $384K, 6.5% below target, while on-time delivery is 91.9% and slightly below target.',
      'The lane scorecard exposes uneven service performance; the Pittsburgh destination is shown at 86.0% on-time.',
      'The executive page highlights $72K of overdue cash exposure and identifies the largest open customer balance.',
      'The fleet page connects a maintenance spike and downtime exceptions with vehicle-level service risk.'
    ],
    modeling: 'I used a date-led dimensional model to relate operational transactions to customer, route, driver, and vehicle data. Finance and target tables support period and variance analysis, and the measures keep current-period results separate from full-history totals.',
    limitation: 'I did not calculate fleet utilization or route- or customer-level profitability because the available source fields do not support those measures.',
    tools: ['Power BI', 'Power Query', 'DAX', 'Dimensional modeling', 'KPI design', 'Operational analysis', 'Data quality controls'],
    images: [
      { src: '/assets/screenshots/cedarvale/01-executive-cockpit.png', alt: 'CedarVale Freight Partners executive cockpit with revenue, margin, on-time delivery, lane scorecard, and management risks', caption: 'Executive cockpit: target variance, lane performance, receivables exposure, and management priorities.' },
      { src: '/assets/screenshots/cedarvale/02-fleet-reliability.png', alt: 'CedarVale fleet reliability dashboard with fuel, maintenance, downtime, and vehicle scorecard', caption: 'Fleet reliability: cost, downtime, maintenance concentration, and vehicle-level service risk.' }
    ]
  },
  {
    slug: 'lumatrail-market',
    name: 'LumaTrail Market',
    industry: 'E-commerce and merchandising',
    label: 'Power BI',
    short: 'A five-page e-commerce report separating changes in order volume from changes in average order value, with product margin, returns, channels, and inventory in view.',
    challenge: 'The main question was whether revenue movement came from order volume, average order value, or both. The report also needed to keep product margin, returns, channel performance, and inventory visible.',
    solution: 'The five pages cover the executive view, sales and customers, products and merchandising, and channels and operations. The home page states the current demand issue before the user moves into the details.',
    questions: [
      'Is revenue movement driven by order volume, average order value, or both?',
      'Which categories and products combine scale, margin quality, and acceptable return behavior?',
      'Where do acquisition channels create efficient demand versus costly volume?',
      'Which products need pricing, return-reason, or inventory review?'
    ],
    approach: [
      'I connected order, order-line, customer, product, return, marketing-spend, inventory, date, and target data.',
      'I kept volume, value, margin, and return measures separate so revenue would not stand in for the full result.',
      'I used product tables and exception labels to show which items need pricing, return-reason, channel, or inventory review.'
    ],
    kpis: ['Revenue', 'Orders and units', 'Average order value', 'Customers', 'Product gross margin', 'Return rate and refunds', 'Channel efficiency', 'Inventory signals'],
    insights: [
      'The latest displayed period shows $54K revenue from 348 orders and a $156.13 AOV.',
      'Orders are down 23.5% versus the prior period while AOV is up 9.9%, so lower order volume is the immediate demand issue.',
      'The products view reports 49.3% item margin and a 5.0% cohort return rate for the displayed period.',
      'Luma Pack 115 is flagged at a 44.4% cohort return rate for return-reason and channel review.'
    ],
    modeling: 'I separated order headers, order lines, returns, marketing activity, inventory, and product and customer dimensions. Item-level cost fields support gross margin, and cohort return measures keep product returns aligned with sold units.',
    limitation: 'I used gross margin only where the item-level source includes the required cost fields. I did not claim causal marketing lift or lifetime customer value beyond the observed portfolio data.',
    tools: ['Power BI', 'Power Query', 'DAX', 'Commerce analytics', 'Merchandising analysis', 'Customer and channel analysis', 'Exception design'],
    images: [
      { src: '/assets/screenshots/lumatrail/03-home.png', alt: 'LumaTrail Market home page with revenue, orders, AOV, customers, return rate, and order-volume alert', caption: 'Commerce home: the volume-versus-value story is visible before the user enters a detailed page.' },
      { src: '/assets/screenshots/lumatrail/04-products-merchandising.png', alt: 'LumaTrail product and merchandising dashboard with category sales, return rates, margin, and product decision table', caption: 'Products and merchandising: sales, margin, returns, velocity, and an explicit investigation queue.' }
    ]
  },
  {
    slug: 'pinebridge-dental-arts',
    name: 'Pinebridge Dental Arts',
    industry: 'Healthcare operations',
    label: 'Power BI',
    short: 'A dental-practice report connecting appointment access and provider activity with attendance, collections, receivables, insurance claims, and treatment mix.',
    challenge: 'Practice leaders needed to understand whether growth was turning into completed visits while also monitoring cancellations, no-shows, collections, and insurance follow-up.',
    solution: 'The five-page report covers executive performance, practice operations, finance and patients, and providers and treatments. Appointment status remains explicit throughout the report.',
    questions: [
      'Is practice growth converting into completed visits and target attainment?',
      'Which providers require attendance or scheduling support?',
      'How do treatments contribute to volume and revenue mix?',
      'Where are collection and insurance-claim delays building?'
    ],
    approach: [
      'I modeled patients, dentists, treatments, appointments, invoices, payments, claims, dates, and targets.',
      'I kept scheduled, completed, cancelled, and no-show activity separate so the attendance measures remain clear.',
      'I used provider and treatment scorecards to show where attendance or scheduling follow-up may be needed.'
    ],
    kpis: ['Revenue and target variance', 'Patients served', 'Appointments and completed visits', 'Cancellation and no-show rates', 'Collection rate', 'Receivables and claims', 'Revenue per completed visit'],
    insights: [
      'The latest displayed period reports $133K revenue, 296 patients served, and 323 appointments.',
      'No-shows are 7.1% against a 4.0% target, making attendance the clearest current issue.',
      'The provider view identifies Taylor Ramos at a 12.0% no-show rate for targeted coaching.',
      'Treatment mix connects completed visits with value per visit and revenue share.'
    ],
    modeling: 'Appointment status drives access and attendance measures, while invoices, payments, and claims support financial follow-up. Patient, provider, treatment, and date dimensions provide consistent filtering across the report.',
    limitation: "I defined a patient's first visit as the earliest observed visit in the available dataset. It is not a lifetime acquisition date and does not represent activity before the observed history.",
    tools: ['Power BI', 'Power Query', 'DAX', 'Healthcare operations analytics', 'Provider scorecards', 'Receivables analysis'],
    images: [
      { src: '/assets/screenshots/pinebridge/05-executive-overview.png', alt: 'Pinebridge Dental Arts executive overview with revenue, patients, appointments, collection rate, and provider scorecard', caption: 'Executive overview: target attainment, access, attendance quality, and provider accountability.' },
      { src: '/assets/screenshots/pinebridge/06-providers-treatments.png', alt: 'Pinebridge providers and treatments dashboard with attendance trend and treatment portfolio', caption: 'Providers and treatments: productivity, treatment economics, and no-show coaching signals.' }
    ]
  },
  {
    slug: 'ember-oak-kitchen',
    name: 'Ember & Oak Kitchen',
    industry: 'Restaurant operations',
    label: 'Power BI',
    short: 'A restaurant-operations report covering sales, menu economics, food cost, purchasing, channels, customers, and a documented limitation in the labor source.',
    challenge: 'The owner needed to understand how sales growth, menu mix, food cost, purchasing, channel demand, and high-volume items affected the business.',
    solution: 'The report covers net sales, orders, average order value, food-cost pressure, menu gross contribution, purchasing patterns, channel mix, and item- and category-level results.',
    questions: ['Which channels and categories drive sales?', 'Where is food-cost pressure reducing menu contribution?', 'Which menu items merit pricing, recipe, or purchasing review?', 'What can be stated confidently when a source is inconsistent?'],
    approach: ['I modeled orders and order items separately from purchasing, inventory, customers, and daily operations.', 'I calculated menu gross contribution only from supported sales and food-cost fields.', 'I placed labor-derived profitability on Source Hold after the labor source failed consistency checks.'],
    kpis: ['Net sales', 'Orders and average order value', 'Food cost %', 'Menu gross contribution', 'Units sold', 'Channel and category mix', 'Purchasing trend'],
    insights: ['The latest displayed period shows $42K revenue and 35.0% food cost.', 'Food cost is 5.0 points above the 30.0% target, directing attention to recipes, pricing, and recent protein purchases.', 'The menu decision table distinguishes popular, strong-contribution items from lower-volume items needing review.'],
    modeling: 'Order-line data supports menu sales, units, food cost, and gross contribution. I kept purchasing and inventory as separate processes rather than combining them into an unsupported profit measure.',
    limitation: 'The labor source failed consistency checks. I placed labor-based margin and downstream profitability measures on Source Hold instead of presenting a result I could not validate. Menu gross contribution is not operating profit.',
    tools: ['Power BI', 'Power Query', 'DAX', 'Menu engineering', 'Purchasing analysis', 'Data governance'],
    images: [
      { src: '/assets/screenshots/ember-oak/07-executive-overview.png', alt: 'Ember and Oak executive overview with sales, orders, food cost, AOV, channels, and category contribution', caption: 'Executive overview: net sales, demand mix, target food cost, and the next operating action.' },
      { src: '/assets/screenshots/ember-oak/08-menu-performance.png', alt: 'Ember and Oak menu performance dashboard with purchasing trend and item decision table', caption: 'Menu performance: item popularity, supported contribution, food cost, and review signals.' }
    ]
  },
  {
    slug: 'frostline-home-comfort',
    name: 'Frostline Home Comfort',
    industry: 'Field-service operations',
    label: 'Power BI',
    short: 'A field-service report covering seasonal demand, technician capacity, first-time fix, utilization, customer satisfaction, and direct service contribution.',
    challenge: 'Service leaders needed to balance weather-driven demand and technician capacity without losing first-time-fix performance, customer satisfaction, or direct service contribution.',
    solution: 'The report moves from an executive overview to service operations, finance and customers, and technician performance.',
    questions: ['Can current demand be served without weakening quality?', 'Which technicians combine productivity, first-time fix, utilization, and CSAT?', 'Where are repeat visits or service exceptions concentrated?', 'How much direct contribution remains after directly attributable service costs?'],
    approach: ['I connected service calls, appointments, technicians, equipment, parts usage, invoices, payments, customers, dates, and targets.', 'I reviewed throughput together with first-time fix and customer satisfaction.', 'I used technician scorecards to compare productivity, quality, utilization, and CSAT rather than ranking technicians on revenue alone.'],
    kpis: ['Revenue', 'Service calls', 'Average ticket', 'Technician utilization', 'First-time fix', 'Customer satisfaction', 'Direct Service Contribution', 'Open/completed work'],
    insights: ['The latest displayed period shows $163K revenue, 156 service calls, and 89.8% technician utilization.', 'First-time fix is 78.2% and slightly below target, making it the clearest current service issue.', 'The technician view combines revenue with utilization, first-time fix, and customer satisfaction.'],
    modeling: 'Service activity links to appointments, technicians, customers, equipment, invoices, payments, and parts usage. Directly attributable service revenue and costs support Direct Service Contribution.',
    limitation: 'Direct Service Contribution is not operating profit. I calculated it from directly attributable service revenue and costs; broader operating expenses are not present in the source data.',
    tools: ['Power BI', 'Power Query', 'DAX', 'Field-service analytics', 'Capacity analysis', 'Technician performance'],
    images: [
      { src: '/assets/screenshots/frostline/09-home.png', alt: 'Frostline Home Comfort home dashboard with revenue, contribution margin, calls, first-time fix, and utilization', caption: 'Home: demand, capacity, quality, and direct contribution in one management view.' },
      { src: '/assets/screenshots/frostline/10-technician-performance.png', alt: 'Frostline technician performance dashboard with utilization trend and technician scorecard', caption: 'Technician performance: productivity, quality, satisfaction, and a visible coaching signal.' }
    ]
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
