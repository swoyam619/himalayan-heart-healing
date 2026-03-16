import { Instagram, Mail } from "lucide-react";
import logoBanner from "@/assets/logo-banner.png";

const Footer = () => (
  <footer id="contact" className="bg-foreground py-16">
    <div className="container mx-auto px-4 text-center">
      <img src={logoBanner} alt="Danphe Healing" className="h-16 mx-auto mb-6 object-contain" />
      <p className="text-primary-foreground/60 italic mb-8">Rooted with Himalayan Love</p>

      <div className="flex items-center justify-center gap-8 mb-8">
        <a href="https://instagram.com/danphehealing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors">
          <Instagram size={20} />
          <span className="text-sm">@danphehealing</span>
        </a>
        <a href="mailto:vandanasoulstar@gmail.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors">
          <Mail size={20} />
          <span className="text-sm">vandanasoulstar@gmail.com</span>
        </a>
      </div>

      <div className="w-20 h-px bg-primary-foreground/20 mx-auto mb-6" />
      <p className="text-primary-foreground/40 text-xs">© {new Date().getFullYear()} Danphe Healing. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
