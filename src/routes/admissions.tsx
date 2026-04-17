import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { CheckCircle2, GraduationCap, Loader2, Send, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SCHOOL } from "@/components/SiteFooter";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — SNR Vidhya Nethra School" },
      { name: "description", content: "Apply online for admission to SNR Vidhya Nethra Matric. Hr. Sec. School. Quick form, fast response." },
      { property: "og:title", content: "Admissions — SNR Vidhya Nethra School" },
      { property: "og:description", content: "Online admission form for SNR Vidhya Nethra School in Sathyamangalam." },
      { property: "og:image", content: "/logo.jpg" },
    ],
  }),
  component: AdmissionsPage,
});

const schema = z.object({
  studentName: z.string().trim().min(2, "Enter the student's full name").max(100),
  dob: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["male", "female", "other"], { message: "Select gender" }),
  standard: z.string().min(1, "Select the standard"),
  parentName: z.string().trim().min(2, "Enter parent / guardian name").max(100),
  phone: z.string().trim().regex(/^(\+?\d[\d\s-]{8,14})$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  address: z.string().trim().min(5, "Enter your address").max(500),
  notes: z.string().trim().max(1000).optional(),
});

type FormErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const standards = [
  "LKG", "UKG",
  "Class I", "Class II", "Class III", "Class IV", "Class V",
  "Class VI", "Class VII", "Class VIII", "Class IX", "Class X",
  "Class XI", "Class XII",
];

function AdmissionsPage() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormErrors;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    try {
      // Backend submission will be wired to Lovable Cloud once enabled.
      // For now, we offer a WhatsApp fallback so admissions can be received immediately.
      await new Promise((r) => setTimeout(r, 700));
      const d = parsed.data;
      const text = encodeURIComponent(
        `New Admission Enquiry%0A` +
        `Student: ${d.studentName}%0A` +
        `DOB: ${d.dob}%0A` +
        `Gender: ${d.gender}%0A` +
        `Standard: ${d.standard}%0A` +
        `Parent: ${d.parentName}%0A` +
        `Phone: ${d.phone}%0A` +
        `Email: ${d.email}%0A` +
        `Address: ${d.address}%0A` +
        `Notes: ${d.notes ?? "-"}`,
      );
      window.open(`https://wa.me/${SCHOOL.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-hero">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-24">
          <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Admissions 2026 – 27</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-black md:text-6xl text-balance">
              Apply online in just a few minutes.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Fill in the student's details below. Our admissions team will get in touch with you to schedule
              the next steps. Your information is kept strictly confidential.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-12 md:py-20">
        <aside className="space-y-6 md:col-span-4">
          {[
            { icon: GraduationCap, title: "All classes (LKG – XII)", text: "Open admissions for matriculation, primary, secondary and higher secondary." },
            { icon: ShieldCheck, title: "Secure submissions", text: "Your data is validated and shared only with our admissions office." },
            { icon: CheckCircle2, title: "Quick response", text: "Expect a call or WhatsApp within 1–2 working days." },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="rounded-3xl border border-border bg-card p-6">
                <b.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </aside>

        <div className="md:col-span-8">
          <Reveal>
            <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft md:p-10">
              {done ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-bold">Application sent!</h2>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    Our admissions office will contact you shortly. You can also reach us anytime on WhatsApp at{" "}
                    <span className="font-semibold text-foreground">{SCHOOL.phone}</span>.
                  </p>
                  <button
                    onClick={() => setDone(false)}
                    className="mt-8 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2" noValidate>
                  <Field label="Student's full name" name="studentName" error={errors.studentName} placeholder="e.g. Aarav Kumar" required />
                  <Field label="Date of birth" name="dob" type="date" error={errors.dob} required />
                  <Select label="Gender" name="gender" error={errors.gender} required>
                    <option value="">Select…</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Select>
                  <Select label="Standard / class applying for" name="standard" error={errors.standard} required>
                    <option value="">Select…</option>
                    {standards.map((s) => <option key={s} value={s}>{s}</option>)}
                  </Select>
                  <Field label="Parent / guardian name" name="parentName" error={errors.parentName} placeholder="Full name" required />
                  <Field label="Phone (with country code)" name="phone" error={errors.phone} placeholder="+91 99424 58899" required />
                  <Field className="md:col-span-2" label="Email" name="email" type="email" error={errors.email} placeholder="you@example.com" required />
                  <Field className="md:col-span-2" label="Residential address" name="address" error={errors.address} placeholder="Door no, street, area, city" required />
                  <TextArea className="md:col-span-2" label="Anything else we should know? (optional)" name="notes" error={errors.notes} placeholder="Special needs, sibling at school, preferred contact time…" />

                  <div className="md:col-span-2 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      By submitting, you consent to be contacted by SNR Vidhya Nethra School about your enquiry.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] disabled:opacity-60"
                    >
                      {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                      {submitting ? "Submitting…" : "Submit Application"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, error, className = "", type = "text", required, placeholder,
}: {
  label: string; name: string; error?: string; className?: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-foreground">{label}{required && <span className="text-primary"> *</span>}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-primary/40 ${error ? "border-destructive" : "border-input focus:border-primary"}`}
      />
      {error && <span className="mt-1 block text-xs font-medium text-destructive">{error}</span>}
    </label>
  );
}

function TextArea({
  label, name, error, className = "", placeholder,
}: { label: string; name: string; error?: string; className?: string; placeholder?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-foreground">{label}</span>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-primary/40 ${error ? "border-destructive" : "border-input focus:border-primary"}`}
      />
      {error && <span className="mt-1 block text-xs font-medium text-destructive">{error}</span>}
    </label>
  );
}

function Select({
  label, name, error, required, children,
}: { label: string; name: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-foreground">{label}{required && <span className="text-primary"> *</span>}</span>
      <select
        name={name}
        defaultValue=""
        className={`mt-2 w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-primary/40 ${error ? "border-destructive" : "border-input focus:border-primary"}`}
      >
        {children}
      </select>
      {error && <span className="mt-1 block text-xs font-medium text-destructive">{error}</span>}
    </label>
  );
}
