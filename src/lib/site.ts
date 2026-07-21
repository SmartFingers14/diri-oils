export const site = {
  name: "Diri Oils",
  tagline: "Pure Cold-Pressed Mustard Oil",
  established: "2018",
  phone: "+91 98765 43210",
  email: "hello@dirioils.com",
  address: "Village Barwala, Hisar, Haryana 125121, India",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export const videos = {
  hero: "/videos/hero.mp4",
  farm: "/videos/farm.mp4",
  pour: "/videos/pour.mp4",
  seeds: "/videos/seeds.mp4",
  cooking: "/videos/cooking.mp4",
  press: "/videos/press.mp4",
};

/** Curated imagery (Unsplash CDN — free to use). */
export const img = {
  mustardField:
    "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?auto=format&fit=crop&w=1400&q=80",
  mustardFieldTall:
    "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=900&q=80",
  seeds:
    "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1000&q=80",
  oilBottle:
    "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1000&q=80",
  oilPour:
    "https://images.unsplash.com/photo-1611071536600-cf5b3c76a0a0?auto=format&fit=crop&w=1000&q=80",
  cooking:
    "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1000&q=80",
  farmer:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
  spices:
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80",
  leaves:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80",
  kitchen:
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80",
  yellowFlowers:
    "https://images.unsplash.com/photo-1520052205864-92d242b3a76b?auto=format&fit=crop&w=1000&q=80",
  drops:
    "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=1000&q=80",
};

export const gallery = [
  { src: img.mustardField, alt: "Golden mustard fields at sunrise", tall: true },
  { src: img.seeds, alt: "Freshly harvested mustard seeds" },
  { src: img.oilPour, alt: "Cold-pressed mustard oil being poured" },
  { src: img.cooking, alt: "Traditional Indian cooking with mustard oil" },
  { src: img.yellowFlowers, alt: "Blooming mustard flowers", tall: true },
  { src: img.spices, alt: "Aromatic spices and mustard oil" },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Product", href: "/product" },
  { label: "Benefits", href: "/benefits" },
  { label: "Our Process", href: "/process" },
  { label: "Recipes", href: "/recipes" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const product = {
  name: "Diri Kachi Ghani Mustard Oil",
  subtitle: "Wood-cold-pressed · Single-origin · Unrefined",
  description:
    "Pressed slow and cold in a traditional wooden ghani, our mustard oil keeps its natural pungency, deep golden colour and every drop of goodness. No heat, no chemicals, no refining — just the honest oil your grandmother trusted.",
  sizes: [
    { size: "500 ml", note: "Glass bottle" },
    { size: "1 Litre", note: "Glass bottle" },
    { size: "5 Litre", note: "Tin can" },
    { size: "15 Litre", note: "Bulk tin" },
  ],
  specs: [
    { label: "Extraction", value: "Wood cold-press (Kachi Ghani)" },
    { label: "Source", value: "Single-origin Haryana mustard seed" },
    { label: "Smoke Point", value: "≈ 250°C" },
    { label: "Shelf Life", value: "12 months" },
    { label: "Additives", value: "None — 100% pure" },
    { label: "Certification", value: "FSSAI · Agmark" },
  ],
  highlights: [
    "Rich in Omega-3 & Omega-6",
    "Naturally antibacterial & antifungal",
    "High MUFA, low saturated fat",
    "Zero cholesterol, no trans-fats",
  ],
};

export const benefits = [
  {
    title: "Heart Health",
    body: "A balanced ratio of Omega-3 and Omega-6 fatty acids and high monounsaturated fats support healthy cholesterol and cardiovascular wellness.",
  },
  {
    title: "Natural Immunity",
    body: "Mustard oil's natural antibacterial and antifungal properties have made it a trusted kitchen and wellness staple for generations.",
  },
  {
    title: "Skin & Hair Nourishment",
    body: "Rich in vitamin E and essential fatty acids, it deeply nourishes skin and strengthens hair from root to tip in traditional massage.",
  },
  {
    title: "Digestive Support",
    body: "Its pungent compounds stimulate digestive juices and appetite, aiding smoother, healthier digestion.",
  },
  {
    title: "Anti-inflammatory",
    body: "Selenium and natural allyl isothiocyanate help calm inflammation, warming the body in traditional therapies.",
  },
  {
    title: "High-Heat Cooking",
    body: "A high smoke point of around 250°C makes it perfect for deep-frying, tempering and everyday Indian cooking.",
  },
];

export const process = [
  {
    step: "01",
    title: "Hand-Picked Seed",
    body: "We source plump, single-origin mustard seeds directly from partner farms in Haryana — no blending, no imports.",
  },
  {
    step: "02",
    title: "Slow Cold Press",
    body: "Seeds are crushed in a traditional wooden ghani that turns slowly, keeping temperatures low so nutrients stay intact.",
  },
  {
    step: "03",
    title: "Natural Settling",
    body: "The raw oil rests and settles naturally — never chemically refined, bleached or deodorised.",
  },
  {
    step: "04",
    title: "Filtered & Bottled",
    body: "Triple-filtered through cloth and sealed in glass to lock in aroma, colour and freshness.",
  },
];

export const recipes = [
  {
    title: "Sarson Ka Saag",
    time: "45 min",
    tag: "Winter Classic",
    excerpt:
      "The soul of a Punjabi winter — slow-cooked mustard greens finished with a generous swirl of Diri mustard oil.",
  },
  {
    title: "Bengali Fish Curry",
    time: "35 min",
    tag: "Coastal",
    excerpt:
      "Sharp mustard oil is the backbone of authentic Machher Jhol, lending that unmistakable pungent depth.",
  },
  {
    title: "Aloo Bhaja",
    time: "20 min",
    tag: "Everyday",
    excerpt:
      "Crisp golden potato slices shallow-fried in smoking mustard oil — simple comfort food at its best.",
  },
  {
    title: "Achaari Pickle Base",
    time: "30 min",
    tag: "Preserve",
    excerpt:
      "Its antibacterial punch makes mustard oil the traditional choice for long-lasting Indian pickles.",
  },
  {
    title: "Kasundi Mustard Dip",
    time: "15 min",
    tag: "Condiment",
    excerpt:
      "A fiery Bengali mustard relish that comes alive with a raw drizzle of cold-pressed oil.",
  },
  {
    title: "Tandoori Marinade",
    time: "25 min",
    tag: "Grill",
    excerpt:
      "Mustard oil tenderises and flavours tandoori marinades, giving grilled dishes their signature warmth.",
  },
];

export const faqs = [
  {
    q: "What makes Diri Oils different from refined mustard oil?",
    a: "Our oil is cold-pressed in a traditional wooden ghani and never refined, bleached or chemically treated. This preserves the natural aroma, colour, pungency and nutrients that refining strips away.",
  },
  {
    q: "Why does the oil have such a strong smell?",
    a: "That pungency is the sign of genuine, unrefined Kachi Ghani mustard oil. It comes from natural allyl isothiocyanate and mellows beautifully once heated during cooking.",
  },
  {
    q: "How should I store the oil?",
    a: "Keep it in a cool, dark place away from direct sunlight. There's no need to refrigerate. Always use a clean, dry spoon and reseal tightly after use.",
  },
  {
    q: "Is Diri mustard oil good for deep-frying?",
    a: "Absolutely. With a smoke point of around 250°C it is one of the best oils for high-heat cooking, deep-frying and tempering.",
  },
  {
    q: "Is the oil FSSAI approved?",
    a: "Yes. Diri Oils is FSSAI licensed and Agmark certified, and every batch is quality-checked for purity before bottling.",
  },
  {
    q: "Do you deliver, and where can I buy it?",
    a: "This site is our brand home. To find stockists or place a wholesale enquiry, please reach us through the Contact page and our team will be glad to help.",
  },
];
