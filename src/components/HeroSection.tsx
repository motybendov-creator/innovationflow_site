import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BridgeCanvas from "./BridgeCanvas";

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          backgroundSize: "400% 400%",
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, hsl(222 100% 36% / 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, hsl(45 97% 54% / 0.15) 0%, transparent 50%), linear-gradient(180deg, hsl(220 30% 6%) 0%, hsl(220 25% 10%) 100%)",
        }}
      />

      {/* Bridge canvas */}
      <BridgeCanvas />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" />
            <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Israel → Romania → EU</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-foreground">{t("hero.title").split("&")[0]}</span>
          {t("hero.title").includes("&") && (
            <>
              <span className="text-gradient">&</span>
              <span className="text-foreground">{t("hero.title").split("&").slice(1).join("&")}</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-secondary transition-colors cursor-pointer"
        >
          <span className="text-sm font-medium tracking-wider uppercase">{t("hero.scroll")}</span>
          <ChevronDown className="w-5 h-5 animate-float" />
        </motion.a>
      </div>
    </section>
  );
}
