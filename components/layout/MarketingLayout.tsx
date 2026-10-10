import { SiteAnalytics } from "@/components/analytics/SiteAnalytics";
import { CookieBanner } from "@/components/consent/CookieBanner";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SkipLink } from "./SkipLink";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <SkipLink />
      <CookieBanner />
      <SiteAnalytics />
      <Header />
      <main id="contenu-principal" tabIndex={-1} className="min-w-0 outline-none">
        {children}
      </main>
      <Footer />
    </>
  );
}
