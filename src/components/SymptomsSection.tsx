import { motion } from "framer-motion";

const SymptomsSection = () => (
  <section id="healing" className="relative py-28 texture-overlay">
    <div className="relative z-10 container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body">
          What brings people to this work
        </p>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
          You don't need to be <span className="italic">"broken"</span><br />
          to deserve healing.
        </h2>
      </motion.div>

      {/* Editorial asymmetric layout */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-10 rounded-sm border-l-2 border-accent"
          >
            <h3 className="font-heading text-2xl text-foreground mb-5">Emotional weight</h3>
            <ul className="space-y-4 text-muted-foreground leading-[1.8]">
              <li>Unexplained sadness that sits in your chest like a stone</li>
              <li>Anxiety that doesn't match what's actually happening</li>
              <li>Numbness — feeling disconnected from your own emotions</li>
              <li>Guilt or shame that follows you even when you've done nothing wrong</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card p-10 rounded-sm md:mt-12"
          >
            <h3 className="font-heading text-2xl text-foreground mb-5">Relationship patterns</h3>
            <ul className="space-y-4 text-muted-foreground leading-[1.8]">
              <li>Over-giving until you have nothing left for yourself</li>
              <li>Fear of abandonment that makes you grip too tightly or pull away</li>
              <li>Reactions that are bigger than the moment — old pain speaking through you</li>
              <li>Choosing people who feel familiar but aren't safe</li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-10 rounded-sm md:mt-0"
          >
            <h3 className="font-heading text-2xl text-foreground mb-5">Self-worth struggles</h3>
            <ul className="space-y-4 text-muted-foreground leading-[1.8]">
              <li>A voice inside that says you're not enough — no matter what you achieve</li>
              <li>Difficulty saying no without drowning in guilt</li>
              <li>Needing validation from others to feel okay about yourself</li>
              <li>Feeling invisible, even to the people closest to you</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 rounded-sm bg-primary/5 border border-primary/10 md:mt-8"
          >
            <h3 className="font-heading text-2xl text-foreground mb-5">The quiet knowing</h3>
            <ul className="space-y-4 text-muted-foreground leading-[1.8]">
              <li>You've tried thinking your way out, but the patterns remain</li>
              <li>You hold everything together for others while falling apart alone</li>
              <li>Something deep inside is asking to be heard — you can feel it</li>
              <li>You're tired of surviving and ready to actually live</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="font-heading text-2xl text-foreground italic max-w-2xl mx-auto leading-relaxed">
          If any of this resonates, it's not a sign that something is wrong with you. It's a sign that something inside you is ready.
        </p>
      </motion.div>
    </div>
  </section>
);

export default SymptomsSection;
