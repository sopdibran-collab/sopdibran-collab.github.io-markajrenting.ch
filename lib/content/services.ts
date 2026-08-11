export interface FaqItem {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  intro: string;
  /** Bénéfice client en une phrase */
  benefit: string;
  /** Publics concernés */
  audience: string[];
  /** Types de projets / usages */
  projectTypes: string[];
  definition: string;
  process: { step: string; title: string; description: string }[];
  materials: string[];
  faq: FaqItem[];
}

export const services: Service[] = [
  {
    slug: "platrerie",
    title: "Plâtrerie",
    shortTitle: "Plâtrerie",
    metaDescription:
      "Plâtrerie à Fribourg, Lausanne, Genève et Bulle. Cloisons BA13, doublages, finitions Q3/Q4. Devis gratuit — 079 430 18 13.",
    intro:
      "Markaj Renting SA réalise vos travaux de plâtrerie à Fribourg, Lausanne, Genève et dans toute la Suisse romande : cloisons, doublages, habillages et finitions conformes aux normes suisses.",
    benefit: "Surfaces planes, joints soignés et finitions Q3/Q4 prêtes à peindre.",
    audience: ["Particuliers", "Architectes", "Entreprises", "Régies"],
    projectTypes: ["Neuf", "Rénovation", "Cloisons & doublages"],
    definition:
      "La plâtrerie regroupe l'ensemble des travaux de pose de plaques de plâtre (BA13), de montage de cloisons, de doublages muraux et de préparation des supports avant peinture. C'est la base d'une finition intérieure de qualité.",
    process: [
      { step: "01", title: "Visite et prise de mesures", description: "Analyse du chantier, relevé précis et définition du cahier des charges avec le client ou l'architecte." },
      { step: "02", title: "Préparation des supports", description: "Protection des zones adjacentes, vérification de l'hygrométrie et préparation des ossatures métalliques ou bois." },
      { step: "03", title: "Pose et montage", description: "Installation des rails, montants, plaques BA13 et traitement des joints selon les normes SIA." },
      { step: "04", title: "Finitions", description: "Ponçage, ragréage et finition Q3 ou Q4 selon le projet — surfaces prêtes à recevoir peinture ou papier peint." },
    ],
    materials: [
      "Plaques BA13 standard et hydrofuge",
      "Ossatures métalliques conformes aux normes suisses",
      "Enduits de jointoiement et bandes à joint",
      "Isolants pour doublages thermiques et acoustiques",
      "Ragréages et primaires d'accrochage",
    ],
    faq: [
      { question: "Quelle différence entre finition Q3 et Q4 ?", answer: "La finition Q3 convient aux surfaces avec papier peint fin ou peinture mate légèrement texturée. La Q4 est une finition haut de gamme, parfaitement lisse, idéale pour peintures satinées, laquées ou murs design." },
      { question: "Intervenez-vous en rénovation partielle ?", answer: "Oui. Nous réalisons des travaux de plâtrerie ponctuels (reprises de fissures, nouvelles cloisons, doublages) comme des chantiers complets de rénovation intérieure." },
      { question: "Quels délais pour une cloison BA13 ?", answer: "Selon la surface et la complexité, comptez en général 2 à 5 jours ouvrables pour une cloison standard, finitions comprises." },
    ],
  },
  {
    slug: "peinture",
    title: "Peinture",
    shortTitle: "Peinture",
    metaDescription:
      "Peinture intérieure et extérieure à Fribourg, Lausanne, Genève et Neuchâtel. Finitions durables. Devis gratuit — 079 430 18 13.",
    intro:
      "Markaj Renting SA assure la peinture intérieure et extérieure à Fribourg, Lausanne, Genève et en Suisse romande : préparation des supports, produits adaptés et finition durable.",
    benefit: "Finitions durables, supports correctement préparés, rendu uniforme.",
    audience: ["Particuliers", "Régies", "Entreprises"],
    projectTypes: ["Intérieur", "Extérieur", "Neuf & rénovation"],
    definition:
      "Les travaux de peinture comprennent la préparation des surfaces (ponçage, rebouchage, primaire), l'application de peintures murales, plafonds, boiseries et métaux, en intérieur comme en extérieur.",
    process: [
      { step: "01", title: "Diagnostic des supports", description: "Évaluation de l'état des murs, plafonds et boiseries. Identification des traitements nécessaires." },
      { step: "02", title: "Préparation", description: "Protection des sols et mobilier, rebouchage, ponçage, application de primaires d'accrochage." },
      { step: "03", title: "Application", description: "Peinture en couches croisées selon les fiches techniques fabricant. Respect des temps de séchage." },
      { step: "04", title: "Contrôle qualité", description: "Vérification de l'uniformité, des raccords et de la propreté du chantier avant réception." },
    ],
    materials: [
      "Peintures acryliques écologiques (faible COV)",
      "Peintures façade siloxane et silicate",
      "Lasures et vernis pour boiseries",
      "Primaires d'accrochage et enduits de rebouchage",
      "Peintures spéciales (anti-humidité, intérieur alimentaire)",
    ],
    faq: [
      { question: "Quelle peinture choisir pour une salle de bains ?", answer: "Nous recommandons des peintures acryliques spéciales pièces humides, résistantes à la condensation et aux projections d'eau, appliquées sur un support correctement préparé." },
      { question: "Peignez-vous les façades ?", answer: "Oui, nous réalisons la peinture de façades avec des produits adaptés au support (minéral, crépi, bois) et aux conditions climatiques suisses." },
      { question: "Combien de couches sont nécessaires ?", answer: "En règle générale, deux couches de finition après primaire suffisent. Les supports foncés ou très absorbants peuvent nécessiter une couche supplémentaire." },
    ],
  },
  {
    slug: "faux-plafonds",
    title: "Faux-plafonds",
    shortTitle: "Faux-plafonds",
    metaDescription:
      "Faux-plafonds à Fribourg, Lausanne, Genève et Sion. Acoustique, éclairage, ventilation. Devis gratuit — 079 430 18 13.",
    intro:
      "Markaj Renting SA conçoit et pose des faux-plafonds à Fribourg, Lausanne, Genève et en Suisse romande : acoustique, esthétique et intégration des réseaux.",
    benefit: "Plafonds techniques et esthétiques, acoustique et réseaux intégrés.",
    audience: ["Architectes", "Entreprises", "Bureaux"],
    projectTypes: ["Tertiaire", "Commerces", "Logements"],
    definition:
      "Un faux-plafond est une structure suspendue sous le plafond porteur, permettant de dissimuler les réseaux techniques, d'améliorer l'acoustique et de créer des ambiances lumineuses architecturales.",
    process: [
      { step: "01", title: "Étude technique", description: "Analyse des contraintes (hauteur sous plafond, réseaux, normes incendie) et choix du système adapté." },
      { step: "02", title: "Ossature", description: "Pose des suspentes, profilés périphériques et structure porteuse selon le plan d'exécution." },
      { step: "03", title: "Pose des éléments", description: "Installation des plaques, dalles ou membranes. Découpes pour luminaires et bouches de ventilation." },
      { step: "04", title: "Finitions et réception", description: "Traitement des joints, peinture si nécessaire, contrôle acoustique et remise du dossier de chantier." },
    ],
    materials: [
      "Plaques de plâtre perforées (acoustique)",
      "Dalles minérales et métalliques",
      "Profilés et suspentes certifiés",
      "Bandes et enduits de finition",
      "Systèmes coupe-feu selon exigences",
    ],
    faq: [
      { question: "Quel faux-plafond pour une bonne acoustique ?", answer: "Les plaques perforées avec matelas acoustique ou les dalles minérales à haute absorption sont recommandées pour les bureaux, salles de réunion et espaces publics." },
      { question: "Peut-on intégrer des spots LED ?", answer: "Oui. Nous prévoyons les découpes et renforts nécessaires lors de la conception, en coordination avec l'électricien." },
      { question: "Quelle hauteur minimale sous plafond ?", answer: "Comptez en général 10 à 15 cm de perte de hauteur selon le système choisi et l'épaisseur des isolants acoustiques." },
    ],
  },
  {
    slug: "isolation",
    title: "Isolation",
    shortTitle: "Isolation",
    metaDescription:
      "Isolation thermique et phonique à Fribourg, Lausanne, Genève et Bulle. Doublages, Minergie. Devis gratuit — 079 430 18 13.",
    intro:
      "Markaj Renting SA réalise l'isolation thermique et acoustique à Fribourg, Lausanne, Genève et en Suisse romande : doublages, isolation périphérique et ponts thermiques.",
    benefit: "Confort thermique et acoustique, conformité aux exigences suisses.",
    audience: ["Particuliers", "Promoteurs", "Architectes"],
    projectTypes: ["Doublages", "Périphérique", "Minergie"],
    definition:
      "L'isolation consiste à limiter les déperditions de chaleur et les nuisances sonores par la pose de matériaux isolants (laine minérale, mousse, fibres) dans les murs, plafonds et combles.",
    process: [
      { step: "01", title: "Analyse énergétique", description: "Évaluation des parois, identification des ponts thermiques et définition de l'épaisseur d'isolant nécessaire." },
      { step: "02", title: "Choix des matériaux", description: "Sélection de l'isolant adapté (thermique, acoustique, pare-vapeur) selon la construction et les normes Minergie." },
      { step: "03", title: "Mise en œuvre", description: "Pose de l'isolant dans l'ossature, pose du pare-vapeur si requis, habillage BA13 ou finition adaptée." },
      { step: "04", title: "Contrôle", description: "Vérification de la continuité de l'isolation, de l'étanchéité à l'air et de la conformité au cahier des charges." },
    ],
    materials: [
      "Laine de verre et laine de roche",
      "Panneaux isolants rigides (PIR, EPS)",
      "Pare-vapeur et frein-vapeur",
      "Isolants acoustiques spécifiques",
      "Mousses projetées (selon chantier)",
    ],
    faq: [
      { question: "Qu'est-ce que l'isolation périphérique ?", answer: "C'est l'isolation appliquée sur la face intérieure des murs extérieurs et des planchers, créant une enveloppe thermique continue autour du volume chauffé." },
      { question: "L'isolation améliore-t-elle aussi l'acoustique ?", answer: "Oui. Un doublage avec laine minérale réduit significativement les bruits aériens entre pièces et depuis l'extérieur." },
      { question: "Travaillez-vous avec les normes Minergie ?", answer: "Oui. Nous respectons les exigences des normes suisses d'isolation thermique et collaborons avec les bureaux d'études pour les projets certifiés." },
    ],
  },
  {
    slug: "renovation",
    title: "Rénovation",
    shortTitle: "Rénovation",
    metaDescription:
      "Rénovation intérieure à Fribourg, Lausanne, Genève et Bienne. Plâtrerie, peinture, isolation. Devis gratuit — 079 430 18 13.",
    intro:
      "Markaj Renting SA prend en charge la rénovation intérieure à Fribourg, Lausanne, Genève et en Suisse romande : un interlocuteur unique pour plâtrerie, peinture, isolation et faux-plafonds.",
    benefit: "Un seul interlocuteur pour plâtrerie, peinture, isolation et plafonds.",
    audience: ["Particuliers", "Régies", "Entreprises"],
    projectTypes: ["Appartements", "Bureaux", "Commerces"],
    definition:
      "La rénovation intérieure regroupe l'ensemble des travaux de transformation d'espaces existants : démolition sélective, reprise des supports, redistribution des volumes et finitions complètes.",
    process: [
      { step: "01", title: "Diagnostic et devis", description: "Visite du site, compréhension de vos besoins, établissement d'un devis détaillé par postes de travaux." },
      { step: "02", title: "Planification", description: "Établissement du planning, coordination avec les autres corps de métier (électricien, chauffagiste, sanitaire)." },
      { step: "03", title: "Exécution", description: "Travaux réalisés dans l'ordre optimal : démolition, plâtrerie, isolation, faux-plafonds, peinture." },
      { step: "04", title: "Réception", description: "Nettoyage du chantier, visite de réception avec le client et traitement des réserves éventuelles." },
    ],
    materials: [
      "Ensemble des matériaux plâtrerie et peinture",
      "Isolants thermiques et acoustiques",
      "Systèmes de faux-plafonds",
      "Matériaux de protection de chantier",
      "Produits écologiques sur demande",
    ],
    faq: [
      { question: "Pouvez-vous rénover un appartement occupé ?", answer: "Oui, en planifiant les travaux pièce par pièce pour limiter les nuisances. Nous protégeons les zones non concernées et maintenons un chantier propre." },
      { question: "Coordonnez-vous les autres artisans ?", answer: "Nous travaillons régulièrement en coordination avec électriciens, plombiers et chauffagistes. Nous pouvons intégrer leur planning au nôtre." },
      { question: "Quel budget pour une rénovation complète ?", answer: "Le coût dépend de la surface, de l'état initial et du niveau de finition. Nous établissons un devis détaillé après visite, sans engagement." },
    ],
  },
  {
    slug: "facades",
    title: "Façades",
    shortTitle: "Façades",
    metaDescription:
      "Rénovation de façade et crépi à Fribourg, Lausanne, Genève et Sion. Enduits, peinture extérieure. Devis gratuit — 079 430 18 13.",
    intro:
      "Markaj Renting SA réalise ravalement, crépi et peinture de façades à Fribourg, Lausanne, Genève et en Suisse romande : enduits, réparations et finitions protectrices.",
    benefit: "Façades protégées, crépis et peintures adaptés au climat suisse.",
    audience: ["Particuliers", "Régies", "Copropriétés"],
    projectTypes: ["Ravalement", "Crépi", "Peinture extérieure"],
    definition:
      "Les travaux de façade englobent le ravalement, la réparation de crépis et d'enduits, le traitement des fissures, l'application de peintures de protection et l'amélioration de l'esthétique extérieure du bâtiment.",
    process: [
      { step: "01", title: "Inspection de façade", description: "Analyse de l'état du crépi ou de l'enduit, détection des fissures, zones décollement et pathologies d'humidité." },
      { step: "02", title: "Préparation", description: "Nettoyage haute pression ou sablage léger, rebouchage des fissures, traitement anti-mousse si nécessaire." },
      { step: "03", title: "Application", description: "Reprise d'enduit localisée ou complète, application du crépi ou de la peinture de façade en couches réglementaires." },
      { step: "04", title: "Protection et finition", description: "Application de produits hydrofuges si prévu, contrôle des teintes et nettoyage des abords." },
    ],
    materials: [
      "Enduits de façade minéraux",
      "Crépis monocouche et bicouche",
      "Peintures siloxane et silicate",
      "Mastics et mortiers de réparation",
      "Produits anti-mousse et hydrofuges",
    ],
    faq: [
      { question: "À quelle fréquence rénover une façade ?", answer: "En Suisse, un crépi ou une peinture de façade dure en général 15 à 25 ans selon l'exposition, l'orientation et l'entretien. Une inspection tous les 5 ans est recommandée." },
      { question: "Intervenez-vous sur les fissures ?", answer: "Oui. Nous diagnostiquons l'origine des fissures (retrait, structure, humidité) et appliquons le traitement adapté avant la finition." },
      { question: "Faut-il une autorisation pour ravaler une façade ?", answer: "Selon le canton et la commune, une autorisation peut être requise, notamment en zone protégée. Nous vous accompagnons dans les démarches si nécessaire." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
