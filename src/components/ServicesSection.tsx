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
            Simple, gentle <span className="italic">healing.</span>
          </h2>
          <p className="text-muted-foreground leading-[1.9]">
            Whether it's one session or a longer journey, every session is designed to help you feel lighter, calmer, and more like yourself.
          </p>
        </motion.div>

        <div className="lg:col-span-7 space-y-6">
          {[
            {
              title: "1:1 Healing Sessions",
              text: "Private sessions focused on whatever you're going through — anxiety, pain, relationship issues, self-doubt. No formula. Just real, caring support.",
            },
            {
              title: "Energy Healing",
              text: "When words aren't enough, energy healing works on a deeper level. It helps release what's stuck and brings back a sense of calm and balance.",
            },
            {
              title: "Emotional Support",
              text: "Ongoing guidance for people going through tough times — difficult relationships, life changes, or just feeling lost. Think of it as having someone who truly understands in your corner.",
            },
            {
              title: "Group Healing Sessions",
              text: "Small group experiences focused on emotional awareness and collective support. There's something powerful about healing alongside others who understand.",
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