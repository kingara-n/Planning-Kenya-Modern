import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Team } from "@/components/site/Team";

export const Route = createFileRoute("/team")({
  component: Page,
});

function Page() {
  return (
    <main className="bg-background min-h-screen">
      <Nav />
      <Team />
      <Footer />
    </main>
  );
}
