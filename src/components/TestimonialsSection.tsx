import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Vandana is doing an incredible job with her techniques. Each session felt purposeful and grounded — she knows exactly how to hold space while guiding you through what needs to surface. I felt real shifts, not just temporary relief.",
    name: "Swoyam Banskota",
    location: "Nepal",
    stars: 4.5,
  },
  {
    text: "I came to Vandana feeling lost and disconnected from myself. Through her work, I found layers of my own depth I didn't know existed. She helped me reconnect with parts of me I had buried for years. I finally feel like I know who I am again.",
    name: "Sudha Bhattarai",
    location: "Goa, India",
    stars: 5,
  },
  {
    text: "What I loved most about working with Vandana is how unique her techniques are. It's not the same thing you find everywhere — she brings something deeply personal and intuitive to every session. I've never experienced healing quite like this before.",
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
