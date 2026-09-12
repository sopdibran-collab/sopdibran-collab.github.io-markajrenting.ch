export interface FaqItem {
  question: string;
  answer: string;
}

/** Sous-prestation alignée Google Business Profile, imbriquée sous la page parent. */
export interface ServiceOffering {
  title: string;
  description: string;
  /** Lien optionnel vers une page sœur (ex. rénovation, façades). */
  href?: string;
  linkLabel?: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  /** Article défini pour l'accord grammatical (la / l' / les). */
  definiteArticle: "la" | "l'" | "les";
  metaDescription: string;
  intro: string;
  /** Bénéfice client en une phrase */
  benefit: string;
  /** Publics concernés */
  audience: string[];
  /** Types de projets / usages */
  projectTypes: string[];
  definition: string;
  /** Prestations GBP imbriquées sous la page parent (pas d'URL séparée). */
  offerings: ServiceOffering[];
  process: { step: string; title: string; description: string }[];
  materials: string[];
  faq: FaqItem[];
}

export const services: Service[] = [
  {
    slug: "platrerie",
    title: "Plâtrerie",
    shortTitle: "Plâtrerie",
    definiteArticle: "la",
    metaDescription:
      "Plâtrerie à Fribourg et en Suisse romande. Cloisons BA13, doublages, finitions Q3/Q4. Devis gratuit — 079 430 18 13.",
    intro:
      "Basés à Fribourg, nous réalisons vos travaux de plâtrerie en Suisse romande : cloisons, doublages, habillages et finitions conformes aux normes suisses.",
    benefit: "Surfaces planes, joints soignés et finitions Q3/Q4 prêtes à peindre.",
    audience: ["Particuliers", "Architectes", "Entreprises", "Régies"],
    projectTypes: ["Neuf", "Rénovation", "Cloisons & doublages"],
    definition:
      "La plâtrerie regroupe l'ensemble des travaux de pose de plaques de plâtre (BA13), de montage de cloisons, de doublages muraux et de préparation des supports avant peinture. C'est la base d'une finition intérieure de qualité.",
    offerings: [
      {
        title: "Cloisons en plaques de plâtre",
        description:
          "Cloisons BA13 sur ossature métallique ou bois : pose, joints, surfaces prêtes à peindre. Neuf et rénovation, pour particuliers, architectes et entreprises.",
      },
      {
        title: "Joints et finitions Q3 / Q4",
        description:
          "Joints et finitions plâtrerie Q3 (standard) ou Q4 (haut de gamme), conformes aux usages suisses. Surfaces planes, prêtes à peindre ou à laquer.",
      },
      {
        title: "Doublages",
        description:
          "Doublages muraux en plaques de plâtre, avec ou sans isolant. Habillages et caissons pour une finition nette avant peinture.",
      },
      {
        title: "Reprises de plâtre",
        description:
          "Reprises et restauration de plâtre en rénovation : fissures, dégâts, raccordements soignés avant peinture. Idéal appartements, immeubles et locaux.",
      },
    ],
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
    definiteArticle: "la",
    metaDescription:
      "Peinture intérieure et extérieure à Fribourg et en Suisse romande. Finitions durables. Devis gratuit — 079 430 18 13.",
    intro:
      "Basés à Fribourg, nous assurons la peinture intérieure et extérieure en Suisse romande : préparation des supports, produits adaptés et finition durable.",
    benefit: "Finitions durables, supports correctement préparés, rendu uniforme.",
    audience: ["Particuliers", "Régies", "Architectes", "Entreprises"],
    projectTypes: ["Intérieur", "Extérieur", "Neuf & rénovation"],
    definition:
      "Les travaux de peinture comprennent la préparation des surfaces (ponçage, rebouchage, primaire), l'application de peintures murales, plafonds, boiseries et métaux, en intérieur comme en extérieur.",
    offerings: [
      {
        title: "Peinture de surfaces intérieures",
        description:
          "Peinture intérieure pour murs et plafonds : préparation soignée, finitions mates ou satinées, chantiers neuf et rénovation. Entreprise familiale à Fribourg, pour particuliers, régies et architectes.",
      },
      {
        title: "Peinture de surfaces extérieures",
        description:
          "Peinture extérieure adaptée au climat suisse : façades protégées, supports préparés, rendu durable.",
      },
      {
        title: "Finitions murs et plafonds",
        description:
          "Finitions soignées murs et plafonds, prêtes à peindre ou peintes selon le cahier des charges. Finitions Q3/Q4 en plâtrerie, rendu uniforme en peinture. Devis sous 5 jours.",
      },
      {
        title: "Préparation des supports",
        description:
          "Lessivage, ponçage, rebouchage et primaire avant peinture. Supports correctement préparés pour une finition durable, en intérieur comme en extérieur.",
      },
      {
        title: "Rénovation intérieure",
        description:
          "Rénovation intérieure second œuvre : plâtrerie, peinture, isolation et faux-plafonds avec un seul interlocuteur. Appartements, bureaux et commerces — neuf partiel ou reprise. Devis après visite.",
        href: "/services/renovation",
        linkLabel: "Voir la rénovation intérieure",
      },
    ],
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
    definiteArticle: "les",
    metaDescription:
      "Faux-plafonds à Fribourg et en Suisse romande. Acoustique, éclairage, ventilation. Devis gratuit — 079 430 18 13.",
    intro:
      "Basés à Fribourg, nous concevons et posons des faux-plafonds en Suisse romande : acoustique, esthétique et intégration des réseaux.",
    benefit: "Plafonds techniques et esthétiques, acoustique et réseaux intégrés.",
    audience: ["Architectes", "Entreprises", "Bureaux"],
    projectTypes: ["Tertiaire", "Commerces", "Logements"],
    definition:
      "Un faux-plafond est une structure suspendue sous le plafond porteur, permettant de dissimuler les réseaux techniques, d'améliorer l'acoustique et de créer des ambiances lumineuses architecturales.",
    offerings: [
      {
        title: "Pose de faux-plafonds",
        description:
          "Faux-plafonds techniques et esthétiques : plaques, dalles démontables, intégration réseaux. Tertiaire, commerces et logements.",
      },
      {
        title: "Plafonds acoustiques",
        description:
          "Plafonds acoustiques (fibre de bois, absorbants) pour bureaux, circulations et locaux exigeants. Confort sonore + finition soignée.",
      },
      {
        title: "Intégration éclairage / réseaux",
        description:
          "Faux-plafonds avec intégration éclairage, CVC et réseaux : accès technique, planning tenu, finition propre. Pour architectes et entreprises en Suisse romande.",
      },
    ],
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
    definiteArticle: "l'",
    metaDescription:
      "Isolation thermique et phonique à Fribourg et en Suisse romande. Doublages, Minergie. Devis gratuit — 079 430 18 13.",
    intro:
      "Basés à Fribourg, nous réalisons l'isolation thermique et acoustique en Suisse romande : doublages, isolation périphérique et traitement des ponts thermiques.",
    benefit: "Confort thermique et acoustique, conformité aux exigences suisses.",
    audience: ["Particuliers", "Promoteurs", "Architectes"],
    projectTypes: ["Doublages", "Périphérique", "Minergie"],
    definition:
      "L'isolation consiste à limiter les déperditions de chaleur et les nuisances sonores par la pose de matériaux isolants (laine minérale, mousse, fibres) dans les murs, plafonds et combles.",
    offerings: [
      {
        title: "Isolation thermique",
        description:
          "Isolation thermique (doublages, périphérique, ponts thermiques) selon exigences suisses et projets Minergie. Confort et économies d'énergie.",
      },
      {
        title: "Isolation phonique",
        description:
          "Isolation phonique pour cloisons, doublages et plafonds : moins de bruit entre pièces ou voisins. Solutions adaptées logements, bureaux et commerces.",
      },
      {
        title: "Isolation périphérique / façade",
        description:
          "Isolation périphérique de façade : enveloppe, confort thermique, coordination crépi et peinture. Un seul interlocuteur second œuvre.",
        href: "/services/facades",
        linkLabel: "Voir les travaux de façades",
      },
      {
        title: "Doublages isolants",
        description:
          "Doublages isolants intérieurs : plaque + isolant pour murs froids ou bruyants. Finition prête à peindre, normes suisses.",
      },
    ],
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
    definiteArticle: "la",
    metaDescription:
      "Rénovation intérieure à Fribourg et en Suisse romande. Plâtrerie, peinture, isolation. Devis gratuit — 079 430 18 13.",
    intro:
      "Rénovation intérieure second œuvre : plâtrerie, peinture, isolation et faux-plafonds avec un seul interlocuteur. Appartements, bureaux et commerces — neuf partiel ou reprise. Devis après visite.",
    benefit: "Un seul interlocuteur pour plâtrerie, peinture, isolation et plafonds.",
    audience: ["Particuliers", "Régies", "Architectes", "Entreprises"],
    projectTypes: ["Appartements", "Bureaux", "Commerces"],
    definition:
      "La rénovation intérieure regroupe l'ensemble des travaux de transformation d'espaces existants : démolition sélective, reprise des supports, redistribution des volumes et finitions complètes. Entreprise familiale basée à Fribourg, pour particuliers et architectes en Suisse romande.",
    offerings: [
      {
        title: "Plâtrerie",
        description:
          "Cloisons, doublages, joints Q3/Q4 et reprises de plâtre — surfaces prêtes à peindre.",
        href: "/services/platrerie",
        linkLabel: "Voir la plâtrerie",
      },
      {
        title: "Peinture",
        description:
          "Peinture intérieure et extérieure, préparation des supports et finitions durables.",
        href: "/services/peinture",
        linkLabel: "Voir la peinture",
      },
      {
        title: "Isolation",
        description:
          "Isolation thermique et phonique, doublages isolants et ponts thermiques.",
        href: "/services/isolation",
        linkLabel: "Voir l'isolation",
      },
      {
        title: "Faux-plafonds",
        description:
          "Faux-plafonds techniques et acoustiques, intégration éclairage et réseaux.",
        href: "/services/faux-plafonds",
        linkLabel: "Voir les faux-plafonds",
      },
    ],
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
    definiteArticle: "les",
    metaDescription:
      "Rénovation de façade et crépi à Fribourg et en Suisse romande. Enduits, peinture extérieure. Devis gratuit — 079 430 18 13.",
    intro:
      "Basés à Fribourg, nous réalisons ravalement, crépi et peinture de façades en Suisse romande : enduits, réparations et finitions protectrices.",
    benefit: "Façades protégées, crépis et peintures adaptés au climat suisse.",
    audience: ["Particuliers", "Régies", "Copropriétés", "Architectes"],
    projectTypes: ["Ravalement", "Crépi", "Peinture extérieure"],
    definition:
      "Les travaux de façade englobent le ravalement, la réparation de crépis et d'enduits, le traitement des fissures, l'application de peintures de protection et l'amélioration de l'esthétique extérieure du bâtiment.",
    offerings: [
      {
        title: "Ravalement de façade",
        description:
          "Ravalement de façade : diagnostic, réparation, enduits et finition protectrice. Un interlocuteur pour peintre, crépi et isolation périphérique. Devis gratuit.",
      },
      {
        title: "Crépi / enduit",
        description:
          "Crépi et enduits de façade adaptés au climat suisse : minéral ou organique selon le support. Pose et reprises soignées, en neuf comme en rénovation.",
      },
      {
        title: "Peinture de façade",
        description:
          "Peinture de façade pour protéger et valoriser le bâtiment. Préparation du support, choix du système selon l'exposition.",
      },
    ],
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
