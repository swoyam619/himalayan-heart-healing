import { motion } from "framer-motion";
import heroImg from "@/assets/hero-mountains.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Himalayan mountains at golden hour" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="absolute inset-0 gradient-lavender opacity-30" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-gold-light text-sm uppercase tracking-[0.3em] mb-6 font-body font-semibold">
          ✦ Inner Child Healing · Energy Healing · Emotional Transformation ✦
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-light text-primary-foreground mb-6 leading-tight">
          Deep Emotional Healing <br />
          <span className="italic font-light text-gold-light">Begins Within</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light leading-relaxed">
          Helping you gently release emotional wounds and reconnect with your authentic self.
        </p>
        <p className="text-gold-light/90 text-base mb-10 font-body">
          Guided by <strong>Vandana Bhattarai</strong> — Energy Therapist, Mindfulness & Life Coach
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#work-with-me" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity shadow-healing">
            ✨ Work With Me
          </a>
          <a href="#services" className="px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-colors">
            ✨ Explore Sessions
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
