import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileQuickBar } from "./MobileQuickBar";
import { SkipLink } from "./SkipLink";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <SkipLink />
      <Header />
      <main
        id="contenu-principal"
        tabIndex={-1}
        className="min-w-0 pb-[4.75rem] outline-none lg:pb-0"
      >
        {children}
      </main>
      <Footer />
      <MobileQuickBar />
    </>
  );
}
