import { motion } from "framer-motion";

const testimonials = [
  {
    text: "I walked in thinking I needed to 'fix' something. Vandana helped me see that what I actually needed was to stop running from myself. That shift changed everything.",
    name: "A.R.",
  },
  {
    text: "I've done years of talk therapy. This was different. It reached something words alone couldn't touch. For the first time, I felt the weight actually lift — not just temporarily, but in a lasting way.",
    name: "S.K.",
  },
  {
    text: "The gentleness of the space surprised me. I didn't have to perform vulnerability or prove my pain was 'bad enough.' I just had to show up. That was healing in itself.",
    name: "M.T.",
  },
];

const TestimonialsSection = () => (
  <section className="py-28">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body">
          In their words
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
          What it feels like <span className="italic">after</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={`bg-card p-10 rounded-sm border border-border ${i === 1 ? "md:-mt-8" : ""}`}
          >
            <p className="text-muted-foreground leading-[1.9] mb-8 italic">"{t.text}"</p>
            <p className="text-foreground text-sm font-body tracking-wide">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
