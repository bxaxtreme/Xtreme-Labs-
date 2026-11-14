import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you are looking for does not exist or has moved.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="nf-page">
      <div className="container nf-inner">
        <span className="nf-code" aria-hidden="true">404</span>
        <h1 className="nf-title">This page does not exist</h1>
        <p className="nf-text">
          The link may be broken or the page may have moved. Head back to the main site or pick one of these.
        </p>
        <div className="nf-actions">
          <Link href="/" className="btn btn-primary btn-lg">Back to home</Link>
          <Link href="/commands" className="btn btn-secondary btn-lg">Slash commands</Link>
          <Link href="/guide" className="btn btn-outline btn-lg">Setup guide</Link>
        </div>
        <ul className="nf-links">
          <li><Link href="/bots/quotient-prime">Quotient Prime</Link></li>
          <li><Link href="/bots/shizuka">Shizuka</Link></li>
          <li><Link href="/bots/sonic">Sonic</Link></li>
          <li><Link href="/playground">Playground</Link></li>
          <li><Link href="/#projects">Web projects</Link></li>
        </ul>
      </div>
    </main>
  );
}
