import { notFound } from "next/navigation";
import { isLocale, pick } from "@/lib/i18n";
import { Container, Field, inputCls } from "@/components/ui";
import Link from "next/link";

export default async function Login({ params }: PageProps<"/[locale]/member/login">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const p = pick(locale);
  return (
    <Container className="grid min-h-[60vh] place-items-center py-16">
      <form className="w-full max-w-md space-y-5 rounded-3xl border border-line bg-white p-10 shadow-xl">
        <h1 className="font-display text-3xl font-semibold text-forest">{p("সদস্য লগইন", "Member login")}</h1>
        <Field id="u" label={p("মোবাইল বা ইমেইল", "Mobile or email")}><input id="u" className={inputCls} autoComplete="username" /></Field>
        <Field id="pw" label={p("পাসওয়ার্ড", "Password")}><input id="pw" type="password" className={inputCls} autoComplete="current-password" /></Field>
        <Link href={`/${locale}/member`} className="block rounded-full bg-forest px-5 py-3 text-center font-semibold text-white shadow-md hover:bg-green-dark">{p("লগইন (ডিজাইন প্রিভিউ)", "Log in (design preview)")}</Link>
        <p className="text-sm text-ink-soft">{p("নতুন? ", "New here? ")}<Link className="text-forest underline" href={`/${locale}/reunion-2027/register`}>{p("নিবন্ধন করুন", "Register")}</Link></p>
      </form>
    </Container>
  );
}
