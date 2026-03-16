import { motion } from "framer-motion";
import portrait from "@/assets/vandana-portrait.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-healing">
            <img src={portrait} alt="Vandana Bhattarai - Energy Therapist" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-lavender opacity-50 animate-glow -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-2">Meet Your Guide</h2>
          <div className="w-16 h-0.5 bg-gold mb-8" />
          <p className="text-foreground font-semibold text-lg mb-4">
            Vandana Bhattarai
          </p>
          <p className="text-muted-foreground uppercase text-xs tracking-widest mb-6">
            Certified Energy Therapist, Mindfulness & Life Coach
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Dedicated to helping individuals reconnect with their inner emotional world. With several years of experience in healing modalities such as EFT, Theta Healing, Bach Flower Remedy, Ho'oponopono, Chakra Healing, and Inner Child work, she creates supportive spaces where people can explore emotional patterns and begin their healing journey.
          </p>
          <p className="text-muted-foreground leading-relaxed italic">
            Through Danphe Healing, her intention is to help people feel emotionally safe, seen, and empowered to heal.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
