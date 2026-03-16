import { motion } from "framer-motion";

const modalities = [
  "Inner Child Therapy", "Shadow Therapy", "Theta Healing",
  "EFT (Emotional Freedom Technique)", "Ho'oponopono", "Chakra Healing",
  "Akashic Records", "Bach Flower Remedy", "Vedic Switch-words", "Mokshapatta",
];

const ApproachSection = () => (
  <section id="approach" className="py-24 gradient-himalayan">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">My Approach to Healing</h2>
        <div className="w-20 h-0.5 bg-gold mx-auto mb-8" />
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          My work combines emotional awareness, breathwork, somatic work, energy healing, and compassionate guidance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-3 justify-center mb-12"
      >
        {modalities.map((m) => (
          <span key={m} className="px-5 py-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-lavender-deep/40 text-foreground text-sm font-body shadow-sm">
            {m}
          </span>
        ))}
      </motion.div>

      <p className="text-center text-muted-foreground italic max-w-xl mx-auto">
        Each session is designed to help you reconnect with your emotional truth in a gentle and supportive way.
      </p>
    </div>
  </section>
);

export default ApproachSection;
