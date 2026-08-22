import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Service } from "@/lib/content/services";
import { zones } from "@/lib/content/zones";
import { getGlossaryForService } from "@/lib/seo/glossary";
import { siteConfig } from "@/lib/seo/site-config";
import Link from "next/link";

interface ServicePageContentProps {
  service: Service;
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  const glossary = getGlossaryForService(service.slug);
  const label = service.title.toLowerCase();

  return (
    <>
      <div className="mx-auto max-w-content px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </div>

      <Hero
        title={`${service.title} à Fribourg, Lausanne et Genève`}
        subtitle={service.intro}
        primaryCta={{
          label: `Devis ${service.shortTitle.toLowerCase()}`,
          href: `/contact?service=${service.slug}`,
        }}
        secondaryCta={{
          label: `Appeler ${siteConfig.contact.phoneDisplay}`,
          href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
        }}
      />

      <Section background="crepi" texture="crepi" className="py-8 sm:py-10 md:py-12">
        <AnimateIn>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="marque-cote mb-2">Bénéfice</p>
              <p className="font-body text-body text-markaj-primary/90">{service.benefit}</p>
            </div>
            <div>
              <p className="marque-cote mb-2">Pour qui</p>
              <p className="font-body text-body text-markaj-primary/90">{service.audience.join(", ")}</p>
            </div>
            <div>
              <p className="marque-cote mb-2">Types de projets</p>
              <p className="font-body text-body text-markaj-primary/90">{service.projectTypes.join(" · ")}</p>
            </div>
          </div>
        </AnimateIn>
      </Section>

      <Section background="white">
        <AnimateIn className="max-w-prose">
          <h2 className="font-heading text-heading-3 text-markaj-primary">
            Qu&apos;est-ce que la {label} ?
          </h2>
          <p className="mt-4 font-body text-body-lg text-markaj-primary/90">
            {service.definition}
          </p>
        </AnimateIn>
      </Section>

      <Section background="surface" texture="paint">
        <AnimateIn>
          <SectionHeading
            subtitle="Processus"
            title="Comment se déroule un chantier ?"
          />
        </AnimateIn>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {service.process.map((step, index) => (
            <AnimateIn key={step.step} delay={index * 60}>
              <div className="flex gap-4 sm:gap-5">
                <span className="font-heading text-heading-2 text-markaj-crepi-dark">{step.step}</span>
                <div>
                  <h3 className="font-heading text-heading-4 text-markaj-primary">{step.title}</h3>
                  <p className="mt-2 font-body text-body-sm text-markaj-primary/90">{step.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      <Section background="white">
        <AnimateIn>
          <SectionHeading
            subtitle="Matériaux & normes"
            title="Quels matériaux et normes appliquons-nous ?"
          />
        </AnimateIn>
        <ul className="grid max-w-2xl gap-3">
          {service.materials.map((material, index) => (
            <AnimateIn key={material} delay={index * 40}>
              <li className="flex items-start gap-3 font-body text-body text-markaj-primary/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-markaj-primary" />
                {material}
              </li>
            </AnimateIn>
          ))}
        </ul>
      </Section>

      <Section background="crepi" texture="crepi">
        <AnimateIn>
          <SectionHeading
            subtitle="Zones desservies"
            title={`${service.title} près de chez vous`}
            intro="Nous intervenons dans toute la Suisse romande. Choisissez votre région pour le détail des communes."
          />
        </AnimateIn>
        <div className="flex flex-wrap gap-3">
          {zones.map((zone) => (
            <Link
              key={zone.slug}
              href={`/zones/${zone.slug}`}
              className="border border-markaj-primary/20 bg-markaj-white px-4 py-2 font-body text-body-sm font-medium text-markaj-primary transition-colors hover:border-markaj-primary/50"
            >
              {label} {zone.shortName}
            </Link>
          ))}
        </div>
        <p className="mt-6 max-w-prose font-body text-body-sm text-markaj-primary/80">
          Couverture :{" "}
          {zones.map((z) => z.villes[0]).join(", ")}
          {" — "}
          <Link href="/zones" className="underline-offset-4 hover:underline">
            toutes les zones d&apos;intervention
          </Link>
          .
        </p>
      </Section>

      {glossary.length > 0 && (
        <Section background="surface" texture="paint">
          <AnimateIn>
            <SectionHeading
              subtitle="Glossaire"
              title={`Quels termes techniques liés à la ${label} ?`}
            />
          </AnimateIn>
          <dl className="grid max-w-2xl gap-6">
            {glossary.map((term, index) => (
              <AnimateIn key={term.name} delay={index * 50}>
                <div>
                  <dt className="font-heading text-heading-4 text-markaj-primary">{term.name}</dt>
                  <dd className="mt-2 font-body text-body text-markaj-primary/90">{term.description}</dd>
                </div>
              </AnimateIn>
            ))}
          </dl>
        </Section>
      )}

      <FaqSection
        title={`Questions fréquentes sur la ${label}`}
        items={service.faq}
      />

      <Section background="white">
        <SectionHeading
          subtitle="Liens utiles"
          title="Découvrir aussi"
        />
        <div className="flex flex-wrap gap-4 font-body text-body">
          <Link href="/" className="text-markaj-primary underline-offset-4 hover:underline">Accueil</Link>
          <Link href="/services" className="text-markaj-primary underline-offset-4 hover:underline">Tous les services</Link>
          <Link href="/zones" className="text-markaj-primary underline-offset-4 hover:underline">Zones d&apos;intervention</Link>
          <Link href="/faq" className="text-markaj-primary underline-offset-4 hover:underline">FAQ générale</Link>
          <Link
            href={`/contact?service=${service.slug}`}
            className="text-markaj-primary underline-offset-4 hover:underline"
          >
            Contact & devis
          </Link>
        </div>
      </Section>

      <CtaBanner
        title={`Un projet de ${label} ?`}
        description="Décrivez votre chantier : devis gratuit, réponse sous 5 jours ouvrés, intervention à Fribourg, Lausanne, Genève et en Suisse romande."
      />
    </>
  );
}
