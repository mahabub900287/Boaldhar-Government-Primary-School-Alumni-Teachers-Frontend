import Link from "next/link";
import { Crest } from "./Crest";
import { pick, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const p = pick(locale);
  const groups: { t: string; l: [string, string, string][] }[] = [
    {
      t: p("সংগঠন", "Association"),
      l: [
        ["about", "আমাদের কথা", "About"],
        ["committee", "আহ্বায়ক কমিটি", "Convening committee"],
        ["community", "কমিউনিটি কার্যক্রম", "Community activities"],
        ["scholarships", "বৃত্তি ও সামাজিক উদ্যোগ", "Scholarships & initiatives"],
      ],
    },
    {
      t: p("রি-ইউনিয়ন", "Reunion"),
      l: [
        ["reunion-2027", "রি-ইউনিয়ন ২০২৭", "Reunion 2027"],
        ["reunion-2027/schedule", "অনুষ্ঠানসূচি", "Schedule"],
        ["reunion-2027/payment", "পেমেন্ট নির্দেশনা", "Payment instructions"],
        ["status", "নিবন্ধনের অবস্থা", "Registration status"],
        ["help", "সহায়তা", "Help"],
      ],
    },
    {
      t: p("তথ্য", "Information"),
      l: [
        ["directory", "প্রাক্তনী তালিকা", "Alumni directory"],
        ["batches", "ব্যাচসমূহ", "Batches"],
        ["news", "নোটিশ ও সংবাদ", "News & notices"],
        ["privacy", "গোপনীয়তা নীতি", "Privacy policy"],
        ["terms", "শর্তাবলি", "Terms"],
      ],
    },
  ];
  return (
    <footer className="mt-12 bg-green-dark text-white/85">
      <div className="mx-auto max-w-7xl px-4 pt-12 md:px-8">
        <div className="flex items-center gap-4 border-b border-white/10 pb-8">
          <Crest className="h-12 w-12 shrink-0" />
          <p className="font-display text-lg font-semibold leading-snug text-white md:whitespace-nowrap md:text-xl">{p("বোয়ালধার সরকারি প্রাথমিক বিদ্যালয় অ্যালামনাই অ্যাসোসিয়েশন", "Boaldhar Government Primary School Alumni Association")}</p>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <p className="text-sm text-white/70">
            {p("বোয়ালধার সরকারি প্রাথমিক বিদ্যালয়, বোয়ালধার, বাংলাদেশ", "Boaldhar Govt Primary School, Boaldhar, Bangladesh")}
          </p>
          <p className="mt-3 rounded border border-dashed border-gold/40 px-3 py-2 text-xs text-white/60">{p("ডেমো ওয়েবসাইট — সব ছবি ও তথ্য নমুনা; চূড়ান্ত প্রকাশের আগে প্রতিস্থাপিত হবে।", "Demo website — all photos and details are samples, to be replaced before launch.")}
          </p>
        </div>
        {groups.map((g, i) => (
          <nav key={g.t} aria-label={g.t} className={`md:col-span-2 ${i === 0 ? "md:col-start-6" : ""}`}>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gold">{g.t}</h2>
            <ul className="mt-3 space-y-2 text-[0.95rem]">
              {g.l.map(([h, bn, en]) => (
                <li key={h}>
                  <Link className="hover:text-gold" href={`/${locale}/${h}`}>{p(bn, en)}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60">
        © 2026 {p("বোয়ালধার সরকারি প্রাথমিক বিদ্যালয় অ্যালামনাই অ্যাসোসিয়েশন", "Boaldhar Government Primary School Alumni Association")} ·{" "}
        <Link href={`/${locale}/credits`} className="underline">{p("ছবির কৃতিত্ব", "Photo credits")}</Link> ·{" "}
        <Link href={`/${locale}/member/login`} className="underline">{p("সদস্য লগইন", "Member login")}</Link> ·{" "}
        <Link href={`/${locale}/admin`} className="underline">{p("অ্যাডমিন", "Admin")}</Link>
      </div>
    </footer>
  );
}
