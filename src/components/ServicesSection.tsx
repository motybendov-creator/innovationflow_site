import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Target, Coins, Handshake, Megaphone, Rocket, Building2 } from "lucide-react";
import serviceStrategy from "@/assets/service-strategy-new.png";
import serviceFunding from "@/assets/service-funding.jpg";
import serviceBizdev from "@/assets/service-bizdev.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceDeployment from "@/assets/service-deployment.jpg";
import serviceSoftlanding from "@/assets/service-softlanding.jpg";

const services = [
  { key: "s1", icon: Target, img: serviceStrategy },
  { key: "s2", icon: Coins, img: serviceFunding },
  { key: "s3", icon: Handshake, img: serviceBizdev },
  { key: "s4", icon: Megaphone, img: serviceMarketing },
  { key: "s5", icon: Rocket, img: serviceDeployment },
  { key: "s6", icon: Building2, img: serviceSoftlanding },
];

export default function ServicesSection() {
  const { t } = useI18n();

  return (
    <section id="services" className="py-24 md:py-32 relative bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-muted-foreground text-lg">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-xl border border-border bg-card hover:bg-muted/30 hover:border-secondary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="h-36 overflow-hidden relative">
                <img
                  src={s.img}
                  alt={t(`${s.key}.title`)}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-125"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{t(`${s.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`${s.key}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
