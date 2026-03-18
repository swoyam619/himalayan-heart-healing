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
          Healing isn't about <span className="italic">erasing</span> the past.<br />
          It's about no longer letting it <span className="italic">run</span> you.
        </h2>

        <div className="max-w-2xl mx-auto space-y-6 text-primary-foreground/75 text-lg leading-[1.9]">
          <p>
            My sessions are not scripted or rushed. There is no pressure to perform vulnerability or hit milestones. We go where your system is ready to go — no sooner, no further.
          </p>
          <p>
            I draw from breathwork, somatic awareness, energy healing, and emotional inquiry. But the real medicine is the space itself — the permission to feel what you actually feel without needing to explain, justify, or minimize it.
          </p>
        </div>

        <div className="lotus-divider mt-12 mb-10" style={{ color: "hsl(var(--gold-light))" }} />

        <p className="text-primary-foreground/60 italic font-heading text-xl max-w-xl mx-auto">
          Each session is intuitively shaped around what's most alive in you — not what I think should happen.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ApproachSection;
