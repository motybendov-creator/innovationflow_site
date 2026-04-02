import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

const steps = [
  { key: "t1", color: "bg-primary" },
  { key: "t2", color: "bg-secondary" },
  { key: "t3", color: "bg-primary" },
];

export default function TimelineSection() {
  const { t } = useI18n();

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-secondary/5" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">{t("timeline.title")}</h2>
          <p className="text-muted-foreground text-lg">{t("timeline.subtitle")}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {steps.map((step, i) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-3 h-3 rounded-full ${step.color} ring-4 ring-background`} />
              </div>

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                <span className="text-xs font-semibold tracking-wider uppercase text-secondary">{t(`${step.key}.weeks`)}</span>
                <h3 className="font-display text-xl font-bold mt-1 mb-2">{t(`${step.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`${step.key}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
