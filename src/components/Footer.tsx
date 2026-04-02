import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logo.jpeg";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="InnovationFlow" className="h-12" />
        </div>
        <p className="text-sm text-muted-foreground mb-4">{t("footer.tagline")}</p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} InnovationFlow ISRO. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
