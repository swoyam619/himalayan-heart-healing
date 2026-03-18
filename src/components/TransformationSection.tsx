import { motion } from "framer-motion";

const outcomes = [
  "They stop reacting from old pain and start responding from presence",
  "The guilt around saying 'no' begins to dissolve",
  "They feel emotions without being consumed by them",
  "Relationships become less triggering and more honest",
  "They reconnect with a part of themselves they thought they'd lost",
];

const TransformationSection = () => (
  <section className="py-28 gradient-earth">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body">
          What shifts look like
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground leading-tight">
          I won't promise you a <span className="italic">transformation.</span><br />
          But I'll tell you what people notice.
        </h2>
      </motion.div>

      <div className="space-y-0">
        {outcomes.map((o, i) => (
          <motion.div
            key={o}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="py-6 border-b border-border last:border-0 flex items-start gap-6"
          >
            <span className="text-gold text-sm mt-1 shrink-0">✦</span>
            <p className="text-foreground text-lg leading-relaxed">{o}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="font-heading text-xl text-muted-foreground italic">
          Healing is rarely linear. But when the shifts come, they are unmistakable.
        </p>
      </motion.div>
    </div>
  </section>
);

export default TransformationSection;
