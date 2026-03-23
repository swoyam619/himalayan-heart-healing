import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import healingBg from "@/assets/healing-bg.jpg";

/* ---------------- Schema ---------------- */
const formSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  whatsapp: z.string().trim().max(20).optional().or(z.literal("")),
  sessionType: z.string().min(1, "Please select an option"),
  message: z
    .string()
    .trim()
    .min(1, "Feel free to share a little about what you're going through")
    .max(2000),
  previousHealing: z.string().optional().or(z.literal("")),
  responsePreference: z.string().min(1, "Please select how you'd like to hear back"),
});

type FormData = z.infer<typeof formSchema>;

const initialForm: FormData = {
  name: "",
  email: "",
  whatsapp: "",
  sessionType: "",
  message: "",
  previousHealing: "",
  responsePreference: "",
};

/* ---------------- Component ---------------- */
const WorkWithMeSection = () => {
  const [form, setForm] = useState<FormData>({ ...initialForm });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
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
      // Go back to the step with the first error
      const step1Fields: (keyof FormData)[] = ["name", "email", "whatsapp", "responsePreference"];
      if (step1Fields.some((f) => newErrors[f])) setStep(0);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xaqpalqz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          whatsapp: form.whatsapp || "Not provided",
          sessionType: form.sessionType,
          message: form.message,
          previousHealing: form.previousHealing || "Not answered",
          responsePreference: form.responsePreference,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      toast.success("Thank you for sharing 🤍 I'll be in touch soon.");
    } catch {
      toast.error("Something went wrong. Please try again or email vandanasoulstar@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/30 transition-all duration-200";

  /* ---------------- Steps ---------------- */
  const renderStep1 = () => (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="space-y-5"
    >
      <div>
        <label className="block text-sm font-semibold mb-2">What's your name?</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          className={inputClasses}
          placeholder="Your full name"
        />
        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Your email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          className={inputClasses}
          placeholder="your@email.com"
        />
        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          WhatsApp number <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          value={form.whatsapp}
          onChange={(e) => updateField("whatsapp", e.target.value)}
          className={inputClasses}
          placeholder="+91 9930343807"
        />
        {errors.whatsapp && <p className="text-destructive text-sm mt-1">{errors.whatsapp}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">How would you prefer I respond?</label>
        <div className="grid grid-cols-2 gap-3">
          {["Email", "WhatsApp", "Phone Call", "No preference"].map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => updateField("responsePreference", opt)}
              className={`px-4 py-2.5 rounded-lg border text-sm transition-all duration-200 ${
                form.responsePreference === opt
                  ? "border-primary bg-primary/10 text-foreground font-medium"
                  : "border-border bg-background text-muted-foreground hover:border-primary/40"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {errors.responsePreference && (
          <p className="text-destructive text-sm mt-1">{errors.responsePreference}</p>
        )}
      </div>

      <button
        type="button"
        onClick={() => {
          const step1Schema = z.object({
            name: formSchema.shape.name,
            email: formSchema.shape.email,
            responsePreference: formSchema.shape.responsePreference,
          });
          const result = step1Schema.safeParse(form);
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
          setStep(1);
        }}
        className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
      >
        Continue →
      </button>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-5"
    >
      <div>
        <label className="block text-sm font-semibold mb-2">What are you feeling drawn to?</label>
        <select
          value={form.sessionType}
          onChange={(e) => updateField("sessionType", e.target.value)}
          className={inputClasses}
        >
          <option value="">Choose an option</option>
          <option value="Private Session">1:1 Healing Session</option>
          <option value="Workshop">Workshop</option>
          <option value="Both">Both</option>
          <option value="Not sure">Not sure yet — guide me</option>
        </select>
        {errors.sessionType && <p className="text-destructive text-sm mt-1">{errors.sessionType}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">What would you like support with?</label>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={`${inputClasses} resize-none`}
          placeholder="Share anything that feels important… there's no right or wrong way."
        />
        {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          Have you tried therapy or healing work before?{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <textarea
          rows={2}
          value={form.previousHealing}
          onChange={(e) => updateField("previousHealing", e.target.value)}
          className={`${inputClasses} resize-none`}
          placeholder="e.g. counselling, energy work, meditation…"
        />
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setStep(0)}
          className="px-6 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-accent/50 transition-colors"
        >
          ← Back
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-60 transition-opacity"
        >
          {loading ? "Sending..." : "Send Application"}
        </button>
      </div>
    </motion.div>
  );

  /* ---------------- UI ---------------- */
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
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Begin Your Healing Journey
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            If you feel called to explore your emotions in a safe, supportive space, you're warmly welcome here.
            <br />
            <span className="italic">Healing begins with a single step of awareness.</span>
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background/90 backdrop-blur-md rounded-2xl p-12 shadow-healing text-center space-y-4"
          >
            <p className="text-4xl">🤍</p>
            <h3 className="font-heading text-2xl text-foreground">You're heard</h3>
            <p className="text-muted-foreground">
              Thank you for sharing this with me. I'll gently reach out to you within the next 24–48 hours
              {form.responsePreference && form.responsePreference !== "No preference"
                ? ` via ${form.responsePreference.toLowerCase()}`
                : ""}
              .
            </p>
            <a
              href="https://wa.me/919930343807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-[hsl(142,70%,40%)] text-white font-medium hover:opacity-90 transition-opacity text-sm"
            >
              💬 Message me on WhatsApp
            </a>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background/90 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-healing"
          >
            <div className="text-center mb-6">
              <h3 className="font-heading text-2xl text-foreground">Let's Connect</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Take your time — share only what feels right.
              </p>
              {/* Step indicator */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {[0, 1].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      s === step ? "w-8 bg-primary" : "w-4 bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>

            {step === 0 ? renderStep1() : renderStep2()}

            <p className="text-center text-xs text-muted-foreground mt-6">
              Everything you share is held with care and kept completely confidential.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default WorkWithMeSection;
