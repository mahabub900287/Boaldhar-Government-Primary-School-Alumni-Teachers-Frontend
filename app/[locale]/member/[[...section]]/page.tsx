import { notFound } from "next/navigation";
import { isLocale, locales, pick } from "@/lib/i18n";
import { PortalShell, SampleBanner } from "@/components/Portal";
import { Field, inputCls, Placeholder, StatusBadge } from "@/components/ui";

const sections = ["", "profile", "registration", "ticket", "history", "privacy", "security"];

export function generateStaticParams() {
  return locales.flatMap((locale) => sections.map((s) => ({ locale, section: s ? [s] : [] })));
}

export default async function Member({ params }: PageProps<"/[locale]/member/[[...section]]">) {
  const { locale, section } = await params;
  const key = section?.[0] ?? "";
  if (!isLocale(locale) || !sections.includes(key) || (section?.length ?? 0) > 1) notFound();
  const p = pick(locale);
  const base = `/${locale}/member`;
  const titles: Record<string, string> = {
    "": p("ড্যাশবোর্ড", "Dashboard"),
    profile: p("প্রোফাইল", "Profile"),
    registration: p("রেজিস্ট্রেশন ও পেমেন্ট", "Registration & payment"),
    ticket: p("ডিজিটাল টিকিট", "Digital ticket"),
    history: p("নিবন্ধনের ইতিহাস", "Registration history"),
    privacy: p("গোপনীয়তা সেটিংস", "Privacy settings"),
    security: p("অ্যাকাউন্ট নিরাপত্তা", "Account security"),
  };
  const links = sections.map((s) => ({ href: s ? `${base}/${s}` : base, label: titles[s] }));
  const current = key ? `${base}/${key}` : base;

  return (
    <PortalShell title={p("আমার অ্যাকাউন্ট", "My account")} links={links} current={current}>
      <SampleBanner text={p("ডেমো তথ্য — প্রকৃত নয়।", "Demo data — not real.")} />
      <h1 className="font-display mb-6 text-3xl font-semibold text-forest">{titles[key]}</h1>

      {key === "" && (
        <div className="grid gap-4 sm:grid-cols-3">
          {[[p("রেজিস্ট্রেশন", "Registration"), "approved", p("সম্পন্ন", "Completed")], [p("পেমেন্ট", "Payment"), "approved", p("অনুমোদিত", "Approved")], [p("টিকিট", "Ticket"), "approved", p("ইস্যু হয়েছে", "Issued")]].map(([k, s, l]) => (
            <div key={k} className="rounded-2xl border border-line bg-white p-5">
              <p className="text-sm text-ink-soft">{k}</p>
              <div className="mt-2"><StatusBadge status={s as "awaiting"} label={l} /></div>
            </div>
          ))}
        </div>
      )}

      {key === "ticket" && (
        <div className="max-w-md overflow-hidden rounded-3xl border-2 border-forest bg-white shadow-xl">
          <div className="bg-gradient-to-r from-forest to-green p-5 text-white"><p className="text-xs uppercase tracking-widest text-gold">{p("রি-ইউনিয়ন ২০২৭", "Reunion 2027")}</p><p className="font-display text-xl">{p("বোয়ালধার সরকারি প্রাথমিক বিদ্যালয় অ্যালামনাই অ্যাসোসিয়েশন", "Boaldhar Govt Primary School Alumni Association")}</p></div>
          <div className="space-y-2 p-5 text-sm">
            <p><b>{p("নাম", "Name")}:</b> {p("মোঃ আনোয়ার হোসেন", "Md. Anwar Hossain")}</p><p><b>{p("রেফারেন্স", "Reference")}:</b> REG-A1B2C3</p><p><b>{p("ব্যাচ", "Batch")}:</b> {p("১৯৯০", "1990")}</p>
            <p><b>{p("স্থান", "Venue")}:</b> {p("বোয়ালধার সরকারি প্রাথমিক বিদ্যালয়", "Boaldhar Government Primary School")}</p>
            <p><b>{p("তারিখ", "Date")}:</b> {p("ঘোষণা করা হবে", "To be announced")}</p>
            <Placeholder label={p("QR কোড অনুমোদনের পর", "QR code after approval")} className="mx-auto aspect-square w-40" tone="gold" />
            <button type="button" className="mt-2 w-full rounded-full border border-forest py-2 font-semibold text-forest hover:bg-forest hover:text-white">{p("PDF ডাউনলোড", "Download PDF")}</button>
          </div>
        </div>
      )}

      {key === "profile" && (
        <form className="max-w-xl space-y-5">
          <Field id="a" label={p("নাম (বাংলা)", "Name (Bengali)")}><input id="a" className={inputCls} /></Field>
          <Field id="b" label={p("নাম (ইংরেজি)", "Name (English)")}><input id="b" className={inputCls} /></Field>
          <Field id="c" label={p("ব্যাচ", "Batch")}><input id="c" className={inputCls} /></Field>
          <button type="button" className="rounded bg-forest px-6 py-3 font-semibold text-white">{p("সংরক্ষণ", "Save")}</button>
        </form>
      )}

      {key === "privacy" && (
        <fieldset className="max-w-xl border border-line bg-white p-5">
          {[p("প্রাক্তনী তালিকায় আমার নাম দেখান", "Show my name in the directory"), p("পেশা দেখান", "Show profession"), p("শহর দেখান", "Show city")].map((t) => (
            <label key={t} className="flex items-center gap-2 py-2"><input type="checkbox" className="h-4 w-4" />{t}</label>
          ))}
        </fieldset>
      )}

      {key === "security" && (
        <form className="max-w-xl space-y-5">
          <Field id="o" label={p("বর্তমান পাসওয়ার্ড", "Current password")}><input id="o" type="password" className={inputCls} /></Field>
          <Field id="n" label={p("নতুন পাসওয়ার্ড", "New password")}><input id="n" type="password" className={inputCls} /></Field>
          <button type="button" className="rounded bg-forest px-6 py-3 font-semibold text-white">{p("পরিবর্তন করুন", "Change password")}</button>
        </form>
      )}

      {(key === "registration" || key === "history") && (
        <div className="rounded-2xl border border-line bg-white p-6 text-ink-soft"><p className="font-semibold text-forest">REG-A1B2C3 · {p("রি-ইউনিয়ন ২০২৭", "Reunion 2027")}</p><p className="mt-1 text-sm">{p("পেমেন্ট অনুমোদিত · বিকাশ · ৳ ৫০০", "Payment approved · bKash · ৳ 500")}</p></div>
      )}
    </PortalShell>
  );
}
