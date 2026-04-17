import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Award, Compass, Heart, Target } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SNR Vidhya Nethra Matric. Hr. Sec. School" },
      { name: "description", content: "Our story, vision, mission and the values that guide SNR Vidhya Nethra Matric. Hr. Sec. School in Sathyamangalam." },
      { property: "og:title", content: "About — SNR Vidhya Nethra School" },
      { property: "og:description", content: "Discover the story, vision and values of SNR Vidhya Nethra Matric. Hr. Sec. School." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-hero">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About the school</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-black md:text-6xl text-balance">
              Rooted in tradition. Designed for tomorrow.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              SNR Vidhya Nethra Matric. Hr. Sec. School in Sathyamangalam blends timeless Indian values
              with a contemporary, inquiry-led education — preparing students for life, not just exams.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-soft to-gold/30 p-12 ring-1 ring-border">
              <img src={logo} alt="" className="h-full w-full object-contain" />
            </div>
          </Reveal>
          <div className="space-y-10 md:col-span-7">
            <Reveal>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Our Story</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Founded with the vision of bringing world-class matriculation education to the heart of
                Sathyamangalam, SNR Vidhya Nethra has grown into a vibrant community of curious students,
                dedicated teachers and proud parents. Our campus, transport network and academic programs
                have evolved continuously — but our motto has stayed the same.
              </p>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Compass, title: "Vision", text: "To shape responsible citizens who lead with knowledge, empathy and integrity." },
                { icon: Target, title: "Mission", text: "Deliver excellent matriculation education through experienced faculty, modern facilities and strong values." },
                { icon: Heart, title: "Values", text: "Responsibility · Excellence · Respect — the three pillars of every SNR student." },
                { icon: Award, title: "Promise", text: "A safe, joyful and stretching environment where every child can find their voice." },
              ].map((b, i) => (
                <Reveal key={b.title} delay={i * 0.05}>
                  <div className="rounded-3xl border border-border bg-card p-6">
                    <b.icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 font-display text-xl font-bold">{b.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
