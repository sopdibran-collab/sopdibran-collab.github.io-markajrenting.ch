import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { GlobalSchemas } from "@/components/seo/GlobalSchemas";

export default function MarketingRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalSchemas />
      <MarketingLayout>{children}</MarketingLayout>
    </>
  );
}
