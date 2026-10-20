import { notFound } from "next/navigation";
import { isLocale, pick } from "@/lib/i18n";
import { Container, PageHero } from "@/components/ui";
import { RegisterWizard } from "./RegisterWizard";

export default async function Register({ params }: PageProps<"/[locale]/reunion-2027/register">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const p = pick(locale);
  return (
    <>
      <PageHero eyebrow={p("রি-ইউনিয়ন ২০২৭", "Reunion 2027")} title={p("নিবন্ধন ফর্ম", "Registration form")} lead={p("ছয়টি সহজ ধাপে আপনার নিবন্ধন সম্পূর্ণ করুন।", "Complete your registration in six simple steps.")} photo="boishakh-1" locale={locale} />
      <Container className="py-14">
        <RegisterWizard locale={locale} />
      </Container>
    </>
  );
}
