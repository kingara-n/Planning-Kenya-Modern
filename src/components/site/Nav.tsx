import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/planning-logo-white.png";

const links = [
  { label: "Our Portfolio", to: "/portfolio" },
  { label: "Our Team", to: "/team" },
  { label: "Our Adventures", to: "/adventure" },
] as const;

function pressGlow(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  el.classList.remove("pk-press-glow");
  // force reflow so the animation can replay
  void el.offsetWidth;
  el.classList.add("pk-press-glow");
  window.setTimeout(() => el.classList.remove("pk-press-glow"), 1000);
}

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      setScrolled(y > 40);
      if (y > vh * 0.9 && y > lastY) setHidden(true);
      else if (y < lastY - 4 || y < vh * 0.6) setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-transform duration-700"
      style={{
        transform: hidden ? "translate3d(0,-110%,0)" : "translate3d(0,0,0)",
        willChange: "transform",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 transition-opacity duration-700"
        style={{
          opacity: scrolled ? 0.55 : 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.32) 35%, rgba(0,0,0,0.12) 70%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 60%, transparent 100%)",
        }}
      />
      <nav className="relative pointer-events-auto px-6 md:px-10 py-5 flex items-center justify-between gap-4">
        <Link to="/" onClick={pressGlow} className="shrink-0 flex items-center pk-glass-hover rounded-full">
          <img src={logo} alt="Planning" className="h-7 md:h-8 w-auto" />
        </Link>
        <ul className="hidden lg:flex items-center gap-1">
          <li>
            <Link
              to="/story"
              onClick={pressGlow}
              className="pk-glass-hover inline-block border border-transparent rounded-full px-4 py-2 text-sm text-white/90 hover:text-white whitespace-nowrap font-light"
            >
              Our Story
            </Link>
          </li>
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                onClick={pressGlow}
                className="pk-glass-hover inline-block border border-transparent rounded-full px-4 py-2 text-sm text-white/90 hover:text-white whitespace-nowrap font-light"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          onClick={pressGlow}
          className="pk-glass-hover hidden lg:inline-flex items-center border border-white/70 rounded-full px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl uppercase tracking-[0.22em] font-light text-white whitespace-nowrap"
        >
          Contact Us
        </Link>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white/80 text-xs tracking-[0.3em] font-light pk-glass-hover px-4 py-2 rounded-full transition-all active:scale-95"
          aria-label="Toggle menu"
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-8 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
        >
          <span className="text-xs tracking-[0.3em] font-light">CLOSE</span>
        </button>
        
        <ul className="flex flex-col items-center gap-8">
          <li>
            <Link
              to="/"
              onClick={(e) => { pressGlow(e); setIsOpen(false); }}
              className="text-3xl font-thin text-white/90 hover:text-white tracking-widest"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/story"
              onClick={(e) => { pressGlow(e); setIsOpen(false); }}
              className="text-3xl font-thin text-white/90 hover:text-white tracking-widest"
            >
              OUR STORY
            </Link>
          </li>
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                onClick={(e) => { pressGlow(e); setIsOpen(false); }}
                className="text-3xl font-thin text-white/90 hover:text-white tracking-widest uppercase"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              to="/contact"
              onClick={(e) => { pressGlow(e); setIsOpen(false); }}
              className="border border-white/30 rounded-full px-10 py-4 text-xl font-light text-white tracking-[0.2em] hover:bg-white hover:text-black transition-all"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
