import { motion } from "framer-motion";

const techniques = [
  {
    title: "Inner Child Therapy",
    description:
      "Supports you in reconnecting with younger parts of yourself that may still hold fear, rejection, abandonment, or unmet emotional needs. This work helps bring understanding, softness, and reparenting to old wounds.",
  },
  {
    title: "Shadow Therapy",
    description:
      "Helps bring hidden emotional patterns into awareness — the parts of you that were suppressed, shamed, or pushed aside. By compassionately meeting these parts, healing and integration become possible.",
  },
  {
    title: "Theta Healing",
    description:
      "Works at a deeper energetic and subconscious level to shift beliefs, emotional imprints, and inner blocks that may be affecting how you feel, relate, and respond to life.",
  },
  {
    title: "EFT (Emotional Freedom Technique)",
    description:
      "A gentle tapping-based practice that can help calm the nervous system, release emotional intensity, and reduce the charge around painful memories, fears, or repeating triggers.",
  },
  {
    title: "Ho'oponopono",
    description:
      "A restorative forgiveness and release practice that supports emotional cleansing, inner peace, and softening the weight of resentment, guilt, regret, or unresolved emotional pain.",
  },
  {
    title: "Chakra Healing",
    description:
      "Focuses on restoring energetic balance in areas where emotions may feel blocked, heavy, or depleted. It can support grounding, openness, emotional flow, and a greater sense of inner harmony.",
  },
  {
    title: "Akashic Records",
    description:
      "Offers intuitive insight into deeper soul patterns, recurring lessons, and emotional themes. This approach can bring clarity, meaning, and a wider understanding of your healing path.",
  },
  {
    title: "Bach Flower Remedy & Supportive Tools",
    description:
      "Uses subtle emotional support tools such as Bach Flower Remedy, Vedic switch-words, and Mokshapatta to complement the healing process and gently support emotional balance and self-awareness.",
  },
];

const TechniquesSection = () => (
  <section className="py-24 gradient-himalayan">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <p className="text-primary text-sm uppercase tracking-[0.25em] mb-4 font-semibold">Techniques Used in Sessions</p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6">
          Healing Modalities Used to Support Emotional Transformation
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Every person heals differently. That is why sessions are not rigid or one-size-fits-all.
          The techniques used are chosen with care, depending on what you are holding emotionally,
          what feels safe for your system, and what will best support your healing journey in that moment.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techniques.map((technique, index) => (
          <motion.article
            key={technique.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="rounded-[1.5rem] bg-background/85 backdrop-blur-sm border border-lavender-deep/30 p-7 shadow-card"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-2xl text-foreground">{technique.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{technique.description}</p>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 rounded-[1.75rem] border border-lavender-deep/30 bg-background/75 p-8 text-center shadow-card"
      >
        <h3 className="font-heading text-3xl text-foreground mb-4">A gentle and intuitive process</h3>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          These modalities are not used to overwhelm you with techniques, but to create a deeply supportive process.
          The intention is always to help you feel emotionally safe, more aware of your patterns, and more connected to your own inner wisdom.
          Healing unfolds gently — with presence, compassion, and respect for your unique pace.
        </p>
      </motion.div>
    </div>
  </section>
);

export default TechniquesSection;
