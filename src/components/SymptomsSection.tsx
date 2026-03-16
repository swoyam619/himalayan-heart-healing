import { motion } from "framer-motion";
import { CircleAlert, HeartHandshake, ShieldAlert, Waves } from "lucide-react";

const symptomGroups = [
  {
    icon: Waves,
    title: "Emotional symptoms",
    items: [
      "Frequent emotional overwhelm, unexplained sadness, or inner heaviness",
      "Feeling anxious, easily activated, or unable to relax even in safe situations",
      "Mood swings, emotional numbness, or difficulty understanding what you truly feel",
      "Carrying guilt, shame, grief, or fear that seems bigger than the present moment",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Relationship patterns",
    items: [
      "People-pleasing, over-giving, or losing yourself in relationships",
      "Fear of rejection, abandonment, or not feeling emotionally safe with others",
      "Getting triggered in conflict and struggling to communicate your deeper needs",
      "Repeating painful relationship patterns even when you want something different",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Self-worth and identity",
    items: [
      "Feeling not good enough, unseen, or unsure of your value",
      "Overthinking, self-doubt, and constantly seeking external validation",
      "Difficulty setting boundaries without guilt or fear",
      "Feeling disconnected from your authentic voice, desires, and inner truth",
    ],
  },
  {
    icon: CircleAlert,
    title: "Signs deeper healing may help",
    items: [
      "You understand your patterns mentally, but they still keep repeating",
      "You have done a lot for others, yet your own emotional needs remain unmet",
      "You feel strong on the outside while carrying silent pain inside",
      "You sense that something within is asking to be seen, held, and gently healed",
    ],
  },
];

const SymptomsSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <p className="text-primary text-sm uppercase tracking-[0.25em] mb-4 font-semibold">Signs You May Be Ready to Heal</p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6">
          Symptoms and Patterns That Often Need Gentle Healing
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Emotional wounds do not always appear as something dramatic. Sometimes they show up quietly through repeated reactions,
          exhausting relationship patterns, inner confusion, or a persistent feeling that you are carrying too much alone.
          These signs are not weaknesses — they are invitations to return to yourself with compassion.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {symptomGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[1.5rem] border border-border bg-card p-8 shadow-card"
          >
            <div className="mb-5 inline-flex rounded-full bg-lavender p-3 text-primary">
              <group.icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-4">{group.title}</h3>
            <ul className="space-y-3 text-muted-foreground leading-relaxed">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground italic max-w-3xl mx-auto mt-12 leading-relaxed"
      >
        If you recognize yourself in any of these experiences, it does not mean something is wrong with you.
        It may simply mean your mind, body, and inner child are asking for a safer, more loving way to process what has been held for too long.
      </motion.p>
    </div>
  </section>
);

export default SymptomsSection;
