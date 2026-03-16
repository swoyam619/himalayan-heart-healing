import { motion } from "framer-motion";

const modalities = [
  "Inner Child Therapy",
  "Shadow Therapy",
  "Theta Healing",
  "EFT (Emotional Freedom Technique)",
  "Ho'oponopono",
  "Chakra Healing",
  "Akashic Records",
  "Bach Flower Remedy",
  "Vedic Switch-words",
  "Mokshapatta",
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
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-5">
          My work combines emotional awareness, breathwork, somatic work, energy healing, and compassionate guidance.
          I hold healing as a gentle process of remembering, releasing, and returning to your truest self.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
          Rather than forcing change, sessions invite awareness, nervous system softness, and emotional honesty.
          The intention is to help you feel safe enough to witness your inner world, understand your patterns, and create space for meaningful transformation.
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

      <p className="text-center text-muted-foreground italic max-w-2xl mx-auto leading-relaxed">
        Each session is intuitively guided and thoughtfully designed to support what is most present for you — whether that is emotional release,
        clarity around repeating patterns, energetic balance, self-worth healing, or reconnecting with parts of yourself that have long been unseen.
      </p>
    </div>
  </section>
);

export default ApproachSection;
