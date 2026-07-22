import { Footer } from "./Footer";
import { Header } from "./Header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-w-0">{children}</main>
      <Footer />
    </>
  );
}
