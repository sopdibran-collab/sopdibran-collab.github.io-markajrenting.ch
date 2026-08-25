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
      <Header />
      <main id="contenu-principal" tabIndex={-1} className="min-w-0 outline-none">
        {children}
      </main>
      <Footer />
    </>
  );
}
