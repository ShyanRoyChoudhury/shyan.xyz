import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: 'shyan.xyz',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: site.title,
    description: site.description,
    creator: site.twitterHandle,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: 'Senior Software Engineer',
  url: site.url,
  email: `mailto:${site.email}`,
  worksFor: {
    '@type': 'Organization',
    name: site.company,
  },
  sameAs: [site.github, site.linkedin, site.twitter],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans text-base leading-relaxed">
        <a
          href="#main"
          className="absolute -top-12 left-4 z-[100] rounded bg-amber px-3 py-2 font-mono text-[13px] text-bg transition-all focus:top-3 motion-reduce:transition-none"
        >
          skip to content
        </a>
        <Navbar />
        {children}
        <footer className="border-t border-line pb-10 pt-7">
          <div className="wrap flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-fg-dim">
            <span>© 2026 Shyan Roy Choudhury · built with Next.js + Tailwind</span>
            <span>
              $ exit <span className="font-medium text-ok">0</span>
            </span>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
