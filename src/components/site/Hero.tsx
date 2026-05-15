import heroImg from "@/assets/hero-nairobi.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Nairobi skyline at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />

      <Reveal delay={100} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 
          className="text-white font-thin leading-none text-center px-4"
          style={{ fontSize: "clamp(3.5rem, 15vw, 16rem)", fontWeight: 200, letterSpacing: "-0.02em" }}
        >
          Planning Kenya
        </h1>
      </Reveal>

      <Reveal delay={300} y={20} className="absolute bottom-12 left-8 md:left-12 max-w-sm">
        <p className="text-white/85 text-sm font-light leading-relaxed">
          Four decades of design — from a small Nairobi balcony in 1978 to landmarks defining the Kenyan horizon.
        </p>
      </Reveal>

      <button
        onClick={(e) => {
          const el = e.currentTarget;
          el.classList.remove("pk-flash");
          void el.offsetWidth;
          el.classList.add("pk-flash");
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }}
        aria-label="Scroll down"
        className="pk-bounce absolute bottom-10 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full border border-white/70 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.25)]"
      >
        <span className="text-xl leading-none">↓</span>
      </button>
    </section>
  );
}
