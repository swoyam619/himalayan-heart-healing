import { motion } from "framer-motion";

const points = [
  "Emotionally overwhelmed or carrying feelings that are difficult to express",
  "Stuck in people-pleasing patterns and finding it hard to say no",
  "Triggered in relationships and reacting more deeply than the moment seems to require",
  "Unsure of your true self-worth or disconnected from your inner voice",
  "Repeating painful emotional cycles even after trying to think your way out of them",
  "Feeling strong for everyone else while quietly feeling exhausted within",
];

const PainPointsSection = () => (
  <section className="py-24 gradient-lavender">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Sometimes the patterns we struggle with in adult life began much earlier than we realize.
          You may have learned to survive by staying quiet, being strong, pleasing others, or disconnecting from your own needs.
          Over time, these protective patterns can become exhausting.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          You may appear composed on the outside, yet inside feel tender, confused, emotionally burdened, or disconnected from who you truly are.
          Healing begins when we slow down enough to listen to what these inner patterns are trying to tell us.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
          {points.map((p) => (
            <div key={p} className="bg-background/70 backdrop-blur-sm rounded-lg p-5 shadow-card border border-lavender-deep/30">
              <p className="text-foreground font-body leading-relaxed">• {p}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-base leading-relaxed italic max-w-3xl mx-auto">
          These experiences often have roots in childhood emotional pain, unmet needs, unresolved grief, or patterns carried in the nervous system.
          Healing is not about blaming the past — it is about creating a safe and compassionate space to understand yourself more deeply and gently release what no longer needs to be carried alone.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PainPointsSection;
