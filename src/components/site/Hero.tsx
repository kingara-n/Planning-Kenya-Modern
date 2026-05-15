import React from "react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/2024/Planning Hero 1.jpg"
          alt="Planning Kenya Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
      </div>

      <div className="relative z-10 px-6 md:px-16 w-full max-w-7xl mx-auto text-center">
        <Reveal>
          <h1
            className="text-white font-extralight leading-[1.05] tracking-tight mb-8"
            style={{ fontWeight: 200, fontSize: "clamp(3.5rem, 10vw, 10rem)" }}
          >
            Planning Kenya
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-white/80 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Four decades of design \u2014 from a small Nairobi balcony in 1978
            <br className="hidden md:block" />
            to landmarks defining the Kenyan horizon.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-16">
            <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center mx-auto animate-bounce">
              <span className="text-white text-xl">\u2193</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
