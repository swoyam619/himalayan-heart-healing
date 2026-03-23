import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import healingBg from "@/assets/healing-bg.jpg";

const applicationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  pattern: z.string().trim().min(1, "Please share what you'd like support with").max(2000),
  sessionType: z.string().min(1, "Please select a session type"),
});

type FormData = z.infer<typeof applicationSchema>;

const WorkWithMeSection = () => {
  const [form, setForm] = useState<FormData>({ name: "", email: "", pattern: "", sessionType: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = applicationSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xaqpalqz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          sessionType: form.sessionType,
          message: form.pattern,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
      toast.success("Thank you! Your application has been received. Vandana will be in touch soon. 🙏");
    } catch {
      toast.error("Something went wrong. Please try again or email vandanasoulstar@gmail.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  return (
    <section id="work-with-me" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={healingBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">Begin Your Healing Journey</h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            If you feel called to explore emotional healing in a supportive and compassionate space, you are warmly welcome.
            <br /><span className="italic">Healing begins with one step of awareness.</span>
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background/90 backdrop-blur-md rounded-2xl p-12 shadow-healing text-center"
          >
            <p className="text-4xl mb-4">🙏</p>
            <h3 className="font-heading text-2xl text-foreground mb-3">Application Received</h3>
            <p className="text-muted-foreground">Thank you for reaching out. Vandana will review your application and get in touch with you soon.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-background/90 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-healing space-y-6"
          >
            <h3 className="font-heading text-2xl text-foreground text-center mb-2">Work With Me — Application</h3>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                placeholder="Your name"
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">I'm interested in</label>
              <select
                name="sessionType"
                value={form.sessionType}
                onChange={(e) => update("sessionType", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              >
                <option value="">Select a session type</option>
                <option value="Private Healing Session">Private Healing Session</option>
                <option value="Upcoming Workshop">Upcoming Workshop</option>
                <option value="Both — Session & Workshop">Both — Session & Workshop</option>
                <option value="I'm not sure yet">I'm not sure yet</option>
              </select>
              {errors.sessionType && <p className="text-destructive text-sm mt-1">{errors.sessionType}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                What emotional pattern would you like support with?
              </label>
              <textarea
                name="message"
                value={form.pattern}
                onChange={(e) => update("pattern", e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                placeholder="Share as much or as little as you feel comfortable with…"
              />
              {errors.pattern && <p className="text-destructive text-sm mt-1">{errors.pattern}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity shadow-healing disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Submit Application"}
            </button>
            <p className="text-center text-xs text-muted-foreground">Your information is kept completely confidential.</p>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default WorkWithMeSection;
