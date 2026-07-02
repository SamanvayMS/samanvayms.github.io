import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "../data/site";
import { EASE_OUT, useStaticMotion } from "../lib/motion";
import { useEscapeKey } from "../lib/useEscapeKey";

/** Section ids for scroll-spy (anchor links only). */
const SECTION_IDS = navLinks
  .filter((l) => l.href.includes("#"))
  .map((l) => l.href.split("#")[1]);

function hashOf(href: string): string | null {
  return href.includes("#") ? `#${href.split("#")[1]}` : null;
}

export default function Nav() {
  const reduce = useStaticMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy (only meaningful on the home page where the sections exist).
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEscapeKey(() => setOpen(false));

  const onNav = (href: string) => (e: React.MouseEvent) => {
    const hash = hashOf(href);
    // Smooth-scroll only when the target section exists on the current page.
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      }
    }
    setOpen(false);
  };

  return (
    <motion.nav
      aria-label="Primary"
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      initial={reduce ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
    >
      <div className="relative">
        <div
          className={`nav-pill flex items-center gap-1 rounded-full px-3 py-2 sm:px-5 ${
            scrolled ? "nav-pill-scrolled" : ""
          }`}
        >
          {/* Brand → home */}
          <a
            href="/"
            className="px-2 py-1 text-sm font-semibold tracking-tight text-white"
          >
            {site.short}
            <span className="text-[var(--color-accent)]">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => {
              const isActive = link.href === `/#${active}`;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onNav(link.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-[var(--color-mute-400)] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-white sm:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.ul
              id="mobile-menu"
              className="glass absolute left-1/2 top-full mt-2 w-44 -translate-x-1/2 overflow-hidden rounded-2xl p-1.5 sm:hidden"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onNav(link.href)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-[var(--color-mute-300)] transition-colors hover:bg-[var(--color-glass-08)] hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
