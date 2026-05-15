import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { TeamPreview } from "@/components/site/TeamPreview";
import { AdventuresPreview } from "@/components/site/AdventuresPreview";
import { ServicesPreview } from "@/components/site/ServicesPreview";
import { PortfolioPreview } from "@/components/site/PortfolioPreview";

export const Route = createFileRoute("/")({
  component: Page,
});

function Page() {
  return (
    <main className="bg-background min-h-screen">
      <Nav />
      <Hero />
      <PortfolioPreview />
      <ServicesPreview />
      <TeamPreview />
      <AdventuresPreview />
      <Footer />
    </main>
  );
}
