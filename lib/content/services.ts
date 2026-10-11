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

/** Texte ou lien, dans un paragraphe de guide. */
export type InlinePart = string | { href: string; label: string };

/** Bloc explicatif (H2 + paragraphes). N'affirme que des faits déjà publiés ou du métier général. */
export interface GuideSection {
  title: string;
  paragraphs: InlinePart[][];
}

export interface RelatedLink {
  href: string;
  label: string;
}

export interface Service {
  slug: string;
  title: string;
  /** Balise title, sans le suffixe « | Markaj Renting SA ». */
  metaTitle: string;
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
  /** Texte du lien de la bande d'accueil. Sinon, « En savoir plus ». */
  homeLinkLabel?: string;
  definition: string;
  /** Prestations GBP imbriquées sous la page parent (pas d'URL séparée). */
  offerings: ServiceOffering[];
  /** Phrase d'intro des prestations. Sinon, la phrase du gabarit. */
  offeringsIntro?: string;
  /** Phrase sous la grille de prestations, avec lien éventuel. */
  offeringsNote?: InlinePart[];
  /** Sections H2 ajoutées sous les prestations, même gabarit visuel. */
  guides?: GuideSection[];
  /** Liens contextuels ajoutés sous « Découvrir aussi ». */
  relatedLinks?: RelatedLink[];
  /** Texte du bandeau final. Sinon, le texte standard du gabarit. */
  ctaDescription?: string;
  /** Lien du bouton du bandeau. Sinon, /contact. */
  ctaHref?: string;
  process: { step: string; title: string; description: string }[];
  materials: string[];
  faq: FaqItem[];
}

export const services: Service[] = [
  {
    slug: "platrerie",
    title: "Plâtrerie",
    metaTitle: "Plâtrier à Fribourg : cloisons, Q3/Q4",
    shortTitle: "Plâtrerie",
    definiteArticle: "la",
    metaDescription:
      "Plâtrier-plaquiste à Fribourg : cloisons BA13, doublages, finitions Q3/Q4 et reprises de plâtre en rénovation. Devis gratuit — 079 430 18 13.",
    intro:
      "Basés à Fribourg, nous réalisons vos travaux de plâtrerie en Suisse romande : cloisons, doublages, habillages et finitions conformes aux normes suisses.",
    benefit: "Surfaces planes, joints soignés et finitions Q3/Q4 prêtes à peindre.",
    audience: ["Particuliers", "Architectes", "Entreprises", "Régies"],
    projectTypes: ["Neuf", "Rénovation", "Cloisons & doublages"],
    homeLinkLabel: "Plâtrier à Fribourg",
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
    guides: [
      {
        title: "Ce que fait un plâtrier-plaquiste",
        paragraphs: [
          [
            "Le plâtrier-plaquiste monte des cloisons, pose des doublages, habille des plafonds et prépare les murs avant peinture. Le plaquiste travaille les plaques de plâtre. Le plâtrier reprend aussi le plâtre en place : fissures, raccords, murs anciens.",
          ],
          [
            "Les travaux décrits ici sont les cloisons BA13, les doublages, les joints Q3 ou Q4 et les reprises de plâtre. À Genève et en Valais, le même métier se dit souvent gypsier.",
          ],
        ],
      },
      {
        title: "Plaques de plâtre : BA13 et cahier des charges",
        paragraphs: [
          [
            "Une cloison courante se monte sur une ossature métallique, avec des plaques BA13, puis les joints. La plaque hydrofuge est prévue pour les pièces humides. D'autres plaques existent pour le bruit ou le feu. Le type posé est celui prévu au devis, selon le cahier des charges.",
          ],
          [
            "Les plafonds suspendus, acoustiques ou techniques, sont sur la page ",
            { href: "/services/faux-plafonds", label: "faux-plafonds" },
            ".",
          ],
        ],
      },
      {
        title: "Finitions Q2, Q3 ou Q4 : laquelle demander ?",
        paragraphs: [
          [
            "La finition Q2 correspond à des joints remplis. Elle suffit sous un revêtement à relief. La Q3 est le niveau courant des logements : joints poncés, adaptée à une peinture mate ou à un papier peint fin. La Q4 est lisse, y compris en lumière rasante. Elle se demande pour une peinture satinée ou laquée.",
          ],
          [
            "Le niveau se choisit selon la peinture et la lumière de la pièce. Le guide ",
            {
              href: "/blog/choisir-finition-platrerie-q3-q4",
              label: "finition Q3 ou Q4 en plâtrerie",
            },
            " détaille le choix. La peinture qui suit est sur la page ",
            { href: "/services/peinture", label: "entreprise de peinture à Fribourg" },
            ".",
          ],
        ],
      },
      {
        title: "Plâtrerie en rénovation : reprises de plâtre ancien",
        paragraphs: [
          [
            "Dans un logement ancien, le travail consiste souvent à reprendre un plâtre fissuré, à raccorder une nouvelle cloison à un mur existant et à retrouver une surface prête à peindre.",
          ],
          [
            "À Fribourg, le bâti mêle immeubles de vieille ville et logements plus récents. Les reprises de plâtre ancien sont décrites sur la page ",
            { href: "/zones/fribourg", label: "plâtrerie et peinture à Fribourg" },
            ".",
          ],
        ],
      },
      {
        title: "Plâtrerie pour architectes et entreprises générales",
        paragraphs: [
          [
            "Pour un architecte ou une entreprise générale, le lot plâtrerie suit le cahier des charges : niveau Q3 ou Q4, détails d'isolation, planning. Markaj Renting SA intervient comme interlocuteur du lot de finition.",
          ],
          [
            "Ce cadre est décrit sur la page ",
            {
              href: "/professionnels",
              label: "second œuvre pour régies et architectes",
            },
            ".",
          ],
        ],
      },
      {
        title: "Chantier publié : plateaux de bureaux de l'OMS",
        paragraphs: [
          [
            "Le chantier de plâtrerie publié est la rénovation des plateaux de bureaux de l'OMS à Genève, en 2024 : ossatures métalliques, plaques de plâtre, joints Q3 et peinture des plafonds.",
          ],
          [
            "Les photos sont sur la fiche ",
            {
              href: "/realisations#plateaux-de-bureaux",
              label: "plateaux de bureaux OMS",
            },
            ".",
          ],
        ],
      },
    ],
    relatedLinks: [
      { href: "/blog/choisir-finition-platrerie-q3-q4", label: "Finition Q3 ou Q4 en plâtrerie" },
      { href: "/services/peinture", label: "Entreprise de peinture à Fribourg" },
      { href: "/services/faux-plafonds", label: "Faux-plafonds" },
      { href: "/realisations#plateaux-de-bureaux", label: "Plateaux de bureaux OMS" },
      { href: "/professionnels", label: "Second œuvre pour régies et architectes" },
      { href: "/zones/fribourg", label: "Plâtrerie et peinture à Fribourg" },
    ],
    ctaHref: "/contact?service=platrerie",
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
      {
        question: "Quelle différence entre un plâtrier et un plaquiste ?",
        answer:
          "Le plaquiste pose des plaques de plâtre : cloisons, doublages, habillages. Le plâtrier travaille aussi le plâtre en pâte, pour les reprises et les raccords sur un mur ancien. En Suisse romande, le plâtrier-peintre fait souvent les deux, puis la peinture. À Genève et en Valais, on dit aussi gypsier.",
      },
      {
        question: "Combien de temps faut-il pour monter une cloison en placo ?",
        answer:
          "Selon la surface et la complexité, comptez en général 2 à 5 jours ouvrables pour une cloison standard, finitions comprises.",
      },
      {
        question: "Faut-il un plâtrier ou un peintre pour lisser des murs ?",
        answer:
          "Le lissage d'un mur, les joints et les niveaux Q3 ou Q4 sont du travail de plâtrier. Le peintre prépare ensuite le support (ponçage léger, rebouchage des petits défauts, primaire) et applique la peinture. Si le mur est très irrégulier, la reprise de plâtre vient avant la peinture.",
      },
      {
        question: "Une cloison en plaques de plâtre isole-t-elle du bruit ?",
        answer:
          "Une cloison BA13 simple réduit une partie des bruits aériens, sans être pour autant une cloison acoustique. Le résultat dépend de l'ossature, du nombre de plaques, de l'isolant dans le vide et des joints. La norme SIA 181 fixe les exigences quand le projet y est soumis. Une plaque seule, sans désolidarisation, change peu le bruit.",
      },
      {
        question: "Peut-on poser une cloison dans un appartement loué ?",
        answer:
          "En location, il faut l'accord du propriétaire ou de la régie avant de monter une cloison. Le bail et le règlement d'immeuble peuvent l'interdire ou l'encadrer. La régie ou le propriétaire indique ce qui est accepté. Cette réponse est générale.",
      },
      {
        question: "Intervenez-vous en rénovation partielle ?",
        answer:
          "Oui. Nous réalisons des travaux de plâtrerie ponctuels (reprises de fissures, nouvelles cloisons, doublages) comme des chantiers complets de rénovation intérieure.",
      },
    ],
  },
  {
    slug: "peinture",
    title: "Peinture",
    metaTitle: "Entreprise de peinture à Fribourg",
    shortTitle: "Peinture",
    definiteArticle: "la",
    metaDescription:
      "Peintre en bâtiment à Fribourg : murs, plafonds, boiseries et façades, avec préparation des supports. Neuf et rénovation. Devis gratuit — 079 430 18 13.",
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
        linkLabel: "Rénovation intérieure",
      },
    ],
    guides: [
      {
        title: "Peinture intérieure : murs, plafonds, boiseries",
        paragraphs: [
          [
            "La peinture intérieure couvre les murs, les plafonds et les boiseries. Les murs et les plafonds reçoivent en général une peinture mate ou satinée, après préparation. Les portes, cadres et plinthes peuvent être peints ou lasurés, selon le support.",
          ],
          [
            "Si le mur doit d'abord être lissé, les niveaux Q3 et Q4 sont sur la page ",
            { href: "/services/platrerie", label: "plâtrier à Fribourg : lissage et finitions Q3/Q4" },
            ". Un chantier qui réunit plusieurs lots est sur la page ",
            { href: "/services/renovation", label: "rénovation intérieure" },
            ".",
          ],
        ],
      },
      {
        title: "Préparation des supports : pourquoi elle fait la différence",
        paragraphs: [
          [
            "La tenue d'une peinture se joue avant la première couche. Le support est lessivé, poncé, rebouché, puis reçoit un primaire d'accrochage quand il est farinant, taché ou trop lisse. Sans cette préparation, la peinture peut manquer d'accroche, et la teinte rester inégale. Le même soin vaut en intérieur et sur une façade.",
          ],
        ],
      },
      {
        title: "Peinture extérieure et façades",
        paragraphs: [
          [
            "La peinture de façade protège le crépi et uniformise la couleur. Le produit, siloxane ou silicate, se choisit selon le support déjà en place. Le diagnostic, le crépi et l'enduit sont sur la page ",
            { href: "/services/facades", label: "rénovation de façade et crépi" },
            ".",
          ],
        ],
      },
      {
        title: "Peintures utilisées : faible COV, siloxane, silicate",
        paragraphs: [
          [
            "En intérieur, les peintures acryliques à faible teneur en solvants (faible COV) sont la base courante. En façade, les peintures siloxane et silicate se choisissent selon le support. Les pièces humides reçoivent une peinture prévue pour la condensation. Les noms de produits ne sont pas publiés sur cette page.",
          ],
          [
            "La mise en peinture des plafonds des plateaux de bureaux de l'OMS, à Genève en 2024, est sur la fiche ",
            {
              href: "/realisations#plateaux-de-bureaux",
              label: "peinture des plafonds, plateaux OMS",
            },
            ". Les lots pour régies et architectes sont sur la page ",
            {
              href: "/professionnels",
              label: "second œuvre pour régies et architectes",
            },
            ". Les communes du canton sont sur ",
            { href: "/zones/fribourg", label: "plâtrerie et peinture à Fribourg" },
            ".",
          ],
        ],
      },
    ],
    relatedLinks: [
      { href: "/services/platrerie", label: "Lissage et finitions Q3/Q4" },
      { href: "/services/facades", label: "Rénovation de façade et crépi" },
      { href: "/services/renovation", label: "Rénovation intérieure" },
      { href: "/professionnels", label: "Second œuvre pour régies et architectes" },
      { href: "/zones/fribourg", label: "Plâtrerie et peinture à Fribourg" },
      {
        href: "/realisations#plateaux-de-bureaux",
        label: "Peinture des plafonds, plateaux OMS",
      },
    ],
    ctaHref: "/contact?service=peinture",
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
      {
        question: "Combien de temps pour repeindre un appartement de 3,5 pièces ?",
        answer:
          "Le délai dépend de la surface et de l'état des supports. Pour un chantier de peinture, comptez en général quelques jours à deux semaines. Le planning d'un appartement de 3,5 pièces est fixé au devis, après la visite.",
      },
      {
        question: "Faut-il vider les pièces avant le passage du peintre ?",
        answer:
          "Les sols et le mobilier sont protégés avant de peindre. Plus les murs et les plafonds sont dégagés, plus le travail est simple. Les objets à déplacer se décident à la visite, pièce par pièce.",
      },
      {
        question: "Mat, satiné ou velours : quelle finition pour quelle pièce ?",
        answer:
          "Le mat réfléchit peu la lumière. Il convient aux plafonds et aux grandes surfaces, et il masque mieux les petits défauts. Le satiné se lessive plus facilement : cuisine, couloir, chambre d'enfant. Le velours se situe entre le mat et le satiné. Le choix dépend de la pièce, de la lumière et de l'usage. Il se fixe au devis.",
      },
      {
        question: "Quelle peinture choisir pour une salle de bains ?",
        answer:
          "Nous recommandons des peintures acryliques spéciales pièces humides, résistantes à la condensation et aux projections d'eau, appliquées sur un support correctement préparé.",
      },
      {
        question: "Combien de couches sont nécessaires ?",
        answer:
          "En règle générale, deux couches de finition après primaire suffisent. Les supports foncés ou très absorbants peuvent nécessiter une couche supplémentaire.",
      },
      {
        question: "Combien coûte la peinture d'un appartement ?",
        answer:
          "Aucun prix n'est publié ici. Le montant dépend de l'état des supports, de la hauteur sous plafond, du logement vide ou meublé, du nombre de couches et des reprises éventuelles. Le devis est gratuit après une visite.",
      },
      {
        question: "Peignez-vous les façades ?",
        answer:
          "Oui, nous réalisons la peinture de façades avec des produits adaptés au support (minéral, crépi, bois) et aux conditions climatiques suisses.",
      },
    ],
  },
  {
    slug: "faux-plafonds",
    title: "Faux-plafonds",
    metaTitle: "Faux-plafonds acoustiques à Fribourg",
    shortTitle: "Faux-plafonds",
    definiteArticle: "les",
    metaDescription:
      "Faux-plafonds à Fribourg : plafonds acoustiques, plaques de plâtre, fibre de bois, spots et ventilation intégrés. Bureaux et logements. Devis gratuit.",
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
    metaTitle: "Isolation thermique et phonique Fribourg",
    shortTitle: "Isolation",
    definiteArticle: "l'",
    metaDescription:
      "Isolation thermique et phonique à Fribourg : doublages isolants, ponts thermiques, bruits entre voisins, projets Minergie. Devis gratuit — 079 430 18 13.",
    intro:
      "Basés à Fribourg, nous réalisons l'isolation thermique et acoustique en Suisse romande : doublages isolants intérieurs et traitement des ponts thermiques.",
    benefit: "Confort thermique et acoustique, conformité aux exigences suisses.",
    audience: ["Particuliers", "Promoteurs", "Architectes"],
    projectTypes: ["Doublages isolants", "Ponts thermiques", "Minergie"],
    definition:
      "L'isolation consiste à limiter les déperditions de chaleur et les nuisances sonores par la pose de matériaux isolants (laine minérale, mousse, fibres) dans les murs, plafonds et combles. Sur cette page, les travaux décrits sont les doublages isolants intérieurs. L'isolation périphérique, au sens suisse, est l'isolation thermique extérieure crépie (ITEC, norme SIA 243).",
    offerings: [
      {
        title: "Isolation thermique",
        description:
          "Isolation thermique par doublages isolants intérieurs et traitement des ponts thermiques, selon les exigences suisses et les projets Minergie. Confort et économies d'énergie.",
      },
      {
        title: "Isolation phonique",
        description:
          "Isolation phonique pour cloisons, doublages et plafonds : moins de bruit entre pièces ou voisins. Solutions adaptées logements, bureaux et commerces.",
      },
      {
        title: "Isolation périphérique : définition",
        description:
          "Définition. En Suisse, l'isolation périphérique désigne l'isolation thermique extérieure crépie des façades (ITEC, norme SIA 243) : l'isolant est fixé sur le mur extérieur, puis recouvert d'un crépi. Elle se distingue du doublage isolant intérieur, posé du côté de la pièce.",
        href: "/services/facades",
        linkLabel: "Rénovation de façade et crépi",
      },
      {
        title: "Doublages isolants",
        description:
          "Doublages isolants intérieurs : plaque + isolant pour murs froids ou bruyants. Finition prête à peindre, normes suisses.",
      },
    ],
    offeringsIntro:
      "Doublages thermiques et phoniques, pour particuliers, régies et architectes. Le bloc « Isolation périphérique » est une définition : il distingue le terme suisse du doublage intérieur.",
    guides: [
      {
        title: "Isolation thermique : murs froids, ponts thermiques, rénovation d'enveloppe",
        paragraphs: [
          [
            "Un mur froid au toucher, ou une pièce qui reste fraîche près des fenêtres et des angles, signale souvent un pont thermique : la chaleur quitte le logement à cet endroit. L'isolation thermique limite ces pertes. Dans un bâtiment déjà construit, le doublage isolant intérieur ajoute une couche du côté de la pièce, sans modifier la façade.",
          ],
          [
            "Sur une rénovation d'enveloppe, l'isolant, les fenêtres et l'aération se regardent ensemble. Isoler un mur sans traiter l'humidité peut déplacer le point froid et favoriser la condensation. Quand un projet vise Minergie ou s'appuie sur un CECB, le niveau d'isolation est fixé dans le dossier. La pose suit ce cadre.",
          ],
          [
            "Le choix de l'isolant dépend de la paroi. Le comparatif ",
            {
              href: "/blog/choisir-isolant-selon-paroi",
              label: "laine minérale, fibre de bois ou XPS",
            },
            " décrit les cas courants. Les exigences d'isolation et Minergie sont reprises sur la page ",
            {
              href: "/qualite-normes",
              label: "normes SIA, SIA 181 et Minergie",
            },
            ".",
          ],
        ],
      },
      {
        title: "Isolation phonique : bruits aériens, bruits d'impact, SIA 181",
        paragraphs: [
          [
            "La norme SIA 181 distingue les bruits aériens (voix, télévision, musique) et les bruits d'impact (pas, chutes d'objets). Un isolant qui garde la chaleur n'arrête pas le bruit pour autant.",
          ],
          [
            "Contre les voix, la piste habituelle est un doublage désolidarisé du mur : ossature indépendante, isolant souple, joints soignés. Une plaque collée directement sur le mur change peu la situation. Les pas venus de l'étage du dessus se traitent d'abord au sol, dans le logement d'où vient le bruit. Un plafond suspendu peut atténuer, avec une perte de hauteur, mais le gain est souvent plus faible.",
          ],
          [
            "Le guide ",
            {
              href: "/blog/isolation-thermique-vs-phonique",
              label: "isolation thermique ou phonique",
            },
            " sépare les deux problèmes. Quand le dossier le prévoit, la mise en œuvre des cloisons et doublages suit la SIA 181, comme indiqué sur la page ",
            {
              href: "/qualite-normes",
              label: "normes SIA, SIA 181 et Minergie",
            },
            ". Le siège et les communes du canton sont sur la page ",
            {
              href: "/zones/fribourg",
              label: "plâtrerie et peinture à Fribourg",
            },
            ".",
          ],
        ],
      },
      {
        title: "Doublage isolant intérieur : quand c'est la bonne solution",
        paragraphs: [
          [
            "Le doublage isolant intérieur se pose du côté de la pièce. On monte une ossature, on place l'isolant, un pare-vapeur si le système le demande, puis une plaque de plâtre prête à peindre. Il convient quand la façade doit rester en l'état, par exemple dans un appartement ou un immeuble.",
          ],
          [
            "La pièce perd de la surface. L'épaisseur dépend de l'isolant, de l'ossature et de la plaque. Elle est indiquée au devis, après la visite. La mise en œuvre est décrite dans le guide ",
            {
              href: "/blog/isolation-peripherique-avantages",
              label: "doublage isolant intérieur : quand l'envisager",
            },
            ".",
          ],
          [
            "Ce doublage et l'isolation périphérique ne désignent pas la même chose. L'isolation périphérique est l'isolation thermique extérieure crépie (ITEC, norme SIA 243) : l'isolant est fixé sur le mur extérieur, puis recouvert d'un crépi. Le crépi et l'enduit de façade sont sur la page ",
            {
              href: "/services/facades",
              label: "rénovation de façade et crépi",
            },
            ".",
          ],
        ],
      },
      {
        title: "Subventions dans le canton de Fribourg",
        paragraphs: [
          [
            "Le canton de Fribourg peut soutenir l'isolation thermique de bâtiments existants via le Programme Bâtiments. La mesure M-01 concerne la façade, le toit, les murs et le sol contre l'extérieur ou contre terre. La demande se dépose avant le début des travaux.",
          ],
          [
            "Les conditions et les montants sont ceux publiés par l'État de Fribourg, page ",
            {
              href: "https://www.fr.ch/deef/sde/isolation-thermique",
              label: "Isolation thermique du Service de l'énergie",
            },
            ". Cette page ne remplace pas les informations du canton.",
          ],
        ],
      },
    ],
    relatedLinks: [
      { href: "/services/facades", label: "Rénovation de façade et crépi" },
      { href: "/blog/isolation-thermique-vs-phonique", label: "Isolation thermique ou phonique" },
      { href: "/blog/choisir-isolant-selon-paroi", label: "Laine minérale, fibre de bois ou XPS" },
      { href: "/blog/isolation-peripherique-avantages", label: "Doublage isolant intérieur" },
      { href: "/qualite-normes", label: "Normes SIA, SIA 181 et Minergie" },
      { href: "/zones/fribourg", label: "Plâtrerie et peinture à Fribourg" },
    ],
    ctaDescription:
      "Décrivez votre problème (froid, bruit, rénovation) : devis gratuit après visite, réponse sous 5 jours ouvrés.",
    ctaHref: "/contact?service=isolation",
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
      {
        question: "Quelle est la différence entre isolation périphérique et isolation intérieure ?",
        answer:
          "L'isolation périphérique est l'isolation thermique extérieure crépie des façades (ITEC, norme SIA 243) : l'isolant est fixé sur le mur extérieur, puis recouvert d'un crépi. L'isolation intérieure, ou doublage isolant, se pose du côté de la pièce et réduit un peu la surface. L'une modifie la façade, l'autre non.",
      },
      {
        question: "Comment isoler un appartement du bruit des voisins ?",
        answer:
          "Cela dépend du bruit. Les voix et la télévision sont des bruits aériens : un doublage désolidarisé, avec un isolant souple et des joints continus, est la piste habituelle. Les pas sont des bruits d'impact : ils se traitent d'abord au sol du logement d'au-dessus. En location, l'accord du propriétaire ou de la régie est nécessaire. En PPE, le règlement et la régie indiquent ce qui peut être modifié.",
      },
      {
        question: "On entend les pas du voisin du dessus, que faire ?",
        answer:
          "Les pas sont des bruits d'impact. Le traitement le plus efficace se fait au sol, dans le logement d'où vient le bruit. Un plafond suspendu sous la dalle peut atténuer le bruit, avec une perte de hauteur, mais le résultat est en général plus limité. En PPE, la régie ou le règlement de l'immeuble précise qui peut intervenir sur le sol ou le plafond.",
      },
      {
        question: "Peut-on isoler un appartement en PPE sans l'accord des copropriétaires ?",
        answer:
          "Un doublage dans un lot privé et une isolation de façade ne suivent pas la même règle. La façade et les autres parties communes relèvent en principe de la copropriété. Le règlement de la PPE et la régie indiquent les travaux qui demandent un accord. Cette réponse est générale : elle ne remplace pas l'avis de la régie.",
      },
      {
        question: "Y a-t-il des subventions pour isoler à Fribourg ?",
        answer:
          "Le Programme Bâtiments du canton de Fribourg peut soutenir l'isolation thermique de bâtiments existants : façade, toit, murs et sol contre l'extérieur ou contre terre. La demande se dépose avant le début des travaux. Les conditions et les montants sont sur le site de l'État de Fribourg. Il faut les lire au moment du projet.",
      },
      {
        question: "Combien coûte une isolation périphérique au m² en Suisse ?",
        answer:
          "Aucun prix au mètre carré n'est publié ici. Le coût dépend de la surface, de l'épaisseur d'isolant, de l'accès, de l'état du support et de la finition. Pour un doublage isolant intérieur, le devis est gratuit après visite.",
      },
      {
        question: "Travaillez-vous avec les normes Minergie ?",
        answer:
          "Oui. Nous respectons les exigences des normes suisses d'isolation thermique et collaborons avec les bureaux d'études pour les projets certifiés.",
      },
    ],
  },
  {
    slug: "renovation",
    title: "Rénovation",
    metaTitle: "Rénovation d'appartement à Fribourg",
    shortTitle: "Rénovation",
    definiteArticle: "la",
    metaDescription:
      "Rénovation intérieure à Fribourg : plâtrerie, peinture, isolation et faux-plafonds, un seul interlocuteur. Appartements, bureaux, commerces. Devis gratuit.",
    intro:
      "Rénovation intérieure second œuvre : plâtrerie, peinture, isolation et faux-plafonds avec un seul interlocuteur. Appartements, bureaux et commerces — neuf partiel ou reprise. Devis après visite.",
    benefit: "Un seul interlocuteur pour plâtrerie, peinture, isolation et plafonds.",
    audience: ["Particuliers", "Régies", "Architectes", "Entreprises"],
    projectTypes: ["Appartements", "Bureaux", "Commerces"],
    definition:
      "La rénovation intérieure regroupe l'ensemble des travaux de transformation d'espaces existants : démolition sélective, reprise des supports, redistribution des volumes et finitions complètes. Entreprise familiale basée à Fribourg, pour particuliers et architectes en Suisse romande.",
    offeringsNote: [
      "Pour la plâtrerie, tout est détaillé sur la page ",
      { href: "/services/platrerie", label: "travaux de plâtrerie à Fribourg" },
      ".",
    ],
    offerings: [
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
    guides: [
      {
        title: "Rénovation d'appartement",
        paragraphs: [
          [
            "Une rénovation d'appartement porte sur les finitions d'un logement déjà construit : murs, plafonds, isolation et peinture. Elle peut concerner une seule pièce ou tout l'appartement. Nous fixons le périmètre après la visite, dans un devis détaillé par postes de travaux.",
          ],
          [
            "Dans un appartement occupé, nous travaillons en général pièce par pièce. Les zones que vous continuez d'utiliser sont protégées, et le chantier reste propre. Notre siège est à Fribourg et nous intervenons aussi dans le reste de la Suisse romande.",
          ],
        ],
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
      {
        question: "Que comprend une rénovation d'appartement ?",
        answer:
          "Les finitions de second œuvre d'un logement existant : préparation des supports, isolation, faux-plafonds et peinture, selon les pièces et l'état constaté à la visite. Le devis liste les postes retenus. L'électricité, le sanitaire et le chauffage sont traités à part.",
      },
      {
        question: "Combien de temps dure une rénovation d'appartement ?",
        answer:
          "Cela dépend de la surface, du nombre de pièces, de l'état des supports et des postes retenus. Nous vous donnons la durée dans le planning, après la visite et l'acceptation du devis.",
      },
      {
        question: "Faut-il une autorisation pour rénover l'intérieur d'un appartement ?",
        answer:
          "Cela dépend des travaux et de la commune. Repeindre, reprendre des supports ou poser un faux-plafond à l'intérieur ne demande en général pas d'autorisation. Modifier la distribution des pièces, créer une ouverture ou toucher à la façade peut en demander une. En PPE, la régie indique aussi quels travaux touchent les parties communes. Il s'agit d'une indication générale.",
      },
      {
        question: "Le devis de rénovation est-il gratuit ?",
        answer:
          "Oui, gratuit et sans engagement. Nous l'établissons après une visite du logement, détaillé par postes de travaux.",
      },
    ],
  },
  {
    slug: "facades",
    title: "Façades",
    metaTitle: "Rénovation de façade et crépi Fribourg",
    shortTitle: "Façades",
    definiteArticle: "les",
    metaDescription:
      "Rénovation de façade à Fribourg : diagnostic des fissures, crépi, enduits, peinture siloxane ou silicate. Particuliers, régies, PPE. Devis gratuit.",
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
          "Ravalement de façade : diagnostic, réparation, enduits et finition protectrice. Un interlocuteur pour le crépi et la peinture de façade. Devis gratuit.",
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
    guides: [
      {
        title: "Quand faut-il rénover une façade ?",
        paragraphs: [
          [
            "Une façade se reprend quand le crépi sonne creux, se fissure, se décolle, noircit ou laisse passer l'eau. Une couleur qui passe, ou de la mousse en pied de mur, sont d'autres signes. La durée dépend de l'exposition, de l'orientation et de l'entretien.",
          ],
          [
            "Une visite permet de voir si un raccord local suffit ou s'il faut reprendre l'ensemble. Les communes du canton sont sur la page ",
            { href: "/zones/fribourg", label: "plâtrerie et peinture à Fribourg" },
            ".",
          ],
        ],
      },
      {
        title: "Ravalement : diagnostic et réparation des fissures",
        paragraphs: [
          [
            "Toutes les fissures n'ont pas la même cause. Une fissure de retrait dans l'enduit et une fissure liée à la structure ou à l'humidité ne se traitent pas de la même façon. Le ravalement commence par un diagnostic : zones creuses, décollements, traces d'eau. Ensuite viennent la réparation du support et la finition, crépi ou peinture.",
          ],
        ],
      },
      {
        title: "Crépi et enduits : minéral ou organique, neuf ou rénovation",
        paragraphs: [
          [
            "L'enduit est la couche de mortier appliquée sur le mur. Le crépi est l'enduit de finition, celui qui donne le grain de la façade. Un crépi minéral et un crépi organique ne se comportent pas pareil face à la vapeur d'eau. En neuf comme en rénovation, le choix suit le support déjà en place.",
          ],
          [
            "La définition de l'isolation extérieure crépie (ITEC, norme SIA 243) est sur la page ",
            { href: "/services/isolation", label: "isolation thermique et phonique" },
            ". Le choix d'un isolant selon la paroi est dans le guide ",
            {
              href: "/blog/choisir-isolant-selon-paroi",
              label: "laine minérale, fibre de bois ou XPS",
            },
            ".",
          ],
        ],
      },
      {
        title: "Peinture de façade : siloxane, silicate, selon le support",
        paragraphs: [
          [
            "Une peinture silicate se lie à un support minéral et laisse passer la vapeur d'eau. Une peinture siloxane repousse l'eau de pluie et convient à de nombreux crépis. Le produit se choisit selon le support : crépi minéral, ancien crépi organique, peinture déjà en place.",
          ],
          [
            "La peinture des murs, plafonds et boiseries est sur la page ",
            { href: "/services/peinture", label: "peinture intérieure et extérieure" },
            ".",
          ],
        ],
      },
      {
        title: "Faut-il une autorisation pour rénover une façade ?",
        paragraphs: [
          [
            "Refaire une façade peut demander une autorisation ou une simple annonce. Cela dépend de la commune, de la couleur, de l'aspect et du secteur, par exemple un centre ancien ou un bâtiment protégé. La commune du bâtiment indique la démarche.",
          ],
          [
            "En PPE, la façade est en principe une partie commune : la régie précise l'accord à obtenir. Cette indication est générale. Les chantiers photographiés sont sur la page ",
            { href: "/realisations", label: "chantiers publiés" },
            ".",
          ],
        ],
      },
    ],
    relatedLinks: [
      { href: "/services/peinture", label: "Peinture intérieure et extérieure" },
      { href: "/services/isolation", label: "Isolation thermique et phonique" },
      { href: "/zones/fribourg", label: "Plâtrerie et peinture à Fribourg" },
      { href: "/realisations", label: "Chantiers publiés" },
      { href: "/blog/choisir-isolant-selon-paroi", label: "Laine minérale, fibre de bois ou XPS" },
    ],
    ctaHref: "/contact?service=facades",
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
      {
        question: "Faut-il un permis pour refaire sa façade dans le canton de Fribourg ?",
        answer:
          "Cela dépend de la commune, du changement de couleur ou d'aspect, et du secteur, notamment un centre ancien ou un bâtiment protégé. La commune indique s'il faut une autorisation, une annonce, ou rien. En PPE, la régie précise aussi l'accord des copropriétaires. Cette réponse est générale.",
      },
      {
        question: "Quelle est la différence entre crépi et enduit ?",
        answer:
          "L'enduit est le mortier appliqué sur le mur, en une ou plusieurs couches. Le crépi est l'enduit de finition : c'est la couche visible, avec son grain. On dit souvent crépi pour la façade finie, et enduit pour le matériau ou les couches du système.",
      },
      {
        question: "Quelle peinture pour une façade crépie ?",
        answer:
          "Cela dépend du crépi. Une peinture silicate convient aux supports minéraux et laisse passer la vapeur d'eau. Une peinture siloxane repousse la pluie et s'utilise sur de nombreux crépis. Le support existant, minéral, organique ou déjà peint, décide du système.",
      },
      {
        question: "Peut-on rénover une façade en hiver ?",
        answer:
          "Les enduits et les peintures de façade ont besoin d'un air et d'un support assez tempérés, et d'un mur sec. Le gel, la pluie et un support gelé empêchent la prise. Les limites figurent sur la fiche technique du produit. Le chantier se cale donc sur la météo.",
      },
      {
        question: "Combien coûte la rénovation d'une façade ?",
        answer:
          "Aucun prix n'est publié ici. Le montant dépend de la surface, de l'accès, de l'état du crépi, des réparations, du type d'enduit ou de peinture et du nombre de couches. Le devis est gratuit après une visite.",
      },
      {
        question: "À quelle fréquence rénover une façade ?",
        answer:
          "En Suisse, un crépi ou une peinture de façade dure en général 15 à 25 ans selon l'exposition, l'orientation et l'entretien. Une inspection tous les 5 ans est recommandée.",
      },
      {
        question: "Intervenez-vous sur les fissures ?",
        answer:
          "Oui. Nous diagnostiquons l'origine des fissures (retrait, structure, humidité) et appliquons le traitement adapté avant la finition.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
