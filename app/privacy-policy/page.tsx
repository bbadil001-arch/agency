import type { Metadata } from 'next';
import { StaticPage } from '@/components/StaticPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | yHD AGENCY',
  description: 'Privacy policy for the yHD AGENCY website, including cookies, analytics, contact forms, and advertising services.',
};

export default function PrivacyPolicyPage() {
  return (
    <StaticPage>
      <article className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-200/70">Legal / Privacy</p>
        <h1 className="mt-5 font-heading text-5xl tracking-[-0.05em] sm:text-7xl">Privacy Policy</h1>
        <div className="prose-yhd mt-12">
          <p>yHD AGENCY respects your privacy. This policy explains what information we collect when you use this website, why we use it, and the choices available to you.</p>
          <h2>Information we collect</h2>
          <p>When you contact us, we may receive your name, email address, phone number, selected service, budget range, and message. We use this information only to respond to your request, discuss a project, and provide the services you ask for.</p>
          <h2>Cookies and analytics</h2>
          <p>This website may use essential cookies and similar technologies to remember language preferences, improve performance, understand how visitors use the site, and keep the website secure. Analytics providers may process technical information such as device type, browser, approximate location, and pages visited.</p>
          <h2>Advertising</h2>
          <p>If advertising is enabled on this website, Google AdSense and other advertising partners may use cookies or similar technologies to display and measure relevant advertisements. Google may use information about visits to this and other websites to personalize ads, subject to your available privacy and advertising settings. You can manage Google advertising personalization through your Google account and browser controls.</p>
          <h2>Third-party links</h2>
          <p>Our website may link to Behance, WhatsApp, social networks, advertising services, and other third-party websites. Their own privacy policies apply when you leave our website.</p>
          <h2>Your choices</h2>
          <p>You may ask us to access, correct, or delete personal information you have sent to us. You may also control cookies through your browser settings. To contact us about privacy, email <a href="mailto:yh.help@gmail.com">yh.help@gmail.com</a>.</p>
          <h2>Updates</h2>
          <p>We may update this policy when the website, services, or legal requirements change. The latest version will always be published on this page.</p>
          <p>Last updated: September 2026.</p>
        </div>
      </article>
    </StaticPage>
  );
}
