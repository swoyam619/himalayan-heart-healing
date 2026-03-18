import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import healingBg from "@/assets/healing-bg.jpg";

const applicationSchema = z.object({
name: z.string().trim().min(1, "Please share your name").max(100),
email: z.string().trim().email("Please enter a valid email").max(255),
pattern: z.string().trim().min(1, "Take your time — even a few words help").max(2000),
inspiration: z.string().trim().max(2000).optional(),
previousWork: z.string().trim().max(2000).optional(),
hopes: z.string().trim().max(2000).optional(),
sessionType: z.string().min(1, "Please let me know what interests you"),
});

type FormDataType = z.infer<typeof applicationSchema>;

const WorkWithMeSection = () => {
const [form, setForm] = useState<FormDataType>({
name: "",
email: "",
pattern: "",
inspiration: "",
previousWork: "",
hopes: "",
sessionType: "",
});

const [errors, setErrors] = useState<Partial<Record<keyof FormDataType, string>>>({});
const [submitted, setSubmitted] = useState(false);

const update = (field: keyof FormDataType, value: string) => {
setForm((p) => ({ ...p, [field]: value }));
if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
};

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();

```
const result = applicationSchema.safeParse(form);
if (!result.success) {
  const fieldErrors: Partial<Record<keyof FormDataType, string>> = {};
  result.error.errors.forEach((err) => {
    const field = err.path[0] as keyof FormDataType;
    fieldErrors[field] = err.message;
  });
  setErrors(fieldErrors);
  return;
}

setErrors({});

try {
  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("sessionType", form.sessionType);
  formData.append(
    "message",
    `Pattern: ${form.pattern}
```

Inspiration: ${form.inspiration}

Previous Work: ${form.previousWork}

Hopes: ${form.hopes}`
);

```
  const response = await fetch("https://formspree.io/f/xaqpalqz", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    setSubmitted(true);
    toast.success("Thank you. I've received your application and will be in touch soon.");
  } else {
    toast.error("Something went wrong. Please try again.");
  }
} catch (error) {
  toast.error("Network error. Please try again.");
}
```

};

const inputClass =
"w-full px-0 py-3 bg-transparent border-0 border-b border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/50 transition-colors font-body";

const labelClass =
"block text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-3 font-body";

return ( <section id="work-with-me" className="relative py-28 overflow-hidden"> <div className="absolute inset-0"> <img src={healingBg} alt="" className="w-full h-full object-cover" /> <div className="absolute inset-0 bg-foreground/85" /> </div>

```
  <div className="relative z-10 container mx-auto px-4 max-w-2xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="text-gold-light/70 text-xs uppercase tracking-[0.3em] mb-8 font-body">
        Work with me
      </p>

      <h2 className="font-heading text-4xl md:text-5xl font-light text-primary-foreground leading-tight mb-6">
        If you're reading this far,<br />
        <span className="italic">something in you already knows.</span>
      </h2>

      <p className="text-primary-foreground/60 leading-[1.9] max-w-lg mx-auto">
        This isn't a sales pitch. It's an invitation. If you feel drawn to this work, fill out a short application and I'll be in touch personally.
      </p>
    </motion.div>

    {submitted ? (
      <div className="text-center py-16">
        <p className="font-heading text-3xl text-primary-foreground mb-4">Thank you.</p>
        <p className="text-primary-foreground/60">
          I've received your application and will reach out soon.
        </p>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-8">

        <div>
          <label className={labelClass}>Your name</label>
          <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
          {errors.name && <p className="text-accent text-sm mt-2">{errors.name}</p>}
        </div>

        <div>
          <label className={labelClass}>Email address</label>
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
          {errors.email && <p className="text-accent text-sm mt-2">{errors.email}</p>}
        </div>

        <div>
          <label className={labelClass}>I'm interested in</label>
          <select value={form.sessionType} onChange={(e) => update("sessionType", e.target.value)} className={inputClass}>
            <option value="">Choose one...</option>
            <option value="private">Private Session</option>
            <option value="workshop">Workshop</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Emotional pattern</label>
          <textarea value={form.pattern} onChange={(e) => update("pattern", e.target.value)} className={inputClass} />
        </div>

        <button type="submit" className="w-full py-4 border text-primary-foreground">
          Submit Application
        </button>

      </form>
    )}
  </div>
</section>
```

);
};

export default WorkWithMeSection;
