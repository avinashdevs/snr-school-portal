import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SCHOOL } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SNR Vidhya Nethra School, Sathyamangalam" },
      { name: "description", content: "Get in touch with SNR Vidhya Nethra School. Phone, WhatsApp, Instagram and directions to our Sathyamangalam campus." },
      { property: "og:title", content: "Contact SNR Vidhya Nethra School" },
      { property: "og:description", content: "Phone, WhatsApp and directions to SNR Vidhya Nethra School in Sathyamangalam." },
      { property: "og:image", content: "/logo.jpg" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const wa = `https://wa.me/${SCHOOL.whatsapp}?text=${encodeURIComponent("Hello SNR Vidhya Nethra, I'd like more information.")}`;

  return (
    <>
      <section className="bg-hero">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-24">
          <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get in touch</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-black md:text-6xl text-balance">
              We'd love to hear from you.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Drop by our Sathyamangalam campus, give us a call, or send us a quick message on WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto grid max-w-7xl gap-6 py-16 md:grid-cols-3 md:py-20">
        {[
          { icon: Phone, title: "Call us", value: SCHOOL.phone, href: `tel:${SCHOOL.phone.replace(/\s/g,'')}`, cta: "Call now" },
          { icon: MessageCircle, title: "WhatsApp", value: SCHOOL.phone, href: wa, cta: "Chat on WhatsApp" },
          { icon: Instagram, title: "Instagram", value: "@snr.school_sathy", href: SCHOOL.instagram, cta: "Follow us" },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <a href={c.href} target="_blank" rel="noreferrer noopener" className="group block h-full rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
              <c.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-xl font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.value}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                {c.cta} <span aria-hidden>→</span>
              </p>
            </a>
          </Reveal>
        ))}
      </section>

      <section className="container-px mx-auto max-w-7xl pb-20">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2rem] border border-border bg-card md:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="h-5 w-5" />
                <h2 className="font-display text-2xl font-bold">Visit our campus</h2>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                SNR Vidhya Nethra Matric. Hr. Sec. School<br />
                Sathyamangalam, Tamil Nadu, India
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a href={`tel:${SCHOOL.phone.replace(/\s/g,'')}`} className="hover:text-primary">{SCHOOL.phone}</a></li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> office@snrvidhyanethra.edu</li>
              </ul>
              <a
                href={SCHOOL.mapsLink}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:scale-[1.03] transition-transform"
              >
                Open in Google Maps <span aria-hidden>↗</span>
              </a>
            </div>
            <div className="relative min-h-[320px] md:min-h-full">
              <iframe
                title="SNR Vidhya Nethra School location"
                src="https://www.google.com/maps?q=SNR+Vidhya+Nethra+Matric+Higher+Secondary+School+Sathyamangalam&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={wa}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
