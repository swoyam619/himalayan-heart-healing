import { motion } from "framer-motion";
import { Heart, Sparkles, HandHeart, Users } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Inner Child Healing",
    desc: "Reconnect with younger parts of yourself that may still hold fear, hurt, rejection, or unmet emotional needs. These sessions support emotional safety, self-understanding, and deeper compassion for the parts of you that learned to survive in silence.",
  },
  {
    icon: Sparkles,
    title: "Energy Healing",
    desc: "Restore emotional and energetic balance through intuitive and heart-led healing methods. This work can help shift heaviness, release stagnation, and support a greater sense of inner peace, grounding, and clarity.",
  },
  {
    icon: HandHeart,
    title: "Emotional Guidance & Support",
    desc: "Compassionate sessions designed to help you understand your emotional triggers, recurring patterns, and inner conflicts. Together we create space for awareness, reflection, and gentle transformation without judgment.",
  },
  {
    icon: Users,
    title: "Healing Workshops",
    desc: "Transformative group experiences focused on emotional awareness, healing, and self-connection. Workshops offer supportive guidance, shared reflection, and practices that help you feel seen, held, and empowered in community.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">Healing Services</h2>
        <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
        <p className="text-muted-foreground text-lg leading-relaxed">
          Danphe Healing offers gentle spaces for emotional release, self-understanding, and energetic restoration.
          Whether you are seeking one-to-one support or healing in a group setting, each offering is designed to meet you with care,
          sensitivity, and respect for your individual journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
