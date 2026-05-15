import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const team = [
  {
    name: "Henry Musangi",
    role: "MANAGING DIRECTOR",
    img: "/assets/images/2024/STAFF PORTRAITS/Henry Musangi 2.jpg",
  },
  {
    name: "Mumo Musuva",
    role: "DIRECTOR",
    img: "/assets/images/2024/STAFF PORTRAITS/Mumo Musuva.jpg",
  },
  {
    name: "Susan Makhulo",
    role: "STUDIO DIRECTOR",
    img: "/assets/images/2024/STAFF PORTRAITS/Susan Makhulo.jpg",
  },
  {
    name: "Felix Kawuondi",
    role: "LICENTIATE ARCHITECT",
    img: "/assets/images/2024/STAFF PORTRAITS/Felix Kawuondi.jpg",
  },
  {
    name: "Ian Mararo",
    role: "ARCHITECT",
    img: "/assets/images/2024/STAFF PORTRAITS/Ian Mararo.jpg",
  },
];

export function Team() {
  return (
    <section id="team" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <Reveal>
        <p className="text-sm tracking-[0.3em] text-white/50 mb-4 uppercase">
          Architectural Staff
        </p>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20 mt-16">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={i * 100}>
            <div className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl mb-8 relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <h3 className="text-2xl font-light text-white mb-2">{member.name}</h3>
              <p className="text-xs tracking-widest text-white/40 font-medium uppercase">
                {member.role}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
