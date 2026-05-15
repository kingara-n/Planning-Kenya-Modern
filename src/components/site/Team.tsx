import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Linkedin, X } from "lucide-react";
import { Reveal } from "./Reveal";

type Member = { name: string; role: string; img: string; bio: string; zoom?: boolean };
type Dept = { title: string; members: Member[] };

const PK = "https://planning-kenya.com/wp-content/uploads/";

const departments: Dept[] = [
  {
    title: "Architectural Staff",
    members: [
      {
        name: "Henry Musangi",
        role: "Managing Director",
        img: "/assets/images/staff/HENRY-MUSANGI-Copy.jpg",
        bio: "Henry leads Planning Systems Services with three decades of experience shaping civic, commercial and residential architecture across East Africa. He balances rigorous planning discipline with a quiet, contextual design sensibility, guiding the practice's long-term vision and client relationships.",
      },
      {
        name: "Mumo Musuva",
        role: "Director",
        img: "/assets/images/staff/MUMO-MUSUVA-min.jpg",
        bio: "Mumo brings deep expertise in large-scale architectural delivery, overseeing complex briefs from concept through completion. His work focuses on integrating environmental responsibility with the cultural and material context of each site.",
      },
      {
        name: "Susan Makhulo",
        role: "Studio Director",
        img: "/assets/images/staff/sus-min.jpg",
        bio: "Susan directs the studio's day-to-day creative output, ensuring every project meets the practice's standards for craft and clarity. She mentors emerging architects and shapes the design culture across all four divisions.",
      },
      {
        name: "Felix Kawuondi",
        role: "Licentiate Architect",
        img: "/assets/images/staff/felix.png",
        bio: "Felix contributes to design development and documentation across a range of residential and mixed-use projects. He is interested in the intersection of vernacular building traditions and contemporary practice.",
        zoom: true,
      },
      {
        name: "Ian Mararo",
        role: "Architect",
        img: "/assets/images/staff/Ian-Mararo-Copy.jpg",
        bio: "Ian is a dedicated architect with a focus on sustainable design and urban integration. He brings fresh perspectives to the studio's diverse portfolio of residential and commercial projects.",
      },
      {
        name: "Michael Kinyumu",
        role: "Architectural Technician",
        img: "/assets/images/staff/MICHAELKINYUMU-min.jpg",
        bio: "Michael specializes in technical documentation and BIM workflows, ensuring that design intent is translated into precise construction information.",
      },
      {
        name: "Patrick Mugendi",
        role: "Architectural Technician",
        img: "/assets/images/staff/Patrick-Mugendi-min.jpg",
        bio: "Patrick's expertise in architectural detailing and site coordination helps bridge the gap between design and physical realization.",
      },
      {
        name: "David Mugo",
        role: "Architectural Technician",
        img: "/assets/images/staff/DavidMugo-min.jpg",
        bio: "David supports the architectural teams with technical documentation and 3D modeling, contributing to the efficient delivery of project data.",
      },
      {
        name: "Elton Birir",
        role: "Architect",
        img: "/assets/images/staff/Elton-Birir-Copy.jpg",
        bio: "Elton focuses on the conceptual and technical aspects of design, ensuring that every project is both imaginative and buildable.",
      },
      {
        name: "Eve Wanza",
        role: "Architect",
        img: "/assets/images/staff/EveWanza-min.jpg",
        bio: "Eve is passionate about community-centric architecture and sustainable urban development, bringing a thoughtful approach to our residential portfolio.",
      },
    ],
  },
  {
    title: "Arts & Graphics",
    members: [
      {
        name: "William Omondi",
        role: "Graphics Lead",
        img: "/assets/images/staff/William-Omondi2-min.jpg",
        bio: "William shapes how Planning Systems' work is communicated — from project visualisations and presentation books to wayfinding and brand systems. His craft brings precision and warmth to every visual the studio sends out.",
      },
      {
        name: "Dez Owich",
        role: "Visualisation Artist",
        img: "/assets/images/staff/Dez Owich.jpg",
        bio: "Dez specializes in high-end architectural visualization, bringing unbuilt designs to life through light, material and atmospheric rendering.",
      },
    ],
  },
  {
    title: "Finance",
    members: [
      {
        name: "Moses Kinyanjui",
        role: "Director of Finance and Operations",
        img: "/assets/images/staff/Moses-min.jpg",
        bio: "Moses oversees the firm's financial strategy and operational health, keeping projects resourced and the business resilient. His steady stewardship gives the design teams the freedom to focus on the work.",
      },
      {
        name: "Dennis Kirimi",
        role: "Senior Accountant",
        img: "/assets/images/staff/Dennis-Kirimi-Copy-scaled.jpg",
        bio: "Dennis manages the day-to-day accounting and reporting that keep every project on solid financial footing. He is known across the studio for his accuracy and quiet reliability.",
      },
    ],
  },
  {
    title: "Human Resources & Administration",
    members: [
      {
        name: "Victoria Awiti",
        role: "Associate Director, HR",
        img: "/assets/images/staff/Victoria-Awiti-Copy.jpg",
        bio: "Victoria leads people and culture at Planning Systems, building the structures that support a multidisciplinary studio. Her work spans recruitment, professional development and the rituals that keep the team connected.",
      },
      {
        name: "Ednah Mueni",
        role: "Administrative Assistant",
        img: "/assets/images/staff/ednah.png",
        bio: "Ednah keeps the studio running smoothly, coordinating logistics, hospitality and the small daily details that make the office feel like a workshop.",
        zoom: true, // Special flag to handle transparent padding
      },
    ],
  },
  {
    title: "Information Technology",
    members: [
      {
        name: "Chris Sigoli",
        role: "Head of Digital",
        img: "/assets/images/staff/Chris-min.jpg",
        bio: "Chris leads the firm's digital infrastructure and design technology — from BIM workflows and visualisation pipelines to the systems that connect the studio's four divisions. His work quietly powers everything the practice ships.",
      },
      {
        name: "Eric Ngugi",
        role: "Assistant IT",
        img: "/assets/images/staff/Eric Ngugi.png",
        bio: "Eric supports the studio's hardware, software and design-tech needs, keeping every workstation, plotter and server humming. He is the team's first call when technology gets in the way of design.",
      },
    ],
  },
];

export function Team() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <div className="space-y-24">
      {departments.map((dept, i) => (
        <section key={i} className="space-y-12">
          <Reveal>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-light tracking-widest uppercase text-white/90">
                {dept.title}
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {dept.members.map((m, j) => (
              <Reveal key={j} delay={j * 100}>
                <MemberCard m={m} onClick={() => setSelectedMember(m)} />
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      <DialogPrimitive.Root
        open={!!selectedMember}
        onOpenChange={(open) => !open && setSelectedMember(null)}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-[100] pk-backdrop-blur" />
          <DialogPrimitive.Content className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-6 focus:outline-none">
            <div className="w-full max-w-4xl animate-in fade-in zoom-in-95 duration-300">
              {selectedMember && <MemberDialog m={selectedMember} onClose={() => setSelectedMember(null)} />}
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </div>
  );
}

function MemberCard({ m, onClick }: { m: Member; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-start text-left focus:outline-none"
    >
      <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/5] bg-white/5">
        <img
          src={m.img}
          alt={m.name}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] ${
            m.zoom ? "scale-[1.4] origin-center" : ""
          }`}
          style={{ filter: "grayscale(100%) contrast(1.02)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
        
        {/* Subtle hover indicator */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">View Profile</span>
        </div>
      </div>
      
      <div className="mt-5 space-y-1">
        <h3 className="text-sm font-medium tracking-wide text-white/90 group-hover:text-pk-gold transition-colors">
          {m.name}
        </h3>
        <p className="text-[11px] uppercase tracking-[0.15em] text-white/40">
          {m.role}
        </p>
      </div>
    </button>
  );
}

function MemberDialog({ m, onClose }: { m: Member; onClose: () => void }) {
  return (
    <div className="pk-glass-pop overflow-hidden rounded-3xl">
      <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
        {/* Image Side */}
        <div className="relative w-full md:w-[40%] aspect-[4/5] md:aspect-auto bg-black/20">
          <img
            src={m.img}
            alt={m.name}
            className={`h-full w-full object-cover ${m.zoom ? "scale-[1.4] origin-center" : ""}`}
            style={{ filter: "contrast(1.05)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:from-transparent to-transparent" />
        </div>

        {/* Info Side */}
        <div className="relative flex-1 p-6 md:p-12 overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 md:right-6 md:top-6 rounded-full bg-white/5 p-2 text-white/60 hover:bg-white/10 hover:text-white transition-all"
          >
            <X size={20} />
          </button>

          <div className="h-full flex flex-col justify-center">
            <div className="mb-6 md:mb-8">
              <span className="inline-block px-3 py-1 mb-3 md:mb-4 text-[10px] uppercase tracking-[0.2em] bg-pk-gold/10 text-pk-gold rounded-full border border-pk-gold/20">
                Staff Profile
              </span>
              <h2 className="text-2xl md:text-4xl font-light tracking-tight text-white mb-2">
                {m.name}
              </h2>
              <p className="text-pk-gold/80 uppercase tracking-[0.2em] text-[10px] md:text-xs font-medium">
                {m.role}
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
                {m.bio}
              </p>
              
              <div className="pt-8 flex items-center gap-6">
                <a
                  href="#"
                  className="flex items-center gap-2 text-white/40 hover:text-pk-gold transition-colors text-[11px] uppercase tracking-widest group"
                >
                  <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                  Connect
                </a>
                <div className="w-8 h-[1px] bg-white/10" />
                <span className="text-[11px] uppercase tracking-widest text-white/20">
                  Planning Systems
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
