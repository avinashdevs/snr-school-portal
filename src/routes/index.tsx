import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, BookOpen, Bus, FlaskConical, Trophy, Sparkles, Users, Shield, Heart,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import logo from "@/assets/logo.jpg";
import buses from "@/assets/campus-buses.jpg";
import sports from "@/assets/sports-day.jpg";
import yoga from "@/assets/event-yoga.jpg";
import onam from "@/assets/event-onam.jpg";
import yellow from "@/assets/event-yellowday.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SNR Vidhya Nethra Matric. Hr. Sec. School — Sathyamangalam" },
      { name: "description", content: "A premier matriculation higher secondary school in Sathyamangalam. Modern campus, holistic learning, online admissions." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { v: "25+", l: "Years of legacy" },
  { v: "1500+", l: "Happy students" },
  { v: "80+", l: "Expert faculty" },
  { v: "100%", l: "Board results" },
];

const values = [
  { icon: BookOpen, title: "Academic Excellence", text: "A rigorous matriculation curriculum delivered by passionate, certified teachers." },
  { icon: Heart, title: "Holistic Care", text: "Wellness, sports, arts and yoga woven into every child's journey." },
  { icon: Shield, title: "Safe & Secure", text: "CCTV-monitored campus, trained staff and a culture of respect." },
  { icon: Sparkles, title: "Future-Ready", text: "Smart classrooms, computer labs and project-based learning." },
];

const events = [
  { src: yoga, label: "International Day of Yoga" },
  { src: onam, label: "Onam Celebration" },
  { src: yellow, label: "Happy Yellow Day" },
  { src: sports, label: "Annual Sports Day" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/25 blur-3xl" />

        <div className="container-px relative mx-auto grid max-w-7xl gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Admissions open for 2026 – 27
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-4xl font-black leading-[1.05] text-foreground md:text-6xl lg:text-7xl text-balance"
            >
              Where curious minds<br />
              become <span className="text-primary">confident leaders</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg text-balance"
            >
              SNR Vidhya Nethra is a vibrant matriculation higher secondary school in Sathyamangalam, built on the values of <em className="not-italic font-semibold text-foreground">Responsibility, Excellence and Respect</em>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-2 rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
              >
                Apply for Admission
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
              >
                Discover the school
              </Link>
            </motion.div>

            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                >
                  <dt className="font-display text-3xl font-bold text-primary">{s.v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</dd>
                </motion.div>
              ))}
            </dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative md:col-span-5"
          >
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div aria-hidden className="absolute inset-0 -rotate-6 rounded-[2.5rem] bg-primary/10" />
              <div aria-hidden className="absolute inset-0 rotate-3 rounded-[2.5rem] bg-gold/30" />
              <div className="relative flex h-full w-full items-center justify-center rounded-[2.5rem] bg-card p-10 shadow-elegant ring-1 ring-border">
                <img src={logo} alt="School crest" className="h-full w-full object-contain" />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 rounded-2xl bg-card px-4 py-3 shadow-elegant ring-1 ring-border"
              >
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Motto</p>
                <p className="font-display text-sm font-bold text-primary">Responsibility · Excellence · Respect</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why SNR</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold md:text-5xl text-balance">
            A school built around the whole child.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07}>
              <div className="group h-full rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CORRESPONDENT */}
      <section className="container-px mx-auto max-w-7xl pb-10 md:pb-20">
        <div className="grid gap-8 rounded-[2rem] border border-border bg-card p-8 md:grid-cols-12 md:p-12">
          <Reveal className="md:col-span-4">
            <div className="relative mx-auto aspect-[3/4] max-w-xs overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary-soft via-secondary to-gold/30 ring-1 ring-border">
              {/* Placeholder for the correspondent's photo to be added later */}
              <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
                <Users className="h-10 w-10 text-primary" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Correspondent's photo
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">to be added soon</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">From the Correspondent</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl text-balance">
              "Education is the most powerful gift we can give a child."
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              At SNR Vidhya Nethra, we believe every student carries a unique spark. Our role is to
              nurture that spark with the right balance of academic rigour, ethical grounding and
              creative freedom. We invite you to be part of our growing family.
            </p>
            <p className="mt-4 text-sm font-semibold text-foreground">— Correspondent, SNR Vidhya Nethra</p>
          </Reveal>
        </div>
      </section>

      {/* AMENITIES STRIP */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Campus & amenities</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold md:text-5xl text-balance">
              Everything they need to thrive.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <img src={buses} alt="Fleet of SNR school buses" className="h-72 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary"><Bus className="h-5 w-5" /><h3 className="font-display text-xl font-bold">Safe Transport</h3></div>
                  <p className="mt-2 text-sm text-muted-foreground">A dedicated fleet of GPS-monitored school buses serving all routes around Sathyamangalam.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <img src={sports} alt="Students at the school sports day" className="h-72 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary"><Trophy className="h-5 w-5" /><h3 className="font-display text-xl font-bold">Sports & Activities</h3></div>
                  <p className="mt-2 text-sm text-muted-foreground">A spacious play-field and dedicated coaches for athletics, kabaddi, volleyball, chess and more.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: FlaskConical, title: "Science Labs" },
              { icon: BookOpen, title: "Library" },
              { icon: Sparkles, title: "Smart Classrooms" },
              { icon: Heart, title: "Yoga & Wellness" },
            ].map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <a.icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-semibold">{a.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT GLIMPSES */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Life at SNR</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold md:text-5xl text-balance">Moments that shape memories.</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e, i) => (
            <Reveal key={e.label} delay={i * 0.06}>
              <figure className="group relative overflow-hidden rounded-3xl ring-1 ring-border">
                <img src={e.src} alt={e.label} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-semibold text-white">
                  {e.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-gradient p-10 text-primary-foreground md:p-16">
            <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-3xl font-bold md:text-5xl text-balance">
                Begin your child's SNR journey today.
              </h2>
              <p className="mt-4 text-base text-primary-foreground/85">
                Admissions are now open for the next academic year. Apply online in minutes — our admissions team will reach out to you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 text-sm font-semibold text-primary shadow-elegant hover:scale-[1.03] transition-transform">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10">
                  Visit the campus
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
