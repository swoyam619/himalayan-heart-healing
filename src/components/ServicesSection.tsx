import { motion } from "framer-motion";
import { Heart, Sparkles, HandHeart, Users } from "lucide-react";

const services = [
  { icon: Heart, title: "Inner Child Healing", desc: "Reconnect with your younger self and release emotional patterns formed in childhood." },
  { icon: Sparkles, title: "Energy Healing", desc: "Restore emotional and energetic balance through intuitive healing methods." },
  { icon: HandHeart, title: "Emotional Guidance & Support", desc: "Compassionate sessions designed to help you understand emotional triggers and patterns." },
  { icon: Users, title: "Healing Workshops", desc: "Transformative group experiences focused on emotional awareness and healing." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">Healing Services</h2>
        <div className="w-20 h-0.5 bg-gold mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-healing transition-shadow group"
          >
            <s.icon className="w-10 h-10 text-primary mb-4 group-hover:text-gold transition-colors" />
            <h3 className="font-heading text-2xl text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="#work-with-me" className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
          Explore Sessions
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
