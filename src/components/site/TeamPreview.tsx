import { Link } from "@tanstack/react-router";

export function TeamPreview() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Our experts bring decades of experience in shaping Kenya's landscape.
            </p>
          </div>
          <Link to="/team" className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
            Meet the Experts
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team members would go here */}
        </div>
      </div>
    </section>
  );
}
