import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import healingBg from "@/assets/healing-bg.jpg";

const schema = z.object({
name: z.string().min(1, "Please enter your name"),
email: z.string().email("Enter a valid email"),
pattern: z.string().min(1, "Share your experience"),
sessionType: z.string().min(1, "Select an option"),
});

type FormType = z.infer<typeof schema>;

const WorkWithMeSection = () => {
const [form, setForm] = useState<FormType>({
name: "",
email: "",
pattern: "",
sessionType: "",
});

const [errors, setErrors] = useState<any>({});
const [submitted, setSubmitted] = useState(false);

const handleChange = (field: keyof FormType, value: string) => {
setForm((prev) => ({ ...prev, [field]: value }));
};

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();

```
const result = schema.safeParse(form);

if (!result.success) {
  const err: any = {};
  result.error.errors.forEach((e) => {
    err[e.path[0]] = e.message;
  });
  setErrors(err);
  return;
}

setErrors({});

try {
  const data = new FormData();
  data.append("name", form.name);
  data.append("email", form.email);
  data.append("sessionType", form.sessionType);
  data.append("message", form.pattern);

  const res = await fetch("https://formspree.io/f/xaqpalqz", {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });

  if (res.ok) {
    setSubmitted(true);
    toast.success("Application submitted successfully");
  } else {
    toast.error("Submission failed");
  }
} catch {
  toast.error("Network error");
}
```

};

return ( <section className="relative py-28">

```
  {/* BACKGROUND FIXED */}
  <div className="absolute inset-0 -z-10">
    <img src={healingBg} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/80"></div>
  </div>

  <div className="relative z-20 max-w-xl mx-auto px-4">

    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-white text-4xl mb-10 text-center"
    >
      Work With Me
    </motion.h2>

    {submitted ? (
      <p className="text-center text-white">
        Thank you. I will reach out soon.
      </p>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="w-full p-3 bg-transparent border-b border-white text-white placeholder-white/50 focus:outline-none caret-white"
        />
        {errors.name && <p className="text-red-400">{errors.name}</p>}

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full p-3 bg-transparent border-b border-white text-white placeholder-white/50 focus:outline-none caret-white"
        />
        {errors.email && <p className="text-red-400">{errors.email}</p>}

        <select
          value={form.sessionType}
          onChange={(e) => handleChange("sessionType", e.target.value)}
          className="w-full p-3 bg-transparent border-b border-white text-white focus:outline-none"
        >
          <option value="">Select</option>
          <option value="private">Private Session</option>
          <option value="workshop">Workshop</option>
        </select>
        {errors.sessionType && <p className="text-red-400">{errors.sessionType}</p>}

        <textarea
          placeholder="What are you going through?"
          value={form.pattern}
          onChange={(e) => handleChange("pattern", e.target.value)}
          className="w-full p-3 bg-transparent border-b border-white text-white placeholder-white/50 focus:outline-none caret-white"
        />
        {errors.pattern && <p className="text-red-400">{errors.pattern}</p>}

        <button className="w-full border border-white text-white py-3 hover:bg-white hover:text-black transition">
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
