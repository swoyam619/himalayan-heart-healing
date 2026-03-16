import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Working with Vandana helped me understand patterns I'd been carrying since childhood. I finally feel free to be myself.",
    name: "A.R.",
  },
  {
    text: "The sessions were so gentle and safe. I didn't realize how much I was holding until I let it go.",
    name: "S.K.",
  },
  {
    text: "Vandana creates such a compassionate space. My emotional triggers have reduced significantly.",
    name: "M.T.",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">Words from the Heart</h2>
        <div className="w-20 h-0.5 bg-gold mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 shadow-card border border-border relative"
          >
            <span className="text-5xl text-lavender-deep/50 font-heading absolute top-4 left-6">"</span>
            <p className="text-muted-foreground leading-relaxed mb-6 mt-6 italic">{t.text}</p>
            <p className="text-foreground font-semibold text-sm">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
