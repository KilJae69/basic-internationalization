import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="my-10 text-center">
      <p> {t("copyright")} </p>
    </footer>
  );
}
