import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { realisations } from "@/lib/content/realisations";
import { services, type Service } from "@/lib/content/services";
import { zones } from "@/lib/content/zones";
import { getGlossaryForService } from "@/lib/seo/glossary";
import { siteConfig } from "@/lib/seo/site-config";
import Link from "next/link";

interface ServicePageContentProps {
  service: Service;
}

const guidesByService: Record<string, { href: string; label: string }[]> = {
  isolation: [
    { href: "/blog/isolation-thermique-vs-phonique", label: "Isolation thermique ou phonique" },
    { href: "/blog/choisir-isolant-selon-paroi", label: "Choisir un isolant selon la paroi" },
    { href: "/blog/isolation-peripherique-avantages", label: "Isolation périphérique" },
  ],
  platrerie: [
    { href: "/blog/choisir-finition-platrerie-q3-q4", label: "Finition Q3 ou Q4" },
  ],
};

function faqTitle(service: Service): string {
  switch (service.slug) {
    case "faux-plafonds":
      return "Questions fréquentes sur les faux-plafonds";
    case "isolation":
      return "Questions fréquentes sur l'isolation";
    case "facades":
      return "Questions fréquentes sur les façades";
    case "renovation":
      return "Questions fréquentes sur la rénovation";
    default:
      return `Questions fréquentes sur la ${service.title.toLowerCase()}`;
  }
}

function projectCta(service: Service): string {
  switch (service.slug) {
    case "isolation":
      return "Un projet d'isolation ?";
    case "facades":
      return "Un projet de façade ?";
    case "faux-plafonds":
      return "Un projet de faux-plafond ?";
    default:
      return `Un projet de ${service.shortTitle.toLowerCase()} ?`;
  }
}

function relatedServices(slug: string): { href: string; label: string }[] {
  if (slug === "renovation") {
    return services
      .filter((item) => item.slug !== "renovation")
      .map((item) => ({ href: `/services/${item.slug}`, label: item.title }));
  }
  if (slug === "peinture") {
    return [{ href: "/services/facades", label: "Rénovation de façades et crépi" }];
  }
  if (slug === "facades") {
    return [{ href: "/services/peinture", label: "Travaux de peinture" }];
  }
  return [];
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  const glossary = getGlossaryForService(service.slug);
  const guides = guidesByService[service.slug] ?? [];
  const linkedServices = relatedServices(service.slug);
  const published = realisations.filter((project) => project.serviceSlug === service.slug);

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
        title={service.headline}
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
          <h2 className="font-heading text-heading-3 text-markaj-primary">{service.definitionTitle}</h2>
          <p className="mt-4 font-body text-body-lg text-markaj-primary/90">{service.definition}</p>
        </AnimateIn>
        {service.clarifications && service.clarifications.length > 0 && (
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {service.clarifications.map((item) => (
              <div key={item.title}>
                <h3 className="font-heading text-heading-4 text-markaj-primary">{item.title}</h3>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mt-3 font-body text-body text-markaj-primary/90">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}
      </Section>

      <Section background="surface" texture="paint">
        <AnimateIn>
          <SectionHeading subtitle="Processus" title="Comment se déroule un chantier ?" />
        </AnimateIn>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {service.process.map((step, index) => (
            <AnimateIn key={step.title} delay={index * 60}>
              <div className="border-t-2 border-markaj-primary/15 pt-4">
                <h3 className="font-heading text-heading-4 text-markaj-primary">{step.title}</h3>
                <p className="mt-2 font-body text-body-sm text-markaj-primary/90">{step.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      <Section background="white">
        <AnimateIn>
          <SectionHeading subtitle="Matériaux & normes" title="Quels matériaux et normes appliquons-nous ?" />
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

      {published.length > 0 && (
        <Section background="surface">
          <SectionHeading
            subtitle="Chantiers publiés"
            title="Réalisations liées à ce métier"
            intro="Uniquement les projets déjà documentés. Une ville citée ailleurs n'est pas une réalisation."
          />
          <ul className="grid max-w-2xl gap-3">
            {published.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/realisations#${project.id}`}
                  className="font-body text-body text-markaj-primary underline-offset-4 hover:underline"
                >
                  {project.title}
                </Link>
                <span className="font-body text-body text-markaj-primary/80"> — {project.location}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {guides.length > 0 && (
        <Section background="white">
          <SectionHeading
            subtitle="Guides"
            title="Pour préciser le choix"
            intro="Ces articles restent informatifs. Le devis et le chantier passent par cette page."
          />
          <ul className="grid max-w-2xl gap-3">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link href={guide.href} className="font-body text-body text-markaj-primary underline-offset-4 hover:underline">
                  {guide.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {linkedServices.length > 0 && (
        <Section background="crepi" texture="crepi">
          <SectionHeading
            subtitle="Métiers liés"
            title={service.slug === "renovation" ? "Les lots du projet" : "Page à distinguer"}
            intro={
              service.slug === "renovation"
                ? "La rénovation coordonne plusieurs interventions. Chaque métier a sa page."
                : "La peinture des pièces et la rénovation de façade ne décrivent pas le même chantier."
            }
          />
          <div className="flex flex-wrap gap-3">
            {linkedServices.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-markaj-primary/20 bg-markaj-white px-4 py-2 font-body text-body-sm font-medium text-markaj-primary transition-colors hover:border-markaj-primary/50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section background="surface">
        <AnimateIn>
          <SectionHeading
            subtitle="Zones desservies"
            title="Interventions en Suisse romande"
            intro="Le siège est à Fribourg. Choisissez un canton pour les communes desservies. Une commune n'est pas un chantier photographié."
          />
        </AnimateIn>
        <div className="flex flex-wrap gap-3">
          {zones.map((zone) => (
            <Link
              key={zone.slug}
              href={`/zones/${zone.slug}`}
              className="border border-markaj-primary/20 bg-markaj-white px-4 py-2 font-body text-body-sm font-medium text-markaj-primary transition-colors hover:border-markaj-primary/50"
            >
              Nos interventions — {zone.shortName}
            </Link>
          ))}
        </div>
      </Section>

      {glossary.length > 0 && (
        <Section background="surface" texture="paint">
          <AnimateIn>
            <SectionHeading subtitle="Glossaire" title="Termes utilisés sur nos chantiers" />
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

      <FaqSection title={faqTitle(service)} items={service.faq} />

      <Section background="white">
        <SectionHeading subtitle="Liens utiles" title="Découvrir aussi" />
        <div className="flex flex-wrap gap-4 font-body text-body">
          <Link href="/services" className="text-markaj-primary underline-offset-4 hover:underline">
            Tous les services
          </Link>
          <Link href="/realisations" className="text-markaj-primary underline-offset-4 hover:underline">
            Réalisations
          </Link>
          <Link href="/zones" className="text-markaj-primary underline-offset-4 hover:underline">
            Zones d&apos;intervention
          </Link>
          <Link href="/faq" className="text-markaj-primary underline-offset-4 hover:underline">
            FAQ générale
          </Link>
          <Link
            href={`/contact?service=${service.slug}`}
            className="text-markaj-primary underline-offset-4 hover:underline"
          >
            Contact et devis
          </Link>
        </div>
      </Section>

      <CtaBanner
        title={projectCta(service)}
        description="Décrivez votre chantier : devis gratuit, réponse sous 5 jours ouvrés. Interventions en Suisse romande, depuis Fribourg."
      />
    </>
  );
}
