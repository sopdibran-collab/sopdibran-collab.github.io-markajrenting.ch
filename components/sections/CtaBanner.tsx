import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/seo/site-config";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBanner({
  title = "Parlons de votre chantier",
  description = "Décrivez votre projet : nous vous recontactons sous 5 jours ouvrés pour un devis gratuit et une visite sur site si besoin.",
}: CtaBannerProps) {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <Section background="primary" texture="concrete-dark">
      <AnimateIn>
        <div className="flex min-w-0 flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="min-w-0 max-w-xl">
            <h2 className="font-heading text-xl text-markaj-white sm:text-heading-2 md:text-heading-1">
              {title}
            </h2>
            <p className="mt-3 font-body text-body text-markaj-white/80 sm:text-body-lg">
              {description}
            </p>
          </div>
          <div className="flex w-full min-w-0 shrink-0 flex-col gap-5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <Button
              href="/contact"
              variant="primary"
              tone="dark"
              size="lg"
              className="w-full max-w-full sm:w-auto"
            >
              Demander un devis
            </Button>
            <Button
              href={phoneHref}
              variant="secondary"
              tone="dark"
              size="lg"
              className="w-full max-w-full sm:w-auto"
            >
              Appeler {siteConfig.contact.phoneDisplay}
            </Button>
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
}
