import { motion } from "framer-motion";
import portrait from "@/assets/vandana-real.jpg";

const AboutSection = () => (
  <section id="about" className="relative py-28 gradient-earth overflow-hidden">
    <div className="relative z-10 container mx-auto px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Image — offset and overlapping */}
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
              alt="Vandana Bhattarai — Energy Therapist and Healer"
              className="relative z-10 w-full h-[520px] md:h-[600px] object-cover object-center rounded-sm shadow-float"
            />
          </div>
        </motion.div>

        {/* Personal letter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body">
            A note from Vandana
          </p>

          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground leading-tight mb-8">
            I didn't come to healing <br />
            <span className="italic">because I had it figured out.</span>
          </h2>

          <div className="space-y-5 text-muted-foreground leading-[1.9]">
            <p>
              I came to it because I was hurting. I carried patterns for years — people-pleasing, emotional heaviness, a quiet kind of loneliness that lived underneath everything I did. I smiled through it. Most people around me had no idea.
            </p>
            <p>
              When I finally allowed myself to go inward, to sit with the parts of me that had been silenced since childhood, things began to shift. Not overnight. Not dramatically. But in a real, honest, lasting way.
            </p>
            <p>
              That's what I hold space for now — that same kind of slow, brave return to yourself. I work with Inner Child Therapy, Theta Healing, EFT, Shadow work, Chakra Healing, Ho'oponopono, and other modalities. But more than any technique, what I offer is presence. A space where nothing about you needs to be fixed, hidden, or rushed.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="font-heading text-lg text-foreground">Vandana Bhattarai</p>
            <p className="text-muted-foreground text-sm mt-1">
              Certified Energy Therapist · Mindfulness & Life Coach
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
