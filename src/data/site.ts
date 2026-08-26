export const SITE = {
  name: 'zenvora',
  phone: '+1 (226) 678-1909',
  phoneHref: 'tel:+12266781909',
  email: 'support@zenvora.com',
  company: 'Pursuance Row LLC',
  addressLines: ['3444 Flat Iron NE', 'Rio Rancho, NM 87144'],
  hours: 'Monday through Friday 8am to 8pm and Saturday 9am to 5pm EST',
  announcement: 'Free Shipping on Orders Over $75 — Limited Time!',
  copyright: '© 2026 zenvora. All rights reserved.',
  disclaimer:
    'Products sold by zenvora are dietary supplements intended to support general health and wellness. These statements have not been evaluated by the Food and Drug Administration. Please review product details, ingredients, and usage instructions before purchasing. All sales are subject to our return policy. zenvora is not responsible for improper care or misuse of products. These products are not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider before use, especially if you are pregnant, nursing, taking medication, or have a medical condition.',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/', page: 'index' },
  { label: 'Shop', href: '/shop', page: 'shop' },
  { label: 'VIP', href: '/vip', page: 'vip' },
  { label: 'Contacts', href: '/contacts', page: 'contacts' },
  { label: 'Privacy Policy', href: '/privacy-policy', page: 'privacy-policy' },
  { label: 'Terms', href: '/terms', page: 'terms' },
  { label: 'Easy Cancel', href: '/cancellation-request', page: 'cancellation-request' },
] as const

export const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'VIP', href: '/vip' },
  { label: 'Contacts', href: '/contacts' },
] as const

export const SERVICE_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Easy Cancel', href: '/cancellation-request' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Shipping Policy', href: '/shipping-policy' },
] as const

export const PRODUCT_IMAGES = [
  { src: '/images/product/hero-jar.png', alt: 'zenvora Nitric Oxide jar front', label: 'Front' },
  { src: '/images/product/jar-angled.png', alt: 'zenvora Nitric Oxide angled', label: 'Angled' },
  { src: '/images/product/flat-lay.png', alt: 'Nitric Oxide lifestyle flat lay', label: 'Lifestyle' },
  { src: '/images/product/pour-shot.png', alt: 'Mixing Nitric Oxide drink', label: 'Mix' },
  { src: '/images/product/hero-beets.png', alt: 'Nitric Oxide with beets', label: 'Beets' },
  { src: '/images/product/how-to-mix.png', alt: 'How to mix Nitric Oxide', label: 'Routine' },
  { src: '/images/product/ingredients-3in1.png', alt: '3-in-1 ingredients', label: 'Formula' },
  { src: '/images/product/lifestyle-athlete.png', alt: 'Active lifestyle', label: 'Active' },
  { src: '/images/product/label-back.png', alt: 'Supplement facts label', label: 'Facts' },
] as const

export const PRODUCT = {
  id: 'nitric-oxide',
  name: 'Nitric Oxide',
  tagline: 'Organic Beets',
  subtitle: '3-In-1 Circulation Superfood',
  flavor: 'Mixed Berry / Cherry Lime',
  form: 'Powder',
  netWeight: '8.8 oz (250g)',
  servings: 30,
  servingSize: '1 scoop (approx. 8.2g)',
  rating: 4.6,
  reviewCount: '2,400+',
  price: 39.99,
  image: '/images/product/hero-jar.png',
  images: PRODUCT_IMAGES,
  description:
    'A beetroot-powered nitric oxide support powder formulated with organic beets, pomegranate, and red spinach extract to support healthy circulation, blood pressure, energy, and exercise performance.',
  longDescription:
    'zenvora Nitric Oxide Organic Beets delivers concentrated beet crystals with pomegranate and Oxystorm® red spinach extract. Designed as a daily powder for circulation support, natural energy, and exercise performance. Vegan, gluten-free, Non-GMO, and soy-free.',
}

export const PRODUCT_BUNDLES = [
  { qty: 1, label: '1 Tub', price: 39.99, save: 0, badge: null },
  { qty: 2, label: '2 Tubs', price: 69.99, save: 10, badge: 'POPULAR' },
  { qty: 3, label: '3 Tubs', price: 94.99, save: 25, badge: 'BEST VALUE' },
] as const

export const VIP = {
  id: 'vip-membership',
  name: 'zenvora VIP Membership',
  price: 49.99,
  cycleDays: 30,
}

export const FREE_SHIPPING_THRESHOLD = 75

export const VIP_FAQ = [
  {
    q: 'How do I access VIP pricing after joining?',
    a: 'After your membership is activated, member pricing is applied to Nitric Oxide Organic Beets at checkout. You can manage or cancel anytime through Easy Cancel.',
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Yes. Cancel anytime through Easy Cancel, email, or phone. There are no cancellation fees. Access stays active until the end of the current billing period.',
  },
  {
    q: 'How much does VIP membership cost?',
    a: `VIP Membership is $49.99, charged now and every 30 days until you cancel. You will receive an electronic notification 5 to 7 days before each transaction and a receipt after each successful charge.`,
  },
  {
    q: 'How much can I save with VIP membership?',
    a: 'VIP members get exclusive pricing on Nitric Oxide Organic Beets, early access to offers, and priority support. Many members find the savings from a bundle cover the membership cost.',
  },
  {
    q: 'Is my payment information secure?',
    a: 'Yes. Transactions use industry-standard encryption and PCI-compliant processors. We do not store full payment details on our servers.',
  },
] as const

export const HERO_BADGES = [
  'Circulation',
  'Blood Pressure',
  'Natural Energy',
  'USDA Organic',
  '30 Servings',
] as const

export const TRUST_ITEMS = [
  'USDA Organic',
  'Vegan Friendly',
  'Gluten Free',
  'Non-GMO',
  'Soy Free',
  'Third-Party Tested',
  '30 Servings',
  '1 Scoop Daily',
] as const

export const BENEFITS = [
  {
    title: 'Supports Cardio Health',
    text: 'Nitrates from organic beets and red spinach help support nitric oxide production for everyday cardiovascular wellness.',
    icon: 'heart',
  },
  {
    title: 'Supports Healthy Blood Pressure',
    text: 'A circulation-focused blend designed to support healthy blood flow as part of an active lifestyle.',
    icon: 'pressure',
  },
  {
    title: 'Promotes Natural Energy',
    text: 'Fuel workouts and daily stamina with a clean powder that mixes easily into water or your favorite beverage.',
    icon: 'energy',
  },
] as const

export const INGREDIENTS = [
  {
    title: 'Organic Beets',
    text: '100% organic beetroot powder packed with natural nitrates, antioxidants, vitamins, and minerals.',
  },
  {
    title: 'Pomegranate',
    text: 'Rich in polyphenols that help protect heart, brain, and connective tissues while supporting circulation.',
  },
  {
    title: 'Red Spinach (Oxystorm®)',
    text: 'A concentrated source of nitrates plus vitamins and minerals including vitamin A, iron, and folate.',
  },
] as const

export const HOW_TO_USE = [
  'Use one scoop of Nitric Oxide Organic Beets',
  'Mix with 8–12 oz of your favorite beverage',
  'Enjoy daily as part of your wellness routine',
] as const

export const FEATURES = [
  { title: 'Vegan', text: 'Plant-based formula' },
  { title: 'Non-GMO', text: 'No genetically modified ingredients' },
  { title: 'Gluten Free', text: 'Made without gluten' },
  { title: 'No Sugar Added', text: 'Sweetened with organic stevia' },
] as const

export const SUPPLEMENT_FACTS = [
  { nutrient: 'Calories', amount: '25', dv: '' },
  { nutrient: 'Total Carbohydrates', amount: '6g', dv: '2%' },
  { nutrient: 'Dietary Fiber', amount: '2g', dv: '7%' },
  { nutrient: 'Total Sugars', amount: '4g', dv: '' },
  { nutrient: 'Vitamin C (as Ascorbic Acid)', amount: '20mg', dv: '22%' },
  { nutrient: 'Vitamin B3 (as Niacinamide)', amount: '16mg', dv: '100%' },
  { nutrient: 'Vitamin B12 (as Cyanocobalamin)', amount: '10mcg', dv: '416%' },
  { nutrient: 'Sodium (from Real Salt®)', amount: '48mg', dv: '2%' },
  { nutrient: 'Potassium', amount: '150mg', dv: '3%' },
  { nutrient: 'Nitric Oxide Complex', amount: '6853mg', dv: '†' },
] as const

export const WHY_CHOOSE = [
  {
    title: 'Premium Ingredients',
    text: 'Organic beetroot, pomegranate, and Oxystorm® red spinach extract in a formula built for circulation support.',
    icon: 'star',
  },
  {
    title: 'Clean Label Standards',
    text: 'Vegan, gluten-free, soy-free, and Non-GMO — with USDA Organic listing on qualifying variants.',
    icon: 'check',
  },
  {
    title: 'Daily Performance Ritual',
    text: 'One scoop mixes easily into water or juice so you can support energy and exercise performance every day.',
    icon: 'heart',
  },
  {
    title: 'Quality You Can Trust',
    text: 'Transparent labeling, secure ordering, and a customer-first approach on every purchase.',
    icon: 'user',
  },
] as const

export const COMPARISON_ROWS = [
  'Lab Tested Products',
  'Pure Formula',
  'Quality Materials',
  'Safety Tested',
  'No Artificial Flavors',
  '30-Day Money-Back Guarantee',
  'Fast Free Shipping',
  'Customer Service',
] as const

export const PRODUCT_FAQ = [
  {
    q: 'How do I take Nitric Oxide?',
    a: 'Mix 1 scoop with 8–12 oz of water or your favorite beverage once daily.',
  },
  {
    q: 'How many servings are in each tub?',
    a: 'Each container provides about 30 servings (8.8 oz / 250g).',
  },
  {
    q: 'Is it vegan and gluten-free?',
    a: 'Yes. The formula is vegan, gluten-free, soy-free, and Non-GMO.',
  },
  {
    q: 'What are the main ingredients?',
    a: 'Organic beet root powder, organic pomegranate juice powder, Oxystorm® red spinach extract, and BioPerine® black pepper extract, plus vitamins B3, B12, and C.',
  },
] as const
