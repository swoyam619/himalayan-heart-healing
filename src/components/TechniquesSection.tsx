import { motion } from "framer-motion";

const techniques = [
  {
    title: "Healing through Inner Light",
    description: "Works at a deep level to change negative beliefs and emotional patterns that your conscious mind can't seem to fix.",
  },
  {
    title: "EFT — Tapping",
    description: "A simple tapping technique that calms your nervous system and reduces the emotional weight of painful memories and fears.",
  },
  {
    title: "Chakra Healing",
    description: "When emotions get stuck, they show up in the body. Chakra healing restores balance and helps release sadness, fear, and tension.",
  },
  {
    title: "Ho'oponopono",
    description: "A Hawaiian practice of forgiveness. Four simple phrases help release resentment, guilt, and emotional baggage.",
  },
  {
    title: "Akashic Records",
    description: "A way to understand recurring patterns in your life — the themes and lessons that keep showing up.",
  },
  {
    title: "Vedic Switch Words",
    description: "Specific words with powerful vibrations that help shift your energy, attract positivity, and support emotional healing between sessions.",
  },
  {
    title: "Bach Flower Remedies",
    description: "Gentle, natural plant-based support for emotional states like anxiety, sadness, fear, and overwhelm.",
  },
];

const TechniquesSection = () => (
  <section id="modalities" className="relative py-28 gradient-forest texture-overlay">
    <div className="relative z-10 container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body">
          Methods I use
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground leading-tight max-w-2xl">
          Different problems need<br />
          <span className="italic">different solutions.</span>
        </h2>
      </motion.div>

      <div className="space-y-4">
        {techniques.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-7 border-b border-border last:border-0"
          >
            <div className="md:col-span-4">
              <h3 className="font-heading text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors">
                {t.title}
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-muted-foreground leading-[1.8]">{t.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 font-heading text-xl text-foreground italic text-center max-w-2xl mx-auto"
      >
        I pick the right method based on what you need. Every session is unique.
      </motion.p>
    </div>
  </section>
);

export default TechniquesSection;