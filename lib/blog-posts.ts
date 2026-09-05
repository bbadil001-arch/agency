export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  keywords: string[];
  blocks: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'custom-nextjs-website-vs-wordpress-2026',
    title: 'How a Custom Next.js Website Outperforms Traditional WordPress Sites in 2026',
    excerpt: 'A practical look at speed, conversion, mobile performance, and the SEO advantages of choosing a fast Next.js website for a growing Moroccan business.',
    category: 'Web Development',
    readTime: '7 min read',
    publishedAt: 'January 18, 2026',
    keywords: ['Web development agency Casablanca', 'fast Next.js website', 'custom web development Morocco'],
    blocks: [
      { type: 'paragraph', text: 'For many businesses, a website is still treated as a one-time brochure. In 2026, that approach leaves growth on the table. Your website is your fastest sales conversation, your most measurable brand touchpoint, and often the first proof that a customer can trust you. That is why more ambitious companies are moving from generic templates to custom web development in Morocco.' },
      { type: 'paragraph', text: 'WordPress remains useful for many teams, especially when a simple content editor is the priority. But a custom Next.js website gives a business more control over the experience that matters most: how quickly a page loads, how clearly it communicates value, and how smoothly it guides a visitor toward an enquiry or purchase.' },
      { type: 'heading', level: 2, text: '1. Speed is a conversion feature, not a technical detail' },
      { type: 'paragraph', text: 'Every extra second between a click and a usable page creates doubt. Visitors on mobile networks in Casablanca, Rabat, or Marrakech do not experience your hosting stack as an abstract metric; they experience it as waiting. Next.js is built to serve only what a page needs, cache content intelligently, and deliver a lean experience across devices.' },
      { type: 'list', items: ['Smaller client-side JavaScript for key landing pages.', 'Image optimization that protects quality without slowing the first view.', 'Server-rendered content that can be visible before the browser finishes loading every interaction.', 'A structure that makes performance budgets easier to measure and protect.'] },
      { type: 'heading', level: 3, text: 'The result for a business owner' },
      { type: 'paragraph', text: 'A fast page makes the next step feel easy. It reduces friction on service pages, improves the experience of paid campaigns, and gives sales teams a stronger destination for every link they share. Speed also supports accessibility: clear content and responsive layouts work better for people using older phones, smaller screens, or inconsistent connections.' },
      { type: 'heading', level: 2, text: '2. A custom build can be shaped around your funnel' },
      { type: 'paragraph', text: 'Traditional themes often force your offer into someone else’s layout. A custom build starts with the customer journey. A visitor can move from a focused promise, to proof, to service detail, to a short contact form without fighting menus or decorative components that do not help them decide.' },
      { type: 'list', items: ['Landing pages that match the intent of each campaign.', 'Clear calls to action for bookings, WhatsApp conversations, or quote requests.', 'Reusable content sections that keep the design consistent as the site grows.', 'Analytics events tied to meaningful actions instead of vanity page views.'] },
      { type: 'callout', text: 'The best website is not the one with the most features. It is the one that removes the most uncertainty before a customer reaches out.' },
      { type: 'heading', level: 2, text: '3. Mobile-first performance improves trust' },
      { type: 'paragraph', text: 'Mobile is where many Moroccan customers discover a service, compare options, and send their first message. A custom Next.js website can prioritize thumb-friendly navigation, readable type, compressed media, and forms that are quick to complete from a phone. Those details make the brand feel organized and ready to do business.' },
      { type: 'heading', level: 2, text: '4. Next.js creates a stronger SEO foundation' },
      { type: 'paragraph', text: 'SEO is not only about adding keywords to a page. Search engines need a clear technical structure, useful content, stable performance, and signals that the site is easy to understand. Next.js supports clean page routes, metadata, structured content, and rendering patterns that help crawlers access meaningful text quickly.' },
      { type: 'paragraph', text: 'That foundation is especially valuable for a company targeting competitive searches such as “web development agency Casablanca” or “custom web development Morocco.” When the technical experience and the editorial strategy work together, your pages can answer a real question and make the next action obvious.' },
      { type: 'heading', level: 2, text: 'When should you choose custom web development?' },
      { type: 'paragraph', text: 'Choose a custom Next.js website when your business depends on speed, lead quality, content flexibility, or a distinct digital experience. WordPress can still be the right fit for a small publishing site with a simple workflow. The important decision is to match the platform to your growth model, not to choose the familiar option by default.' },
      { type: 'paragraph', text: 'At yHD AGENCY, we design and build fast, conversion-focused digital experiences for ambitious businesses in Morocco and beyond. If your current website is slow, difficult to update, or not turning attention into conversations, let’s map the opportunity together.' },
    ],
  },
  {
    slug: 'digital-marketing-strategies-scale-business-morocco',
    title: '5 Proven Digital Marketing Strategies to Scale Your Business in Morocco',
    excerpt: 'A focused growth playbook for Moroccan businesses that want better visibility, stronger enquiries, and a digital marketing system built around measurable outcomes.',
    category: 'Digital Marketing',
    readTime: '7 min read',
    publishedAt: 'January 12, 2026',
    keywords: ['Digital marketing agency Casablanca', 'performance marketing Morocco', 'local SEO strategies'],
    blocks: [
      { type: 'paragraph', text: 'Scaling in Morocco requires more than posting often. Customers move between Instagram, Google Search, Maps, WhatsApp, and word of mouth before they decide who deserves their time. The opportunity is to connect those moments into one clear journey, so your marketing earns attention and your sales process knows what to do with it.' },
      { type: 'paragraph', text: 'The strongest growth programs combine useful content, precise targeting, local relevance, and a simple way to take action. Here are five strategies a business can use to build that system.' },
      { type: 'heading', level: 2, text: '1. Build campaigns around commercial intent' },
      { type: 'paragraph', text: 'A campaign should begin with the question your audience is already asking. Someone searching for a web development agency Casablanca has a different level of urgency from someone watching a general design video. Segment your messages by intent, then send each audience to a page that continues the same conversation.' },
      { type: 'list', items: ['Discovery content for people learning about a problem.', 'Comparison content for people reviewing agencies or solutions.', 'Offer-led landing pages for people ready to book, call, or request a quote.', 'Retargeting messages that answer objections instead of repeating the first ad.'] },
      { type: 'heading', level: 2, text: '2. Use paid social for testing, not guesswork' },
      { type: 'paragraph', text: 'Meta campaigns can become a reliable acquisition channel when the creative, audience, and landing page are evaluated together. Start with several angles: a customer outcome, a strong point of view, a before-and-after, or a direct explanation of the service. Keep the budget focused long enough to learn which message attracts qualified conversations, not just cheap clicks.' },
      { type: 'heading', level: 3, text: 'What to measure' },
      { type: 'paragraph', text: 'Track cost per qualified lead, response rate, booked calls, and revenue influenced by each campaign. A high click-through rate is useful only when the people clicking are a realistic fit for your offer. This is the difference between activity and performance marketing in Morocco.' },
      { type: 'heading', level: 2, text: '3. Own your Google Maps presence' },
      { type: 'paragraph', text: 'Local search is one of the highest-intent channels for a service business. A complete and active Google Business Profile helps people verify that you are real, nearby, and ready to help. Keep your business name, category, address, phone number, opening hours, and service areas consistent across the web.' },
      { type: 'list', items: ['Add real project photos and update them regularly.', 'Publish short updates that reflect current offers or expertise.', 'Ask satisfied customers for specific, honest reviews.', 'Answer questions and reviews in the same voice your brand uses everywhere else.'] },
      { type: 'callout', text: 'Local SEO works best when your online details make the same promise as your real customer experience.' },
      { type: 'heading', level: 2, text: '4. Turn expertise into a content engine' },
      { type: 'paragraph', text: 'Content should make your business easier to choose. Build a small library around the problems your best customers bring to you: pricing questions, mistakes to avoid, local buying habits, timelines, and proof of outcomes. One strong article can become a carousel, a short video, an email, and a sales conversation starter.' },
      { type: 'paragraph', text: 'Use language your customers actually use. A bilingual or locally aware content strategy can create a powerful advantage when international competitors sound generic. The goal is not to publish for its own sake; it is to become the clearest answer in your category.' },
      { type: 'heading', level: 2, text: '5. Connect every channel to a simple sales funnel' },
      { type: 'paragraph', text: 'Marketing loses momentum when the next step is unclear. Design a short path from discovery to decision: a relevant ad or article, a focused service page, proof that reduces risk, and a contact action that feels easy. For many Moroccan businesses, that final step can be a WhatsApp conversation, a phone call, or a short qualification form.' },
      { type: 'list', items: ['Give each campaign one primary call to action.', 'Reply quickly and use a consistent lead qualification process.', 'Record the source of every enquiry so budget follows real outcomes.', 'Review the funnel monthly and improve the largest point of drop-off.'] },
      { type: 'heading', level: 2, text: 'Build a system that compounds' },
      { type: 'paragraph', text: 'The best digital marketing strategy is not a collection of disconnected posts. It is a repeatable system where paid media creates demand, local SEO captures intent, content builds trust, and the funnel turns attention into action. Start with one audience and one clear offer, measure honestly, and expand once the fundamentals are working.' },
      { type: 'paragraph', text: 'yHD AGENCY helps Moroccan businesses build that system through strategy, creative, performance campaigns, and conversion-focused web experiences. If you want a clearer path from visibility to qualified growth, get in touch and let’s plan the next move.' },
    ],
  },
  {
    slug: 'visual-identity-brand-perception-competitive-markets',
    title: 'Why Visual Identity Matters: Transforming Brand Perception in Competitive Markets',
    excerpt: 'How a clear visual identity helps a business look credible, tell a stronger story, and convert attention into preference across every digital channel.',
    category: 'Branding & Design',
    readTime: '7 min read',
    publishedAt: 'January 6, 2026',
    keywords: ['Graphic design agency Casablanca', 'branding agency Morocco', 'premium UI/UX design'],
    blocks: [
      { type: 'paragraph', text: 'People decide how they feel about a brand before they have read every word. They notice the shape of a logo, the confidence of a layout, the quality of an image, and whether the experience feels considered. In a competitive market, those signals can determine whether a business is remembered, compared, or ignored.' },
      { type: 'paragraph', text: 'Visual identity is not decoration added after the strategy. It is the visible system that helps customers recognize your value quickly. For a growing company, a strong identity can make a new service feel more credible, a familiar offer feel more premium, and every campaign feel like it belongs to the same business.' },
      { type: 'heading', level: 2, text: 'First impressions create a starting position' },
      { type: 'paragraph', text: 'A customer arriving from an ad, Google Search, or a referral is forming a first impression in seconds. They are asking, often unconsciously: Does this look trustworthy? Does it feel relevant to me? Will this business understand what I need? A thoughtful identity gives those questions a confident answer before the sales conversation begins.' },
      { type: 'list', items: ['A clear logo that remains recognizable at small sizes.', 'Typography with enough personality to be memorable and enough clarity to be useful.', 'A color system that supports hierarchy instead of competing with the message.', 'Photography, illustration, or graphic direction that feels specific to the brand.'] },
      { type: 'heading', level: 2, text: 'Visual storytelling makes the offer easier to understand' },
      { type: 'paragraph', text: 'Good design helps a business explain what it does without making the audience work too hard. A visual system can show whether your brand is precise, warm, bold, technical, luxurious, or approachable. That story should appear in your website, social posts, proposals, packaging, and physical touchpoints so customers experience one coherent idea wherever they meet you.' },
      { type: 'heading', level: 3, text: 'Consistency is a growth asset' },
      { type: 'paragraph', text: 'Consistency does not mean repeating the same graphic forever. It means making deliberate choices that are recognizable across different formats. When a customer sees the same tone, spacing, colors, and image treatment over time, each new message has to explain less. Recognition compounds, and the brand becomes easier to recall when a buying need appears.' },
      { type: 'callout', text: 'Premium does not mean louder. It usually means clearer, more consistent, and more intentional at every point of contact.' },
      { type: 'heading', level: 2, text: 'The digital interface is part of the identity' },
      { type: 'paragraph', text: 'A beautiful logo cannot compensate for a confusing website. Brand perception is shaped by interaction: how quickly a page loads, how a button responds, how a form is written, and whether the mobile experience feels respectful of someone’s time. Premium UI/UX design brings the visual identity into the product itself, turning brand promise into a usable experience.' },
      { type: 'list', items: ['Design navigation around the decisions users need to make.', 'Use hierarchy to lead visitors toward proof and action.', 'Make forms, buttons, and feedback states feel as considered as the hero section.', 'Create a responsive system that preserves the brand on every screen.'] },
      { type: 'heading', level: 2, text: 'Brand identity can influence conversion' },
      { type: 'paragraph', text: 'Conversion is not only a performance marketing problem. People are more willing to enquire when the business looks capable of delivering the outcome it promises. Clear service pages, persuasive case studies, confident typography, and a frictionless contact flow reduce doubt. When the identity and the funnel support each other, design becomes part of the commercial engine.' },
      { type: 'paragraph', text: 'This is especially important in categories where many providers appear similar. A distinctive identity creates a position before a competitor can set the comparison around price alone. It gives your team a stronger story to tell and gives customers a reason to remember you after the tab is closed.' },
      { type: 'heading', level: 2, text: 'What a practical identity system should include' },
      { type: 'paragraph', text: 'A useful identity is made to be used, not just presented in a beautiful brand deck. It should give your team enough guidance to move quickly without turning every post into a new design debate.' },
      { type: 'list', items: ['Logo variations and clear usage rules.', 'A flexible type and color system with accessibility in mind.', 'Templates for social content, proposals, and key sales materials.', 'Art direction for imagery and motion.', 'Digital components that connect the brand to the website and product experience.'] },
      { type: 'heading', level: 2, text: 'Make your next impression count' },
      { type: 'paragraph', text: 'A visual identity should make the right customers feel that your business is for them. It should express the standard you want to be known for and make every future touchpoint easier to produce. Whether you are launching, repositioning, or growing into a more competitive category, the right design system can shift perception from “one option” to “the obvious choice.”' },
      { type: 'paragraph', text: 'yHD AGENCY brings brand strategy, graphic design, and digital experience design together for businesses that want to look as capable as they are. If your current identity no longer matches your ambition, book a conversation and let’s give your next chapter a sharper visual language.' },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
