import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function ContactSection() {
  const { t } = useI18n();
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground text-lg">{t("contact.subtitle")}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get("name") as string;
            const email = formData.get("email") as string;
            const company = formData.get("company") as string;
            const message = formData.get("message") as string;

            const subject = `Website Contact Form: ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`;

            window.location.href = `mailto:info@innovationflow.ro?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setIsSubmitted(true);
          }}
        >
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 text-center bg-secondary/10 border border-secondary/20 rounded-xl"
            >
              <h3 className="text-2xl font-display font-bold mb-2 text-primary">{t("contact.success.title")}</h3>
              <p className="text-muted-foreground">{t("contact.success.desc")}</p>
            </motion.div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input name="name" required placeholder={t("contact.name")} className="bg-muted/50 border-border" />
                <Input name="email" type="email" required placeholder={t("contact.email")} className="bg-muted/50 border-border" />
              </div>
              <Input name="company" placeholder={t("contact.company")} className="bg-muted/50 border-border" />
              <Textarea name="message" required placeholder={t("contact.message")} rows={4} className="bg-muted/50 border-border resize-none" />
              <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold gap-2">
                {t("contact.send")}
                <Send className="w-4 h-4" />
              </Button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}
