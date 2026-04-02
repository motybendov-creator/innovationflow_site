import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

const navItems = [
  { key: "nav.about", href: "#about" },
  { key: "nav.services", href: "#services" },
  { key: "nav.howItWorks", href: "#how-it-works" },
  { key: "nav.contact", href: "#contact" },
];

export default function Header() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          <span className="text-foreground">Innovation</span>
          <span className="text-secondary">Flow</span>
          <span className="text-muted-foreground text-sm ml-1 font-body">ISRO</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all hover:after:w-full"
            >
              {t(item.key)}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "ro" : "en")}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-border text-xs font-semibold tracking-wider hover:border-secondary hover:text-secondary transition-colors"
          >
            <span className={lang === "en" ? "text-secondary" : "text-muted-foreground"}>EN</span>
            <span className="text-muted-foreground">/</span>
            <span className={lang === "ro" ? "text-secondary" : "text-muted-foreground"}>RO</span>
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-b border-border px-4 pb-4"
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {t(item.key)}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "ro" : "en")}
            className="mt-2 px-3 py-1.5 rounded-full border border-border text-xs font-semibold"
          >
            {lang === "en" ? "RO" : "EN"}
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
