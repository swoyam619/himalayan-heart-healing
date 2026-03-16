import { motion } from "framer-motion";

const outcomes = [
  "Greater emotional awareness",
  "Reduced emotional triggers",
  "Improved self-worth and self-compassion",
  "Healthier emotional boundaries",
  "A deeper connection with themselves",
];

const TransformationSection = () => (
  <section className="py-24 gradient-lavender">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">What Clients Often Experience</h2>
        <div className="w-20 h-0.5 bg-gold mx-auto mb-8" />
        <p className="text-muted-foreground mb-10">Clients often begin to notice:</p>
      </motion.div>

      <div className="space-y-4 mb-10">
        {outcomes.map((o, i) => (
          <motion.div
            key={o}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background/70 backdrop-blur-sm rounded-lg px-6 py-4 shadow-card border border-lavender-deep/30 text-left"
          >
            <span className="text-gold mr-3">✨</span>
            <span className="text-foreground">{o}</span>
          </motion.div>
        ))}
      </div>

      <p className="text-muted-foreground italic">
        Healing is a journey, but even small shifts can create meaningful change.
      </p>
    </div>
  </section>
);

export default TransformationSection;
