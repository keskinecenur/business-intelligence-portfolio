import Image from 'next/image';
import Link from 'next/link';
import { projects } from './data';

export default function Home() {
  const [cedarvale, lumatrail, pinebridge, emberOak, frostline] = projects;
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Ecenur Keskin / Analyst Portfolio</p>
          <h1>Business intelligence built for operating decisions.</h1>
          <p className="hero-lede">I bring an Industrial Engineering perspective to data and BI - connecting business operations, analytical models, and management action across supply chain and service environments.</p>
          <div className="hero-actions">
            <Link className="button primary" href="#work">View selected work</Link>
            <Link className="button secondary" href="#about">About my approach</Link>
          </div>
        </div>
        <div className="hero-proof" aria-label="Professional focus areas">
          <p>Professional focus</p>
          <ul>
            <li><span>01</span> Supply chain & operations</li>
            <li><span>02</span> Data modeling & KPI logic</li>
            <li><span>03</span> Decision-focused reporting</li>
          </ul>
        </div>
      </section>

      <section className="disclosure" aria-label="Portfolio disclosure">
        <strong>Work-sample context</strong>
        <p>These case studies were developed with simulated portfolio datasets to demonstrate business analysis, modeling, and dashboard decision design. They are not client engagements.</p>
      </section>

      <section id="work" className="section-shell work-section">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>From operational signal to management response.</h2>
          <p>The strongest examples lead with the business question, then show the model, measures, and visual system used to support a decision.</p>
        </div>

        <article className="feature-card flagship">
          <div className="feature-copy">
            <div><span className="project-index">01</span><span className="pill">{cedarvale.label}</span></div>
            <p className="project-sector">{cedarvale.industry}</p>
            <h3>{cedarvale.name}</h3>
            <p>{cedarvale.short}</p>
            <ul className="signal-list"><li>Revenue + service performance</li><li>Receivables + customer exposure</li><li>Drivers + fleet reliability</li></ul>
            <Link className="text-link" href={`/projects/${cedarvale.slug}`}>Read the case study <span aria-hidden="true">→</span></Link>
          </div>
          <Link className="feature-image" href={`/projects/${cedarvale.slug}`} aria-label={`View ${cedarvale.name} case study`}>
            <Image src={cedarvale.images[0].src} alt={cedarvale.images[0].alt} width={1316} height={743} priority />
          </Link>
        </article>

        <article className="feature-card reverse">
          <div className="feature-copy">
            <div><span className="project-index">02</span><span className="pill">{lumatrail.label}</span></div>
            <p className="project-sector">{lumatrail.industry}</p>
            <h3>{lumatrail.name}</h3>
            <p>{lumatrail.short}</p>
            <ul className="signal-list"><li>Revenue drivers + AOV</li><li>Product margin + returns</li><li>Channels + inventory</li></ul>
            <Link className="text-link" href={`/projects/${lumatrail.slug}`}>Read the case study <span aria-hidden="true">→</span></Link>
          </div>
          <Link className="feature-image" href={`/projects/${lumatrail.slug}`} aria-label={`View ${lumatrail.name} case study`}>
            <Image src={lumatrail.images[1].src} alt={lumatrail.images[1].alt} width={1316} height={743} />
          </Link>
        </article>

        <article className="third-card">
          <div className="third-copy">
            <div><span className="project-index">03</span><span className="pill">{pinebridge.label}</span></div>
            <p className="project-sector">{pinebridge.industry}</p>
            <h3>{pinebridge.name}</h3>
            <p>{pinebridge.short}</p>
            <Link className="text-link" href={`/projects/${pinebridge.slug}`}>Read the case study <span aria-hidden="true">→</span></Link>
          </div>
          <Image src={pinebridge.images[0].src} alt={pinebridge.images[0].alt} width={1316} height={743} />
        </article>

        <div className="supporting-grid" aria-label="Additional industry work">
          {[emberOak, frostline].map((project, index) => (
            <article className="support-card" key={project.slug}>
              <p className="project-index">0{index + 4}</p>
              <p className="project-sector">{project.industry}</p>
              <h3>{project.name}</h3>
              <p>{project.short}</p>
              <Link className="text-link" href={`/projects/${project.slug}`}>View project <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section section-shell">
        <div>
          <p className="eyebrow">About</p>
          <h2>Operations knowledge shapes the analysis.</h2>
        </div>
        <div className="about-copy">
          <p>I approach analytics as a business operating discipline. My Industrial Engineering background helps me frame how demand, capacity, service quality, cost, working capital, and process variation interact - then translate those relationships into reporting that managers can use.</p>
          <p>This portfolio demonstrates that approach across logistics, e-commerce, healthcare, restaurant, and field-service scenarios. The emphasis is consistent: define the business question, model the available data carefully, surface the decision signal, and state the limits of the evidence.</p>
        </div>
      </section>

      <section id="skills" className="skills-section section-shell">
        <div className="section-heading compact"><p className="eyebrow">Skills</p><h2>A structured analytics toolkit.</h2></div>
        <div className="skills-grid">
          <div><h3>Business & operations</h3><p>Supply chain analysis, logistics, service operations, process thinking, KPI definition, variance analysis, working-capital awareness</p></div>
          <div><h3>Data & modeling</h3><p>Data preparation, dimensional modeling, measure design, data validation, relationship logic, analytical limitations</p></div>
          <div><h3>BI & communication</h3><p>Power BI, Power Query, DAX, executive dashboards, drill paths, scorecards, management narratives, visual hierarchy</p></div>
        </div>
      </section>

      <section className="principles section-shell">
        <p className="eyebrow">Analytical principles</p>
        <div className="principle-grid">
          <div><span>01</span><h3>Start with the decision.</h3><p>Every page answers a business question and points to an operating response.</p></div>
          <div><span>02</span><h3>Protect metric meaning.</h3><p>Measures stay tied to the grain, fields, and cost definitions the data can support.</p></div>
          <div><span>03</span><h3>Make limits visible.</h3><p>Unsupported metrics are withheld and assumptions are stated without weakening the story.</p></div>
        </div>
      </section>
    </main>
  );
}
