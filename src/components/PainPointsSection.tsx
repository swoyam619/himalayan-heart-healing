import { motion } from "framer-motion";

const PainPointsSection = () => (
  <section className="relative py-32 texture-overlay">
    <div className="relative z-10 container mx-auto px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 lg:sticky lg:top-32"
        >
          <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-snug italic">
            "You've been carrying this for too long."
          </p>
          <div className="mt-8 w-12 h-px bg-gold" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-8"
        >
          <p className="text-muted-foreground text-lg leading-[1.9]">
            Maybe you've always been the "strong one." The one who takes care of everyone else. But inside, you feel exhausted, anxious, or just… empty.
          </p>

          <p className="text-muted-foreground text-lg leading-[1.9]">
            You give too much. You say yes when you want to say no. You feel heavy but can't explain why. Old pain keeps coming back in your relationships and daily life.
          </p>

          <div className="bg-card rounded-sm p-8 border-l-2 border-gold">
            <p className="text-foreground leading-[1.9]">
              You might feel: constant anxiety that doesn't make sense. Low confidence or self-doubt. Sadness you can't shake off. Anger or frustration that builds up inside. A feeling of being stuck and not knowing how to move forward.
            </p>
          </div>

          <p className="text-muted-foreground leading-[1.9]">
            None of this means something is wrong with you. It just means you need the right support — and that's exactly what this is.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PainPointsSection;