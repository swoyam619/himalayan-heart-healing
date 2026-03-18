import { motion } from "framer-motion";

const techniques = [
  {
    title: "Inner Child Therapy",
    description: "Going back — gently — to the moments where you first learned to hide, perform, or disconnect. Not to relive pain, but to offer your younger self the safety and understanding they didn't receive.",
  },
  {
    title: "Shadow Therapy",
    description: "The parts of you that were shamed, denied, or pushed underground don't disappear. They run your life from the shadows. This work brings them into the light — not to fix them, but to welcome them home.",
  },
  {
    title: "Theta Healing",
    description: "Working at the subconscious level to shift beliefs and emotional imprints that your conscious mind can't seem to reach. The kind of patterns that make you say, 'I know this isn't rational, but I can't stop feeling it.'",
  },
  {
    title: "EFT — Emotional Freedom Technique",
    description: "A body-based practice that uses gentle tapping to calm your nervous system and soften the emotional charge around memories, fears, and triggers. Simple, but often surprisingly powerful.",
  },
  {
    title: "Ho'oponopono",
    description: "An ancient Hawaiian practice of reconciliation and forgiveness. It works with four simple phrases to release the weight of resentment, guilt, and emotional debt — sometimes from patterns you didn't even know you were carrying.",
  },
  {
    title: "Chakra Healing",
    description: "When emotions get stuck, they live in the body. Chakra work helps restore flow to the places where grief, fear, shame, or disconnection have created heaviness or numbness.",
  },
  {
    title: "Akashic Records",
    description: "A way of accessing deeper soul-level patterns — the recurring themes, lessons, and emotional signatures that keep showing up across different chapters of your life.",
  },
  {
    title: "Bach Flower Remedy & Supportive Tools",
    description: "Gentle, plant-based support for emotional states. Alongside tools like Vedic switch-words and Mokshapatta, these offer quiet, continuous support between sessions.",
  },
];

const TechniquesSection = () => (
  <section id="modalities" className="relative py-28 gradient-forest texture-overlay">
    <div className="relative z-10 container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body">
          The tools I work with
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground leading-tight max-w-2xl">
          No single modality heals everything.<br />
          <span className="italic">That's why I don't use just one.</span>
        </h2>
      </motion.div>

      <div className="space-y-4">
        {techniques.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-7 border-b border-border last:border-0"
          >
            <div className="md:col-span-4">
              <h3 className="font-heading text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors">
                {t.title}
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-muted-foreground leading-[1.8]">{t.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 font-heading text-xl text-foreground italic text-center max-w-2xl mx-auto"
      >
        I don't choose techniques in advance. I listen to what's present in you and let the session unfold from there.
      </motion.p>
    </div>
  </section>
);

export default TechniquesSection;
