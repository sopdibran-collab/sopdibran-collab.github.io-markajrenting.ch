export interface DefinedTerm {
  name: string;
  description: string;
}

export const serviceGlossary: Record<string, DefinedTerm[]> = {
  platrerie: [
    {
      name: "BA13",
      description:
        "Plaque de plâtre standard de 13 mm d'épaisseur, utilisée pour les cloisons, doublages et habillages muraux en Suisse.",
    },
    {
      name: "Finition Q3",
      description:
        "Niveau de finition plâtrerie standard pour logements, adapté aux peintures mates et papiers peints fins selon les normes SIA.",
    },
    {
      name: "Finition Q4",
      description:
        "Niveau de finition plâtrerie haut de gamme, surface parfaitement lisse, idéale pour peintures satinées et laquées.",
    },
  ],
  peinture: [
    {
      name: "Primaire d'accrochage",
      description:
        "Couche de préparation appliquée sur le support avant la peinture de finition pour assurer l'adhérence et l'uniformité.",
    },
    {
      name: "Peinture siloxane",
      description:
        "Peinture de façade hydrophobe à base de siloxane, résistante aux intempéries et adaptée aux supports minéraux.",
    },
  ],
  "faux-plafonds": [
    {
      name: "Dalles acoustiques",
      description:
        "Éléments de faux-plafond conçus pour absorber les ondes sonores et améliorer le confort acoustique des espaces.",
    },
    {
      name: "Plaque perforée",
      description:
        "Plaque de plâtre perforée permettant l'absorption acoustique, souvent combinée à un matelas isolant.",
    },
  ],
  isolation: [
    {
      name: "Isolation périphérique",
      description:
        "Isolation appliquée sur la face intérieure des parois extérieures pour créer une enveloppe thermique continue.",
    },
    {
      name: "Pare-vapeur",
      description:
        "Membrane posée côté chaud de l'isolant pour empêcher la condensation de vapeur d'eau dans la paroi.",
    },
    {
      name: "Pont thermique",
      description:
        "Zone de la paroi où la chaleur s'échappe plus facilement, souvent aux angles et autour des ouvertures.",
    },
  ],
  renovation: [
    {
      name: "Second œuvre",
      description:
        "Ensemble des travaux de finition intérieure : plâtrerie, peinture, isolation, faux-plafonds, après le gros œuvre.",
    },
  ],
  facades: [
    {
      name: "Crépi",
      description:
        "Enduit décoratif et protecteur appliqué en couche sur les façades pour l'étanchéité et l'esthétique.",
    },
    {
      name: "Ravalement",
      description:
        "Travaux de rénovation de façade comprenant réparation, enduit et peinture pour remettre en état l'enveloppe extérieure.",
    },
  ],
};

export function getGlossaryForService(slug: string): DefinedTerm[] {
  return serviceGlossary[slug] ?? [];
}
