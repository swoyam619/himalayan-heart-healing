import { motion } from "framer-motion";

const readings = [
  {
    title: "Tarot Reading",
    text: "Get clarity on your life, relationships, or decisions. Tarot helps reveal what's hidden and guides you toward the right path.",
  },
  {
    title: "Mokshapatta Reading",
    text: "An ancient practice that shows where you are on your life's journey and what steps to take next. Simple, powerful, and eye-opening.",
  },
  {
    title: "Vedic Oracle Reading",
    text: "Receive guidance based on ancient Vedic wisdom. Get answers to your deepest questions about life, love, and purpose.",
  },
];

const ReadingsSection = () => (
  <section id="readings" className="py-28 gradient-earth">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body">
          Guidance & Clarity
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground leading-tight">
          Readings that bring <span className="italic">answers.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {readings.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-card rounded-sm border border-border hover:shadow-card transition-shadow text-center"
          >
            <h3 className="font-heading text-xl text-foreground mb-4">{r.title}</h3>
            <p className="text-muted-foreground leading-[1.8]">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReadingsSection;