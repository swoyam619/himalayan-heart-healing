import { motion } from "framer-motion";
import portrait from "@/assets/vandana-real.jpg";

const AboutSection = () => (
  <section id="about" className="relative py-28 gradient-earth overflow-hidden">
    <div className="relative z-10 container mx-auto px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-gold/10 rounded-sm" />
            <img
              src={portrait}
              alt="Vandana — Healer and Life Coach"
              className="relative z-10 w-full h-[520px] md:h-[600px] object-cover object-center rounded-sm shadow-float"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body">
            Meet Vandana
          </p>

          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground leading-tight mb-8">
            I've been where <br />
            <span className="italic">you are now.</span>
          </h2>

          <div className="space-y-5 text-muted-foreground leading-[1.9]">
            <p>
              I struggled with anxiety, low self-worth, and emotional pain for years. I kept smiling on the outside while falling apart inside. Most people had no idea.
            </p>
            <p>
              When I finally started my own healing journey, things slowly changed. Not overnight — but in a real, lasting way.
            </p>
            <p>
              Now I help others do the same. I use gentle, effective techniques like Energy Healing, EFT (tapping), Chakra Healing, and more. But more than any method, what I offer is a safe, caring space where you can be yourself.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="font-heading text-lg text-foreground">Vandana Bhattarai</p>
            <p className="text-muted-foreground text-sm mt-1">
              Certified Energy Healer · Life Coach
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;