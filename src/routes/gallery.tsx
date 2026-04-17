import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import buses from "@/assets/campus-buses.jpg";
import sports from "@/assets/sports-day.jpg";
import yoga from "@/assets/event-yoga.jpg";
import onam from "@/assets/event-onam.jpg";
import yellow from "@/assets/event-yellowday.jpg";
import red from "@/assets/event-redday.jpg";
import prayer from "@/assets/event-prayer.jpg";
import classroom from "@/assets/event-classroom.jpg";
import competition from "@/assets/event-competition.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Events — SNR Vidhya Nethra School" },
      { name: "description", content: "Photos from celebrations, sports days, yoga, cultural events and everyday life at SNR Vidhya Nethra School." },
      { property: "og:title", content: "Gallery & Events — SNR Vidhya Nethra" },
      { property: "og:description", content: "Glimpses of student life, events and the campus at SNR Vidhya Nethra School." },
      { property: "og:image", content: "/logo.jpg" },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: red, label: "SNR Red Day Celebration", tag: "Cultural" },
  { src: yellow, label: "Happy Yellow Day", tag: "Cultural" },
  { src: onam, label: "Onam Celebration", tag: "Festival" },
  { src: yoga, label: "International Day of Yoga", tag: "Wellness" },
  { src: sports, label: "Annual Sports Day", tag: "Sports" },
  { src: competition, label: "Inter-class Competition", tag: "Academic" },
  { src: classroom, label: "Smart Classroom Session", tag: "Academic" },
  { src: prayer, label: "Morning Assembly", tag: "Daily life" },
  { src: buses, label: "Our School Transport Fleet", tag: "Campus" },
];

function GalleryPage() {
  return (
    <>
      <section className="bg-hero">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-24">
          <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Gallery & events</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-black md:text-6xl text-balance">
              Moments that make us SNR.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              From colour days to yoga, from sports finals to silent assemblies — every memory we make together.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={(i % 3) * 0.05}>
              <figure className="group relative break-inside-avoid overflow-hidden rounded-3xl ring-1 ring-border">
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4">
                  <span className="text-sm font-semibold text-white">{it.label}</span>
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">{it.tag}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
