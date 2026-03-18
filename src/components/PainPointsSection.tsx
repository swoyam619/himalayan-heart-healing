import { motion } from "framer-motion";

const PainPointsSection = () => (
  <section className="relative py-32 texture-overlay">
    <div className="relative z-10 container mx-auto px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left — large emotional quote */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 lg:sticky lg:top-32"
        >
          <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-snug italic">
            "You've been strong for so long that the exhaustion feels normal."
          </p>
          <div className="mt-8 w-12 h-px bg-gold" />
        </motion.div>

        {/* Right — story blocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-8"
        >
          <p className="text-muted-foreground text-lg leading-[1.9]">
            Maybe it started as a child — learning to stay quiet to keep the peace, becoming the responsible one before you were ready, or swallowing your feelings because no one seemed to notice them. These weren't choices. They were survival.
          </p>

          <p className="text-muted-foreground text-lg leading-[1.9]">
            Now, as an adult, those same patterns show up differently. You give too much. You say yes when your body is screaming no. You feel a heaviness you can't name. Relationships trigger something old — something that doesn't match the present moment but still takes over completely.
          </p>

          <div className="bg-card rounded-sm p-8 border-l-2 border-gold">
            <p className="text-foreground leading-[1.9]">
              You might recognize yourself here: overwhelmed by emotions that seem too big for the situation. Exhausted from holding space for everyone but yourself. Trapped in cycles you can see clearly but can't seem to break. Feeling invisible even in a room full of people who care about you.
            </p>
          </div>

          <p className="text-muted-foreground leading-[1.9]">
            None of this means something is wrong with you. It means something inside you has been waiting — patiently, quietly — to finally be met with kindness instead of judgment.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PainPointsSection;
