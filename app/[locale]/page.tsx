import Link from "next/link";
import { notFound } from "next/navigation";
import { fmtDate, isLocale, num, pick } from "@/lib/i18n";
import { batches, initiatives, news } from "@/lib/demo";
import { teacherList } from "@/lib/people";
import { countOf, GROUPS, intro } from "@/lib/alumni";
import { chief, sortedConveners } from "@/lib/committee";
import { Btn, Container, Eyebrow, Icon, Photo, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const p = pick(locale);
  const base = `/${locale}`;
  const total = batches.reduce((s, x) => s + x.members, 0);
  const maxMembers = Math.max(...batches.map((b) => b.members));
  const [lead, ...rest] = news;

  return (
    <>
      {/* ═════════ 1 · HERO — fits the first screen (header + hero = 100svh) ═════════ */}
      <section className="relative isolate flex h-[calc(100svh-7rem)] max-h-[50rem] min-h-[32rem] flex-col overflow-hidden bg-green-dark text-white">
        <Photo name="school-colour" locale={locale} priority kenburns zoom={false} sizes="100vw" pos="62% 60%" className="absolute inset-0 -z-20" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-green-dark/90 via-green-dark/50 to-transparent" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-green-dark/70 via-transparent to-green-dark/20" />

        <Container className="relative flex w-full flex-1 items-center py-6">
          <div className="max-w-4xl">
            <p className="anim-up flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              <span aria-hidden className="h-px w-10 bg-gold" />
              {p("প্রাক্তন শিক্ষার্থী পুনর্মিলনী ২০২৭", "Alumni Reunion 2027")}
            </p>
            <h1 className="anim-up font-display mt-4 text-[2rem] font-semibold leading-[1.18] sm:text-5xl lg:text-[3.4rem] xl:text-[3.9rem] [@media(max-height:760px)]:lg:text-[2.75rem]" style={d(0.1)}>
              {p("ফিরে চলো সেই ", "Come back to the ")}
              <span className="text-gold">{p("প্রাঙ্গণে", "schoolyard")}</span>
              {p(", যেখানে শুরু হয়েছিল আমাদের গল্প", " where our story began")}
            </h1>
            <p className="anim-up mt-4 max-w-xl text-base text-white/80 md:text-lg" style={d(0.2)}>
              {p("বোয়ালধার সরকারি প্রাথমিক বিদ্যালয়ের সকল প্রাক্তন শিক্ষার্থী, শিক্ষক ও শুভানুধ্যায়ীর মিলনমেলা।", "A gathering of every former student, teacher and well-wisher of Boaldhar Government Primary School.")}
            </p>
            <div className="anim-up mt-6 flex flex-wrap gap-3" style={d(0.3)}>
              <Btn href={`${base}/reunion-2027/register`} variant="gold">{p("নিবন্ধন করুন", "Register now")}</Btn>
              <Btn href={`${base}/reunion-2027`} variant="light">{p("রি-ইউনিয়নের তথ্য", "Reunion details")}</Btn>
            </div>
          </div>
        </Container>

        {/* event bar pinned to the hero's bottom edge */}
        <Container className="relative w-full">
          <div className="anim-up grid divide-y divide-white/15 rounded-t-2xl border border-b-0 border-white/20 bg-white/10 backdrop-blur-md md:grid-cols-4 md:divide-x md:divide-y-0" style={d(0.45)}>
            {[
              ["calendar", p("তারিখ", "Date"), p("শীঘ্রই ঘোষণা করা হবে", "To be announced")],
              ["pin", p("স্থান", "Venue"), p("বোয়ালধার সরকারি প্রাথমিক বিদ্যালয়", "Boaldhar Government Primary School")],
              ["users", p("আমন্ত্রিত", "Invited"), p("প্রাক্তন শিক্ষার্থী ও শিক্ষক", "Alumni & teachers")],
            ].map(([ic, k, v]) => (
              <div key={k} className="hidden items-center gap-3 px-5 py-3.5 md:flex">
                <Icon n={ic as "pin"} className="h-6 w-6 shrink-0 text-gold" />
                <div><p className="text-[0.7rem] uppercase tracking-wider text-white/60">{k}</p><p className="font-display text-base font-semibold leading-tight">{v}</p></div>
              </div>
            ))}
            <div className="flex items-center gap-3 px-5 py-3 md:hidden"><Icon n="calendar" className="h-5 w-5 text-gold" /><span className="font-display text-sm font-semibold">{p("তারিখ শীঘ্রই ঘোষণা করা হবে", "Date to be announced")}</span></div>
            <Link href={`${base}/status`} className="group flex items-center justify-between gap-3 px-5 py-3.5 transition-colors hover:bg-white/10">
              <span><span className="block text-[0.7rem] uppercase tracking-wider text-white/60">{p("ইতিমধ্যে নিবন্ধিত?", "Already registered?")}</span><span className="font-display text-base font-semibold">{p("অবস্থা দেখুন", "Check status")}</span></span>
              <span aria-hidden className="text-gold transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ═════════ 2 · QUICK ACTIONS ═════════ */}
      <section className="border-b border-line bg-white">
        <Container className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {[
            ["ticket", p("নিবন্ধন করুন", "Register"), p("ছয় ধাপে আসন নিশ্চিত করুন", "Secure your seat in six steps"), "reunion-2027/register"],
            ["users", p("বন্ধুদের খুঁজুন", "Find batchmates"), p("ব্যাচ ধরে প্রাক্তনী তালিকা", "Alumni directory by batch"), "directory"],
            ["calendar", p("অনুষ্ঠানসূচি", "Programme"), p("খসড়া সূচি ও পেমেন্ট নির্দেশনা", "Draft schedule & payment guide"), "reunion-2027/schedule"],
            ["book", p("স্মৃতির অ্যালবাম", "Memory album"), p("ছবি দেখুন, ছবি পাঠান", "Browse and share photographs"), "gallery"],
          ].map(([ic, t, s, h], i) => (
            <Reveal key={h} delay={i * 0.06}>
              <Link href={`${base}/${h}`} className="group flex items-center gap-4 px-2 py-7 transition-colors hover:bg-ivory lg:px-8">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-soft text-gold-text transition-colors group-hover:bg-forest group-hover:text-gold"><Icon n={ic as "ticket"} /></span>
                <span className="min-w-0 flex-1"><span className="font-display block text-lg font-semibold text-forest">{t}</span><span className="block text-sm text-ink-soft">{s}</span></span>
                <span aria-hidden className="text-gold transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* ═════════ 3 · ABOUT ═════════ */}
      <section className="py-24 md:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-5">
            <Photo name="girl-board" locale={locale} className="aspect-[4/5] rounded-[2rem] shadow-2xl" sizes="(min-width:1024px) 40vw, 90vw" />
            <Photo name="reading" locale={locale} className="absolute -bottom-10 -right-4 aspect-[4/3] w-3/5 rounded-2xl ring-8 ring-ivory shadow-xl md:-right-10" sizes="25vw" />
          </Reveal>
          <div className="lg:col-span-7 lg:pl-10">
            <Reveal><SectionHead eyebrow={p("আমাদের সংগঠন", "Our association")} title={p("একটি বিদ্যালয়, অনেক প্রজন্ম, একটি পরিবার", "One school, many generations, one family")} /></Reveal>
            <Reveal delay={0.1}>
              <p className="font-display mt-6 text-xl leading-relaxed text-ink md:text-2xl">
                {p("প্রতিটি মানুষের জীবনে প্রাথমিক বিদ্যালয় প্রথম বন্ধুত্ব আর প্রথম স্বপ্নের জায়গা। সেই বন্ধন ধরে রাখতেই আমরা একত্রিত হয়েছি।", "For everyone, primary school is the home of first friendships and first dreams. We came together to keep that bond alive.")}
              </p>
            </Reveal>
            <ol className="mt-10 divide-y divide-line border-y border-line">
              {[
                [p("স্মৃতি সংরক্ষণ", "Preserve memories"), p("পুরনো ছবি, গল্প ও ব্যাচের ইতিহাস এক জায়গায়।", "Old photographs, stories and batch histories in one place.")],
                [p("সংযোগ", "Stay connected"), p("ব্যাচ অনুযায়ী বন্ধুদের খুঁজুন, গোপনীয়তা আপনার হাতে।", "Find friends by batch, with privacy in your hands.")],
                [p("প্রতিদান", "Give back"), p("বৃত্তি ও শিক্ষা সহায়তায় বিদ্যালয়ের পাশে থাকা।", "Standing by the school through scholarships and support.")],
              ].map(([t, s], i) => (
                <Reveal as="li" key={t} delay={i * 0.08} className="flex items-baseline gap-6 py-5">
                  <span className="num font-display text-2xl text-gold">{p(["০১", "০২", "০৩"][i], `0${i + 1}`)}</span>
                  <div><h3 className="font-display text-xl font-semibold text-forest">{t}</h3><p className="text-ink-soft">{s}</p></div>
                </Reveal>
              ))}
            </ol>
            <Btn href={`${base}/about`} variant="ghost" className="mt-8">{p("আমাদের কথা", "About us")}</Btn>
          </div>
        </Container>
      </section>

      {/* ═════════ 3b · WHERE ARE OUR ALUMNI TODAY (real data) ═════════ */}
      <section className="border-y border-line bg-white py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5"><SectionHead eyebrow={p("গর্বের গল্প", "Our pride")} title={intro.title[locale]} /><Btn href={`${base}/directory`} className="mt-8">{p("পুরো তালিকা দেখুন", "See the full list")}</Btn></Reveal>
            <Reveal delay={0.1} className="lg:col-span-7"><p className="text-lg leading-relaxed text-ink-soft md:text-xl">{intro.body[locale]}</p></Reveal>
          </div>

          <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
            {GROUPS.map((g, i) => (
              <Reveal as="li" key={g.key} delay={(i % 3) * 0.06}>
                <Link href={`${base}/directory`} className="group flex h-full items-center gap-4 bg-white p-6 transition-colors hover:bg-gold-soft/50">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-soft text-gold-text transition-colors group-hover:bg-forest group-hover:text-gold"><Icon n={g.icon} /></span>
                  <span className="min-w-0 flex-1"><span className="font-display block text-lg font-semibold leading-snug text-forest">{g.t[locale]}</span></span>
                  <span className="num font-display text-3xl font-semibold text-gold">{num(locale, countOf(g.key))}</span>
                </Link>
              </Reveal>
            ))}
          </ul>

          {/* the four main committee members */}
          <div className="mt-16 flex flex-wrap items-end justify-between gap-4">
            <Reveal><p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-gold-text"><span aria-hidden className="h-px w-8 bg-current" />{p("প্রস্তাবিত আহ্বায়ক কমিটি", "Proposed convening committee")}</p><h3 className="font-display mt-2 text-2xl font-semibold text-forest md:text-3xl">{p("পুনর্মিলনীর পথচলায় যাঁরা নেতৃত্বে", "Leading the way to the reunion")}</h3></Reveal>
            <Btn href={`${base}/committee`} variant="ghost">{p("পুরো কমিটি", "Full committee")}</Btn>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[{ ...chief, lead: true }, ...sortedConveners(locale).map((c) => ({ ...c, lead: false }))].map((c, i) => (
              <Reveal as="li" key={c.name.en} delay={i * 0.07}>
                <Link href={`${base}/committee`} className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${c.lead ? "bg-green-dark text-white shadow-xl" : "border border-line bg-paper hover:border-gold/60 hover:bg-white"}`}>
                  {c.lead && <span aria-hidden className="dots absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />}
                  <span aria-hidden className={`relative grid h-16 w-16 place-items-center rounded-full font-display text-2xl ring-4 ${c.lead ? "bg-gradient-to-br from-gold to-[#e0c27a] text-green-dark ring-white/10" : "bg-gradient-to-br from-forest to-green text-white ring-gold-soft"}`}>{c.name[locale].replace(/^(ডা\.|Dr\.)\s*/, "").trim()[0]}</span>
                  <span className={`relative mt-5 text-xs font-semibold uppercase tracking-[0.14em] ${c.lead ? "text-gold" : "text-gold-text"}`}>{c.role[locale]}</span>
                  <span className="font-display relative mt-1 text-xl font-semibold leading-snug">{c.name[locale]}</span>
                  <span className={`relative mt-1 text-sm ${c.lead ? "text-white/75" : "text-ink-soft"}`}>{c.detail[locale]}</span>
                  <span aria-hidden className={`relative mt-auto block h-0.5 w-8 pt-0 transition-all duration-500 group-hover:w-20 ${c.lead ? "bg-gold" : "bg-gold"}`} />
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* ═════════ 4 · NUMBERS ═════════ */}
      <section className="bg-green-dark py-16 text-white">
        <Container className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/10">
          {[
            [batches.length, p("ব্যাচ", "Batches"), ""],
            [total, p("নিবন্ধিত সদস্য (ডেমো)", "Registered members (demo)"), "+"],
            [teacherList.length, p("শিক্ষক ও পৃষ্ঠপোষক", "Teachers & patrons"), ""],
            [news.length, p("নোটিশ ও সংবাদ", "Notices & news"), ""],
          ].map(([n, l, s], i) => (
            <Reveal key={String(l)} delay={i * 0.08} className="px-4 text-center">
              <p className="num font-display text-5xl font-semibold text-gold md:text-6xl"><Counter to={n as number} locale={locale} suffix={s as string} /></p>
              <p className="mt-2 text-sm uppercase tracking-wider text-white/70">{l}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* ═════════ 5 · BATCHES ═════════ */}
      <section className="py-24 md:py-32">
        <Container className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHead eyebrow={p("ব্যাচ", "Batches")} title={p("আপনার ব্যাচ খুঁজে নিন", "Find your batch")} lead={p("প্রতিটি ব্যাচের একজন প্রতিনিধি থাকবেন, যাঁর মাধ্যমে আপনি বন্ধুদের সঙ্গে যুক্ত হতে পারবেন।", "Every batch has a representative who helps you reconnect with classmates.")} />
              <Btn href={`${base}/batches`} className="mt-8">{p("সব ব্যাচ", "All batches")}</Btn>
            </div>
          </Reveal>
          <ul className="divide-y divide-line border-y border-line lg:col-span-8">
            {batches.map((b, i) => (
              <Reveal as="li" key={b.year} delay={(i % 5) * 0.04}>
                <Link href={`${base}/directory`} className="group grid grid-cols-[5rem_1fr_auto] items-center gap-4 px-2 py-5 transition-colors hover:bg-gold-soft/50 md:grid-cols-[7rem_1fr_12rem_auto] md:px-5">
                  <span className="num font-display text-3xl font-semibold text-forest md:text-4xl">{locale === "bn" ? b.year.toLocaleString("bn-BD", { useGrouping: false }) : b.year}</span>
                  <span className="hidden h-2 overflow-hidden rounded-full bg-line md:block"><span className="block h-full rounded-full bg-gradient-to-r from-green to-gold transition-all duration-700 group-hover:opacity-90" style={{ width: `${(b.members / maxMembers) * 100}%` }} /></span>
                  <span className="min-w-0 text-sm"><span className="block font-semibold text-forest">{num(locale, b.members)} {p("জন সদস্য", "members")}</span><span className="block truncate text-ink-soft">{b.rep[locale]}</span></span>
                  <span aria-hidden className="text-gold transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* ═════════ 6 · TEACHERS ═════════ */}
      <section className="border-y border-line bg-white py-24 md:py-32">
        <Container className="grid items-start gap-16 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-5">
            <Photo name="classroom" locale={locale} className="aspect-[4/5] rounded-[2rem] shadow-2xl" sizes="(min-width:1024px) 40vw, 90vw" pos="35% 50%" />
            <figure className="absolute -bottom-8 left-6 right-6 rounded-2xl bg-green-dark p-6 text-white shadow-xl md:left-auto md:-right-8 md:w-3/4">
              <blockquote className="font-display text-lg leading-snug">{p("“শিক্ষকের হাত ধরেই আমরা প্রথম অক্ষর চিনেছি।”", "“It was a teacher's hand that first guided us through the alphabet.”")}</blockquote>
              <figcaption className="mt-2 text-xs uppercase tracking-wider text-gold">{p("ডেমো উদ্ধৃতি", "Demo quote")}</figcaption>
            </figure>
          </Reveal>
          <div className="lg:col-span-7 lg:pl-8">
            <Reveal><SectionHead eyebrow={p("শ্রদ্ধাঞ্জলি", "In honour")} title={p("যাঁদের হাত ধরে আমাদের শুরু", "The teachers who taught us to begin")} /></Reveal>
            <ul className="mt-10 divide-y divide-line">
              {teacherList.slice(0, 8).map((t, i) => (
                <Reveal as="li" key={t.name.en} delay={(i % 3) * 0.06} className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
                  <div><h3 className="font-display text-xl font-semibold text-forest">{t.name[locale]}</h3><p className="text-ink-soft">{t.note[locale]}</p></div>
                  <p className="text-sm text-gold-text sm:text-right">{t.role[locale]}<br />{t.years[locale]}</p>
                </Reveal>
              ))}
            </ul>
            <Btn href={`${base}/teachers`} variant="ghost" className="mt-8">{p("সকল শিক্ষক", "All teachers")}</Btn>
          </div>
        </Container>
      </section>

      {/* ═════════ 7 · MEMORIES ═════════ */}
      <section className="overflow-hidden py-24 md:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal><SectionHead eyebrow={p("স্মৃতির অ্যালবাম", "Memory album")} title={p("চোখের সামনে ভেসে ওঠে সেই দিনগুলো", "Days that still live in our eyes")} /></Reveal>
            <Btn href={`${base}/gallery`} variant="ghost">{p("পুরো গ্যালারি", "Full gallery")}</Btn>
          </div>
        </Container>
        <Reveal>
          <div className="mt-12 grid grid-cols-2 items-end gap-3 px-3 md:grid-cols-5 md:gap-4 md:px-4">
            {[
              ["boishakh-1", "h-72 md:h-[26rem]", p("বর্ষবরণ", "New Year")],
              ["paddy", "h-56 md:h-72", p("ধানখেতের পথ", "Paddy path")],
              ["drums", "h-72 md:h-[30rem]", p("ঢোলের তালে", "Drumbeats")],
              ["library", "h-56 md:h-80", p("পাঠাগার", "Library")],
              ["boat", "h-72 md:h-[24rem]", p("গোধূলির নৌকা", "Dusk boat")],
            ].map(([ph, h, cap], i) => (
              <figure key={ph} className={i === 4 ? "col-span-2 md:col-span-1" : ""}>
                <Photo name={ph} locale={locale} className={`${h} w-full rounded-2xl`} sizes="(min-width:768px) 20vw, 50vw" />
                <figcaption className="mt-2 text-sm text-ink-soft">{cap}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═════════ 8 · GIVING BACK ═════════ */}
      <section className="relative isolate overflow-hidden py-24 text-white md:py-32">
        <Photo name="silhouette" locale={locale} zoom={false} className="absolute inset-0 -z-20" sizes="100vw" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-green-dark/70" />
        <Container>
          <Reveal><SectionHead light eyebrow={p("সামাজিক উদ্যোগ", "Giving back")} title={p("বিদ্যালয় ও এলাকার শিক্ষার পাশে", "Standing by learning in our school and community")} /></Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {initiatives.map((it, i) => (
              <Reveal key={it.title.en} delay={i * 0.08}>
                <div className="border-t-2 border-gold pt-5">
                  <span className="num font-display text-4xl text-gold">{p(["০১", "০২", "০৩", "০৪"][i], `0${i + 1}`)}</span>
                  <h3 className="font-display mt-3 text-2xl font-semibold">{it.title[locale]}</h3>
                  <p className="mt-2 text-white/75">{it.body[locale]}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Btn href={`${base}/scholarships`} variant="light" className="mt-12">{p("সব উদ্যোগ", "All initiatives")}</Btn>
        </Container>
      </section>

      {/* ═════════ 9 · NOTICES ═════════ */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal><SectionHead eyebrow={p("সর্বশেষ", "Latest")} title={p("নোটিশ ও সংবাদ", "Notices & news")} /></Reveal>
            <Btn href={`${base}/news`} variant="ghost">{p("সব নোটিশ", "All notices")}</Btn>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <Link href={`${base}/news`} className="group block">
                <Photo name={lead.photo} locale={locale} className="aspect-[16/10] rounded-3xl" sizes="(min-width:1024px) 45vw, 90vw" />
                <p className="mt-5 text-xs uppercase tracking-wider text-gold-text">{lead.tag[locale]} · {fmtDate(locale, lead.date)}</p>
                <h3 className="font-display mt-2 text-3xl font-semibold text-forest group-hover:underline">{lead.title[locale]}</h3>
                <p className="mt-3 text-ink-soft">{lead.body[locale]}</p>
              </Link>
            </Reveal>
            <ul className="divide-y divide-line border-y border-line lg:col-span-6">
              {rest.slice(0, 4).map((n, i) => (
                <Reveal as="li" key={n.title.en} delay={i * 0.06}>
                  <Link href={`${base}/news`} className="group flex items-start gap-5 py-5">
                    <span className="w-16 shrink-0 text-center"><span className="num font-display block text-3xl font-semibold text-forest">{new Date(n.date).getDate().toLocaleString(locale === "bn" ? "bn-BD" : "en-US")}</span><span className="text-xs uppercase text-gold-text">{new Date(n.date).toLocaleDateString(locale === "bn" ? "bn-BD" : "en-GB", { month: "short" })}</span></span>
                    <span className="min-w-0 flex-1"><span className="text-xs uppercase tracking-wider text-ink-soft">{n.tag[locale]}</span><span className="font-display block text-lg font-semibold text-forest group-hover:underline">{n.title[locale]}</span></span>
                    <span aria-hidden className="pt-2 text-gold transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ═════════ 10 · CTA ═════════ */}
      <section className="px-3 pb-3 md:px-4 md:pb-4">
        <div className="relative isolate overflow-hidden rounded-[2rem] py-24 text-white md:py-32">
          <Photo name="hero-field" locale={locale} zoom={false} kenburns className="absolute inset-0 -z-20" sizes="100vw" pos="50% 70%" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-green-dark/90 via-green-dark/60 to-transparent" />
          <Container>
            <Reveal className="max-w-2xl">
              <Eyebrow light>{p("পুনর্মিলনী ২০২৭", "Reunion 2027")}</Eyebrow>
              <h2 className="font-display mt-4 text-4xl font-semibold md:text-5xl">{p("আপনার আসনটি প্রস্তুত রাখুন", "Keep your seat ready")}</h2>
              <p className="mt-5 text-lg text-white/85">{p("ফি ও সময়সীমা চূড়ান্ত হলে এখানেই ঘোষণা করা হবে। এখনই নিবন্ধনের ধাপগুলো দেখে নিন।", "Fees and deadlines will be announced here once final. Preview the registration steps now.")}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Btn href={`${base}/reunion-2027/register`} variant="gold">{p("নিবন্ধন শুরু করুন", "Start registration")}</Btn>
                <Btn href={`${base}/reunion-2027/payment`} variant="light">{p("পেমেন্ট নির্দেশনা", "Payment guide")}</Btn>
              </div>
            </Reveal>
          </Container>
        </div>
      </section>
    </>
  );
}
