export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "isolation-thermique-vs-phonique",
    title: "Isolation thermique ou phonique : quel isolant pour quel problème ?",
    excerpt:
      "Froid, voisins bruyants, ou les deux ? En Suisse, thermique et phonique ne se traitent pas avec les mêmes critères. Guide pratique pour choisir la bonne approche.",
    date: "2026-08-13",
    readTime: "8 min",
    category: "Guide",
    content: [
      {
        type: "p",
        text: "En résumé : un isolant qui limite les pertes de chaleur n’est pas automatiquement le meilleur contre le bruit, et l’inverse est vrai. En Suisse, le thermique s’appuie notamment sur les valeurs U / exigences énergétiques (MoPEC, CECB, référentiels Minergie), tandis que l’acoustique intérieure est encadrée par la norme SIA 181 — Protection contre le bruit dans le bâtiment.",
      },
      {
        type: "h2",
        text: "Deux problèmes, deux logiques",
      },
      {
        type: "p",
        text: "L’isolation thermique vise à réduire le flux de chaleur à travers une paroi. On raisonne en conductivité (lambda λ), résistance R et coefficient U de l’élément. Plus U est bas, moins la paroi laisse passer la chaleur. Les bases techniques sont rappelées par les services énergie cantonaux (ex. documentation du canton du Valais) et les exigences de planification (SIA 380/1, MoPEC).",
      },
      {
        type: "p",
        text: "L’isolation phonique vise à limiter la transmission du bruit entre locaux ou depuis l’extérieur. La SIA 181 distingue notamment les bruits aériens, les bruits d’impact et ceux des installations techniques, avec des exigences minimales et des exigences accrues (souvent pertinentes en PPE / confort supérieur). L’État de Vaud rappelle que cette norme s’applique aux constructions nouvelles et aux transformations significatives du point de vue acoustique.",
      },
      {
        type: "h2",
        text: "Cas 1 — « On a froid près des murs » (thermique dominant)",
      },
      {
        type: "ul",
        items: [
          "Priorité : continuité de l’enveloppe, épaisseur / lambda adaptés à la valeur U cible, traitement des ponts thermiques.",
          "Matériaux fréquents en doublage intérieur : laines minérales, panneaux fibre de bois, selon humidité et place disponible.",
          "Attention : isoler sans gérer l’étanchéité à l’air et la vapeur d’eau peut créer condensation et moisissures.",
        ],
      },
      {
        type: "h2",
        text: "Cas 2 — « On entend les voisins parler / la télé » (bruits aériens)",
      },
      {
        type: "ul",
        items: [
          "Priorité : principe masse–ressort–masse (cloison ou doublage désolidarisé), masse des plaques, remplissage absorbant, joints périphériques soignés.",
          "Une simple plaque BA13 collée au mur sans désolidarisation apporte souvent peu de gain acoustique.",
          "Objectif : viser le niveau d’exigence SIA 181 adapté à l’usage (minimum vs accru), pas seulement « un isolant épais ».",
        ],
      },
      {
        type: "h2",
        text: "Cas 3 — « On entend les pas du dessus » (bruits d’impact)",
      },
      {
        type: "p",
        text: "Les bruits d’impact se traitent idéalement à la source (sol de l’étage émetteur : sous-couche, chape). Un faux-plafond sur suspentes antivibratiles peut atténuer, mais avec perte de hauteur et un gain souvent plus limité qu’un traitement du sol. En PPE, la coordination entre lots (sol / plafond) est décisive.",
      },
      {
        type: "h2",
        text: "Cas 4 — « On veut les deux » (confort global)",
      },
      {
        type: "p",
        text: "C’est le cas le plus fréquent en rénovation romande. La bonne pratique consiste à séparer clairement les objectifs dans le devis : performance thermique (U, enveloppe) et performance acoustique (détail constructif SIA 181). Certains systèmes (laine minérale dense + ossature désolidarisée + plaques adaptées) contribuent aux deux, mais le dimensionnement et la pose restent spécifiques à chaque critère.",
      },
      {
        type: "h2",
        text: "Ce que Markaj Renting SA fait concrètement",
      },
      {
        type: "p",
        text: "Nous posons les doublages, cloisons et faux-plafonds en coordination avec la plâtrerie et la peinture, pour une finition prête à peindre (niveaux Q3/Q4 selon le cahier des charges). Pour un projet soumis à exigences Minergie ou SIA 181 élevées, nous travaillons avec le planificateur / acousticien désigné : notre rôle est l’exécution soignée des détails qui font la différence (raccords, joints, continuité).",
      },
      {
        type: "p",
        text: "Sources de référence utiles : norme SIA 181 ; informations cantonales sur l’isolation acoustique (ex. État de Vaud) ; bases isolation thermique cantonales ; standards Minergie pour la rénovation d’enveloppe. Contactez-nous pour une visite à Fribourg ou en Suisse romande : nous clarifions d’abord le problème (froid, bruit aérien, impact), puis la solution adaptée.",
      },
    ],
  },
  {
    slug: "choisir-isolant-selon-paroi",
    title: "Choisir un isolant selon la paroi : laine minérale, fibre de bois ou XPS ?",
    excerpt:
      "Il n’existe pas d’isolant « meilleur » en absolu. Selon humidité, feu, confort d’été et résistance mécanique, le choix change. Comparatif orienté cas suisses.",
    date: "2026-08-13",
    readTime: "9 min",
    category: "Guide",
    content: [
      {
        type: "p",
        text: "En résumé : on choisit un isolant pour une paroi et un usage, pas pour une marque. Les guides énergie suisses rappellent que la performance se juge surtout via lambda (λ), épaisseur et valeur U de l’élément — mais aussi humidité, feu, acoustique et confort d’été.",
      },
      {
        type: "h2",
        text: "Les critères qui comptent vraiment",
      },
      {
        type: "ul",
        items: [
          "Conductivité thermique λ : plus elle est basse, moins il faut d’épaisseur pour une même résistance R.",
          "Humidité / compression : zones en contact avec le sol ou soumises à l’eau → matériaux adaptés (souvent XPS ou solutions spécifiques).",
          "Feu : exigences selon type de bâtiment et lot ; les laines minérales sont souvent privilégiées pour leur comportement au feu.",
          "Confort d’été / déphasage : toitures et combles — les isolants plus denses (ex. fibre de bois) sont souvent discutés pour le confort estival.",
          "Acoustique : densité et mise en œuvre (désolidarisation) pèsent autant que le lambda.",
        ],
      },
      {
        type: "h2",
        text: "Laine minérale (verre / roche)",
      },
      {
        type: "p",
        text: "Très utilisée en Suisse pour doublages, cloisons, combles et faux-plafonds. Bon rapport performance / coût, bonne contribution acoustique en remplissage d’ossature, comportement au feu favorable selon produits. Moins adaptée seule aux zones très humides ou à forte compression. Ordres de grandeur λ courants pour isolants standard : autour de 0,030–0,040 W/(m·K) selon produit (fiches fabricant).",
      },
      {
        type: "h2",
        text: "Fibre de bois",
      },
      {
        type: "p",
        text: "Isolant biosourcé souvent retenu pour toitures, façades bois ou projets cherchant un meilleur confort d’été et une régulation hygrique. λ typiquement un peu plus élevé que les meilleurs synthétiques : l’épaisseur doit être dimensionnée pour la valeur U cible. Pertinent quand le cahier des charges privilégie le biosourcé ou le confort estival — pas automatiquement « mieux » qu’une laine minérale sur un doublage intérieur standard.",
      },
      {
        type: "h2",
        text: "XPS (polystyrène extrudé)",
      },
      {
        type: "p",
        text: "Résistance à la compression et à l’humidité : usage typique en soubassements, sous dalle, zones en contact avec le sol ou toitures inversées. Moins pertinent comme remplissage acoustique de cloison intérieure. Le choix se justifie par la contrainte mécanique / humidité, pas par un effet marketing.",
      },
      {
        type: "h2",
        text: "Tableau de décision rapide",
      },
      {
        type: "ul",
        items: [
          "Doublage mur intérieur / cloison + confort acoustique → souvent laine minérale + détail désolidarisé.",
          "Toiture / combles avec enjeu confort d’été → fibre de bois (ou combinaison) à étudier avec le planificateur.",
          "Soubassement / sol humide / compression → XPS ou système prévu au dossier technique.",
          "Objectif Minergie / CECB → dimensionner U selon modèle ou justificatif ; le matériau suit la cible, pas l’inverse.",
        ],
      },
      {
        type: "h2",
        text: "Rénovation d’enveloppe : séquencer correctement",
      },
      {
        type: "p",
        text: "Minergie rappelle qu’une enveloppe isolée et étanche à l’air limite les déperditions et les dégâts liés à l’humidité. Dans la pratique, isoler les murs sans cohérence avec fenêtres et ventilation peut déplacer le point froid et favoriser la condensation. Pour une rénovation labellisable, les modèles Minergie et le CECB fournissent le cadre ; l’entreprise de finition exécute ensuite les lots isolation / plâtrerie / peinture dans ce cadre.",
      },
      {
        type: "h2",
        text: "Notre rôle sur chantier",
      },
      {
        type: "p",
        text: "Markaj Renting SA met en œuvre les systèmes retenus au devis ou au cahier des charges : ossatures, isolants, plaques, finitions. Nous ne substituons pas un acousticien ou un énergéticien : nous sécurisons la pose (continuité, joints, supports) pour que les performances prévues sur le papier tiennent sur le chantier. Demandez un devis détaillé par paroi — Fribourg et Suisse romande.",
      },
      {
        type: "p",
        text: "Références utiles : documentation énergie cantonale (bases λ / U) ; Minergie — rénovation ; Programme Bâtiments / aides cantonales (à vérifier avant travaux) ; fiches techniques fabricants pour les valeurs exactes du produit posé.",
      },
    ],
  },
  {
    slug: "choisir-finition-platrerie-q3-q4",
    title: "Comment choisir entre une finition Q3 et Q4 en plâtrerie ?",
    excerpt:
      "Q3 ou Q4 ? Comprendre la différence entre ces niveaux de finition pour faire le bon choix selon votre projet de peinture ou de décoration.",
    date: "2026-06-15",
    readTime: "5 min",
    category: "Guide",
    content: [
      {
        type: "p",
        text: "Lors d'un projet de plâtrerie, le niveau de finition détermine la qualité de surface obtenue avant l'application de la peinture ou du revêtement mural. En Suisse, les finitions sont classées selon les normes SIA, de Q1 à Q4.",
      },
      {
        type: "p",
        text: "La finition Q3 est le standard le plus courant pour les logements. Elle convient aux peintures mates, aux papiers peints fins et aux enduits décoratifs légèrement texturés. Les joints sont poncés et les imperfections visibles à 1 mètre sous éclairage normal sont acceptables.",
      },
      {
        type: "p",
        text: "La finition Q4 est un niveau haut de gamme. La surface est parfaitement lisse, sans marque de joint visible, même sous un éclairage rasant. Elle est recommandée pour les peintures satinées, laquées, les murs design et les espaces commerciaux premium.",
      },
      {
        type: "p",
        text: "Le choix dépend de votre budget, du type de peinture prévu et de l'usage de la pièce. Pour un salon ou une chambre avec peinture mate, la Q3 est généralement suffisante. Pour un bureau, un commerce ou un intérieur design, la Q4 justifie son surcoût.",
      },
      {
        type: "p",
        text: "Chez Markaj Renting SA, nous vous conseillons le niveau de finition adapté à chaque pièce lors de l'établissement du devis. N'hésitez pas à nous contacter pour une visite et une recommandation personnalisée.",
      },
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
      {
        type: "p",
        text: "L'isolation périphérique consiste à isoler les parois intérieures donnant sur l'extérieur (murs, plafonds bas, planchers sur vide sanitaire) pour créer une enveloppe thermique continue autour du volume chauffé.",
      },
      {
        type: "p",
        text: "Cette technique est particulièrement adaptée aux bâtiments existants construits avant les normes énergétiques actuelles. Elle permet de réduire significativement les déperditions de chaleur sans modifier la façade extérieure.",
      },
      {
        type: "p",
        text: "Les avantages sont multiples : amélioration du confort thermique, réduction des factures de chauffage, diminution des nuisances sonores extérieures et suppression des ponts thermiques aux angles des pièces.",
      },
      {
        type: "p",
        text: "La mise en œuvre comprend généralement la pose d'une ossature, l'insertion de laine minérale ou de panneaux isolants, la pose d'un pare-vapeur si nécessaire et l'habillage en plaques BA13 prêtes à peindre.",
      },
      {
        type: "p",
        text: "La perte de surface habitable est limitée (environ 10 à 15 cm par mur). Markaj Renting SA réalise ce type de travaux en coordination avec la plâtrerie et la peinture pour une finition complète et soignée.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogSlugs = blogPosts.map((p) => p.slug);
