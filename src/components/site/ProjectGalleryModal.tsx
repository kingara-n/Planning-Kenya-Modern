import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

type Props = {
  images: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export function ProjectGalleryModal({ images, title, isOpen, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Reset index when opening
  useEffect(() => {
    if (isOpen) {
      setIndex(0);
      setAnimating(false);
    }
  }, [isOpen]);

  const handleNav = (dir: 1 | -1) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex((i) => (i + dir + images.length) % images.length);
      setAnimating(false);
    }, 400); 
  };

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[200] pk-backdrop-blur" />
        <DialogPrimitive.Content className="fixed inset-0 z-[201] flex items-center justify-center p-4 md:p-8 focus:outline-none">
          <div className="w-full max-w-6xl max-h-[90vh] h-full flex flex-col">
            <div className="pk-glass-pop overflow-hidden rounded-[2.5rem] relative flex flex-col w-full h-full">
              
              {/* Top Branding (Left) & Close (Right) */}
              <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-start z-20 pointer-events-none">
                <div className="opacity-40">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-white font-light">
                    {title} — Gallery
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="pointer-events-auto rounded-full bg-white/5 p-3 text-white/40 hover:bg-white/10 hover:text-white transition-all border border-white/10 backdrop-blur-md"
                  aria-label="Close"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Main Content Area - Full Bleed */}
              <div className="flex-1 relative flex items-center justify-center min-h-0">
                <div 
                  className={`h-full w-full flex items-center justify-center p-8 md:p-16 transition-all duration-700 cubic-bezier(.2,.7,.15,1) ${
                    animating ? "opacity-0 scale-98 blur-xl" : "opacity-100 scale-100 blur-0"
                  }`}
                >
                  <img
                    key={index}
                    src={images[index]}
                    alt={`${title} — image ${index + 1}`}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_30px_90px_rgba(0,0,0,0.8)]"
                  />
                </div>

                {/* Subtle bottom vignette to lift controls */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                {/* Overlaid Controls Bar (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex items-center justify-between z-20">
                  {/* Prev Button - Bottom Left */}
                  <button
                    onClick={() => handleNav(-1)}
                    className="pk-glass-hover flex items-center gap-2 px-4 md:px-8 py-3 md:py-4 rounded-full border border-white/10 bg-white/5 text-[11px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all group backdrop-blur-md"
                  >
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="hidden sm:inline">Prev</span>
                  </button>

                  {/* Pagination Dots - Center Bottom */}
                  <div className="flex items-center gap-2 md:gap-3 mx-2 overflow-x-auto no-scrollbar max-w-[40%] md:max-w-none">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => !animating && setIndex(i)}
                        className={`h-1 rounded-full transition-all duration-500 ease-out shrink-0 ${
                          i === index 
                            ? "bg-white w-6 md:w-8 shadow-[0_0_15px_rgba(255,255,255,0.6)]" 
                            : "bg-white/20 w-1 md:w-1.5 hover:bg-white/40"
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Next Button - Bottom Right */}
                  <button
                    onClick={handleNav(1)}
                    className="pk-glass-hover flex items-center gap-2 px-4 md:px-8 py-3 md:py-4 rounded-full border border-white/10 bg-white/5 text-[11px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all group backdrop-blur-md"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
