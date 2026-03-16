import { motion } from "framer-motion";

const points = [
  "Emotionally overwhelmed",
  "Stuck in people-pleasing patterns",
  "Triggered in relationships",
  "Unsure of your true self-worth",
];

const PainPointsSection = () => (
  <section className="py-24 gradient-lavender">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Sometimes the patterns we struggle with today began long ago.
          You may appear strong on the outside, yet inside you may feel:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {points.map((p) => (
            <div key={p} className="bg-background/70 backdrop-blur-sm rounded-lg p-5 shadow-card border border-lavender-deep/30">
              <p className="text-foreground font-body">• {p}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-base leading-relaxed italic">
          These patterns often have roots in childhood emotional experiences.
          Healing begins when we create a safe space to understand and gently release them.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PainPointsSection;
