import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-xl font-bold">Planning Kenya</h3>
          <p className="text-muted-foreground mt-2">Designing the future of Kenya.</p>
        </div>
        <div className="flex gap-8">
          <Link to="/story" className="hover:text-primary transition-colors">Our Story</Link>
          <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Planning Kenya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
