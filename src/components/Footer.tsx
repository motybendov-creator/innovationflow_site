import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="font-display text-lg font-bold mb-2">
          <span className="text-foreground">Innovation</span>
          <span className="text-secondary">Flow</span>
          <span className="text-muted-foreground text-sm ml-1 font-body">ISRO</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{t("footer.tagline")}</p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} InnovationFlow ISRO. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
