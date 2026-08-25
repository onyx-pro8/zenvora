export const SITE = {
  name: 'zenvora',
  phone: '+1 (226) 678-1909',
  phoneHref: 'tel:+1 (226) 678-1909',
  email: 'support@zenvora.com',
  company: 'Pursuance Row LLC',
  addressLines: ['3444 Flat Iron NE', 'Rio Rancho, NM 87144'],
  announcement: 'Free Shipping on Orders Over $75 — Limited Time!',
  copyright: '© 2026 zenvora. All rights reserved.',
  disclaimer:
    'Products sold by zenvora are dietary supplements intended to support general health and wellness. These statements have not been evaluated by the Food and Drug Administration. Please review product details, ingredients, and usage instructions before purchasing. All sales are subject to our return policy. zenvora is not responsible for improper care or misuse of products. These products are not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider before use, especially if you are pregnant, nursing, taking medication, or have a medical condition.',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#', page: 'index', active: true },
  { label: 'Shop', href: '#benefits', page: 'shop', active: false },
  { label: 'Benefits', href: '#benefits', page: 'benefits', active: false },
  { label: 'Ingredients', href: '#ingredients', page: 'ingredients', active: false },
  { label: 'Contacts', href: '#contacts', page: 'contacts', active: false },
  { label: 'Privacy Policy', href: '#privacy', page: 'privacy-policy', active: false },
  { label: 'Easy Cancel', href: '#cancel', page: 'cancellation-request', active: false },
] as const

export const QUICK_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#benefits' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Contacts', href: '#contacts' },
] as const

export const SERVICE_LINKS = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
  { label: 'Easy Cancel', href: '#cancel' },
  { label: 'Refund Policy', href: '#refund' },
  { label: 'Shipping Policy', href: '#shipping' },
] as const

export const PRODUCT = {
  id: 'nitric-oxide',
  name: 'Nitric Oxide',
  tagline: 'Organic Beets',
  subtitle: '3-In-1 Circulation Superfood',
  flavor: 'Mixed Berry',
  form: 'Powder',
  netWeight: '8.8 oz (250g)',
  servings: 30,
  servingSize: '1 scoop (approx. 8.2g)',
  rating: 4.6,
  reviewCount: '2,400+',
  priceLabel: 'Shop Now',
  description:
    'A beetroot-powered nitric oxide support powder formulated with organic beets, pomegranate, and red spinach extract to support healthy circulation, blood pressure, energy, and exercise performance.',
  image: '/images/product/hero-jar.png',
}

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
