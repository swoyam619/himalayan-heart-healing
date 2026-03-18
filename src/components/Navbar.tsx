import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About Vandana", href: "#about" },
  { label: "Healing", href: "#healing" },
  { label: "Modalities", href: "#modalities" },
  { label: "Connect", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Danphe Healing" className="h-12 w-12 rounded-full object-cover" />
          <span className="font-heading text-xl text-foreground tracking-wide">Danphe Healing</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-xs uppercase tracking-[0.2em] font-body text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#work-with-me" className="text-xs uppercase tracking-[0.2em] font-body text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors">
            Work With Me
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="flex flex-col gap-5 p-8">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.15em] text-foreground">
                  {l.label}
                </a>
              ))}
              <a href="#work-with-me" onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.15em] text-foreground border-b border-foreground/30 pb-1 self-start">
                Work With Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
