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
          What brings people here
        </p>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
          You don't need to be <span className="italic">"broken"</span><br />
          to ask for help.
        </h2>
      </motion.div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-10 rounded-sm border-l-2 border-accent"
          >
            <h3 className="font-heading text-2xl text-foreground mb-5">Emotional pain</h3>
            <ul className="space-y-4 text-muted-foreground leading-[1.8]">
              <li>Constant sadness or heaviness</li>
              <li>Anxiety that won't go away</li>
              <li>Feeling numb or disconnected</li>
              <li>Guilt or shame for no clear reason</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card p-10 rounded-sm md:mt-12"
          >
            <h3 className="font-heading text-2xl text-foreground mb-5">Relationship struggles</h3>
            <ul className="space-y-4 text-muted-foreground leading-[1.8]">
              <li>Giving too much and getting nothing back</li>
              <li>Fear of being alone or rejected</li>
              <li>Overreacting to small things</li>
              <li>Attracting the wrong people</li>
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
            <h3 className="font-heading text-2xl text-foreground mb-5">Low confidence</h3>
            <ul className="space-y-4 text-muted-foreground leading-[1.8]">
              <li>Feeling "not good enough" no matter what</li>
              <li>Difficulty saying no without guilt</li>
              <li>Needing others' approval to feel okay</li>
              <li>Feeling invisible or unimportant</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 rounded-sm bg-primary/5 border border-primary/10 md:mt-8"
          >
            <h3 className="font-heading text-2xl text-foreground mb-5">Feeling stuck</h3>
            <ul className="space-y-4 text-muted-foreground leading-[1.8]">
              <li>Overthinking but nothing changes</li>
              <li>Taking care of everyone except yourself</li>
              <li>Knowing something needs to change but not knowing how</li>
              <li>Tired of just surviving — ready to actually live</li>
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
          If any of this sounds like you, it's not a weakness. It's a sign you're ready for change.
        </p>
      </motion.div>
    </div>
  </section>
);

export default SymptomsSection;