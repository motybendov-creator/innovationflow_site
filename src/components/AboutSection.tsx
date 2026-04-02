import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Globe, Cpu } from "lucide-react";

export default function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">{t("about.title")}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{t("about.description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Cpu, titleKey: "about.israeli.title", descKey: "about.israeli.desc", accent: "primary" },
            { icon: Globe, titleKey: "about.romanian.title", descKey: "about.romanian.desc", accent: "secondary" },
          ].map((card, i) => (
            <motion.div
              key={card.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-xl border border-border bg-card p-8 hover:border-secondary/40 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
                  card.accent === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                }`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{t(card.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(card.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
