import { blogPosts, type BlogBlock, type BlogPost } from '@/lib/blog-posts';
import type { Locale } from '@/lib/i18n';

type LocalizedText = Record<Locale, string>;

export type SeoStrategyArticle = {
  slug: string;
  category: 'Web Design & Tech' | 'Branding & Graphic Design' | 'Digital Marketing & SEO';
  keyword: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
};

export const seoStrategyArticles: SeoStrategyArticle[] = [
  {
    slug: 'web-design-cost-guide-morocco', category: 'Web Design & Tech',
    keyword: { en: 'website design cost Morocco small business', fr: 'prix création site web Maroc petite entreprise', ar: 'تكلفة تصميم موقع إلكتروني للمقاولات الصغيرة في المغرب' },
    title: { en: 'Website Design Cost in Morocco: A Practical Guide for Small Businesses', fr: 'Prix d’un site web au Maroc : guide pratique pour les petites entreprises', ar: 'تكلفة تصميم موقع إلكتروني في المغرب: دليل عملي للمقاولات الصغيرة' },
    excerpt: { en: 'Understand the real cost of a professional website in Morocco, what changes the budget, and how to invest in the pages that create qualified enquiries.', fr: 'Comprenez le vrai prix d’un site professionnel au Maroc, les facteurs qui font varier le budget et les pages qui génèrent des demandes qualifiées.', ar: 'تعرّف على التكلفة الحقيقية للموقع الاحترافي في المغرب والعوامل التي تغيّر الميزانية والصفحات التي تجلب عملاء محتملين.' },
  },
  {
    slug: 'nextjs-website-speed-casablanca', category: 'Web Design & Tech',
    keyword: { en: 'fast Next.js website agency Casablanca', fr: 'agence site Next.js rapide Casablanca', ar: 'شركة تطوير موقع Next.js سريع الدار البيضاء' },
    title: { en: 'How to Plan a Fast Next.js Website for a Casablanca Business', fr: 'Comment préparer un site Next.js rapide pour une entreprise à Casablanca', ar: 'كيف تخطط لموقع Next.js سريع لشركتك في الدار البيضاء' },
    excerpt: { en: 'A clear planning checklist for a fast, search-friendly Next.js website that turns mobile visits into conversations.', fr: 'Une checklist claire pour un site Next.js rapide et visible qui transforme les visites mobiles en conversations.', ar: 'قائمة عملية لبناء موقع Next.js سريع ومتوافق مع البحث يحوّل زيارات الهاتف إلى محادثات.' },
  },
  {
    slug: 'ecommerce-website-morocco-checklist', category: 'Web Design & Tech',
    keyword: { en: 'e-commerce website development Morocco checklist', fr: 'checklist site e-commerce Maroc', ar: 'قائمة إنشاء متجر إلكتروني في المغرب' },
    title: { en: 'E-commerce Website in Morocco: The Launch Checklist That Prevents Expensive Mistakes', fr: 'Site e-commerce au Maroc : la checklist qui évite les erreurs coûteuses', ar: 'المتجر الإلكتروني في المغرب: قائمة إطلاق تمنع الأخطاء المكلفة' },
    excerpt: { en: 'Use this launch checklist to align payments, delivery, product pages, analytics, and customer support before your store goes live.', fr: 'Alignez paiements, livraison, fiches produits, analytics et support avant la mise en ligne de votre boutique.', ar: 'نسّق الدفع والتوصيل وصفحات المنتجات والتحليلات وخدمة العملاء قبل إطلاق متجرك.' },
  },
  {
    slug: 'shopify-developer-morocco-guide', category: 'Web Design & Tech',
    keyword: { en: 'Shopify developer Morocco custom store', fr: 'développeur Shopify Maroc boutique sur mesure', ar: 'مطور Shopify المغرب متجر مخصص' },
    title: { en: 'Hiring a Shopify Developer in Morocco: 9 Questions to Ask Before You Start', fr: 'Choisir un développeur Shopify au Maroc : 9 questions à poser avant de commencer', ar: 'اختيار مطور Shopify في المغرب: 9 أسئلة قبل بداية المشروع' },
    excerpt: { en: 'A buyer-friendly guide to choosing Shopify support that covers UX, integrations, speed, tracking, and long-term ownership.', fr: 'Un guide simple pour choisir un accompagnement Shopify couvrant UX, intégrations, vitesse, tracking et autonomie.', ar: 'دليل لاختيار دعم Shopify يشمل تجربة المستخدم والربط والسرعة والتتبع وملكية المتجر.' },
  },
  {
    slug: 'website-redesign-casablanca-process', category: 'Web Design & Tech',
    keyword: { en: 'website redesign agency Casablanca process', fr: 'refonte site web agence Casablanca méthode', ar: 'إعادة تصميم موقع شركة الدار البيضاء' },
    title: { en: 'Website Redesign in Casablanca: A Step-by-Step Process for Better Leads', fr: 'Refonte de site à Casablanca : une méthode étape par étape pour obtenir de meilleurs leads', ar: 'إعادة تصميم الموقع في الدار البيضاء: خطوات عملية للحصول على عملاء أفضل' },
    excerpt: { en: 'Learn how to redesign a website without losing SEO, breaking the funnel, or replacing useful content with decoration.', fr: 'Refaites votre site sans perdre le SEO, casser le tunnel ou remplacer le contenu utile par du décoratif.', ar: 'أعد تصميم موقعك دون خسارة SEO أو كسر مسار التحويل أو استبدال المحتوى المفيد بالزخرفة.' },
  },
  {
    slug: 'mobile-first-web-design-morocco', category: 'Web Design & Tech',
    keyword: { en: 'mobile-first web design Morocco business', fr: 'webdesign mobile first Maroc entreprise', ar: 'تصميم مواقع متجاوب للجوال المغرب' },
    title: { en: 'Mobile-First Web Design in Morocco: 8 Details That Increase Enquiries', fr: 'Webdesign mobile-first au Maroc : 8 détails qui augmentent les demandes', ar: 'تصميم المواقع أولاً للهاتف في المغرب: 8 تفاصيل تزيد الطلبات' },
    excerpt: { en: 'A practical review of typography, forms, navigation, media, and trust signals for Moroccan customers on mobile.', fr: 'Un audit pratique de la typographie, des formulaires, de la navigation et des preuves de confiance sur mobile.', ar: 'مراجعة عملية للخطوط والنماذج والتنقل وإشارات الثقة لعملاء المغرب على الهاتف.' },
  },
  {
    slug: 'website-maintenance-morocco-guide', category: 'Web Design & Tech',
    keyword: { en: 'website maintenance service Morocco small business', fr: 'maintenance site web Maroc petite entreprise', ar: 'صيانة المواقع الإلكترونية للمقاولات في المغرب' },
    title: { en: 'Website Maintenance in Morocco: What a Small Business Actually Needs', fr: 'Maintenance de site au Maroc : ce dont une petite entreprise a réellement besoin', ar: 'صيانة الموقع الإلكتروني في المغرب: ما تحتاجه المقاولة فعلاً' },
    excerpt: { en: 'Separate essential updates, security, content care, backups, and growth improvements from unnecessary maintenance packages.', fr: 'Distinguez mises à jour, sécurité, contenu, sauvegardes et améliorations de croissance des forfaits inutiles.', ar: 'ميّز بين التحديثات والأمان والمحتوى والنسخ الاحتياطية والتحسينات الضرورية.' },
  },
  {
    slug: 'branding-agency-casablanca-pricing', category: 'Branding & Graphic Design',
    keyword: { en: 'branding agency Casablanca price identity package', fr: 'prix agence branding Casablanca identité visuelle', ar: 'سعر وكالة branding الدار البيضاء الهوية البصرية' },
    title: { en: 'Branding Agency Casablanca Pricing: What a Professional Identity Package Includes', fr: 'Prix d’une agence de branding à Casablanca : que comprend un pack professionnel ?', ar: 'أسعار وكالة الهوية البصرية في الدار البيضاء: ماذا يتضمن الباكج الاحترافي؟' },
    excerpt: { en: 'See what should be included in a strategic identity package, from positioning and logo design to practical brand guidelines.', fr: 'Découvrez ce qu’un pack d’identité stratégique doit inclure, du positionnement aux guidelines pratiques.', ar: 'تعرّف على عناصر باكج الهوية الاستراتيجية من التموضع وتصميم الشعار إلى دليل الاستخدام.' },
  },
  {
    slug: 'premium-logo-design-morocco-checklist', category: 'Branding & Graphic Design',
    keyword: { en: 'premium logo design Morocco business checklist', fr: 'création logo premium Maroc checklist entreprise', ar: 'تصميم شعار احترافي المغرب قائمة التحقق' },
    title: { en: 'Premium Logo Design in Morocco: A Checklist for a Mark That Scales', fr: 'Création de logo premium au Maroc : la checklist d’un signe qui évolue', ar: 'تصميم شعار احترافي في المغرب: قائمة لشعار يتطور مع علامتك' },
    excerpt: { en: 'A logo should work on a phone, storefront, proposal, and social profile. Use this checklist before approving a final mark.', fr: 'Un logo doit fonctionner sur téléphone, vitrine, présentation et réseaux sociaux. Utilisez cette checklist avant validation.', ar: 'يجب أن يعمل الشعار على الهاتف والواجهة والعروض والمنصات الاجتماعية. استخدم هذه القائمة قبل الاعتماد.' },
  },
  {
    slug: 'visual-identity-studio-morocco-guide', category: 'Branding & Graphic Design',
    keyword: { en: 'visual identity studio Morocco brand system', fr: 'studio identité visuelle Maroc système de marque', ar: 'استوديو هوية بصرية المغرب نظام العلامة' },
    title: { en: 'Visual Identity Studio Morocco: How to Build a Brand System, Not Just a Logo', fr: 'Studio d’identité visuelle au Maroc : créer un système, pas seulement un logo', ar: 'استوديو الهوية البصرية في المغرب: ابنِ نظاماً لا مجرد شعار' },
    excerpt: { en: 'Learn how type, color, layout, imagery, and tone create a recognizable system across every customer touchpoint.', fr: 'Découvrez comment typographie, couleur, mise en page, images et ton construisent un système reconnaissable.', ar: 'اكتشف كيف تصنع الخطوط والألوان والتخطيط والصور والنبرة نظاماً متناسقاً.' },
  },
  {
    slug: 'rebranding-morocco-premium-clients', category: 'Branding & Graphic Design',
    keyword: { en: 'rebranding agency Morocco attract premium clients', fr: 'agence rebranding Maroc clients premium', ar: 'وكالة إعادة branding المغرب جذب عملاء مميزين' },
    title: { en: 'Rebranding in Morocco: 7 Signals Your Business Is Ready for Premium Clients', fr: 'Rebranding au Maroc : 7 signes que votre entreprise est prête pour des clients premium', ar: 'إعادة بناء العلامة في المغرب: 7 مؤشرات لجذب العملاء المميزين' },
    excerpt: { en: 'Discover when a sharper position and consistent identity can help your business move beyond price-based competition.', fr: 'Découvrez quand un positionnement plus clair et une identité cohérente permettent de sortir de la compétition par le prix.', ar: 'اكتشف متى يساعد التموضع الواضح والهوية المتناسقة على تجاوز المنافسة السعرية.' },
  },
  {
    slug: 'arabic-french-bilingual-brand-design', category: 'Branding & Graphic Design',
    keyword: { en: 'Arabic French bilingual brand design Morocco', fr: 'design marque bilingue arabe français Maroc', ar: 'تصميم هوية ثنائية اللغة عربي فرنسي المغرب' },
    title: { en: 'Arabic and French Brand Design: A Practical Guide for Moroccan Businesses', fr: 'Design de marque arabe et français : guide pratique pour les entreprises marocaines', ar: 'تصميم العلامة بالعربية والفرنسية: دليل عملي للشركات المغربية' },
    excerpt: { en: 'Create a bilingual identity that respects reading direction, hierarchy, typography, and cultural context without looking fragmented.', fr: 'Créez une identité bilingue qui respecte sens de lecture, hiérarchie, typographie et contexte culturel.', ar: 'أنشئ هوية ثنائية اللغة تحترم اتجاه القراءة والتسلسل والخط والسياق الثقافي.' },
  },
  {
    slug: 'premium-ui-ux-design-morocco', category: 'Branding & Graphic Design',
    keyword: { en: 'premium UI UX design agency Morocco', fr: 'agence UI UX premium Maroc', ar: 'وكالة تصميم UI UX احترافية المغرب' },
    title: { en: 'Premium UI/UX Design in Morocco: 6 Ways Interface Quality Builds Trust', fr: 'UI/UX premium au Maroc : 6 façons dont la qualité d’interface crée la confiance', ar: 'تصميم UI/UX احترافي في المغرب: 6 طرق تبني بها الواجهة الثقة' },
    excerpt: { en: 'See how clarity, feedback, hierarchy, accessibility, and motion make a digital product feel more valuable.', fr: 'Découvrez comment clarté, feedback, hiérarchie, accessibilité et motion augmentent la valeur perçue.', ar: 'تعرّف على دور الوضوح والتفاعل والتسلسل وسهولة الوصول والحركة في رفع القيمة المدركة.' },
  },
  {
    slug: 'social-media-templates-brand-morocco', category: 'Branding & Graphic Design',
    keyword: { en: 'social media templates branding Morocco business', fr: 'templates réseaux sociaux branding Maroc', ar: 'قوالب سوشيال ميديا للعلامة التجارية المغرب' },
    title: { en: 'Social Media Templates for Moroccan Brands: A System That Saves Time', fr: 'Templates réseaux sociaux pour les marques marocaines : un système qui fait gagner du temps', ar: 'قوالب منصات التواصل للعلامات المغربية: نظام يوفر الوقت' },
    excerpt: { en: 'Turn your identity into flexible content templates that make every post faster, clearer, and more recognizable.', fr: 'Transformez votre identité en templates flexibles pour publier plus vite, plus clairement et avec cohérence.', ar: 'حوّل هويتك إلى قوالب مرنة تجعل كل منشور أسرع وأوضح وأكثر تماسكاً.' },
  },
  {
    slug: 'local-seo-agency-casablanca-checklist', category: 'Digital Marketing & SEO',
    keyword: { en: 'local SEO agency Casablanca checklist', fr: 'checklist agence SEO local Casablanca', ar: 'قائمة تحسين SEO محلي الدار البيضاء' },
    title: { en: 'Local SEO Agency Casablanca Checklist: 12 Fixes Before You Spend on Ads', fr: 'Checklist SEO local à Casablanca : 12 corrections avant de lancer des ads', ar: 'قائمة وكالة SEO محلي في الدار البيضاء: 12 إصلاحاً قبل الإعلانات' },
    excerpt: { en: 'Improve your Google Business Profile, location signals, reviews, service pages, and conversion path before increasing ad spend.', fr: 'Améliorez fiche Google, signaux locaux, avis, pages services et conversion avant d’augmenter le budget publicitaire.', ar: 'حسّن ملف Google Business والإشارات المحلية والمراجعات وصفحات الخدمات ومسار التحويل قبل رفع ميزانية الإعلانات.' },
  },
  {
    slug: 'google-business-profile-morocco-guide', category: 'Digital Marketing & SEO',
    keyword: { en: 'Google Business Profile optimization Morocco', fr: 'optimisation fiche Google Business Maroc', ar: 'تحسين ملف Google Business المغرب' },
    title: { en: 'Google Business Profile Morocco: A Step-by-Step Guide to More Calls', fr: 'Google Business Profile au Maroc : guide étape par étape pour recevoir plus d’appels', ar: 'ملف Google Business في المغرب: دليل خطوة بخطوة للحصول على مكالمات أكثر' },
    excerpt: { en: 'A local visibility guide covering categories, service areas, photos, reviews, posts, and the actions that turn map views into leads.', fr: 'Un guide local sur catégories, zones, photos, avis, publications et actions qui transforment les vues Maps en leads.', ar: 'دليل للظهور المحلي يشمل التصنيف والمناطق والصور والمراجعات والمنشورات وتحويل مشاهدات الخرائط إلى عملاء.' },
  },
  {
    slug: 'performance-marketing-morocco-small-business', category: 'Digital Marketing & SEO',
    keyword: { en: 'performance marketing Morocco small business', fr: 'marketing à la performance Maroc PME', ar: 'التسويق بالأداء للشركات الصغيرة المغرب' },
    title: { en: 'Performance Marketing in Morocco: A Simple Budget Model for Small Businesses', fr: 'Marketing à la performance au Maroc : un modèle de budget simple pour les PME', ar: 'التسويق بالأداء في المغرب: نموذج ميزانية بسيط للشركات الصغيرة' },
    excerpt: { en: 'Connect budget, creative testing, landing pages, response speed, and qualified lead cost in one practical growth model.', fr: 'Reliez budget, tests créatifs, landing pages, rapidité de réponse et coût par lead qualifié.', ar: 'اربط الميزانية واختبار الإعلانات وصفحات الهبوط وسرعة الرد وتكلفة العميل المؤهل.' },
  },
  {
    slug: 'meta-ads-casablanca-lead-generation', category: 'Digital Marketing & SEO',
    keyword: { en: 'Meta ads lead generation Casablanca agency', fr: 'agence Meta Ads génération leads Casablanca', ar: 'إعلانات Meta لجلب العملاء الدار البيضاء' },
    title: { en: 'Meta Ads for Lead Generation in Casablanca: What to Test First', fr: 'Meta Ads pour générer des leads à Casablanca : que tester en premier ?', ar: 'إعلانات Meta لجلب العملاء في الدار البيضاء: ماذا تختبر أولاً؟' },
    excerpt: { en: 'Start with a focused test plan for audiences, offers, creative angles, forms, WhatsApp, and qualified lead tracking.', fr: 'Commencez par un plan de test ciblé sur audiences, offres, créations, formulaires, WhatsApp et suivi des leads.', ar: 'ابدأ بخطة اختبار مركزة للجمهور والعرض والإبداع والنماذج وواتساب وتتبع العملاء المؤهلين.' },
  },
  {
    slug: 'content-strategy-moroccan-business', category: 'Digital Marketing & SEO',
    keyword: { en: 'content strategy Moroccan business local customers', fr: 'stratégie contenu entreprise marocaine clients locaux', ar: 'استراتيجية محتوى شركة مغربية العملاء المحليون' },
    title: { en: 'Content Strategy for Moroccan Businesses: 30 Days of Useful Ideas', fr: 'Stratégie de contenu pour les entreprises marocaines : 30 jours d’idées utiles', ar: 'استراتيجية المحتوى للشركات المغربية: 30 يوماً من الأفكار المفيدة' },
    excerpt: { en: 'Build a repeatable month of content from customer questions, proof, local context, and commercial intent.', fr: 'Construisez un mois de contenu réutilisable à partir des questions clients, preuves, contexte local et intention commerciale.', ar: 'أنشئ شهراً من المحتوى انطلاقاً من أسئلة العملاء والأدلة والسياق المحلي والنية التجارية.' },
  },
  {
    slug: 'seo-content-clusters-morocco', category: 'Digital Marketing & SEO',
    keyword: { en: 'SEO content clusters Morocco agency services', fr: 'clusters de contenu SEO Maroc services agence', ar: 'مجموعات المحتوى SEO المغرب خدمات الوكالة' },
    title: { en: 'SEO Content Clusters for Morocco: How to Build Authority Around One Service', fr: 'Clusters de contenu SEO au Maroc : créer de l’autorité autour d’un service', ar: 'مجموعات المحتوى لتحسين SEO في المغرب: ابنِ السلطة حول خدمة واحدة' },
    excerpt: { en: 'Organize service pages, guides, comparisons, and case studies so search engines and buyers understand your expertise faster.', fr: 'Organisez pages services, guides, comparatifs et cas clients pour clarifier votre expertise.', ar: 'نظّم صفحات الخدمات والأدلة والمقارنات ودراسات الحالة كي يفهم محرك البحث والعميل خبرتك بسرعة.' },
  },
  {
    slug: 'seo-audit-morocco-business-template', category: 'Digital Marketing & SEO',
    keyword: { en: 'SEO audit template Morocco business website', fr: 'modèle audit SEO site entreprise Maroc', ar: 'نموذج تدقيق SEO لموقع شركة في المغرب' },
    title: { en: 'SEO Audit for a Moroccan Business Website: The 20-Point Template', fr: 'Audit SEO d’un site marocain : le modèle en 20 points', ar: 'تدقيق SEO لموقع شركة مغربية: نموذج من 20 نقطة' },
    excerpt: { en: 'Use a focused audit to find technical, local, content, and conversion issues before choosing your next SEO investment.', fr: 'Utilisez un audit ciblé pour repérer les problèmes techniques, locaux, éditoriaux et de conversion.', ar: 'استخدم تدقيقاً مركزاً لاكتشاف مشاكل التقنية والمحلي والمحتوى والتحويل قبل الاستثمار.' },
  },
];

const legacyTranslations: Record<string, Partial<Record<Locale, { title: string; excerpt: string; keywords: string[] }>>> = {
  'custom-nextjs-website-vs-wordpress-2026': {
    fr: { title: 'Pourquoi un site Next.js sur mesure dépasse WordPress en 2026', excerpt: 'Vitesse, conversion, mobile et SEO : les raisons de choisir un site Next.js rapide pour une entreprise marocaine.', keywords: ['agence web Casablanca', 'site Next.js rapide', 'développement web Maroc'] },
    ar: { title: 'لماذا يتفوق موقع Next.js مخصص على WordPress في 2026؟', excerpt: 'نظرة عملية على السرعة والتحويل وتجربة الهاتف وميزة SEO لموقع Next.js سريع للشركات المغربية.', keywords: ['شركة تطوير مواقع الدار البيضاء', 'موقع Next.js سريع', 'تطوير الويب المغرب'] },
  },
  'digital-marketing-strategies-scale-business-morocco': {
    fr: { title: '5 stratégies de marketing digital pour développer votre entreprise au Maroc', excerpt: 'Un plan de croissance centré sur la visibilité, les demandes qualifiées et des résultats mesurables.', keywords: ['agence marketing digital Casablanca', 'marketing à la performance Maroc', 'SEO local'] },
    ar: { title: '5 استراتيجيات تسويق رقمي لتوسيع شركتك في المغرب', excerpt: 'خطة نمو عملية للشركات المغربية التي تريد ظهوراً أفضل وطلبات أقوى ونظاماً رقمياً قابلاً للقياس.', keywords: ['وكالة تسويق رقمي الدار البيضاء', 'التسويق بالأداء المغرب', 'استراتيجيات SEO محلي'] },
  },
  'visual-identity-brand-perception-competitive-markets': {
    fr: { title: 'Pourquoi l’identité visuelle transforme la perception d’une marque', excerpt: 'Comment une identité claire renforce la crédibilité, raconte une meilleure histoire et convertit l’attention.', keywords: ['agence design graphique Casablanca', 'agence branding Maroc', 'design UI UX premium'] },
    ar: { title: 'لماذا تهم الهوية البصرية؟ تحويل صورة العلامة في الأسواق التنافسية', excerpt: 'كيف تساعد الهوية الواضحة على بناء الثقة وسرد قصة أفضل وتحويل الانتباه إلى تفضيل.', keywords: ['وكالة تصميم جرافيكي الدار البيضاء', 'وكالة branding المغرب', 'تصميم UI UX احترافي'] },
  },
};

function strategyBlocks(article: SeoStrategyArticle, locale: Locale): BlogBlock[] {
  const content = {
    en: { heading: 'A practical framework for your next move', body: 'Start with the business outcome, then connect the experience, message, and measurement to that outcome. This keeps the project useful instead of turning it into a collection of disconnected deliverables.', list: ['Clarify the audience and the commercial intent.', 'Choose the smallest system that can prove the next step.', 'Measure qualified conversations, not only impressions.', 'Improve the experience from real customer questions.'], callout: 'A focused digital system creates more value than a larger list of disconnected tactics.', closing: 'AGENCY helps ambitious businesses in Morocco turn strategy, design, and technology into a clearer path to growth.' },
    fr: { heading: 'Une méthode concrète pour la prochaine étape', body: 'Commencez par le résultat commercial, puis reliez expérience, message et mesure à ce résultat. Le projet reste ainsi utile et cohérent.', list: ['Clarifier l’audience et l’intention commerciale.', 'Choisir le plus petit système capable de prouver la prochaine étape.', 'Mesurer les conversations qualifiées, pas seulement les impressions.', 'Améliorer l’expérience grâce aux vraies questions des clients.'], callout: 'Un système digital ciblé crée plus de valeur qu’une longue liste de tactiques séparées.', closing: 'AGENCY aide les entreprises ambitieuses au Maroc à transformer stratégie, design et technologie en trajectoire de croissance.' },
    ar: { heading: 'منهج عملي لخطوتك القادمة', body: 'ابدأ بالنتيجة التجارية، ثم اربط التجربة والرسالة والقياس بهذه النتيجة. بهذه الطريقة يبقى المشروع متماسكاً ومفيداً.', list: ['حدد الجمهور والنية التجارية بوضوح.', 'اختر أبسط نظام يثبت الخطوة التالية.', 'قِس المحادثات المؤهلة وليس المشاهدات فقط.', 'طوّر التجربة انطلاقاً من أسئلة العملاء الحقيقية.'], callout: 'النظام الرقمي المركز يصنع قيمة أكبر من قائمة طويلة من التكتيكات المنفصلة.', closing: 'تساعد AGENCY الشركات الطموحة في المغرب على تحويل الاستراتيجية والتصميم والتكنولوجيا إلى طريق أوضح للنمو.' },
  }[locale];
  return [
    { type: 'paragraph', text: article.excerpt[locale] },
    { type: 'heading', level: 2, text: content.heading },
    { type: 'paragraph', text: content.body },
    { type: 'list', items: content.list },
    { type: 'callout', text: content.callout },
    { type: 'heading', level: 2, text: article.title[locale] },
    { type: 'paragraph', text: content.closing },
  ];
}

function strategyToPost(article: SeoStrategyArticle, locale: Locale): BlogPost {
  return {
    slug: article.slug,
    title: article.title[locale],
    excerpt: article.excerpt[locale],
    category: article.category,
    readTime: '5 min read',
    publishedAt: 'September 18, 2026',
    keywords: [article.keyword[locale]],
    blocks: strategyBlocks(article, locale),
  };
}

export function getLocalizedBlogPosts(locale: Locale): BlogPost[] {
  const legacy = blogPosts.map((post) => {
    const translation = legacyTranslations[post.slug]?.[locale];
    return translation ? { ...post, ...translation } : post;
  });
  return [...legacy, ...seoStrategyArticles.map((article) => strategyToPost(article, locale))];
}

export function getLocalizedBlogPost(slug: string, locale: Locale) {
  return getLocalizedBlogPosts(locale).find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return [...blogPosts.map((post) => post.slug), ...seoStrategyArticles.map((article) => article.slug)];
}
