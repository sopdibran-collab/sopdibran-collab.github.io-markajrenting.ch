export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "choisir-finition-platrerie-q3-q4",
    title: "Comment choisir entre une finition Q3 et Q4 en plâtrerie ?",
    excerpt:
      "Q3 ou Q4 ? Comprendre la différence entre ces niveaux de finition pour faire le bon choix selon votre projet de peinture ou de décoration.",
    date: "2026-06-15",
    readTime: "5 min",
    category: "Guide",
    content: [
      "Lors d'un projet de plâtrerie, le niveau de finition détermine la qualité de surface obtenue avant l'application de la peinture ou du revêtement mural. En Suisse, les finitions sont classées selon les normes SIA, de Q1 à Q4.",
      "La finition Q3 est le standard le plus courant pour les logements. Elle convient aux peintures mates, aux papiers peints fins et aux enduits décoratifs légèrement texturés. Les joints sont poncés et les imperfections visibles à 1 mètre sous éclairage normal sont acceptables.",
      "La finition Q4 est un niveau haut de gamme. La surface est parfaitement lisse, sans marque de joint visible, même sous un éclairage rasant. Elle est recommandée pour les peintures satinées, laquées, les murs design et les espaces commerciaux premium.",
      "Le choix dépend de votre budget, du type de peinture prévu et de l'usage de la pièce. Pour un salon ou une chambre avec peinture mate, la Q3 est généralement suffisante. Pour un bureau, un commerce ou un intérieur design, la Q4 justifie son surcoût.",
      "Chez Markaj Renting SA, nous vous conseillons le niveau de finition adapté à chaque pièce lors de l'établissement du devis. N'hésitez pas à nous contacter pour une visite et une recommandation personnalisée.",
    ],
  },
  {
    slug: "isolation-peripherique-avantages",
    title: "Isolation périphérique : pourquoi isoler par l'intérieur ?",
    excerpt:
      "L'isolation périphérique est une solution efficace pour améliorer le confort thermique et acoustique d'un bâtiment existant en Suisse romande.",
    date: "2026-05-28",
    readTime: "6 min",
    category: "Guide",
    content: [
      "L'isolation périphérique consiste à isoler les parois intérieures donnant sur l'extérieur (murs, plafonds bas, planchers sur vide sanitaire) pour créer une enveloppe thermique continue autour du volume chauffé.",
      "Cette technique est particulièrement adaptée aux bâtiments existants construits avant les normes énergétiques actuelles. Elle permet de réduire significativement les déperditions de chaleur sans modifier la façade extérieure.",
      "Les avantages sont multiples : amélioration du confort thermique, réduction des factures de chauffage, diminution des nuisances sonores extérieures et suppression des ponts thermiques aux angles des pièces.",
      "La mise en œuvre comprend généralement la pose d'une ossature, l'insertion de laine minérale ou de panneaux isolants, la pose d'un pare-vapeur si nécessaire et l'habillage en plaques BA13 prêtes à peindre.",
      "La perte de surface habitable est limitée (environ 10 à 15 cm par mur). Markaj Renting SA réalise ce type de travaux en coordination avec la plâtrerie et la peinture pour une finition complète et soignée.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogSlugs = blogPosts.map((p) => p.slug);
