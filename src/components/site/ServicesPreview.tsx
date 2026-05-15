export function ServicesPreview() {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-background rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">Architecture</h3>
            <p className="text-muted-foreground">Innovative architectural design for residential, commercial, and industrial sectors.</p>
          </div>
          <div className="p-8 bg-background rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">Urban Planning</h3>
            <p className="text-muted-foreground">Sustainable urban development and master planning for communities.</p>
          </div>
          <div className="p-8 bg-background rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">Interior Design</h3>
            <p className="text-muted-foreground">Creative interior solutions that blend aesthetics with functionality.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
