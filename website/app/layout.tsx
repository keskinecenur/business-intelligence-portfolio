import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://business-intelligence-portfolio-puce.vercel.app'),
  title: { default: 'Ecenur Keskin | Data & Business Intelligence', template: '%s | Ecenur Keskin' },
  description: 'Industrial Engineering perspective applied to supply chain, operations, data analytics, and business intelligence.',
  openGraph: {
    title: 'Ecenur Keskin | Data & Business Intelligence',
    description: 'Business-oriented analytics and Power BI case studies across logistics, commerce, healthcare, restaurant, and field-service operations.',
    type: 'website',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Ecenur Keskin - Business intelligence built for operating decisions.' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecenur Keskin | Data & Business Intelligence',
    description: 'Industrial Engineering perspective applied to supply chain, operations, data analytics, and business intelligence.',
    images: ['/og.png']
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="wordmark" href="/" aria-label="Ecenur Keskin portfolio home">EK<span>.</span></Link>
          <nav aria-label="Primary navigation">
            <Link href="/#work">Work</Link>
            <Link href="/#about">About</Link>
            <Link href="/#skills">Skills</Link>
          </nav>
        </header>
        {children}
        <footer>
          <p>Ecenur Keskin</p>
          <p>Industrial Engineering + Operations + Business Intelligence</p>
          <p><a href="https://github.com/keskinecenur/business-intelligence-portfolio" target="_blank" rel="noreferrer">View source and case studies on GitHub</a></p>
          <p className="fine-print">Portfolio case studies use simulated datasets and do not represent client engagements or confidential business data.</p>
        </footer>
      </body>
    </html>
  );
}
