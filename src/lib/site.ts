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

export const legalNav = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Use", href: "/legal/terms-of-use" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
];

type LegalSection = { heading: string; body: string[] };
type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    updated: "July 2024",
    intro:
      "Your trust matters to us. This policy explains what limited information we collect when you visit dirioils.com and how we look after it. Diri Oils is an informational brand website — we do not sell products online.",
    sections: [
      {
        heading: "Information We Collect",
        body: [
          "We only collect the information you choose to share with us. If you fill in our contact form, we receive your name, email, phone number, enquiry type and message.",
          "Like most websites, our hosting provider may automatically log standard technical data such as your browser type, device and approximate region for security and performance purposes.",
        ],
      },
      {
        heading: "How We Use Your Information",
        body: [
          "We use the details you provide solely to respond to your enquiry, answer questions about our oil, and share stockist or wholesale information where relevant.",
          "We never sell, rent or trade your personal information to third parties.",
        ],
      },
      {
        heading: "Data Retention",
        body: [
          "Enquiry messages are kept only for as long as needed to assist you and maintain a record of our correspondence, after which they are removed.",
        ],
      },
      {
        heading: "Your Rights",
        body: [
          "You may request access to, correction of, or deletion of any personal information you have shared with us at any time by writing to hello@dirioils.com.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Questions about this policy? Reach us at hello@dirioils.com and we will be glad to help.",
        ],
      },
    ],
  },
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    updated: "July 2024",
    intro:
      "By accessing and using the Diri Oils website, you agree to the following terms. Please read them carefully.",
    sections: [
      {
        heading: "About This Website",
        body: [
          "This website exists to present the Diri Oils brand, our product and our story. It is informational only and does not offer online sales or transactions.",
        ],
      },
      {
        heading: "Use of Content",
        body: [
          "All content — including text, logos, imagery and videos — is the property of Diri Oils or its licensors and is protected by applicable laws. You may view and share content for personal, non-commercial purposes only.",
          "You may not reproduce, republish or use our content for commercial purposes without prior written permission.",
        ],
      },
      {
        heading: "Accuracy of Information",
        body: [
          "We take care to keep information about our oil accurate and current. However, product details, specifications and availability may change without notice.",
        ],
      },
      {
        heading: "Limitation of Liability",
        body: [
          "Diri Oils is not liable for any loss arising from reliance on information presented on this website. Nutritional and wellness information is provided for general awareness and is not medical advice.",
        ],
      },
      {
        heading: "Governing Law",
        body: [
          "These terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of the courts of Haryana.",
        ],
      },
    ],
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    updated: "July 2024",
    intro:
      "The information on this website is shared in good faith and for general informational purposes only.",
    sections: [
      {
        heading: "Health & Nutrition",
        body: [
          "References to the traditional uses and nutritional qualities of mustard oil reflect common understanding and heritage, not medical claims. They are not intended to diagnose, treat, cure or prevent any disease.",
          "Always consult a qualified healthcare professional before making dietary or wellness decisions.",
        ],
      },
      {
        heading: "Product Representation",
        body: [
          "We strive to represent our oil, its colour, packaging and characteristics as accurately as possible. Natural products may vary slightly from batch to batch and from the imagery shown.",
        ],
      },
      {
        heading: "External Links",
        body: [
          "Our website may link to external sites such as social media. We are not responsible for the content or privacy practices of those third-party sites.",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    updated: "July 2024",
    intro:
      "This policy explains how cookies and similar technologies may be used on the Diri Oils website.",
    sections: [
      {
        heading: "What Are Cookies",
        body: [
          "Cookies are small text files stored on your device that help websites function and understand how they are used.",
        ],
      },
      {
        heading: "How We Use Them",
        body: [
          "As an informational website, we use only essential cookies needed for the site to work and, where enabled, privacy-friendly analytics to understand general traffic patterns.",
          "We do not use cookies for advertising or to track you across other websites.",
        ],
      },
      {
        heading: "Managing Cookies",
        body: [
          "You can control or delete cookies through your browser settings at any time. Disabling essential cookies may affect how the website functions.",
        ],
      },
    ],
  },
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
