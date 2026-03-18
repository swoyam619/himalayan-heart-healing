import { motion } from "framer-motion";

const ServicesSection = () => (
  <section id="services" className="py-28">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body">
            What I offer
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground leading-tight mb-6">
            Spaces that <span className="italic">hold</span> you.
          </h2>
          <p className="text-muted-foreground leading-[1.9]">
            Whether you come for one session or walk this path over months, every space I create is rooted in the same intention: for you to feel safe enough to be honest about what you're carrying.
          </p>
        </motion.div>

        <div className="lg:col-span-7 space-y-6">
          {[
            {
              title: "Private Healing Sessions",
              text: "One-to-one sessions where we work with whatever is most present for you — old wounds, emotional patterns, relationship dynamics, self-worth, grief. There's no formula. Just presence, care, and intuitive guidance.",
            },
            {
              title: "Energy Healing",
              text: "For when words aren't enough. These sessions work at the energetic level to release what's stuck, soften what's guarded, and restore a sense of flow. You don't need to understand it intellectually to feel the difference.",
            },
            {
              title: "Emotional Guidance",
              text: "Ongoing support for people navigating emotional transitions, difficult relationships, or the messy middle of personal transformation. Think of it as having someone who truly sees you in your corner.",
            },
            {
              title: "Healing Workshops",
              text: "Small group experiences focused on emotional awareness, inner child work, and collective healing. There is something powerful about being witnessed by others who understand — without judgment, without advice.",
            },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-8 bg-card rounded-sm border border-border hover:shadow-card transition-shadow"
            >
              <h3 className="font-heading text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-[1.8]">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
