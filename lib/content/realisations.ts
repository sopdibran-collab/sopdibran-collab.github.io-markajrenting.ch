export interface Realisation {
  id: string;
  title: string;
  location: string;
  service: string;
  materials: string;
  description: string;
  beforeColor: string;
  afterColor: string;
}

export const realisations: Realisation[] = [
  {
    id: "1",
    title: "Rénovation complète d'appartement",
    location: "Fribourg",
    service: "Rénovation",
    materials: "BA13, isolation laine de roche, peinture acrylique",
    description: "Transformation complète d'un appartement de 4 pièces : nouvelles cloisons, isolation des murs extérieurs et peinture intégrale.",
    beforeColor: "bg-stone-300",
    afterColor: "bg-markaj-crepi-light",
  },
  {
    id: "2",
    title: "Faux-plafond acoustique open space",
    location: "Lausanne",
    service: "Faux-plafonds",
    materials: "Dalles minérales acoustiques, suspentes réglementaires",
    description: "Installation d'un faux-plafond acoustique dans un open space de 200 m² avec intégration de spots LED.",
    beforeColor: "bg-gray-400",
    afterColor: "bg-markaj-surface",
  },
  {
    id: "3",
    title: "Ravalement de façade",
    location: "Romont",
    service: "Façades",
    materials: "Enduit monocouche, peinture siloxane",
    description: "Réparation de fissures, reprise d'enduit et peinture de façade sur immeuble résidentiel de 6 logements.",
    beforeColor: "bg-stone-400",
    afterColor: "bg-markaj-crepi",
  },
  {
    id: "4",
    title: "Isolation et doublage",
    location: "Bulle",
    service: "Isolation",
    materials: "Laine de verre, pare-vapeur, BA13",
    description: "Isolation périphérique et doublage de murs extérieurs dans une maison individuelle des années 1970.",
    beforeColor: "bg-stone-300",
    afterColor: "bg-white",
  },
  {
    id: "5",
    title: "Peinture intérieure bureaux",
    location: "Vevey",
    service: "Peinture",
    materials: "Peinture acrylique mate, primaire universel",
    description: "Peinture de 800 m² de bureaux en phase avec déménagement progressif des collaborateurs.",
    beforeColor: "bg-gray-300",
    afterColor: "bg-markaj-surface",
  },
  {
    id: "6",
    title: "Cloisons et finitions Q4",
    location: "Fribourg",
    service: "Plâtrerie",
    materials: "BA13, finition Q4, bandes haute résistance",
    description: "Création de cloisons et redistribution d'espaces dans un cabinet médical avec finition Q4.",
    beforeColor: "bg-stone-300",
    afterColor: "bg-white",
  },
];
