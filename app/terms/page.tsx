import type { Metadata } from 'next';
import { StaticPage } from '@/components/StaticPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions | AGENCY',
  description: 'Terms and conditions for using the AGENCY website and contacting our digital studio.',
};

export default function TermsPage() {
  return (
    <StaticPage>
      <article className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-200/70">Legal / Terms</p>
        <h1 className="mt-5 font-heading text-5xl tracking-[-0.05em] sm:text-7xl">Terms &amp; Conditions</h1>
        <div className="prose-agency mt-12">
          <p>By using the AGENCY website, you agree to use it lawfully and respectfully. These terms describe the basic conditions for browsing the site and sending an enquiry.</p>
          <h2>Website content</h2>
          <p>The text, visual identity, portfolio presentation, and code on this website are provided for general information about AGENCY. Content may change without notice. We make reasonable efforts to keep information accurate, but do not guarantee that every page is complete or error-free.</p>
          <h2>Portfolio and third-party work</h2>
          <p>Some portfolio entries link to public Behance projects or third-party platforms. Ownership and rights remain with the relevant creators and clients. External links are provided for reference and are governed by the terms of those platforms.</p>
          <h2>Contact enquiries</h2>
          <p>Sending a contact form or email does not create a contract, agency relationship, or guarantee of availability. Any project begins only after both parties agree on scope, timing, fees, deliverables, and applicable terms in writing.</p>
          <h2>Acceptable use</h2>
          <p>You may not misuse the website, attempt to disrupt its operation, copy its materials for commercial redistribution, or use the contact form to send unlawful, harmful, or unsolicited content.</p>
          <h2>Limitation of liability</h2>
          <p>To the extent permitted by law, AGENCY is not responsible for losses arising from reliance on general website information, third-party services, unavailable links, or interruptions beyond our reasonable control.</p>
          <h2>Updates</h2>
          <p>We may update these terms as the website and services evolve. Continued use of the website after an update means you accept the revised terms.</p>
          <p>Last updated: September 2026.</p>
        </div>
      </article>
    </StaticPage>
  );
}
