import { motion } from "framer-motion";
import healingBg from "@/assets/healing-bg.jpg";

const ApproachSection = () => (
  <section id="approach" className="relative py-28 overflow-hidden">
    <div className="absolute inset-0">
      <img src={healingBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/80" />
    </div>

    <div className="relative z-10 container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-gold-light/80 text-xs uppercase tracking-[0.3em] mb-8 font-body">
          How I work
        </p>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground leading-tight mb-10">
          Healing isn't about <span className="italic">forgetting</span> the past.<br />
          It's about <span className="italic">freeing</span> yourself from it.
        </h2>

        <div className="max-w-2xl mx-auto space-y-6 text-primary-foreground/75 text-lg leading-[1.9]">
          <p>
            Every session is different. There's no script or pressure. We go at your pace — gently and safely.
          </p>
          <p>
            I use a mix of energy healing, breathwork, and emotional support techniques. But the real power is in the safe space itself — where you can feel what you feel without judgment.
          </p>
        </div>

        <div className="lotus-divider mt-12 mb-10" style={{ color: "hsl(var(--gold-light))" }} />

        <p className="text-primary-foreground/60 italic font-heading text-xl max-w-xl mx-auto">
          Each session is shaped around what you need — not a fixed formula.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ApproachSection;