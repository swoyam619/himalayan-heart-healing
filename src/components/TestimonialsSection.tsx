import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Vandana's sessions are amazing. Each one felt purposeful and grounding. I felt real, lasting changes — not just temporary relief.",
    name: "Swoyam Banskota",
    location: "Nepal",
    stars: 4.5,
  },
  {
    text: "I came feeling lost and disconnected. Through her work, I found parts of myself I'd forgotten. I finally feel like myself again.",
    name: "Sudha Bhattarai",
    location: "Goa, India",
    stars: 5,
  },
  {
    text: "Her techniques are unique and deeply personal. I've never experienced anything like it. Every session felt different and exactly what I needed.",
    name: "Sweta Mishra",
    location: "",
    stars: 5,
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
          What people say
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
          Real stories, <span className="italic">real results</span>
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
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }, (_, s) => (
                <span key={s} className={`text-sm ${s < Math.floor(t.stars) ? "text-gold" : s < t.stars ? "text-gold" : "text-border"}`}>
                  {s < Math.floor(t.stars) ? "★" : s < t.stars ? "✬" : "★"}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground leading-[1.9] mb-8 italic">"{t.text}"</p>
            <p className="text-foreground text-sm font-body font-semibold">{t.name}</p>
            {t.location && <p className="text-muted-foreground text-xs mt-1">{t.location}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;