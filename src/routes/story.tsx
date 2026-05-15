import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/story")({
  component: Page,
});

function Page() {
  return (
    <main className="bg-background min-h-screen text-white">
      <Nav />

      <section className="px-6 md:px-16 pt-40 pb-24 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <Reveal>
            <p className="text-sm tracking-[0.3em] text-white/60 mb-8 uppercase">
              Our Story
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="text-white font-extralight leading-[1.05] mb-12"
              style={{ fontWeight: 200, fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              Four decades of design,
              <br />
              <span className="italic font-serif">shaping a skyline.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-16 max-w-3xl">
              From a small balcony above a Nairobi garage in 1978 to a
              multi-disciplinary practice defining the Kenyan horizon.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <Reveal delay={300}>
            <div className="space-y-10 text-white/70 font-light leading-relaxed text-lg">
              <p>
                Founded by Jim Archer and Trevor Andrews, Planning Systems
                Services Ltd was born from a desire to create architecture that
                responds deeply to the Kenyan context. What began as a two-man
                operation has evolved into one of East Africa\u0027s most respected
                architectural practices.
              </p>
              <p>
                Our philosophy has always been centered on the intersection of
                context, climate, and craft. We believe that architecture
                shouldn\u0027t just sit on the land, but belong to it. This belief
                has guided us through hundreds of projects, from the landmark I\u0026M
                Bank Tower to sustainable residential developments and high-end
                hospitality projects.
              </p>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
              <img
                src="/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I\u0026M BANK TOWER, 2001/IMAGES/I\u0026M BANK TOWER  RETOUCHED.jpg"
                alt="I\u0026M Bank Tower"
                className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Founded", value: "1978" },
            { label: "Projects", value: "500+" },
            { label: "Awards", value: "45+" },
            { label: "Staff", value: "40+" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div>
                <p className="text-4xl md:text-5xl font-extralight text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-xs tracking-widest text-white/50 uppercase">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
