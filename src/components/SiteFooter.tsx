import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const SCHOOL = {
  name: "SNR Vidhya Nethra Matric. Hr. Sec. School",
  tagline: "Responsibility · Excellence · Respect",
  phone: "+91 99424 58899",
  whatsapp: "919942458899",
  instagram: "https://www.instagram.com/snr.school_sathy?igsh=MXR3cWZrbnNoZzlpZQ==",
  mapsLink: "https://maps.app.goo.gl/XkLATyB82oaNrVgT8",
  city: "Sathyamangalam, Tamil Nadu",
};

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 rounded-full ring-2 ring-primary/30" />
            <div>
              <p className="font-display text-lg font-bold text-primary">SNR Vidhya Nethra</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{SCHOOL.tagline}</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Nurturing curious minds, confident leaders and compassionate citizens since our founding in Sathyamangalam.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery & Events</Link></li>
            <li><Link to="/admissions" className="hover:text-primary">Admissions</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> {SCHOOL.city}</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> <a href={`tel:${SCHOOL.phone.replace(/\s/g,'')}`} className="hover:text-primary">{SCHOOL.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> office@snrvidhyanethra.edu</li>
            <li>
              <a href={SCHOOL.instagram} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium hover:border-primary hover:text-primary">
                <Instagram className="h-3.5 w-3.5" /> @snr.school_sathy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} SNR Vidhya Nethra Matric. Hr. Sec. School. All rights reserved.</p>
          <p>Sathyamangalam · Tamil Nadu · India</p>
        </div>
      </div>
    </footer>
  );
}
