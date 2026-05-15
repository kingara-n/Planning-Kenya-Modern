import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  component: Page,
});

function Page() {
  return (
    <main className="bg-background min-h-screen text-white">
      <Nav />

      <section className="px-6 md:px-16 pt-40 pb-16 max-w-7xl mx-auto">
        <Reveal>
          <p className="text-sm tracking-[0.3em] text-white/60 mb-6">CONTACT</p>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className="text-white font-extralight leading-[1.02] mb-8"
            style={{ fontWeight: 200, fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Let\u0027s discuss
            <br />
            your vision.
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-lg md:text-xl text-white/75 font-light max-w-2xl mb-16">
            We are always interested in hearing about new projects and potential
            collaborations. Reach out to us through any of the channels below.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <Reveal delay={200}>
            <div>
              <h3 className="text-white font-light text-xl mb-6">Nairobi</h3>
              <address className="not-italic text-white/60 font-light leading-relaxed space-y-1">
                <p>Planning House</p>
                <p>Lower Kabete Road</p>
                <p>P.O. Box 40151 - 00100</p>
                <p>Nairobi, Kenya</p>
              </address>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div>
              <h3 className="text-white font-light text-xl mb-6">Connect</h3>
              <div className="space-y-4">
                <a
                  href="mailto:info@planning-kenya.com"
                  className="block text-white/60 hover:text-white transition-colors duration-300 font-light"
                >
                  info@planning-kenya.com
                </a>
                <a
                  href="tel:+254202720000"
                  className="block text-white/60 hover:text-white transition-colors duration-300 font-light"
                >
                  +254 20 272 0000
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div>
              <h3 className="text-white font-light text-xl mb-6">Follow</h3>
              <div className="flex gap-6">
                {[
                  { name: "LinkedIn", href: "#" },
                  { name: "Instagram", href: "#" },
                  { name: "Twitter", href: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 font-light text-sm tracking-widest uppercase"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
