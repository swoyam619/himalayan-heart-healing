import { Instagram, Mail } from "lucide-react";
import logoBanner from "@/assets/logo-banner.png";

const Footer = () => (
  <footer id="contact" className="bg-earth-deep py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <img src={logoBanner} alt="Danphe Healing" className="h-20 object-contain mb-4 opacity-80" />
          <p className="text-primary-foreground/50 italic text-sm">
            Rooted with Himalayan Love
          </p>
        </div>

        <div className="md:col-span-7">
          <p className="text-primary-foreground/60 leading-[1.9] mb-8">
            If you have questions before applying, or simply want to say hello, I'd love to hear from you.
          </p>

          <div className="space-y-3">
            <a href="https://instagram.com/danphehealing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors text-sm">
              <Instagram size={16} />
              @danphehealing
            </a>
            <a href="mailto:vandanasoulstar@gmail.com" className="flex items-center gap-3 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors text-sm">
              <Mail size={16} />
              vandanasoulstar@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-primary-foreground/10">
        <p className="text-primary-foreground/30 text-xs">
          © {new Date().getFullYear()} Danphe Healing. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
