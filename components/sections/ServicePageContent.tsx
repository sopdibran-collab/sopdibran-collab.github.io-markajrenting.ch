import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Service } from "@/lib/content/services";
import { getGlossaryForService } from "@/lib/seo/glossary";
import Link from "next/link";

interface ServicePageContentProps {
  service: Service;
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  const glossary = getGlossaryForService(service.slug);
  const hasGlossary = glossary.length > 0;
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
        title={`${service.title} en Suisse romande`}
        subtitle={service.intro}
      />

      <Section background="white">
        <AnimateIn className="max-w-prose">
          <h2 className="font-heading text-heading-3 text-markaj-primary">
            Qu&apos;est-ce que la {service.title.toLowerCase()} ?
          </h2>
          <p className="mt-4 font-body text-body-lg text-markaj-mineral-dark">
            {service.definition}
          </p>
        </AnimateIn>
      </Section>

      <Section background="surface" texture="paint">
        <AnimateIn>
          <SectionHeading
            subtitle="Processus"
            index="01"
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
                  <p className="mt-2 font-body text-body-sm text-markaj-mineral-dark">{step.description}</p>
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
            index="02"
            title="Quels matériaux et normes appliquons-nous ?"
          />
        </AnimateIn>
        <ul className="grid max-w-2xl gap-3">
          {service.materials.map((material, index) => (
            <AnimateIn key={material} delay={index * 40}>
              <li className="flex items-start gap-3 font-body text-body text-markaj-mineral-dark">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-markaj-primary" />
                {material}
              </li>
            </AnimateIn>
          ))}
        </ul>
      </Section>

      {glossary.length > 0 && (
        <Section background="crepi" texture="crepi">
          <AnimateIn>
            <SectionHeading
              subtitle="Glossaire"
              index="03"
              title={`Quels termes techniques liés à la ${service.title.toLowerCase()} ?`}
            />
          </AnimateIn>
          <dl className="grid max-w-2xl gap-6">
            {glossary.map((term, index) => (
              <AnimateIn key={term.name} delay={index * 50}>
                <div>
                  <dt className="font-heading text-heading-4 text-markaj-primary">{term.name}</dt>
                  <dd className="mt-2 font-body text-body text-markaj-mineral-dark">{term.description}</dd>
                </div>
              </AnimateIn>
            ))}
          </dl>
        </Section>
      )}

      <FaqSection
        title={`Questions fréquentes sur la ${service.title.toLowerCase()}`}
        index={hasGlossary ? "04" : "03"}
        items={service.faq}
      />

      <Section background="white">
        <SectionHeading
          subtitle="Liens utiles"
          index={hasGlossary ? "05" : "04"}
          title="Découvrir aussi"
        />
        <div className="flex flex-wrap gap-4 font-body text-body">
          <Link href="/" className="text-markaj-primary underline-offset-4 hover:underline">Accueil</Link>
          <Link href="/services" className="text-markaj-primary underline-offset-4 hover:underline">Tous les services</Link>
          <Link href="/zones" className="text-markaj-primary underline-offset-4 hover:underline">Zones d&apos;intervention</Link>
          <Link href="/faq" className="text-markaj-primary underline-offset-4 hover:underline">FAQ générale</Link>
          <Link href="/contact" className="text-markaj-primary underline-offset-4 hover:underline">Contact & devis</Link>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
