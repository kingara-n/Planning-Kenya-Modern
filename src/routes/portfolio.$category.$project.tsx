import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ProjectSlideshow } from "@/components/site/ProjectSlideshow";
import { getProject } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/$category/$project")({
  loader: ({ params }) => {
    const result = getProject(params.category, params.project);
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const c = loaderData?.category;
    const title = p ? `${p.title} — Planning Kenya` : "Project — Planning Kenya";
    const description = p?.description.slice(0, 155) ?? "Planning Kenya project.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(p?.img ? [{ property: "og:image", content: p.img }] : []),
        ...(c ? [{ property: "article:section", content: c.title }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <main className="bg-background min-h-screen text-white">
      <Nav />
      <section className="px-6 md:px-16 pt-40 pb-32 max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.3em] text-white/60 mb-6">404</p>
        <h1 className="text-5xl font-thin mb-6">Project not found</h1>
        <Link to="/portfolio" className="text-white/80 underline underline-offset-4">
          Back to Portfolio
        </Link>
      </section>
      <Footer />
    </main>
  ),
  errorComponent: ({ error }) => (
    <main className="bg-background min-h-screen text-white">
      <Nav />
      <section className="px-6 md:px-16 pt-40 pb-32 max-w-3xl mx-auto">
        <h1 className="text-3xl font-thin mb-4">Something went wrong</h1>
        <p className="text-white/70">{error.message}</p>
      </section>
      <Footer />
    </main>
  ),
  component: Page,
});

function Page() {
  const { category, project } = Route.useLoaderData();

  return (
    <main className="bg-background min-h-screen text-white">
      <Nav />

      {/* Hero: slideshow with overlaid sidecard on desktop, stacked card on mobile */}
      <section className="relative">
        <div className="relative">
          <ProjectSlideshow
            images={project.gallery}
            title={project.title}
            className="h-[68svh] lg:h-[100svh]"
          />

          {/* Mobile/tablet: compact title block overlaid on bottom of slideshow */}
          <div className="lg:hidden pointer-events-none absolute inset-x-0 bottom-0 z-10 px-6 pb-24 pt-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/70 mb-3">
              <Link to="/portfolio" className="pointer-events-auto hover:text-white transition-colors">
                Portfolio
              </Link>
              <span className="mx-2 text-white/35">/</span>
              <Link
                to="/portfolio/$category"
                params={{ category: category.slug }}
                className="pointer-events-auto hover:text-white transition-colors"
              >
                {category.title}
              </Link>
            </p>
            <h1
              className="text-white font-extralight leading-[1.05]"
              style={{ fontWeight: 200, fontSize: "clamp(1.75rem, 6vw, 2.5rem)" }}
            >
              {project.title}
            </h1>
          </div>
        </div>

        {/* Sidecard — overlaid on desktop only */}
        <aside className="hidden lg:block lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-8 xl:right-16 lg:z-10 lg:w-[420px] xl:w-[460px]">
          <div className="lg:mx-0 lg:mt-0 relative z-10">
            <Reveal>
              <div className="rounded-3xl border border-white/15 bg-black/55 backdrop-blur-xl p-7 md:p-9 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                <p className="text-[11px] tracking-[0.3em] uppercase text-white/65 mb-5">
                  <Link to="/portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                  <span className="mx-2 text-white/35">/</span>
                  <Link
                    to="/portfolio/$category"
                    params={{ category: category.slug }}
                    className="hover:text-white transition-colors"
                  >
                    {category.title}
                  </Link>
                </p>

                <h1
                  className="text-white font-extralight leading-[1.05] mb-5"
                  style={{ fontWeight: 200, fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)" }}
                >
                  {project.title}
                </h1>

                <p className="text-white/80 font-light leading-relaxed text-[15px] md:text-base mb-7">
                  {project.shortDescription}
                </p>

                <a
                  href="#key-facts"
                  className="pk-glass-hover inline-flex items-center gap-3 border border-white/30 rounded-full px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase font-light text-white/85 hover:text-white"
                >
                  <span>Key Facts</span>
                  <span aria-hidden>↓</span>
                </a>
              </div>
            </Reveal>
          </div>
        </aside>
      </section>

      {/* Mobile/tablet: full description card below the hero */}
      <section className="lg:hidden px-6 md:px-12 pt-12 pb-4">
        <Reveal>
          <div className="rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-sm p-7 md:p-9">
            <p className="text-white/80 font-light leading-relaxed text-[15px] md:text-base mb-7">
              {project.shortDescription}
            </p>
            <a
              href="#key-facts"
              className="pk-glass-hover inline-flex items-center gap-3 border border-white/30 rounded-full px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase font-light text-white/85 hover:text-white"
            >
              <span>Key Facts</span>
              <span aria-hidden>↓</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* Key facts */}
      <section
        id="key-facts"
        className="px-6 md:px-16 pt-12 lg:pt-16 pb-20 max-w-6xl mx-auto scroll-mt-24"
      >
        <Reveal>
          <p className="text-sm tracking-[0.3em] text-white/60 mb-10">KEY FACTS</p>
        </Reveal>
        <Reveal delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/15">
            <Fact label="Project Type" value={project.type} />
            <Fact label="Project Location" value={project.location} />
            <Fact label="Year of Completion" value={project.year} />
          </div>
        </Reveal>
      </section>

      {/* Full Description */}
      <section className="px-6 md:px-16 pb-20 max-w-4xl mx-auto">
        <Reveal>
          <p className="text-sm tracking-[0.3em] text-white/60 mb-8 uppercase">Project Details</p>
          <div className="space-y-6">
            {project.description.split('\n').filter(p => p.trim() !== '').map((para, i) => (
              <p key={i} className="text-white/80 font-light leading-relaxed text-[15px] md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-6 md:px-16 pb-32 max-w-6xl mx-auto">
        <Link
          to="/portfolio/$category"
          params={{ category: category.slug }}
          className="pk-glass-hover inline-flex items-center gap-3 border border-white/30 rounded-full px-6 py-3 text-sm tracking-[0.18em] uppercase font-light text-white/85 hover:text-white"
        >
          <span>←</span>
          <span>Back to {category.title}</span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b md:border-b-0 md:border-r last:md:border-r-0 border-white/15 py-8 md:py-12 md:px-8 first:md:pl-0">
      <p className="text-[11px] tracking-[0.3em] uppercase text-white/55 mb-3">
        {label}
      </p>
      <p className="text-xl md:text-2xl font-extralight text-white">{value}</p>
    </div>
  );
}
