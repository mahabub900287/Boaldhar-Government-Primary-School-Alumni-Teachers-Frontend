import { notFound } from "next/navigation";
import { isLocale, pick } from "@/lib/i18n";
import { fees, schedule } from "@/lib/demo";
import { Btn, Container, Icon, Notice, PageHero, Photo, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export default async function Reunion({ params }: PageProps<"/[locale]/reunion-2027">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const p = pick(locale);
  const b = `/${locale}/reunion-2027`;
  const facts: [string, string, string][] = [
    ["calendar", p("তারিখ", "Date"), p("শীঘ্রই ঘোষণা করা হবে", "To be announced")],
    ["pin", p("স্থান", "Venue"), p("বোয়ালধার সরকারি প্রাথমিক বিদ্যালয়", "Boaldhar Government Primary School")],
    ["ticket", p("নিবন্ধন ফি", "Fee"), p("খসড়া নিচে দেখুন", "Draft shown below")],
    ["users", p("অংশগ্রহণকারী", "Who can join"), p("প্রাক্তন শিক্ষার্থী, শিক্ষক ও অতিথি", "Alumni, teachers & guests")],
  ];
  return (
    <>
      <PageHero eyebrow={p("রি-ইউনিয়ন ২০২৭", "Reunion 2027")} title={p("আবার একসাথে, সেই প্রাঙ্গণে", "Together again in the old schoolyard")} lead={p("অনুষ্ঠানের সব নিশ্চিত তথ্য এই পাতায় প্রকাশ করা হবে।", "All confirmed event information will be published on this page.")} photo="school-colour" locale={locale} />

      <Container className="-mt-2 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([ic, k, v], i) => (
            <Reveal key={k} delay={i * 0.08}>
              <div className="h-full rounded-3xl bg-white p-6 ring-1 ring-line transition-all hover:-translate-y-1 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-soft text-gold-text"><Icon n={ic as "pin"} /></span>
                <p className="mt-4 text-xs uppercase tracking-wider text-ink-soft">{k}</p>
                <p className="font-display text-xl font-semibold text-forest">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <section className="border-y border-line bg-white py-20">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHead eyebrow={p("অনুষ্ঠান পরিচিতি", "About the event")} title={p("একদিনের মিলনমেলা, আজীবনের স্মৃতি", "One day together, a lifetime of memories")} lead={p("ব্যাচ অনুযায়ী আড্ডা, শিক্ষকদের সংবর্ধনা, সাংস্কৃতিক অনুষ্ঠান আর আনন্দ-আয়োজন — সবকিছু থাকছে।", "Batch gatherings, honouring teachers, cultural performances and festivities — all in one day.")} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href={`${b}/register`}>{p("নিবন্ধন করুন", "Register")}</Btn>
              <Btn href={`${b}/payment`} variant="ghost">{p("পেমেন্ট নির্দেশনা", "Payment guide")}</Btn>
            </div>
          </Reveal>
          <Reveal delay={0.1}><Photo name="school-lawn" locale={locale} className="aspect-[4/3] rounded-3xl shadow-xl" /></Reveal>
        </Container>
      </section>

      <Container className="grid gap-14 py-20 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-forest">{p("নিবন্ধন ফি (খসড়া)", "Registration fees (draft)")}</h2>
          <div className="mt-6 divide-y divide-line overflow-hidden rounded-2xl ring-1 ring-line">
            {fees.map((f) => (
              <div key={f.cat.en} className="flex items-center justify-between gap-4 bg-white p-5">
                <div><p className="font-semibold text-forest">{f.cat[locale]}</p><p className="text-sm text-ink-soft">{f.note[locale]}</p></div>
                <p className="font-display text-2xl font-semibold text-forest">{locale === "bn" ? f.amount : f.enAmount}</p>
              </div>
            ))}
          </div>
          <div className="mt-5"><Notice tone="warn">{p("ডেমো — ফি চূড়ান্ত হলে আয়োজকরা ঘোষণা করবেন। এর আগে অনলাইন পেমেন্ট গ্রহণ করা হবে না।", "Demo — organisers will announce the final fee. No online payment is accepted before then.")}</Notice></div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl font-semibold text-forest">{p("প্রস্তাবিত সূচি", "Proposed programme")}</h2>
          <ol className="mt-6 space-y-5 border-l-2 border-gold/50 pl-7">
            {schedule.slice(0, 4).map((s) => (
              <li key={s.title.en} className="relative">
                <span aria-hidden className="absolute -left-[2.4rem] top-1.5 h-3.5 w-3.5 rounded-full border-4 border-white bg-gold ring-2 ring-gold/40" />
                <p className="text-sm font-semibold text-gold-text">{s.time[locale]}</p>
                <p className="font-semibold text-forest">{s.title[locale]}</p>
              </li>
            ))}
          </ol>
          <Btn href={`${b}/schedule`} variant="ghost" className="mt-6">{p("পূর্ণ সূচি", "Full schedule")}</Btn>
        </Reveal>
      </Container>
    </>
  );
}
