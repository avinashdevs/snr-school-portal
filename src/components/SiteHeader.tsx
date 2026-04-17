import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/70 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-primary/30 ring-offset-2 ring-offset-background transition-transform group-hover:scale-105">
            <img src={logo} alt="SNR Vidhya Nethra School logo" className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <p className="font-display text-base font-bold text-primary md:text-lg">SNR Vidhya Nethra</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-xs">
              Matric. Hr. Sec. School
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-primary" : "text-foreground/75 hover:text-foreground"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary-soft"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            to="/admissions"
            className="ml-2 inline-flex items-center rounded-full bg-primary-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
          >
            Apply Now
          </Link>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft md:hidden"
        >
          <AnimatePresence initial={false} mode="wait">
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <Menu className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-background md:hidden"
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="container-px mx-auto flex flex-col gap-1 pb-10 pt-4"
            >
              {nav.map((item, i) => {
                const active = location.pathname === item.to;
                return (
                  <motion.div
                    key={item.to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      to={item.to}
                      className={`flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-medium transition-colors ${
                        active ? "bg-primary-soft text-primary" : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                      <span aria-hidden className="text-primary">→</span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.35 }} className="mt-4">
                <Link to="/admissions" className="flex items-center justify-center rounded-2xl bg-primary-gradient px-5 py-4 text-base font-semibold text-primary-foreground shadow-elegant">
                  Apply for Admission
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
