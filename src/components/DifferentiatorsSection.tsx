import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Users, TrendingUp, Zap, Layers } from "lucide-react";

const items = [
  { key: "d1", icon: Users },
  { key: "d2", icon: TrendingUp },
  { key: "d3", icon: Zap },
  { key: "d4", icon: Layers },
];

export default function DifferentiatorsSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
        >
          {t("diff.title")}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-xl border border-border bg-card hover:border-secondary/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{t(`${item.key}.title`)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`${item.key}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
