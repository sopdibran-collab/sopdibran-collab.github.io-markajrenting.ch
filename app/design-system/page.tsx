import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Logo } from "@/components/ui/Logo";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Design System",
  description: "Preview interne du design system Markaj Renting SA.",
  path: "/design-system",
  noindex: true,
});

const palette = [
  { name: "Bleu Markaj (primary)", token: "markaj-primary", hex: "#0A2B5E", className: "bg-markaj-primary" },
  { name: "Bleu foncé", token: "markaj-primary-dark", hex: "#071F45", className: "bg-markaj-primary-dark" },
  { name: "Blanc", token: "markaj-white", hex: "#FFFFFF", className: "bg-markaj-white border border-markaj-mineral/20" },
  { name: "Gris minéral", token: "markaj-mineral", hex: "#8C929D", className: "bg-markaj-mineral" },
  { name: "Beige crépi", token: "markaj-crepi", hex: "#DBCFB0", className: "bg-markaj-crepi" },
  { name: "Crépi clair", token: "markaj-crepi-light", hex: "#E8E3D3", className: "bg-markaj-crepi-light" },
  { name: "Surface", token: "markaj-surface", hex: "#FAFAF8", className: "bg-markaj-surface border border-markaj-mineral/20" },
];

export default function DesignSystemPage() {
  return (
    <div className="bg-markaj-white">
      {/* Header preview */}
      <header className="border-b border-markaj-mineral/15 bg-markaj-white">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-8">
          <Logo />
          <span className="font-body text-body-sm text-markaj-mineral">
            Preview interne — non indexé
          </span>
        </div>
      </header>

      <main>
        {/* Intro */}
        <Section background="white" texture="paint" className="py-20">
          <Badge variant="outline" className="mb-4">
            Phase 1 — Design System
          </Badge>
          <h1 className="max-w-3xl font-heading text-display md:text-display-lg text-balance text-markaj-primary">
            Charte visuelle Markaj Renting SA
          </h1>
          <p className="mt-6 max-w-prose text-body-lg text-markaj-mineral-dark">
            Référence interne pour valider couleurs, typographie, composants UI et textures
            avant la construction des pages marketing.
          </p>
        </Section>

        {/* Palette */}
        <Section background="surface">
          <SectionHeading
            subtitle="Couleurs"
            title="Palette Markaj"
            intro="Bleu nuit profond, blanc pur, gris minéral chaud et beige crépi — une atmosphère premium et architecturale."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {palette.map((color) => (
              <Card key={color.token} padding="sm" className="overflow-hidden p-0">
                <div className={color.className + " h-24"} />
                <div className="p-4">
                  <p className="font-body text-body-sm font-medium text-markaj-primary">
                    {color.name}
                  </p>
                  <p className="font-body text-caption text-markaj-mineral">
                    {color.token} · {color.hex}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Typography */}
        <Section background="white">
          <SectionHeading
            subtitle="Typographie"
            title="Hiérarchie des textes"
            intro="Playfair Display pour les titres (élégance, tradition), Inter pour le corps (lisibilité maximale)."
          />
          <div className="space-y-8 border-l-2 border-markaj-crepi pl-8">
            <div>
              <p className="mb-2 font-body text-caption uppercase tracking-wider text-markaj-mineral">
                Display / H1 Hero
              </p>
              <p className="font-heading text-display text-markaj-primary">
                Plâtrerie & peinture d&apos;excellence
              </p>
            </div>
            <div>
              <p className="mb-2 font-body text-caption uppercase tracking-wider text-markaj-mineral">
                Heading 2
              </p>
              <p className="font-heading text-heading-2 text-markaj-primary">
                Nos expertises en finition de bâtiment
              </p>
            </div>
            <div>
              <p className="mb-2 font-body text-caption uppercase tracking-wider text-markaj-mineral">
                Heading 3
              </p>
              <p className="font-heading text-heading-3 text-markaj-primary">
                Processus de chantier maîtrisé
              </p>
            </div>
            <div>
              <p className="mb-2 font-body text-caption uppercase tracking-wider text-markaj-mineral">
                Corps de texte
              </p>
              <p className="max-w-prose font-body text-body text-markaj-mineral-dark">
                Markaj Renting SA est une entreprise familiale active en Suisse romande depuis
                plus de 20 ans. Nous réalisons des travaux de plâtrerie, peinture, faux-plafonds,
                isolation et rénovation conformes aux normes suisses (SIA), avec un souci constant
                de la qualité des finitions.
              </p>
            </div>
            <div>
              <p className="mb-2 font-body text-caption uppercase tracking-wider text-markaj-mineral">
                Petit texte / légende
              </p>
              <p className="font-body text-body-sm text-markaj-mineral">
                BA13 · Isolation périphérique · Crépi intérieur
              </p>
            </div>
          </div>
        </Section>

        {/* Buttons */}
        <Section background="crepi" texture="crepi">
          <SectionHeading
            subtitle="Actions"
            title="Boutons"
            intro="Trois variantes « Trait de chantier » : Bloc (conversion), Cote (alternative), Niveau (lien discret)."
          />
          <div className="flex flex-wrap items-center gap-8">
            <Button variant="primary" size="lg">
              Demander un devis
            </Button>
            <Button variant="secondary" size="md">
              Nous contacter
            </Button>
            <Button variant="ghost" size="sm">
              En savoir plus
            </Button>
          </div>
          <div className="mt-8 bg-markaj-primary p-8">
            <p className="mb-6 font-body text-body-sm text-markaj-white/70">
              Sur fond sombre — tone=&quot;dark&quot;
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <Button variant="primary" tone="dark">
                Demander un devis
              </Button>
              <Button variant="secondary" tone="dark">
                Voir nos réalisations
              </Button>
              <Button variant="ghost" tone="dark">
                079 430 18 13
              </Button>
            </div>
          </div>
        </Section>

        {/* Cards */}
        <Section background="white" texture="paint">
          <SectionHeading
            subtitle="Composants"
            title="Cartes"
            intro="Bordures discrètes, ombres légères — pas de style SaaS générique."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <Card hover>
              <Badge className="mb-3">Plâtrerie</Badge>
              <h3 className="font-heading text-heading-4 text-markaj-primary">
                Cloisons & doublages
              </h3>
              <p className="mt-2 font-body text-body-sm text-markaj-mineral">
                BA13, joints prêts à peindre, finitions impeccables selon les normes suisses.
              </p>
            </Card>
            <Card hover>
              <Badge className="mb-3">Peinture</Badge>
              <h3 className="font-heading text-heading-4 text-markaj-primary">
                Peinture intérieure & extérieure
              </h3>
              <p className="mt-2 font-body text-body-sm text-markaj-mineral">
                Préparation des supports, application soignée, matériaux professionnels.
              </p>
            </Card>
            <Card hover>
              <Badge variant="crepi" className="mb-3">
                20 ans
              </Badge>
              <h3 className="font-heading text-heading-4 text-markaj-primary">
                Entreprise familiale
              </h3>
              <p className="mt-2 font-body text-body-sm text-markaj-mineral">
                20 collaborateurs qualifiés, ancrés à Fribourg et actifs en Suisse romande.
              </p>
            </Card>
          </div>
        </Section>

        {/* Textures */}
        <Section background="white">
          <SectionHeading
            subtitle="Textures"
            title="Fonds texturés"
            intro="Textures désaturées à faible opacité — jamais au détriment de la lisibilité."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-texture-paint overflow-hidden rounded-markaj border border-markaj-mineral/15 bg-markaj-white p-8">
              <p className="relative z-10 font-heading text-heading-4 text-markaj-primary">
                Grain fin (noise)
              </p>
              <p className="relative z-10 mt-2 font-body text-body-sm text-markaj-mineral">
                markaj-noise-soft-01 · opacité 4%
              </p>
            </div>
            <div className="bg-texture-crepi overflow-hidden rounded-markaj border border-markaj-mineral/15 bg-markaj-crepi-light p-8">
              <p className="relative z-10 font-heading text-heading-4 text-markaj-primary">
                Enduit lissé (plaster)
              </p>
              <p className="relative z-10 mt-2 font-body text-body-sm text-markaj-mineral">
                markaj-plaster-soft-01 · opacité 5%
              </p>
            </div>
            <div className="bg-texture-concrete overflow-hidden rounded-markaj border border-markaj-mineral/15 bg-[#d5cfc9] p-8">
              <p className="relative z-10 font-heading text-heading-4 text-markaj-primary">
                Béton adouci (concrete)
              </p>
              <p className="relative z-10 mt-2 font-body text-body-sm text-markaj-mineral">
                markaj-concrete-smooth-01 · opacité 3.5%
              </p>
            </div>
          </div>
        </Section>

        {/* Logo variants */}
        <Section background="primary" texture="concrete-dark">
          <SectionHeading
            subtitle="Identité"
            title="Logo"
            intro="Placeholder en attendant les fichiers finaux. Trois variantes prévues."
            light
          />
          <div className="flex flex-wrap items-center gap-12">
            <div>
              <p className="mb-3 font-body text-caption uppercase tracking-wider text-markaj-white/60">
                Complet
              </p>
              <div className="rounded-markaj bg-markaj-white p-4">
                <Logo />
              </div>
            </div>
            <div>
              <p className="mb-3 font-body text-caption uppercase tracking-wider text-markaj-white/60">
                Monogramme
              </p>
              <div className="rounded-markaj bg-markaj-white p-4">
                <Logo variant="monogram" />
              </div>
            </div>
            <div>
              <p className="mb-3 font-body text-caption uppercase tracking-wider text-markaj-white/60">
                Blanc sur fond sombre
              </p>
              <div className="rounded-markaj bg-markaj-primary-dark p-4">
                <Logo variant="white" />
              </div>
            </div>
          </div>
        </Section>

        {/* SectionHeading demo */}
        <Section background="surface">
          <SectionHeading
            subtitle="Sections"
            title="En-têtes de section"
            intro="Sous-titre en capitales espacées, titre serif, paragraphe d'introduction optionnel."
            align="center"
          />
        </Section>

        {/* ============================================================ */}
        {/* PROPOSITION 2026 — direction « Trait de chantier »           */}
        {/* ============================================================ */}
        <Section background="white" id="proposition">
          <div className="mb-12 border-l-4 border-markaj-crepi bg-markaj-surface p-6">
            <p className="font-mono text-caption font-semibold uppercase tracking-[0.18em] text-markaj-crepi-dark">
              Direction validée — appliquée à tout le site
            </p>
            <h2 className="mt-3 font-heading text-heading-2 text-markaj-primary">
              Direction « Trait de chantier »
            </h2>
            <p className="mt-3 max-w-prose font-body text-body text-markaj-mineral-dark">
              Langage graphique emprunté au dessin technique et au relevé de
              chantier : angles vifs, ombres franches sans flou, repères de
              cotation, étiquettes monospace numérotées. Aucun composant
              SaaS générique — une signature propre au bâtiment.
            </p>
          </div>

          {/* Étiquette de cotation */}
          <div className="mb-12">
            <p className="mb-4 font-body text-caption uppercase tracking-wider text-markaj-mineral">
              Étiquette de cotation (remplace l&apos;eyebrow générique)
            </p>
            <div className="flex flex-col gap-3">
              <span className="marque-cote" data-index="01">Expertises</span>
              <span className="marque-cote" data-index="02">Zones d&apos;intervention</span>
              <span className="marque-cote" data-index="03">Réalisations</span>
            </div>
          </div>

          {/* Boutons proposés — fond clair */}
          <div className="mb-12">
            <p className="mb-4 font-body text-caption uppercase tracking-wider text-markaj-mineral">
              Boutons proposés — fond clair
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <button type="button" className="btn-bloc">
                Demander un devis
              </button>
              <button type="button" className="btn-cote">
                Nos réalisations
              </button>
              <button type="button" className="btn-niveau">
                Voir toutes les zones
              </button>
            </div>
            <ul className="mt-6 max-w-prose space-y-1 font-body text-body-sm text-markaj-mineral-dark">
              <li>
                <strong className="text-markaj-primary">Bloc</strong> — ombre
                franche décalée façon matériau posé ; s&apos;enfonce au clic.
              </li>
              <li>
                <strong className="text-markaj-primary">Cote</strong> — les
                repères d&apos;angle referment le cadre au survol, comme une
                cotation d&apos;architecte.
              </li>
              <li>
                <strong className="text-markaj-primary">Niveau</strong> — la
                ligne se remplit comme un niveau à bulle qu&apos;on ajuste.
              </li>
            </ul>
          </div>

          {/* Boutons proposés — fond sombre */}
          <div className="mb-12 bg-markaj-primary p-10">
            <p className="mb-6 font-body text-caption uppercase tracking-wider text-markaj-white/60">
              Sur fond bleu nuit
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <button type="button" className="btn-bloc btn-bloc--sable">
                Demander un devis
              </button>
              <button type="button" className="btn-cote btn-cote--light">
                Nous contacter
              </button>
            </div>
          </div>

          {/* Panneau calque technique */}
          <div>
            <p className="mb-4 font-body text-caption uppercase tracking-wider text-markaj-mineral">
              Panneau « calque technique » (cartes, chiffres clés, process)
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="panel-chantier">
                <span className="marque-cote" data-index="01">Plâtrerie</span>
                <p className="mt-4 font-heading text-heading-3 text-markaj-primary">
                  Cloisons &amp; doublages
                </p>
                <p className="mt-2 font-body text-body-sm text-markaj-mineral-dark">
                  BA13, joints prêts à peindre, finitions selon normes SIA.
                </p>
              </div>
              <div className="panel-chantier">
                <span className="marque-cote" data-index="02">Peinture</span>
                <p className="mt-4 font-heading text-heading-3 text-markaj-primary">
                  Intérieure &amp; extérieure
                </p>
                <p className="mt-2 font-body text-body-sm text-markaj-mineral-dark">
                  Préparation des supports, application soignée.
                </p>
              </div>
              <div className="panel-chantier">
                <span className="marque-cote" data-index="03">Expérience</span>
                <p className="mt-4 font-heading text-heading-3 text-markaj-primary">
                  20 ans de chantiers
                </p>
                <p className="mt-2 font-body text-body-sm text-markaj-mineral-dark">
                  Entreprise familiale, 20 collaborateurs qualifiés.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-markaj-mineral/15 bg-markaj-white py-8">
        <div className="mx-auto max-w-content px-6 text-center font-body text-body-sm text-markaj-mineral lg:px-8">
          Design System Markaj Renting SA — Usage interne uniquement
        </div>
      </footer>
    </div>
  );
}
