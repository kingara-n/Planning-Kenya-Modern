import { Link } from "@tanstack/react-router";

export function PortfolioPreview() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project cards would go here */}
        </div>
        <div className="mt-12 text-center">
          <Link to="/portfolio" className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
