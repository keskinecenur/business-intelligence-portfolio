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
    label: 'Flagship case study',
    short: 'An executive decision system connecting revenue, service reliability, receivables exposure, lane performance, drivers, and fleet risk.',
    challenge: 'Management needed one operating view of commercial performance and service risk. Revenue alone could not explain whether growth was arriving with reliable delivery, healthy collections, or controlled fleet cost.',
    solution: 'A five-page Power BI management workspace that moves from an executive cockpit into operations, finance and customers, and fleet reliability. The experience pairs headline results with target variance, ranked exceptions, and specific follow-up signals.',
    questions: [
      'Where is revenue ahead or behind plan, and which customer segments drive the result?',
      'Which lanes, routes, drivers, or vehicles create the greatest service risk?',
      'How concentrated is open and overdue receivables exposure?',
      'Are fuel, maintenance, and downtime trends threatening reliable delivery?'
    ],
    approach: [
      'Joined shipment, customer, route, driver, vehicle, fuel, maintenance, invoice, payment, and target data through a governed semantic model.',
      'Separated outcome metrics from diagnostic drivers so leaders can move from variance to operational cause.',
      'Used target comparisons, management-attention panels, and scorecards to make exceptions actionable.'
    ],
    kpis: ['Revenue and target variance', 'Operating result and margin', 'Shipments and revenue per shipment', 'On-time delivery and delay rate', 'Fuel and maintenance cost', 'Downtime hours', 'Open and overdue receivables'],
    insights: [
      'The latest displayed revenue is $384K, 6.5% below target, while on-time delivery is 91.9% and slightly below target.',
      'The lane scorecard exposes uneven service performance; the Pittsburgh destination is shown at 86.0% on-time.',
      'The cockpit elevates $72K of overdue cash exposure and identifies the largest open customer balance for collection follow-up.',
      'Fleet monitoring links a maintenance spike and downtime exceptions to vehicle-level service risk.'
    ],
    modeling: 'A date-led model relates operational transactions to customer, route, driver, and vehicle dimensions, with finance and target tables supporting period and variance analysis. Measures distinguish current-period signals from full-history totals.',
    limitation: 'Fleet utilization and route- or customer-level profitability were not presented because the available source fields do not support defensible calculations. Those measures were intentionally withheld rather than fabricated.',
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
    label: 'Major case study',
    short: 'A commerce intelligence workspace separating demand volume from basket economics and connecting product margin, returns, channels, and inventory decisions.',
    challenge: 'The business needed to understand whether revenue movement came from order volume or average order value, while protecting margin and identifying product, return, channel, and inventory risks.',
    solution: 'A five-page commerce workspace that organizes executive performance, sales and customers, product merchandising, and channel operations around the decisions each audience needs to make.',
    questions: [
      'Is revenue movement driven by order volume, average order value, or both?',
      'Which categories and products combine scale, margin quality, and acceptable return behavior?',
      'Where do acquisition channels create efficient demand versus costly volume?',
      'Which products need pricing, return-reason, or inventory review?'
    ],
    approach: [
      'Connected order, item, customer, product, return, marketing-spend, inventory, and target data.',
      'Kept volume, value, margin, and return signals separate to avoid treating revenue as a complete performance measure.',
      'Built product decision tables and exception labels that translate patterns into merchandising follow-up.'
    ],
    kpis: ['Revenue', 'Orders and units', 'Average order value', 'Customers', 'Product gross margin', 'Return rate and refunds', 'Channel efficiency', 'Inventory signals'],
    insights: [
      'The latest displayed period shows $54K revenue from 348 orders and a $156.13 AOV.',
      'Orders are down 23.5% versus the prior period while AOV is up 9.9%, isolating volume contraction as the immediate demand issue.',
      'The products view reports 49.3% item margin and a 5.0% cohort return rate for the displayed period.',
      'A product-level alert isolates Luma Pack 115 with a 44.4% cohort return rate for return-reason and channel review.'
    ],
    modeling: 'The model separates order headers, order lines, returns, marketing activity, inventory, and product/customer dimensions. Item-level economics support gross margin where cost fields are available; cohort return measures keep product diagnostics aligned to sold units.',
    limitation: 'Gross margin is used only where the item-level source supports it. The case study does not claim causal marketing lift or lifetime customer value beyond the observed portfolio dataset.',
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
    label: 'Case study',
    short: 'A practice-performance model connecting access, attendance quality, provider productivity, collections, receivables, and insurance claims.',
    challenge: 'Practice leaders needed to balance appointment access and provider productivity with cancellations, no-shows, collection health, and insurance follow-up.',
    solution: 'A five-page clinical-business reporting experience spanning executive performance, practice operations, finance and patients, and provider/treatment mix.',
    questions: [
      'Is practice growth converting into completed visits and target attainment?',
      'Which providers require attendance or scheduling support?',
      'How do treatments contribute to volume and revenue mix?',
      'Where are collection and insurance-claim delays building?'
    ],
    approach: [
      'Modeled patients, dentists, treatments, appointments, invoices, payments, claims, and targets.',
      'Separated scheduled, completed, cancelled, and no-show activity to preserve operational meaning.',
      'Used provider and treatment scorecards to connect performance variance to an accountable operating area.'
    ],
    kpis: ['Revenue and target variance', 'Patients served', 'Appointments and completed visits', 'Cancellation and no-show rates', 'Collection rate', 'Receivables and claims', 'Revenue per completed visit'],
    insights: [
      'The latest displayed period reports $133K revenue, 296 patients served, and 323 appointments.',
      'No-shows are 7.1% against a 4.0% target, making attendance follow-up the clearest operational issue.',
      'The provider view identifies Taylor Ramos at a 12.0% no-show rate for targeted coaching.',
      'Treatment mix connects completed visits with value per visit and revenue share without obscuring access quality.'
    ],
    modeling: 'Appointment status drives access and attendance measures; invoices, payments, and claims support financial follow-up. Patient, provider, treatment, and date dimensions allow consistent filtering across operations and finance.',
    limitation: 'First-visit logic means the earliest observed visit in the available dataset. It is not a lifetime acquisition date and is not presented as a new-patient cohort outside the observed history.',
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
    label: 'Supporting industry case',
    short: 'Owner-operator reporting for sales, menu economics, food cost, purchasing, channels, and customer demand - with a deliberate labor data governance hold.',
    challenge: 'The owner needed to connect sales growth with menu mix, food cost, purchasing, channel demand, and the economics of high-volume items.',
    solution: 'A restaurant management workspace focused on net sales, order value, food-cost pressure, menu gross contribution, purchasing patterns, and decision signals by item and category.',
    questions: ['Which channels and categories drive sales?', 'Where is food-cost pressure reducing menu contribution?', 'Which menu items merit pricing, recipe, or purchasing review?', 'What can be stated confidently when a source is inconsistent?'],
    approach: ['Modeled orders and order items separately from purchasing, inventory, customers, and daily operations.', 'Calculated menu gross contribution only from supported sales and food-cost fields.', 'Placed labor-derived profitability on Source Hold after detecting inconsistencies in the labor source.'],
    kpis: ['Net sales', 'Orders and average order value', 'Food cost %', 'Menu gross contribution', 'Units sold', 'Channel and category mix', 'Purchasing trend'],
    insights: ['The latest displayed period shows $42K revenue and 35.0% food cost.', 'Food cost is 5.0 points above the 30.0% target, directing attention to recipes, pricing, and recent protein purchases.', 'The menu decision table distinguishes popular, strong-contribution items from lower-volume items needing review.'],
    modeling: 'Order-line economics support menu sales, units, food cost, and gross contribution; purchasing and inventory are retained as separate operational processes rather than blended into unsupported profit claims.',
    limitation: 'Labor data failed consistency checks, so labor-based margin and downstream profitability were intentionally withheld. The dashboard does not imply operating profit from menu gross contribution.',
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
    label: 'Supporting industry case',
    short: 'Field-service intelligence for seasonal demand, technician capacity, first-time fix, customer satisfaction, and direct service contribution.',
    challenge: 'Service leaders needed to balance weather-driven demand and technician capacity while protecting first-time fix, customer satisfaction, and direct service economics.',
    solution: 'A field-service reporting system covering the executive picture, service operations, finance and customers, and technician performance.',
    questions: ['Can current demand be served without weakening quality?', 'Which technicians combine productivity, first-time fix, utilization, and CSAT?', 'Where are repeat visits or service exceptions concentrated?', 'How much direct contribution remains after directly attributable service costs?'],
    approach: ['Connected service calls, appointments, technicians, equipment, parts usage, invoices, payments, customers, and targets.', 'Balanced throughput metrics with quality and customer outcomes.', 'Used technician scorecards to surface coaching opportunities without reducing performance to revenue alone.'],
    kpis: ['Revenue', 'Service calls', 'Average ticket', 'Technician utilization', 'First-time fix', 'Customer satisfaction', 'Direct Service Contribution', 'Open/completed work'],
    insights: ['The latest displayed period shows $163K revenue, 156 service calls, and 89.8% technician utilization.', 'First-time fix is 78.2% and slightly below target, creating the immediate management focus.', 'The technician view combines revenue with utilization, first-time fix, and customer satisfaction to avoid single-metric ranking.'],
    modeling: 'Operational service events link to appointments, technicians, customers, equipment, invoices, payments, and parts usage. Directly attributable revenue and service costs support Direct Service Contribution.',
    limitation: 'Direct Service Contribution is not operating profit. It excludes broader operating expenses that are not present in the source data and is labeled accordingly throughout the case study.',
    tools: ['Power BI', 'Power Query', 'DAX', 'Field-service analytics', 'Capacity analysis', 'Technician performance'],
    images: [
      { src: '/assets/screenshots/frostline/09-home.png', alt: 'Frostline Home Comfort home dashboard with revenue, contribution margin, calls, first-time fix, and utilization', caption: 'Home: demand, capacity, quality, and direct contribution in one management view.' },
      { src: '/assets/screenshots/frostline/10-technician-performance.png', alt: 'Frostline technician performance dashboard with utilization trend and technician scorecard', caption: 'Technician performance: productivity, quality, satisfaction, and a visible coaching signal.' }
    ]
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
