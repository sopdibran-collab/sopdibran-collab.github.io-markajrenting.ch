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
  /** Dernière modification du contenu (YYYY-MM-DD). Repli du lastmod. */
  updated: string;
  title: string;
  /** Balise title, sans le suffixe « | Markaj Renting SA ». */
  metaTitle: string;
  shortTitle: string;
  /** Article défini pour l'accord grammatical (la / l' / les). */
  definiteArticle: "la" | "le" | "l'" | "les";
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
  /** Photos de chantier réelles (Markaj), affichées sous la définition. */
  gallery?: { src: string; alt: string; legend: string; width: number; height: number }[];
}

export const services: Service[] = [
  {
    slug: "platrerie",
    updated: "2026-10-22",
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
          "Joints et finitions plâtrerie Q3 (standard) ou Q4 (haut de gamme), conformes aux usages suisses. Surfaces planes, prêtes à peindre.",
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
      {
        title: "Lissage des murs et plafonds",
        description:
          "Enduit de lissage sur plaques, béton ou ancien crépi pour une surface plane avant peinture, jusqu'au niveau Q4.",
        href: "/services/lissage",
        linkLabel: "Lissage et enduits",
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
            "En Q1, les joints sont simplement remplis. La Q2 est la finition standard des joints, sans ressaut avec le carton, poncée si besoin : elle suffit sous les peintures mates. La Q3 reprend la Q2, avec des joints élargis et les pores du carton fermés, pour les revêtements fins. En Q4, toute la surface reçoit un enduit de plus de 1 mm, pour des peintures jusqu'à brillance moyenne : les effets de la lumière rasante sont réduits, sans être supprimés. Ces niveaux figurent dans la norme SIA 242:2012, annexe B (informative), basée sur la Merkblatt 2 de l'industrie du plâtre.",
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
      { step: "03", title: "Pose et montage", description: "Installation des rails, montants, plaques BA13 et traitement des joints." },
      { step: "04", title: "Finitions", description: "Ponçage, ragréage et finition Q3 ou Q4 selon le projet — surfaces prêtes à recevoir peinture ou papier peint." },
    ],
    materials: [
      "Plaques BA13 standard et hydrofuge",
      "Ossatures métalliques conformes aux normes suisses",
      "Enduits de jointoiement et bandes à joint",
      "Isolants pour doublages thermiques et acoustiques",
      "Ragréages et primaires d'accrochage",
    ],
    gallery: [
      { src: "/images/chantier/cloison-placo-01.webp", legend: "Cloisons en plaques", alt: "Cloisons en plaques de plâtre sur ossature métallique avant joints, avec garde-corps de chantier, sur chantier Markaj", width: 1200, height: 1600 },
      { src: "/images/chantier/ossature-metallique-placo-02.webp", legend: "Ossature métallique", alt: "Ossature métallique de cloisons montée sur un plateau, échelle et outillage au sol, sur chantier Markaj", width: 1600, height: 1200 },
      { src: "/images/chantier/doublage-isolant-placo-01.webp", legend: "Doublage et fonds en bois", alt: "Ouvrier Markaj vissant des bandes de contreplaqué sur une ossature métallique, devant un isolant à parement aluminium", width: 1600, height: 1200 },
      { src: "/images/chantier/cloison-placo-03.webp", legend: "Plateau cloisonné", alt: "Plateau de bureaux avec cloisons en plaques de plâtre avant joints et escalier en chantier, sur chantier Markaj", width: 1600, height: 900 },
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
          "Le délai dépend de la surface, de la hauteur, du niveau de finition et du temps de séchage des joints. Il est fixé au devis.",
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
    updated: "2026-10-10",
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
    updated: "2026-10-22",
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
      "Un faux-plafond, ou plafond suspendu, est une structure fixée sous le plafond porteur. Il cache les réseaux techniques, peut améliorer l'acoustique de la pièce et permet d'intégrer l'éclairage.",
    offerings: [
      {
        title: "Faux-plafonds en plaques de plâtre",
        description:
          "Plafonds suspendus en plaques de plâtre sur ossature métallique : plaques pleines ou perforées, joints et finition prête à peindre. Logements, bureaux et commerces.",
      },
      {
        title: "Pose de faux-plafonds",
        description:
          "Faux-plafonds techniques et esthétiques : plaques, dalles démontables, intégration réseaux. Tertiaire, commerces et logements.",
      },
      {
        title: "Plafonds acoustiques",
        description:
          "Nous posons des faux plafonds acoustiques en plaques perforées ou en dalles absorbantes, avec de la laine minérale au-dessus si le projet le prévoit. Ils réduisent l'écho dans les bureaux, les salles de réunion et les couloirs.",
      },
      {
        title: "Intégration éclairage / réseaux",
        description:
          "Faux-plafonds avec intégration éclairage, CVC et réseaux : accès technique, planning tenu, finition propre. Pour architectes et entreprises en Suisse romande.",
      },
    ],
    guides: [
      {
        title: "Faux plafond acoustique : écho ou bruit des voisins ?",
        paragraphs: [
          [
            "Un faux plafond acoustique agit d'abord sur l'écho dans la pièce : les voix résonnent moins dans un bureau ou une salle de réunion. À lui seul, il ne traite pas le bruit qui vient d'un autre logement.",
          ],
          [
            "Contre les bruits aériens et les bruits d'impact venus de l'étage du dessus, un plafond suspendu désolidarisé de la dalle, avec de la laine minérale dans le vide, peut atténuer le bruit. Le résultat reste en général moins bon qu'un traitement du sol, là où le bruit est produit. La norme SIA 181 fixe les exigences de protection contre le bruit dans les bâtiments. Plus de détails sur la page ",
            { href: "/services/isolation", label: "isolation phonique" },
            ".",
          ],
        ],
      },
    ],
    offeringsNote: [
      "Pour isoler le plafond d'une cave, d'un garage ou d'un dépôt, consultez la page ",
      { href: "/services/schichtex", label: "panneaux Schichtex" },
      ".",
    ],
    process: [
      { step: "01", title: "Étude technique", description: "Analyse des contraintes (hauteur sous plafond, réseaux, normes incendie) et choix du système adapté." },
      { step: "02", title: "Ossature", description: "Pose des suspentes, profilés périphériques et structure porteuse selon le plan d'exécution." },
      { step: "03", title: "Pose des éléments", description: "Installation des plaques, dalles ou membranes. Découpes pour luminaires et bouches de ventilation." },
      { step: "04", title: "Finitions et réception", description: "Traitement des joints, peinture si nécessaire, contrôle de la pose et remise du dossier de chantier." },
    ],
    materials: [
      "Plaques de plâtre perforées (acoustique)",
      "Dalles minérales et métalliques",
      "Profilés et suspentes",
      "Bandes et enduits de finition",
      "Systèmes coupe-feu selon exigences",
    ],
    gallery: [
      { src: "/images/chantier/faux-plafond-placo-pose-01.webp", legend: "Pose en cours", alt: "Ouvrier Markaj posant une plaque de plâtre perforée dans un faux-plafond, trappe ouverte", width: 943, height: 1673 },
      { src: "/images/chantier/faux-plafond-placo-perfore-04.webp", legend: "Plafond perforé", alt: "Faux-plafond en plaques de plâtre perforées avec spots encastrés au-dessus d'une baie vitrée, sur chantier Markaj", width: 943, height: 1254 },
      { src: "/images/chantier/faux-plafond-placo-perfore-03.webp", legend: "Ouverture circulaire", alt: "Faux-plafond en plaques de plâtre perforées autour d'une grande ouverture circulaire vitrée, sur chantier Markaj", width: 943, height: 1254 },
      { src: "/images/chantier/faux-plafond-placo-perfore-02.webp", legend: "Intégration réseaux", alt: "Faux-plafond en plaques de plâtre perforées avec bouche technique intégrée, au-dessus d'une structure noire, sur chantier Markaj", width: 943, height: 1254 },
      { src: "/images/chantier/panneaux-laine-de-bois-isolant-01.webp", legend: "Panneau et isolant", alt: "Panneaux en laine de bois posés sous un plafond, main tenant l'isolant visible entre les lambourdes, sur chantier Markaj", width: 943, height: 1254 },
      { src: "/images/chantier/faux-plafond-laine-de-bois-04.webp", legend: "Plafond en laine de bois", alt: "Plafond en panneaux de laine de bois sur lambourdes en bois, au-dessus d'une façade vitrée, sur chantier Markaj", width: 943, height: 1673 },
      { src: "/images/chantier/faux-plafond-laine-de-bois-pose-01.webp", legend: "Pose en cours", alt: "Échafaudage roulant sous un plafond en panneaux de laine de bois en cours de pose, sur chantier Markaj", width: 943, height: 1673 },
    ],
    faq: [
      { question: "Quel faux-plafond pour une bonne acoustique ?", answer: "Les plaques perforées avec matelas acoustique ou les dalles minérales à haute absorption sont recommandées pour les bureaux, salles de réunion et espaces publics." },
      { question: "Peut-on intégrer des spots LED ?", answer: "Oui. Nous prévoyons les découpes et renforts nécessaires lors de la conception, en coordination avec l'électricien." },
      { question: "Quelle hauteur minimale sous plafond ?", answer: "La perte de hauteur dépend du système et de l'épaisseur de l'isolant. Nous l'indiquons dans le devis, après la visite." },
      {
        question: "Un faux-plafond isole-t-il du bruit du voisin du dessus ?",
        answer:
          "En partie. Un plafond suspendu désolidarisé, avec de la laine minérale, atténue les bruits aériens et une partie des bruits d'impact. Pour les bruits de pas, le plus efficace reste de traiter le sol du logement d'où vient le bruit.",
      },
    ],
  },
  {
    slug: "isolation",
    updated: "2026-10-11",
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
            "Contre les voix, la piste habituelle est un doublage désolidarisé du mur : ossature indépendante, isolant souple, joints soignés. Une plaque collée directement sur le mur change peu la situation. Les pas venus de l'étage du dessus se traitent d'abord au sol, dans le logement d'où vient le bruit. Un ",
            { href: "/services/faux-plafonds", label: "plafond suspendu" },
            " peut atténuer, avec une perte de hauteur, mais le gain est souvent plus faible.",
          ],
          [
            "Le guide ",
            {
              href: "/blog/isolation-thermique-vs-phonique",
              label: "isolation thermique ou phonique",
            },
            " sépare les deux problèmes. La norme SIA 181 fixe les exigences de protection contre le bruit. Nous les résumons sur la page ",
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
    updated: "2026-10-11",
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
    updated: "2026-10-22",
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
      {
        title: "Isolation périphérique crépie",
        description:
          "Isolation des façades par l'extérieur (ITEC, norme SIA 243) : panneaux isolants, armature et crépi de finition.",
        href: "/services/isolation-peripherique",
        linkLabel: "Isolation périphérique",
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
      { href: "/services/isolation-peripherique", label: "Isolation périphérique crépie" },
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
    gallery: [
      { src: "/images/chantier/facade-echafaudage-01.webp", legend: "Façade sur échafaudage", alt: "Ouvriers Markaj travaillant sur l'échafaudage de façade d'un immeuble", width: 943, height: 1673 },
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
          "La durée dépend de l'exposition, de l'orientation, du système posé et de l'entretien. Un contrôle régulier permet de repérer tôt les fissures et les zones creuses.",
      },
      {
        question: "Intervenez-vous sur les fissures ?",
        answer:
          "Oui. Nous diagnostiquons l'origine des fissures (retrait, structure, humidité) et appliquons le traitement adapté avant la finition.",
      },
    ],
  },
  {
    slug: "isolation-peripherique",
    updated: "2026-10-22",
    title: "Isolation périphérique",
    metaTitle: "Isolation périphérique crépie (ITEC)",
    shortTitle: "Isolation périphérique",
    definiteArticle: "l'",
    metaDescription:
      "Isolation périphérique crépie (ITEC) en Suisse romande : panneaux isolants collés et chevillés, armature, crépi de finition, selon la norme SIA 243.",
    intro:
      "Nous intervenons en Suisse romande pour isoler les façades par l'extérieur : panneaux isolants, couche d'armature et crépi de finition, selon la norme SIA 243.",
    benefit: "Une façade isolée et crépie d'un seul tenant, sans perdre de surface habitable.",
    audience: ["Particuliers", "Régies", "Copropriétés", "Architectes"],
    projectTypes: ["Rénovation énergétique", "Neuf", "Façade crépie"],
    definition:
      "L'isolation périphérique, ou isolation thermique extérieure crépie (ITEC), consiste à coller et cheviller des panneaux isolants sur la face extérieure des murs, puis à les recouvrir d'une couche d'armature et d'un crépi. Le mur porteur reste du côté chaud, et la plupart des ponts thermiques au droit des dalles et des murs de refend sont traités.",
    offerings: [
      {
        title: "Pose des panneaux isolants",
        description:
          "Collage et chevillage de panneaux en polystyrène expansé (EPS), laine minérale ou fibre de bois sur la maçonnerie ou le béton, avec profilé de départ en pied de façade.",
      },
      {
        title: "Couche d'armature",
        description:
          "Mortier d'enrobage et treillis d'armature en fibre de verre sur toute la surface, renforts d'angle et d'embrasure pour limiter les fissures.",
      },
      {
        title: "Crépi de finition",
        description:
          "Crépi minéral, silicate ou siloxane selon le système choisi, grain et teinte définis avec vous, puis peinture si le système la prévoit.",
        href: "/services/facades",
        linkLabel: "Crépi et façades",
      },
      {
        title: "Raccords et détails",
        description:
          "Embrasures, tablettes de fenêtre, raccords de toiture et de socle : c'est par ces points que l'eau s'infiltre quand le détail est mal exécuté.",
      },
    ],
    guides: [
      {
        title: "Isolation périphérique : comment est composé le système ?",
        paragraphs: [
          [
            "Une isolation périphérique crépie est un système complet, vendu et testé comme un ensemble par le fabricant : colle, panneau isolant, chevilles, mortier d'armature, treillis, fixatif et crépi.",
          ],
          [
            "En Suisse, la norme SIA 243 « Isolations thermiques extérieures crépies » décrit ces systèmes ; son édition 2026 est en vigueur depuis le 1er février 2026 (",
            { href: "https://www.smgv.ch/fr/news-applica/norme-revisee-sia-243", label: "ASEPP, norme révisée SIA 243" },
            "). La norme SIA 180 « Protection thermique, protection contre l'humidité et climat intérieur dans les bâtiments » traite la protection thermique ; les exigences énergétiques relèvent des lois cantonales sur l'énergie. Les normes sont publiées par la ",
            { href: "https://www.sia.ch/fr/", label: "Société suisse des ingénieurs et des architectes (SIA)" },
            ".",
          ],
        ],
      },
      {
        title: "EPS, laine minérale ou fibre de bois ?",
        paragraphs: [
          [
            "Le polystyrène expansé (EPS) est léger et courant sur les maisons et petits immeubles. La laine minérale est incombustible. La fibre de bois laisse mieux passer la vapeur d'eau et apporte de l'inertie en été.",
          ],
          [
            "Le choix dépend du support et du projet. Les exigences de protection incendie applicables au bâtiment sont celles des prescriptions de l'",
            { href: "https://www.bsvonline.ch/fr/", label: "AEAI" },
            ". Le comparatif des isolants est dans le guide ",
            { href: "/blog/choisir-isolant-selon-paroi", label: "laine minérale, fibre de bois ou XPS" },
            ".",
          ],
        ],
      },
      {
        title: "Subventions et autorisation",
        paragraphs: [
          [
            "L'isolation de l'enveloppe d'un bâtiment existant peut être soutenue par ",
            { href: "https://www.leprogrammebatiments.ch/fr/", label: "le Programme Bâtiments" },
            ". Les conditions à jour sont publiées sur le site officiel du programme, à consulter avant le projet.",
          ],
          [
            "Une isolation périphérique épaissit le mur et peut changer l'aspect de la façade. Selon la commune et le secteur, elle demande une autorisation ou une annonce. La commune du bâtiment indique la démarche.",
          ],
        ],
      },
    ],
    relatedLinks: [
      { href: "/services/facades", label: "Rénovation de façade et crépi" },
      { href: "/services/isolation", label: "Isolation thermique et phonique" },
      { href: "/blog/choisir-isolant-selon-paroi", label: "Laine minérale, fibre de bois ou XPS" },
    ],
    ctaDescription:
      "Décrivez votre façade : surface, type de mur, année de construction. Nous intervenons en Suisse romande.",
    ctaHref: "/contact?service=isolation-peripherique",
    process: [
      { step: "01", title: "Relevé de la façade", description: "État du support, surfaces, embrasures, socle et raccords de toiture. Choix du système et de l'épaisseur d'isolant." },
      { step: "02", title: "Préparation", description: "Échafaudage, protection des abords, nettoyage du support, pose du profilé de départ et démontage des éléments à reposer." },
      { step: "03", title: "Isolant et armature", description: "Collage et chevillage des panneaux, ponçage des désaffleurements, mortier d'armature avec treillis et renforts d'angle." },
      { step: "04", title: "Crépi et finitions", description: "Fixatif, crépi de finition, raccords de tablettes et de joints, contrôle et nettoyage avant le démontage de l'échafaudage." },
    ],
    materials: [
      "Panneaux EPS, laine minérale ou fibre de bois",
      "Colles et chevilles du système",
      "Mortier d'armature et treillis en fibre de verre",
      "Profilés de départ, d'angle et d'embrasure",
      "Crépis minéraux, silicate ou siloxane",
      "Normes SIA 243 (ITEC, édition 2026) et SIA 180",
    ],
    faq: [
      {
        question: "Quelle différence entre isolation périphérique et isolation intérieure ?",
        answer:
          "L'isolation périphérique se pose à l'extérieur : elle ne prend pas de surface habitable et couvre la plupart des ponts thermiques. L'isolation intérieure se pose côté pièce, en doublage. Elle est utile quand la façade ne peut pas être modifiée, mais elle laisse des ponts thermiques aux dalles et aux murs de refend.",
      },
      {
        question: "Quelle épaisseur d'isolant faut-il ?",
        answer:
          "Elle dépend de l'isolant, du mur existant et de la valeur U visée par la loi cantonale sur l'énergie ou par le programme de subvention. L'épaisseur est fixée dans le devis, selon le système choisi.",
      },
      {
        question: "Peut-on poser une isolation périphérique sur un ancien crépi ?",
        answer:
          "Souvent oui, si le crépi existant est sain et adhère bien. Les zones creuses ou décollées sont d'abord reprises. Un essai d'adhérence permet de le vérifier.",
      },
      {
        question: "Faut-il une autorisation pour isoler sa façade par l'extérieur ?",
        answer:
          "Cela dépend de la commune, du secteur et du changement d'aspect. L'épaisseur ajoutée peut aussi toucher les distances aux limites. La commune indique s'il faut une autorisation ou une annonce.",
      },
      {
        question: "Existe-t-il des subventions ?",
        answer:
          "Le Programme Bâtiments peut soutenir l'isolation de l'enveloppe des bâtiments existants. Les conditions à jour sont sur son site officiel, leprogrammebatiments.ch.",
      },
      {
        question: "Dans quelles régions intervenez-vous pour l'isolation périphérique ?",
        answer:
          "Nous intervenons dans les cantons de Fribourg, Vaud, Neuchâtel, Genève, du Valais et du Jura.",
      },
    ],
  },
  {
    slug: "crepi-interieur",
    updated: "2026-10-22",
    title: "Crépi intérieur",
    metaTitle: "Crépi intérieur : grain, pose et finitions",
    shortTitle: "Crépi intérieur",
    definiteArticle: "le",
    metaDescription:
      "Crépi intérieur en Suisse romande : crépi ribé, roulé ou taloché sur murs et plafonds, préparation du support, fixatif et peinture.",
    intro:
      "Nous intervenons en Suisse romande pour poser du crépi intérieur sur murs et plafonds : préparation du support, fixatif, crépi au grain choisi et peinture si besoin.",
    benefit: "Un mur résistant aux chocs, au grain régulier, qui masque les petits défauts du support.",
    audience: ["Particuliers", "Régies", "Entreprises", "Architectes"],
    projectTypes: ["Logements", "Cages d'escalier", "Locaux commerciaux"],
    definition:
      "Le crépi intérieur est un enduit de finition à grain, appliqué en couche mince sur un mur ou un plafond préparé. Il est courant dans les logements et les cages d'escalier en Suisse. Selon l'outil et la taille du grain, il donne un aspect ribé (rayé), taloché ou roulé. Il peut rester dans sa teinte ou être peint.",
    offerings: [
      {
        title: "Crépi ribé, taloché ou roulé",
        description:
          "Crépi minéral ou synthétique, grain choisi selon l'aspect voulu. Pose sur murs et plafonds, en neuf comme en rénovation.",
      },
      {
        title: "Préparation du support",
        description:
          "Rebouchage, fixatif ou couche d'accrochage selon le support : plaque de plâtre, béton, ancien crépi ou ancienne peinture.",
      },
      {
        title: "Reprise d'un crépi existant",
        description:
          "Raccords après un passage de câbles ou une démolition, ou nouveau crépi sur l'ancien quand il adhère encore.",
      },
      {
        title: "Peinture sur crépi",
        description:
          "Peinture des murs crépis au rouleau à poils longs, pour couvrir le fond du grain.",
        href: "/services/peinture",
        linkLabel: "Peinture intérieure",
      },
    ],
    guides: [
      {
        title: "Crépi ou lissage : que choisir ?",
        paragraphs: [
          [
            "Le crépi donne un mur à relief, qui résiste bien aux frottements et cache les petites irrégularités. Il convient aux couloirs, cages d'escalier et pièces de passage. Le lissage donne au contraire un mur plat, prêt pour une peinture mate ou satinée.",
          ],
          [
            "Un crépi existant peut aussi être lissé pour obtenir un mur plat : le détail est sur la page ",
            { href: "/services/lissage", label: "lissage et enduits" },
            ".",
          ],
        ],
      },
      {
        title: "Crépi minéral ou synthétique",
        paragraphs: [
          [
            "Un crépi minéral, à base de chaux ou de ciment, laisse passer la vapeur d'eau. Un crépi synthétique, à base de résine, est plus souple et souvent prêt à l'emploi. Le choix dépend du support et de la pièce. Les temps de séchage et les conditions de pose figurent sur la fiche technique du produit.",
          ],
          [
            "Ces travaux relèvent de la norme SIA 242:2012 « Plâtrerie, crépissage, construction à sec », publiée par la ",
            { href: "https://www.sia.ch/fr/", label: "SIA" },
            ".",
          ],
        ],
      },
      {
        title: "Ancien bâtiment : vérifier l'amiante avant de poncer",
        paragraphs: [
          [
            "Certains anciens crépis et colles contiennent de l'amiante. Avant de poncer, percer ou démolir, en cas de soupçon d'amiante, le droit fédéral impose d'identifier et d'évaluer le danger avant les travaux (art. 3 al. 2 OTConst, voir la ",
            { href: "https://www.ekas.admin.ch/fileadmin/Dokumente/Richtlinien/gueltig/06503_f.pdf", label: "directive CFST amiante" },
            "). La ",
            { href: "https://www.suva.ch/fr-ch", label: "Suva" },
            " publie les règles de protection sur les chantiers.",
          ],
        ],
      },
    ],
    relatedLinks: [
      { href: "/services/lissage", label: "Lissage et enduits" },
      { href: "/services/peinture", label: "Peinture intérieure et extérieure" },
      { href: "/services/platrerie", label: "Plâtrerie" },
    ],
    ctaDescription:
      "Décrivez vos murs : surface, support, aspect voulu. Nous intervenons en Suisse romande.",
    ctaHref: "/contact?service=crepi-interieur",
    process: [
      { step: "01", title: "Choix de l'aspect", description: "Type de crépi, grain et teinte, sur échantillon si besoin. Contrôle du support existant." },
      { step: "02", title: "Protection et préparation", description: "Protection des sols et menuiseries, rebouchage, ponçage des aspérités, fixatif ou couche d'accrochage." },
      { step: "03", title: "Application", description: "Crépi tiré à la taloche puis structuré, par surface entière pour éviter les reprises visibles." },
      { step: "04", title: "Finition", description: "Peinture si prévue, nettoyage, retrait des protections et contrôle en lumière rasante." },
    ],
    materials: [
      "Crépis minéraux (chaux, ciment) et synthétiques",
      "Fixatifs et couches d'accrochage",
      "Mastics de rebouchage",
      "Peintures murales intérieures",
      "Norme SIA 242:2012 « Plâtrerie, crépissage, construction à sec »",
    ],
    faq: [
      {
        question: "Quel grain de crépi choisir pour un mur intérieur ?",
        answer:
          "Un grain fin donne un relief discret. Un grain plus gros cache mieux les défauts, mais il retient davantage la poussière. L'aspect se choisit sur échantillon.",
      },
      {
        question: "Peut-on poser du crépi sur une plaque de plâtre ?",
        answer:
          "Oui, après traitement des joints et application d'une couche d'accrochage adaptée. Le niveau de finition des joints à prévoir sous le crépi est indiqué par la fiche technique du fabricant.",
      },
      {
        question: "Peut-on peindre un crépi intérieur ?",
        answer:
          "Oui. On utilise une peinture murale et un rouleau à poils longs pour couvrir le fond du grain. Un crépi déjà teinté dans la masse n'a pas toujours besoin de peinture.",
      },
      {
        question: "Comment enlever ou cacher un vieux crépi ?",
        answer:
          "On peut le recouvrir d'un lissage pour obtenir un mur plat, ou poser un doublage en plaques de plâtre. Le retirer est plus long. En cas de soupçon d'amiante, le danger doit être identifié et évalué avant de poncer (art. 3 al. 2 OTConst).",
      },
      {
        question: "Dans quelles régions posez-vous du crépi intérieur ?",
        answer:
          "Dans toute la Suisse romande : cantons de Fribourg, Vaud, Neuchâtel, Genève, du Valais et du Jura.",
      },
    ],
  },
  {
    slug: "lissage",
    updated: "2026-10-22",
    title: "Lissage",
    metaTitle: "Lissage de murs et plafonds, enduits",
    shortTitle: "Lissage",
    definiteArticle: "le",
    metaDescription:
      "Lissage de murs et plafonds en Suisse romande : enduit de lissage, ponçage, finition Q3 ou Q4 avant peinture, lissage d'un ancien crépi.",
    intro:
      "Nous intervenons en Suisse romande pour lisser murs et plafonds : enduit de lissage, ponçage et finition prête à peindre, en neuf comme en rénovation.",
    benefit: "Des murs plats, sans relief ni joints visibles, prêts pour une peinture mate ou de brillance moyenne.",
    audience: ["Particuliers", "Régies", "Architectes", "Entreprises"],
    projectTypes: ["Rénovation", "Neuf", "Avant peinture"],
    definition:
      "Le lissage consiste à appliquer un enduit fin en une ou plusieurs passes sur un mur ou un plafond, puis à le poncer pour obtenir une surface plane et régulière. Il s'utilise sur plaques de plâtre, béton, ancien crépi ou ancienne peinture, avant une peinture ou un revêtement mural.",
    offerings: [
      {
        title: "Lissage sur plaques de plâtre",
        description:
          "Enduit de surface sur toute la plaque, au-delà des seuls joints, pour atteindre une finition Q3 ou Q4.",
        href: "/services/platrerie",
        linkLabel: "Plâtrerie et finitions Q3/Q4",
      },
      {
        title: "Lissage d'un ancien crépi",
        description:
          "Couche de dressage puis enduit de finition pour faire disparaître le relief d'un crépi et obtenir un mur plat.",
        href: "/services/crepi-interieur",
        linkLabel: "Crépi intérieur",
      },
      {
        title: "Lissage sur béton",
        description:
          "Ragréage des nids de cailloux et des balèvres, puis lissage des murs et plafonds en béton avant peinture.",
      },
      {
        title: "Reprises en rénovation",
        description:
          "Fissures, trous de chevilles, saignées et raccords après travaux, repris et lissés avant la peinture.",
      },
    ],
    guides: [
      {
        title: "Q2, Q3 ou Q4 : quel niveau de lissage demander ?",
        paragraphs: [
          [
            "Les niveaux de qualité Q1 à Q4 décrivent la finition des surfaces en plaques de plâtre. Ils figurent dans la norme SIA 242:2012, annexe B (informative), basée sur la Merkblatt 2 de l'industrie du plâtre. La Q2 suffit sous les peintures mates. La Q3 ajoute des joints élargis et ferme les pores du carton, pour les revêtements fins. En Q4, toute la surface reçoit un enduit de plus de 1 mm, pour des peintures jusqu'à brillance moyenne : les effets de la lumière rasante sont réduits, sans être supprimés.",
          ],
          [
            "Les niveaux de finition sont détaillés sur la page ",
            { href: "/services/platrerie", label: "plâtrerie" },
            ". Source sur les niveaux : la ",
            { href: "https://www.gips.de/fileadmin/user_upload/download/merkblaetter/gipsplatten_und_gipsfaserplatten/IGG-_MB2_Stand_Nov._2017_Online.pdf", label: "Merkblatt 2 de l'industrie allemande du plâtre (IGG)" },
            ".",
          ],
        ],
      },
      {
        title: "Pourquoi la lumière rasante compte",
        paragraphs: [
          [
            "Une lumière qui arrive presque parallèle au mur, depuis une grande fenêtre ou un éclairage encastré, fait ressortir les défauts. Dans ces pièces, un lissage soigné évite de voir les joints et les reprises après la peinture.",
          ],
        ],
      },
      {
        title: "Ancien bâtiment : vérifier l'amiante avant de poncer",
        paragraphs: [
          [
            "Le lissage commence souvent par un ponçage de l'ancien support. Avant de poncer, percer ou démolir, en cas de soupçon d'amiante, le droit fédéral impose d'identifier et d'évaluer le danger avant les travaux (art. 3 al. 2 OTConst, voir la ",
            { href: "https://www.ekas.admin.ch/fileadmin/Dokumente/Richtlinien/gueltig/06503_f.pdf", label: "directive CFST amiante" },
            "). La ",
            { href: "https://www.suva.ch/fr-ch", label: "Suva" },
            " publie les règles de protection sur les chantiers.",
          ],
        ],
      },
    ],
    relatedLinks: [
      { href: "/services/platrerie", label: "Plâtrerie" },
      { href: "/services/crepi-interieur", label: "Crépi intérieur" },
      { href: "/services/peinture", label: "Peinture intérieure et extérieure" },
    ],
    ctaDescription:
      "Décrivez vos murs : surface, support, finition voulue. Nous intervenons en Suisse romande.",
    ctaHref: "/contact?service=lissage",
    process: [
      { step: "01", title: "Diagnostic du support", description: "Type de support, fissures, relief existant, adhérence de l'ancienne peinture. Choix du niveau Q3 ou Q4." },
      { step: "02", title: "Préparation", description: "Protection des sols et menuiseries, rebouchage, pose de bandes sur les fissures, couche d'accrochage si nécessaire." },
      { step: "03", title: "Enduit en passes", description: "Une ou plusieurs passes d'enduit de lissage, séchage entre chaque passe, ponçage avec aspiration des poussières." },
      { step: "04", title: "Contrôle", description: "Contrôle en lumière rasante, retouches, impression avant peinture si prévue." },
    ],
    materials: [
      "Enduits de lissage en poudre ou prêts à l'emploi",
      "Enduits de dressage pour supports irréguliers",
      "Bandes d'armature pour fissures",
      "Ponceuses avec aspiration",
      "Niveaux Q1 à Q4 (SIA 242:2012, annexe B informative)",
    ],
    faq: [
      {
        question: "Combien de passes d'enduit faut-il pour lisser un mur ?",
        answer:
          "En général deux passes, parfois trois sur un support irrégulier ou un ancien crépi. Le nombre dépend du support et du niveau de finition demandé.",
      },
      {
        question: "Peut-on lisser un mur crépi sans retirer le crépi ?",
        answer:
          "Oui, si le crépi adhère bien. On applique une couche de dressage pour combler le relief, puis un enduit de finition. En cas de soupçon d'amiante, le danger est identifié et évalué avant de poncer (art. 3 al. 2 OTConst).",
      },
      {
        question: "Quelle différence entre lissage et ragréage ?",
        answer:
          "Le ragréage sert surtout à rattraper les irrégularités d'un sol ou d'un béton. Le lissage est la finition fine d'un mur ou d'un plafond avant peinture. Sur un mur très abîmé, on fait souvent les deux.",
      },
      {
        question: "Faut-il lisser avant de peindre ?",
        answer:
          "Pas toujours. Sous une peinture mate, une finition Q2 suffit en général. Pour un revêtement fin, on vise la Q3. Pour une peinture de brillance moyenne ou un mur en lumière rasante, on choisit la Q4, qui réduit les effets de la lumière rasante sans les supprimer.",
      },
      {
        question: "Dans quelles régions intervenez-vous pour le lissage ?",
        answer:
          "Nous lissons murs et plafonds dans les cantons de Fribourg, Vaud, Neuchâtel, Genève, du Valais et du Jura.",
      },
    ],
  },
  {
    slug: "schichtex",
    updated: "2026-10-22",
    title: "Panneaux Schichtex",
    metaTitle: "Pose de Schichtex : plafonds de caves et garages",
    shortTitle: "Schichtex",
    definiteArticle: "les",
    metaDescription:
      "Pose de panneaux Schichtex en Suisse romande : panneaux isolants multicouches en laine de bois pour plafonds de caves, garages, halles et dépôts.",
    intro:
      "Nous intervenons en Suisse romande pour poser des panneaux isolants multicouches type Schichtex sous les plafonds de caves, de garages, de halles et de dépôts.",
    benefit: "Un plafond de sous-sol isolé, qui limite les pertes de chaleur vers le bas, avec une face résistante aux chocs.",
    audience: ["Particuliers", "Régies", "Copropriétés", "Architectes", "Entreprises"],
    projectTypes: ["Caves", "Garages", "Halles et dépôts"],
    definition:
      "Les panneaux de type Schichtex sont des panneaux isolants multicouches. Une âme isolante, en laine de roche ou en polystyrène expansé (EPS), est prise entre une ou deux couches de laine de bois liée au ciment ou à la magnésite. Fixés sous la dalle d'une cave, d'un garage, d'une halle ou d'un dépôt, ils isolent le plancher des pièces chauffées au-dessus et atténuent le bruit dans le local.",
    offerings: [
      {
        title: "Isolation des plafonds de caves",
        description:
          "Panneaux fixés sous la dalle de la cave, pour limiter le froid qui remonte dans le logement du dessus.",
      },
      {
        title: "Plafonds de garages, halles et dépôts",
        description:
          "Panneaux à face en laine de bois liée au ciment, qui résistent aux chocs et à l'humidité des locaux non chauffés.",
      },
      {
        title: "Fixation sur dalle existante",
        description:
          "Pose par chevilles ou vis, avec rondelles, selon le support et les indications du fabricant.",
      },
      {
        title: "Découpes et raccords",
        description:
          "Découpes autour des conduites, des luminaires et des sprinklers, raccords aux murs et aux poutres.",
      },
    ],
    guides: [
      {
        title: "Pourquoi isoler le plafond d'une cave ou d'un garage ?",
        paragraphs: [
          [
            "Une cave, un garage ou un dépôt n'est en général pas chauffé. Sans isolation, la dalle entre ce local et le logement du dessus laisse passer la chaleur : le sol du rez-de-chaussée reste froid. Isoler par en dessous traite le problème sans toucher au sol habité.",
          ],
          [
            "La norme SIA 180 « Protection thermique, protection contre l'humidité et climat intérieur dans les bâtiments » est publiée par la ",
            { href: "https://www.sia.ch/fr/", label: "SIA" },
            ". Pour une éventuelle subvention, les conditions à jour sont sur le site officiel du ",
            { href: "https://www.leprogrammebatiments.ch/fr/", label: "Programme Bâtiments" },
            ".",
          ],
        ],
      },
      {
        title: "Comment sont faits les panneaux multicouches",
        paragraphs: [
          [
            "Un panneau à deux couches a une face en laine de bois liée au ciment et une âme isolante. Un panneau à trois couches a une face de chaque côté. La face visible peut rester brute ou être peinte. Sa structure en laine de bois absorbe aussi une partie du bruit dans le local.",
          ],
          [
            "Exemple de produit : les panneaux multicouches UNITEX de Dietrich Isol, avec âme en laine de roche (RF1) ou en EPS (RF2), selon la ",
            { href: "https://www.dietrich-isol.ch/produkt/siteListExtend/unitex-mehrschichtplatten", label: "fiche du fabricant" },
            ". La classe RF indique le comportement au feu. Le produit posé est celui prévu par le projet.",
          ],
          [
            "D'autres panneaux en laine de bois servent de plafonds acoustiques dans les bureaux et les écoles : voir la page ",
            { href: "/services/faux-plafonds", label: "faux-plafonds" },
            ".",
          ],
        ],
      },
      {
        title: "Protection incendie",
        paragraphs: [
          [
            "Selon le local et le bâtiment, des exigences de protection incendie peuvent s'appliquer à l'isolant. Elles figurent dans les prescriptions de l'",
            { href: "https://www.bsvonline.ch/fr/", label: "AEAI" },
            ". Le choix entre âme en laine de roche et âme en EPS se fait avec le projet et, si besoin, avec l'autorité compétente.",
          ],
        ],
      },
    ],
    relatedLinks: [
      { href: "/services/isolation", label: "Isolation thermique et phonique" },
      { href: "/services/faux-plafonds", label: "Faux-plafonds" },
      { href: "/services/isolation-peripherique", label: "Isolation périphérique" },
    ],
    ctaDescription:
      "Décrivez votre sous-sol : surface, hauteur, conduites au plafond. Nous intervenons en Suisse romande.",
    ctaHref: "/contact?service=schichtex",
    process: [
      { step: "01", title: "Relevé du plafond", description: "Surface, hauteur libre, conduites, luminaires et exigences incendie. Choix du panneau et de son épaisseur." },
      { step: "02", title: "Préparation", description: "Contrôle de la dalle, dépose ou déplacement des éléments gênants, traçage du calepinage." },
      { step: "03", title: "Pose", description: "Fixation des panneaux bord à bord sous la dalle, découpes autour des conduites et des luminaires." },
      { step: "04", title: "Finitions", description: "Raccords aux murs et aux poutres, peinture de la face si prévue, nettoyage du local." },
    ],
    materials: [
      "Panneaux multicouches à âme en laine de roche ou en EPS",
      "Faces en laine de bois liée au ciment ou à la magnésite",
      "Exemple : panneaux UNITEX (Dietrich Isol), âme laine de roche RF1 ou EPS RF2",
      "Chevilles, vis et rondelles de fixation",
      "Norme SIA 180, prescriptions de protection incendie AEAI",
    ],
    faq: [
      {
        question: "Qu'est-ce qu'un panneau Schichtex ?",
        answer:
          "Schichtex est un nom de produit, souvent utilisé pour désigner les panneaux isolants multicouches : une âme isolante entre une ou deux faces en laine de bois liée au ciment ou à la magnésite. On les pose surtout sous les plafonds de caves, de garages, de halles et de dépôts.",
      },
      {
        question: "Quelle épaisseur de panneau choisir ?",
        answer:
          "Elle dépend de l'isolation visée, de la hauteur libre du local et des exigences du projet. Plus le panneau est épais, plus il isole, mais plus il réduit la hauteur sous plafond.",
      },
      {
        question: "Les panneaux Schichtex isolent-ils aussi du bruit ?",
        answer:
          "Leur face en laine de bois absorbe une partie du bruit dans le local, ce qui réduit l'écho d'un garage ou d'un dépôt. Ils ne remplacent pas une isolation phonique complète entre deux logements.",
      },
      {
        question: "Peut-on peindre les panneaux ?",
        answer:
          "Oui, avec une peinture adaptée à la laine de bois liée au ciment, en général appliquée au pistolet ou au rouleau. Certains panneaux sont aussi livrés blancs ou teintés d'usine.",
      },
      {
        question: "Âme en laine de roche ou en EPS ?",
        answer:
          "La laine de roche est incombustible ; l'EPS est plus léger. Chez UNITEX par exemple, l'âme en laine de roche est classée RF1 et l'âme en EPS RF2. Le choix dépend des exigences de protection incendie du local, fixées par le projet.",
      },
      {
        question: "Dans quelles régions posez-vous des panneaux Schichtex ?",
        answer:
          "Nous posons ces panneaux dans les cantons de Fribourg, Vaud, Neuchâtel, Genève, du Valais et du Jura.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
