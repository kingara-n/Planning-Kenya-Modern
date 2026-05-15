import { Link } from "@tanstack/react-router";

export function AdventuresPreview() {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Latest Adventures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Adventure cards would go here */}
        </div>
        <div className="mt-12 text-center">
          <Link to="/adventure" className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
            Explore All Adventures
          </Link>
        </div>
      </div>
    </section>
  );
}
