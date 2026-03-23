import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import healingBg from "@/assets/healing-bg.jpg";

/* ---------------- Schema ---------------- */
const formSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z
    .string()
    .trim()
    .min(1, "Feel free to share a little about what you're going through")
    .max(2000),
  sessionType: z.string().min(1, "Please select an option"),
});

type FormData = z.infer<typeof formSchema>;

/* ---------------- Component ---------------- */
const WorkWithMeSection = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    sessionType: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ---------------- Handlers ---------------- */
  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = formSchema.safeParse(form);

    if (!result.success) {
      const newErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        newErrors[field] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xaqpalqz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSubmitted(true);
      toast.success("Thank you for sharing 🤍 I’ll be in touch soon.");
    } catch {
      toast.error(
        "Something went wrong. Please try again or email vandanasoulstar@gmail.com."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <section id="work-with-me" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={healingBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Begin Your Healing Journey
          </h2>

          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />

          <p className="text-muted-foreground leading-relaxed">
            If you feel called to explore your emotions in a safe, supportive
            space, you’re warmly welcome here.
            <br />
            <span className="italic">
              Healing begins with a single step of awareness.
            </span>
          </p>
        </motion.div>

        {/* Success State */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background/90 backdrop-blur-md rounded-2xl p-12 shadow-healing text-center"
          >
            <p className="text-4xl mb-4">🤍</p>
            <h3 className="font-heading text-2xl text-foreground mb-3">
              You’re heard
            </h3>
            <p className="text-muted-foreground">
              Thank you for sharing this with me. I’ll gently reach out to you
              within the next 24–48 hours.
            </p>
          </motion.div>
        ) : (
          /* Form */
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background/90 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-healing space-y-6"
          >
            <div className="text-center mb-4">
              <h3 className="font-heading text-2xl text-foreground">
                Let’s Connect
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Take your time — share only what feels right.
              </p>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                What’s your name?
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/30"
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Where can I reach you?
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/30"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">
                  {errors.email}
                </p>
              )}
              <p className="text-xs text-muted-foreground mt-1">
                No spam, ever.
              </p>
            </div>

            {/* Session Type */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                What are you feeling drawn to?
              </label>
              <select
                value={form.sessionType}
                onChange={(e) =>
                  updateField("sessionType", e.target.value)
                }
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/30"
              >
                <option value="">Choose an option</option>
                <option value="Private Session">1:1 Healing Session</option>
                <option value="Workshop">Workshop</option>
                <option value="Both">Both</option>
                <option value="Not sure">Not sure yet — guide me</option>
              </select>
              {errors.sessionType && (
                <p className="text-destructive text-sm mt-1">
                  {errors.sessionType}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                What would you like support with?
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) =>
                  updateField("message", e.target.value)
                }
                className="w-full px-4 py-3 rounded-lg border border-border bg-background resize-none focus:ring-2 focus:ring-primary/30"
                placeholder="You can share anything that feels important… there’s no right or wrong way."
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <p className="text-center text-xs text-muted-foreground">
              Everything you share is held with care and kept completely
              confidential.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default WorkWithMeSection;
