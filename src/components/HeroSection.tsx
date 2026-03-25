import { motion } from "framer-motion";
import heroImg from "@/assets/hero-mountains.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Peaceful mountain landscape" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-foreground/10" />
    </div>

    <div className="relative z-10 container mx-auto px-4 pb-20 pt-40">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-gold-light text-xs uppercase tracking-[0.35em] mb-8 font-body"
        >
          Indeera Healing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-[1.1] mb-8"
        >
          You deserve to<br />
          <span className="italic">feel better.</span><br />
          Let's <span className="text-gold-light italic">begin.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-primary-foreground/70 text-lg md:text-xl max-w-lg font-light leading-relaxed mb-12"
        >
          Gentle healing for anxiety, pain, low confidence, and emotional struggles. No jargon. Just real support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <a
            href="#work-with-me"
            className="inline-block px-8 py-4 border border-primary-foreground/30 text-primary-foreground text-sm tracking-widest uppercase font-body hover:bg-primary-foreground/10 transition-colors"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;