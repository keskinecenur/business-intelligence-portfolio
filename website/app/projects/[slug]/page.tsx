import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '../../data';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.short,
    openGraph: { title: `${project.name} | Ecenur Keskin`, description: project.short, images: [] },
    twitter: { title: `${project.name} | Ecenur Keskin`, description: project.short, images: [] }
  };
}

function List({ items }: { items: string[] }) {
  return <ul className="case-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="case-page">
      <section className="case-hero">
        <Link className="back-link" href="/#work">← Selected work</Link>
        <div className="case-title-row">
          <div>
            <p className="eyebrow">{project.label} / {project.industry}</p>
            <h1>{project.name}</h1>
          </div>
          <p>{project.short}</p>
        </div>
        <figure className="case-hero-image">
          <Image src={project.images[0].src} alt={project.images[0].alt} width={1316} height={743} priority />
          <figcaption>{project.images[0].caption}</figcaption>
        </figure>
      </section>

      <section className="case-overview section-shell">
        <article><p className="case-kicker">Business challenge</p><h2>The operating question</h2><p>{project.challenge}</p></article>
        <article><p className="case-kicker">Solution</p><h2>The management view</h2><p>{project.solution}</p></article>
      </section>

      <section className="case-band">
        <div className="section-shell two-column">
          <div><p className="case-kicker">Key business questions</p><h2>What the analysis needed to resolve</h2></div>
          <List items={project.questions} />
        </div>
      </section>

      <section className="section-shell case-grid">
        <article><p className="case-kicker">Analytical approach</p><h2>From source processes to decisions</h2><List items={project.approach} /></article>
        <article className="kpi-panel"><p className="case-kicker">Key KPIs / decision signals</p><div className="tag-list">{project.kpis.map((kpi) => <span key={kpi}>{kpi}</span>)}</div></article>
      </section>

      <section className="section-shell visual-section">
        <figure>
          <Image src={project.images[1].src} alt={project.images[1].alt} width={1316} height={743} />
          <figcaption>{project.images[1].caption}</figcaption>
        </figure>
      </section>

      <section className="section-shell insights-section">
        <div><p className="case-kicker">Management insights</p><h2>Signals designed for follow-through</h2></div>
        <List items={project.insights} />
      </section>

      <section className="case-band evidence-band">
        <div className="section-shell evidence-grid">
          <article><p className="case-kicker">Data / modeling considerations</p><h2>How the analysis is grounded</h2><p>{project.modeling}</p></article>
          <article className="judgment"><p className="case-kicker">Analytical judgment / limitations</p><h2>What the dashboard does not claim</h2><p>{project.limitation}</p></article>
        </div>
      </section>

      <section className="section-shell tools-row">
        <div><p className="case-kicker">Tools & skills</p><h2>Capabilities demonstrated</h2></div>
        <div className="tag-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
      </section>

      <section className="next-project section-shell">
        <p>Next case study</p>
        <Link href={`/projects/${next.slug}`}>{next.name} <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  );
}
