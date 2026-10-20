import Link from "next/link";
import type { ReactNode } from "react";
import { fmtDate, num, pick, type Locale } from "@/lib/i18n";
import { batches, faqs, fees, initiatives, news, schedule } from "@/lib/demo";
import { history, school, schoolFacts, teacherList, values } from "@/lib/people";
import { alumni, countOf, GROUPS, intro, sortedAlumni } from "@/lib/alumni";
import { chief, conveners, duties, members, sortedConveners, sortedMembers, text as ctext } from "@/lib/committee";
import credits from "@/lib/credits.json";
import { alt } from "@/lib/photos";
import { Btn, Container, Field, Icon, inputCls, Notice, Photo, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Gallery } from "@/components/Gallery";
import { DirectoryExplorer } from "@/components/DirectoryExplorer";
import { TeachersExplorer } from "@/components/TeachersExplorer";
import { Select } from "@/components/Select";

export type View = { eyebrow: [string, string]; title: [string, string]; lead?: [string, string]; photo?: string; render: (l: Locale) => ReactNode };

const Sec = ({ children, tone = "plain", className = "" }: { children: ReactNode; tone?: "plain" | "white" | "gold"; className?: string }) => (
  <section className={`py-16 md:py-20 ${tone === "white" ? "border-y border-line bg-white" : tone === "gold" ? "bg-gold-soft/60" : ""} ${className}`}>
    <Container>{children}</Container>
  </section>
);

const DemoNote = ({ l }: { l: Locale }) => (
  <p className="mt-8 rounded-lg border border-dashed border-warn/60 bg-gold-soft/50 px-4 py-2.5 text-sm text-gold-text">
    {pick(l)("ডেমো তথ্য — চূড়ান্ত প্রকাশের আগে সংগঠনের অনুমোদিত তথ্য দিয়ে প্রতিস্থাপিত হবে।", "Demo content — to be replaced with the association's approved information before launch.")}
  </p>
);

const Legal = ({ items }: { items: [string, string][] }) => (
  <div className="mx-auto max-w-3xl space-y-8">
    {items.map(([h, t], i) => (
      <Reveal key={h}>
        <h2 className="font-display text-2xl font-semibold text-forest"><span className="mr-3 text-gold-text">{String(i + 1).padStart(2, "0")}</span>{h}</h2>
        <p className="mt-2 text-ink-soft">{t}</p>
      </Reveal>
    ))}
  </div>
);

export const views: Record<string, View> = {
  about: {
    eyebrow: ["আমাদের কথা", "About us"], title: ["বিদ্যালয়ের স্মৃতি, প্রজন্মের বন্ধন", "School memories, bonds across generations"],
    lead: ["ঠাকুরগাঁওয়ের বালিয়াডাঙ্গীতে ১৯৩৩ সালে প্রতিষ্ঠিত বোয়ালধার সরকারি প্রাথমিক বিদ্যালয়ের প্রাক্তন শিক্ষার্থীদের সংগঠন।", "The alumni association of Boaldhar Government Primary School, founded in 1933 in Baliadangi, Thakurgaon."], photo: "school-grass",
    render: (l) => { const p = pick(l); return (<>
      <Sec>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal><SectionHead eyebrow={p("কেন এই সংগঠন", "Why we exist")} title={p("যেখানে শুরু, সেখানেই ফেরা", "Returning to where it began")} lead={p("প্রতিটি মানুষের জীবনে প্রাথমিক বিদ্যালয় প্রথম বন্ধুত্ব আর প্রথম স্বপ্নের জায়গা। সেই বন্ধন ধরে রাখতেই আমরা একত্রিত হয়েছি।", "For everyone, primary school is the home of first friendships and first dreams. We came together to keep that bond alive.")} /></Reveal>
          <Reveal delay={0.1}><div className="grid grid-cols-2 gap-4"><Photo name="school-colour" locale={l} className="aspect-[3/4] rounded-2xl" /><Photo name="girl-board" locale={l} className="mt-10 aspect-[3/4] rounded-2xl" /></div></Reveal>
        </div>
      </Sec>

      {/* since 1933 + location chain (REAL) */}
      <Sec>
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-text">{p("প্রতিষ্ঠিত", "Established")}</p>
            <p className="num gold-text font-display text-[6.5rem] font-semibold leading-none md:text-[8.5rem]">{school.founded[l]}</p>
            <p className="font-display mt-2 text-2xl font-semibold text-forest">{p("৯০ বছরেরও বেশি পথচলা", "Over 90 years of learning")}</p>
            <p className="mt-3 max-w-sm text-ink-soft">{p("প্রজন্মের পর প্রজন্ম এই প্রাঙ্গণ থেকেই শুরু করেছে তাদের শিক্ষাজীবন।", "Generation after generation has started its schooling in this very yard.")}</p>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal><h2 className="font-display mb-6 text-2xl font-semibold text-forest">{p("অবস্থান", "Where we are")}</h2></Reveal>
            <ol className="relative space-y-4">
              <span aria-hidden className="absolute bottom-6 left-[1.45rem] top-6 w-px bg-gradient-to-b from-gold/20 via-gold to-gold/20" />
              {school.chain.map((c, i) => (
                <Reveal as="li" key={c.k.en} delay={i * 0.1}>
                  <div className={`group relative flex items-center gap-5 rounded-2xl border p-4 pr-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${i === school.chain.length - 1 ? "border-forest bg-forest text-white" : "border-line bg-white"}`}>
                    <span className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full ring-4 ${i === school.chain.length - 1 ? "bg-gold text-green-dark ring-forest" : "bg-gold-soft text-gold-text ring-white"}`}><Icon n="pin" className="h-5 w-5" /></span>
                    <span><span className={`block text-xs uppercase tracking-wider ${i === school.chain.length - 1 ? "text-gold" : "text-ink-soft"}`}>{c.k[l]}</span><span className="font-display block text-xl font-semibold leading-snug">{c.v[l]}</span></span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Sec>

      <Sec tone="white">
        <Reveal><SectionHead eyebrow={p("বোয়ালধার সরকারি প্রাথমিক বিদ্যালয়", "Boaldhar Government Primary School")} title={p("এক নজরে বিদ্যালয়", "The school at a glance")} /></Reveal>
        <dl className="mt-10 grid overflow-hidden rounded-3xl border border-line sm:grid-cols-2 lg:grid-cols-4">
          {schoolFacts.map((f, i) => (
            <Reveal key={f.k.en} delay={(i % 4) * 0.05}>
              <div className="h-full border-b border-line p-6 transition-colors hover:bg-gold-soft/40 sm:border-r lg:[&:nth-child(4n)]:border-r-0">
                <dt className="text-xs uppercase tracking-wider text-gold-text">{f.k[l]}</dt>
                <dd className="font-display mt-1 text-2xl font-semibold text-forest">{f.v[l]}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
        <p className="mt-8 rounded-lg border border-dashed border-warn/60 bg-gold-soft/50 px-4 py-2.5 text-sm text-gold-text">{p("প্রতিষ্ঠার বছর ও অবস্থান সংগঠনের সরবরাহ করা তথ্য; শ্রেণি, শিক্ষার্থী ও শিক্ষক সংখ্যা ডেমো — চূড়ান্ত প্রকাশের আগে হালনাগাদ হবে।", "Founding year and location were supplied by the association; classes, pupil and teacher counts are demo and will be updated before launch.")}</p>
      </Sec>

      {/* values — five pillars */}
      <section className="relative isolate overflow-hidden bg-green-dark py-20 text-white md:py-28">
        <div aria-hidden className="dots absolute inset-0 -z-10 opacity-20 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div aria-hidden className="absolute -top-40 left-1/2 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
        <Container>
          <Reveal><SectionHead center light eyebrow={p("মূল্যবোধ", "Our values")} title={p("আমরা যা বিশ্বাস করি", "What we believe in")} lead={p("পাঁচটি মূল্যবোধ — যা আমাদের প্রতিটি সিদ্ধান্ত ও উদ্যোগকে পথ দেখায়।", "Five values that guide every decision and every initiative.")} /></Reveal>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/15 ring-1 ring-white/15 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal as="li" key={v.t.en} delay={i * 0.08} className="sm:max-lg:last:col-span-2">
                <div className="group relative h-full overflow-hidden bg-green-dark p-8 transition-colors duration-500 hover:bg-forest">
                  <span aria-hidden className="num font-display absolute -right-1 -top-3 text-8xl font-semibold text-white/[0.04] transition-colors duration-500 group-hover:text-gold/15">{p(["০১", "০২", "০৩", "০৪", "০৫"][i], `0${i + 1}`)}</span>
                  <span className="relative grid h-14 w-14 place-items-center rounded-full border border-gold/60 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-green-dark"><Icon n={v.icon} className="h-7 w-7" /></span>
                  <h3 className="font-display relative mt-7 text-xl font-semibold">{v.t[l]}</h3>
                  <p className="relative mt-3 text-[0.95rem] leading-relaxed text-white/70">{v.d[l]}</p>
                  <span aria-hidden className="relative mt-6 block h-0.5 w-8 bg-gold transition-all duration-500 group-hover:w-20" />
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <Sec>
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4"><div className="lg:sticky lg:top-32"><SectionHead eyebrow={p("পথচলা", "Our journey")} title={p("বিদ্যালয়ের ইতিহাস", "A short history")} lead={p("প্রতিষ্ঠা থেকে আজ পর্যন্ত গুরুত্বপূর্ণ মাইলফলক।", "Key milestones from the founding until today.")} /></div></Reveal>
          <ol className="relative space-y-10 border-l-2 border-gold/50 pl-8 lg:col-span-8">
            {history.map((m) => (
              <Reveal as="li" key={m.t.en} delay={0.05} className="relative">
                <span aria-hidden className="absolute -left-[2.65rem] top-2 h-4 w-4 rounded-full border-4 border-white bg-gold ring-2 ring-gold/40" />
                <p className="num font-display text-2xl font-semibold text-gold-text">{p(m.y, m.yEn)}</p>
                <h3 className="font-display text-xl font-semibold text-forest">{m.t[l]}</h3><p className="text-ink-soft">{m.d[l]}</p>
              </Reveal>
            ))}
          </ol>
        </div>
        <DemoNote l={l} />
      </Sec>
    </>); },
  },

  committee: {
    eyebrow: ["সংগঠন", "Association"], title: ["আহ্বায়ক কমিটি", "Convening committee"], lead: ["পুনর্মিলনী ২০২৭ উপলক্ষে প্রস্তাবিত আহ্বায়ক কমিটি।", "The proposed convening committee for Reunion 2027."], photo: "alumni-group",
    render: (l) => { const p = pick(l); return (<>
      <Sec>
        <Reveal><p className="mb-8 inline-flex items-center gap-2 rounded-full border border-warn/50 bg-gold-soft/70 px-4 py-1.5 text-sm font-semibold text-gold-text"><span aria-hidden className="h-2 w-2 rounded-full bg-gold" />{ctext.proposed[l]} · {ctext.forEvent[l]}</p></Reveal>

        <Reveal>
          <article className="relative overflow-hidden rounded-[2rem] bg-green-dark p-8 text-white shadow-2xl md:p-12">
            <div aria-hidden className="dots absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center">
              <span aria-hidden className="grid h-28 w-28 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold to-[#e0c27a] font-display text-5xl font-semibold text-green-dark ring-8 ring-white/10">{chief.name[l].replace(/^((Dr\.|Engr\.|Md\.|ডা\.|ইঞ্জি\.|মোঃ)\s*)+/, "").trim()[0]}</span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">{chief.role[l]}</p>
                <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">{chief.name[l]}</h2>
                <p className="mt-2 text-lg text-white/85">{chief.detail[l]}</p>
                <p className="mt-1 text-white/70">{p("বোয়ালধার সরকারি প্রাথমিক বিদ্যালয় অ্যালামনাই অ্যাসোসিয়েশন", "Boaldhar Government Primary School Alumni Association")}</p>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal><h2 className="font-display mb-6 mt-16 flex items-center gap-4 text-2xl font-semibold text-forest"><span aria-hidden className="h-px w-8 bg-gold" />{p("আহ্বায়ক", "Conveners")}<span className="rounded-full bg-gold-soft px-3 py-0.5 text-sm font-medium text-gold-text">{num(l, conveners.length)}</span></h2></Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {sortedConveners(l).map((c, i) => (
            <Reveal key={c.name.en} delay={i * 0.08}>
              <article className="flex h-full items-center gap-5 rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-xl">
                <span aria-hidden className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-forest to-green font-display text-2xl text-white ring-4 ring-gold-soft">{c.name[l].replace(/^((Dr\.|Engr\.|Md\.|ডা\.|ইঞ্জি\.|মোঃ)\s*)+/, "").trim()[0]}</span>
                <div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-wider text-gold-text">{c.role[l]}</p><h3 className="font-display text-xl font-semibold leading-snug text-forest">{c.name[l]}</h3><p className="text-sm text-ink-soft">{c.detail[l]}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
      </Sec>

      <Sec tone="white">
        <Reveal><SectionHead eyebrow={p("প্রস্তাবিত সদস্যবৃন্দ", "Proposed members")} title={p("কমিটির সদস্যবৃন্দ", "Committee members")} lead={p(`মোট ${num(l, members.length)} জন সদস্যের নাম প্রস্তাব করা হয়েছে।`, `${members.length} members have been proposed.`)} /></Reveal>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedMembers(l).map((mm, i) => (
            <Reveal as="li" key={mm.en} delay={(i % 4) * 0.05}>
              <div className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-white hover:shadow-lg">
                <span aria-hidden className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-soft font-display text-lg text-gold-text transition-colors group-hover:bg-forest group-hover:text-gold">{mm[l].replace(/^((Dr\.|Engr\.|Md\.|ডা\.|ইঞ্জি\.|মোঃ)\s*)+/, "").trim()[0]}</span>
                <span className="min-w-0 flex-1 font-semibold leading-snug text-forest">{mm[l]}</span>
                <span className="num font-display text-xl text-line transition-colors group-hover:text-gold/60">{num(l, i + 1)}</span>
              </div>
            </Reveal>
          ))}
        </ol>
      </Sec>

      <section className="relative isolate overflow-hidden bg-green-dark py-20 text-white md:py-24">
        <div aria-hidden className="dots absolute inset-0 -z-10 opacity-20 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5"><SectionHead light eyebrow={p("কার্যক্রম", "Scope of work")} title={p("কমিটির কার্যক্রম ও দায়িত্ব বণ্টন", "Work and division of responsibilities")} /></Reveal>
            <Reveal delay={0.1} className="lg:col-span-7"><p className="text-lg leading-relaxed text-white/80">{ctext.dutiesIntro[l]}</p></Reveal>
          </div>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/15 ring-1 ring-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {duties.map((d, i) => (
              <Reveal as="li" key={d.t.en} delay={(i % 4) * 0.06} className={i === duties.length - 1 ? "sm:col-span-2" : ""}>
                <div className="group flex h-full items-center gap-4 bg-green-dark p-6 transition-colors duration-500 hover:bg-forest">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-green-dark"><Icon n={d.icon} /></span>
                  <span className="font-display text-lg font-semibold leading-snug">{d.t[l]}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <Sec>
        <div className="mx-auto max-w-3xl"><Notice tone="warn"><b>{ctext.note[l]}</b></Notice></div>
      </Sec>
    </>); },
  },

  teachers: {
    eyebrow: ["শ্রদ্ধাঞ্জলি", "In honour"], title: ["শিক্ষকবৃন্দ ও সম্মানিত ব্যক্তিবর্গ", "Teachers & honorees"], lead: ["যাঁদের আলোয় আমরা পথ চিনেছি।", "The light by which we found our way."], photo: "girl-board",
    render: (l) => { const p = pick(l); const heads = teacherList.filter((t) => t.cat === "head" || t.role.en === "Head Teacher").sort((a, b) => a.years.en.localeCompare(b.years.en));
      return (<>
      <Sec>
        <div className="grid gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
          {[[teacherList.length, p("শিক্ষক ও পৃষ্ঠপোষক", "Teachers & patrons")], [heads.length, p("প্রধান শিক্ষক (ক্রমানুসারে)", "Head teachers")], [teacherList.filter((t) => t.cat === "current").length, p("বর্তমান শিক্ষক", "Current teachers")], [teacherList.filter((t) => t.cat === "former").length, p("প্রাক্তন শিক্ষক", "Former teachers")]].map(([n, k]) => (
            <div key={String(k)} className="bg-white p-7 text-center"><p className="num font-display text-5xl font-semibold text-forest">{num(l, n as number)}</p><p className="mt-1 text-sm uppercase tracking-wider text-gold-text">{k}</p></div>
          ))}
        </div>
      </Sec>

      <Sec tone="white">
        <Reveal><SectionHead eyebrow={p("নেতৃত্ব", "Leadership")} title={p("প্রধান শিক্ষকগণ", "Head teachers through the years")} /></Reveal>
        <ol className="relative mt-12 grid gap-6 md:grid-cols-4">
          <span aria-hidden className="absolute left-0 right-0 top-[1.15rem] hidden h-0.5 bg-gold/40 md:block" />
          {heads.map((t, i) => (
            <Reveal as="li" key={t.name.en} delay={i * 0.08} className="relative">
              <span aria-hidden className="relative z-10 mb-5 block h-5 w-5 rounded-full border-4 border-white bg-gold ring-2 ring-gold/40" />
              <p className="text-sm font-semibold text-gold-text">{t.years[l]}</p>
              <h3 className="font-display text-xl font-semibold text-forest">{t.name[l]}</h3>
              <p className="mt-1 text-sm text-ink-soft">{t.note[l]}</p>
            </Reveal>
          ))}
        </ol>
      </Sec>

      <Sec>
        <Reveal><SectionHead eyebrow={p("সবার কথা", "Everyone")} title={p("শিক্ষক ও শুভানুধ্যায়ী", "Teachers and well-wishers")} /></Reveal>
        <div className="mt-10">
          <TeachersExplorer
            digits={l}
            subjectLabel={p("বিষয়", "Subject")}
            tabs={[{ key: "all", label: p("সবাই", "All") }, { key: "head", label: p("প্রাক্তন প্রধান শিক্ষক", "Former heads") }, { key: "current", label: p("বর্তমান", "Current") }, { key: "former", label: p("প্রাক্তন শিক্ষক", "Former teachers") }, { key: "patron", label: p("পৃষ্ঠপোষক", "Patrons") }]}
            items={teacherList.map((t) => ({ name: t.name[l], role: t.role[l], years: t.years[l], subject: t.subject[l], note: t.note[l], cat: t.cat }))}
          />
        </div>
        <Reveal><div className="mt-16 grid items-center gap-8 overflow-hidden rounded-3xl bg-forest text-white md:grid-cols-2">
          <div className="p-10"><p className="font-display text-3xl font-semibold">{p("আপনার প্রিয় শিক্ষকের কথা জানান", "Tell us about your favourite teacher")}</p><p className="mt-3 text-white/80">{p("ছবি ও স্মৃতিকথা পাঠান — আমরা এখানে প্রকাশ করব।", "Send a photo and a memory — we will publish it here.")}</p><Btn href={`/${l}/contact`} variant="gold" className="mt-6">{p("যোগাযোগ", "Contact us")}</Btn></div>
          <Photo name="classroom" locale={l} className="h-64 md:h-full" />
        </div></Reveal>
        <DemoNote l={l} />
      </Sec>
    </>); },
  },

  batches: {
    eyebrow: ["প্রাক্তনী", "Alumni"], title: ["ব্যাচসমূহ", "Batches"], lead: ["ব্যাচ অনুযায়ী বন্ধুদের খুঁজুন।", "Find your friends by batch."], photo: "assembly-green",
    render: (l) => { const p = pick(l); return (<Sec><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {batches.map((b, i) => (
        <Reveal key={b.year} delay={(i % 5) * 0.06}><Link href={`/${l}/directory`} className="group block rounded-3xl bg-white p-6 ring-1 ring-line transition-all duration-300 hover:-translate-y-2 hover:bg-forest hover:text-white hover:shadow-xl">
          <p className="text-xs uppercase tracking-wider text-gold-text group-hover:text-gold">{p("ব্যাচ", "Batch")}</p>
          <p className="num font-display text-5xl font-semibold text-forest group-hover:text-white">{l === "bn" ? b.year.toLocaleString("bn-BD", { useGrouping: false }) : b.year}</p>
          <p className="mt-6 text-sm opacity-80">{num(l, b.members)} {p("জন সদস্য", "members")}</p><p className="text-sm">{b.rep[l]}</p>
        </Link></Reveal>
      ))}</div><DemoNote l={l} /></Sec>); },
  },

  directory: {
    eyebrow: ["প্রাক্তনী", "Alumni"], title: ["প্রাক্তনী তালিকা", "Alumni directory"], lead: ["বিভিন্ন ক্ষেত্রে প্রতিষ্ঠিত আমাদের প্রাক্তন শিক্ষার্থীরা।", "Our alumni, established across many fields."], photo: "alumni-group",
    render: (l) => { const p = pick(l);
      return (<>
      <Sec>
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5"><SectionHead eyebrow={p("গর্বের গল্প", "Our pride")} title={intro.title[l]} /></Reveal>
          <Reveal delay={0.1} className="lg:col-span-7"><p className="font-display text-xl leading-relaxed text-ink md:text-2xl">{intro.body[l]}</p></Reveal>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
          {[[alumni.length, p("প্রাক্তন শিক্ষার্থী", "Alumni listed")], [GROUPS.length, p("পেশাগত ক্ষেত্র", "Fields")], [countOf("education"), p("শিক্ষা ও শিক্ষকতায়", "In education")], [countOf("medical") + countOf("tech"), p("চিকিৎসা, প্রকৌশল ও আইটিতে", "In medicine, engineering & IT")]].map(([n, k]) => (
            <div key={String(k)} className="bg-white p-6 text-center"><p className="num font-display text-4xl font-semibold text-forest">{num(l, n as number)}</p><p className="mt-1 text-sm uppercase tracking-wider text-gold-text">{k}</p></div>
          ))}
        </div>
      </Sec>
      <Sec tone="white">
        <DirectoryExplorer digits={l}
          groups={GROUPS.map((g) => ({ value: g.key, label: g.t[l] }))}
          people={sortedAlumni(l).map((a) => ({ no: a.no, name: a.name[l], role: a.role[l], org: a.org?.[l], group: a.group, groupLabel: GROUPS.find((g) => g.key === a.group)!.t[l], convener: a.convener, deputy: a.deputy, unconfirmed: a.unconfirmed }))}
          labels={{ search: p("নাম বা পেশা লিখুন", "Search name or profession"), group: p("পেশাগত ক্ষেত্র", "Field"), sort: p("সাজান", "Sort by"), all: p("সব ক্ষেত্র", "All fields"), results: p("জন পাওয়া গেছে", "found"), none: p("কাউকে পাওয়া যায়নি।", "No one found."), reset: p("ফিল্টার মুছুন", "Clear filters"), byGroup: p("ক্ষেত্র অনুযায়ী", "By field"), byName: p("নাম অনুযায়ী", "By name"), convener: p("প্রধান আহ্বায়ক", "Chief Convener"), deputy: p("আহ্বায়ক", "Convener"), confirm: p("তথ্য নিশ্চিত করা হবে", "To be confirmed") }} />
        <p className="mt-10 rounded-lg border border-dashed border-warn/60 bg-gold-soft/50 px-4 py-2.5 text-sm text-gold-text">{p("তালিকাটি সংগঠনের সরবরাহ করা তথ্যের ভিত্তিতে। ‘তথ্য নিশ্চিত করা হবে’ চিহ্নিত নামগুলোর পেশা পরে হালনাগাদ হবে; ইংরেজি বানানের বাংলা রূপ পেলে যুক্ত করা হবে।", "Based on information supplied by the association. Entries marked “To be confirmed” will be updated, and Bengali spellings will be added when supplied.")}</p>
      </Sec>
    </>); },
  },

  gallery: {
    eyebrow: ["স্মৃতি", "Memories"], title: ["স্মৃতিচিত্র", "Gallery"], lead: ["বিদ্যালয়, গ্রাম আর উৎসবের মুহূর্ত।", "Moments of school, village and festival."], photo: "boishakh-1",
    render: (l) => { const p = pick(l); const ratios = ["tall", "sq", "wide", "sq", "sq", "tall", "wide", "sq", "sq", "tall", "sq", "wide", "sq", "sq", "sq", "wide", "sq", "tall"] as const;
      const items = credits.map((c, i) => ({ file: c.file, alt: alt[c.file]?.[l] ?? "", caption: alt[c.file]?.[l] ?? "", credit: `© ${c.artist} · ${c.license}`, ratio: ratios[i % ratios.length] }));
      return (<Sec>
        <Gallery items={items} closeLabel={p("বন্ধ", "Close")} nextLabel={p("পরের", "Next")} prevLabel={p("আগের", "Previous")} />
        <p className="mt-8 text-sm text-ink-soft">{p("ছবিগুলো উইকিমিডিয়া কমন্স থেকে নেওয়া ডেমো ছবি; ", "Demo photographs from Wikimedia Commons; ")}<Link className="text-forest underline" href={`/${l}/credits`}>{p("ছবির কৃতিত্ব", "see credits")}</Link>.</p>
      </Sec>); },
  },

  news: {
    eyebrow: ["খবর", "News"], title: ["নোটিশ ও সংবাদ", "News & notices"], lead: ["সংগঠনের সর্বশেষ ঘোষণা।", "The latest from the association."], photo: "school-colour",
    render: (l) => (<Sec><div className="mx-auto max-w-4xl space-y-8">
      {news.map((n) => (
        <Reveal key={n.title.en} delay={0.05}><article className="grid overflow-hidden rounded-3xl bg-white ring-1 ring-line transition-shadow hover:shadow-xl md:grid-cols-5">
          <Photo name={n.photo} locale={l} className="aspect-[16/10] md:col-span-2 md:aspect-auto" sizes="30vw" />
          <div className="p-7 md:col-span-3"><p className="text-xs uppercase tracking-wider text-gold-text">{n.tag[l]} · {fmtDate(l, n.date)}</p><h2 className="font-display mt-2 text-2xl font-semibold text-forest">{n.title[l]}</h2><p className="mt-3 text-ink-soft">{n.body[l]}</p></div>
        </article></Reveal>
      ))}<DemoNote l={l} /></div></Sec>),
  },

  community: {
    eyebrow: ["কমিউনিটি", "Community"], title: ["কমিউনিটি কার্যক্রম", "Community activities"], lead: ["উৎসব, খেলাধুলা আর সামাজিক কাজে একসাথে।", "Together in festivals, sport and service."], photo: "boat-race",
    render: (l) => { const p = pick(l); const acts = [
      ["boishakh-2", p("পহেলা বৈশাখ উদযাপন", "Pohela Boishakh celebration"), p("বর্ষবরণে প্রাক্তন ও বর্তমান শিক্ষার্থীদের মিলনমেলা।", "A new-year gathering of former and current pupils.")],
      ["field", p("বার্ষিক ক্রীড়া প্রতিযোগিতা", "Annual sports day"), p("বিদ্যালয় মাঠে প্রাক্তনীদের প্রীতি ম্যাচ ও দৌড়।", "Friendly matches and races in the school field.")],
      ["tree-mist", p("বৃক্ষরোপণ কর্মসূচি", "Tree-planting drive"), p("বিদ্যালয় প্রাঙ্গণ সবুজ রাখার উদ্যোগ।", "Keeping the school grounds green.")],
      ["library", p("বই উপহার", "Book donation"), p("বিদ্যালয় পাঠাগারের জন্য বই সংগ্রহ।", "Collecting books for the school library.")],
    ]; return (<Sec><div className="grid gap-8 md:grid-cols-2">
      {acts.map(([ph, t, d], i) => (<Reveal key={t} delay={(i % 2) * 0.1}><article className="group overflow-hidden rounded-3xl bg-white ring-1 ring-line"><Photo name={ph} locale={l} className="aspect-[16/10]" /><div className="p-6"><h3 className="font-display text-2xl font-semibold text-forest">{t}</h3><p className="mt-2 text-ink-soft">{d}</p></div></article></Reveal>))}
    </div><DemoNote l={l} /></Sec>); },
  },

  scholarships: {
    eyebrow: ["সামাজিক উদ্যোগ", "Giving back"], title: ["বৃত্তি ও সামাজিক উদ্যোগ", "Scholarships & social initiatives"], lead: ["স্বচ্ছ হিসাবসহ অনুমোদিত কার্যক্রম।", "Approved programmes with transparent accounts."], photo: "silhouette",
    render: (l) => { const p = pick(l); return (<>
      <Sec><div className="grid gap-6 md:grid-cols-2">
        {initiatives.map((it, i) => (<Reveal key={it.title.en} delay={(i % 2) * 0.1}><article className="flex h-full gap-5 rounded-3xl bg-white p-7 ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gold-soft text-gold-text"><Icon n={it.icon} className="h-7 w-7" /></span><div><h3 className="font-display text-2xl font-semibold text-forest">{it.title[l]}</h3><p className="mt-2 text-ink-soft">{it.body[l]}</p></div></article></Reveal>))}
      </div></Sec>
      <Sec tone="gold"><Reveal><div className="grid items-center gap-8 md:grid-cols-2"><SectionHead eyebrow={p("স্বচ্ছতা", "Transparency")} title={p("প্রতিটি টাকার হিসাব প্রকাশিত হবে", "Every taka will be accounted for")} lead={p("অনুদান ও ব্যয় আলাদা খাতে রাখা হবে এবং নিয়মিত প্রকাশ করা হবে।", "Donations and expenses are kept in separate accounts and published regularly.")} /><div className="grid grid-cols-3 gap-3 text-center">{[p("অনুদান", "Donations"), p("ব্যয়", "Expenses"), p("ব্যালান্স", "Balance")].map((k) => (<div key={k} className="rounded-2xl bg-white p-5 ring-1 ring-line"><p className="font-display text-3xl font-semibold text-forest">—</p><p className="text-xs uppercase tracking-wider text-gold-text">{k}</p></div>))}</div></div></Reveal><DemoNote l={l} /></Sec>
    </>); },
  },

  contact: {
    eyebrow: ["যোগাযোগ", "Contact"], title: ["যোগাযোগ করুন", "Get in touch"], lead: ["প্রশ্ন, পরামর্শ বা পুরনো ছবি পাঠাতে লিখুন।", "Write to us with questions, ideas or old photographs."], photo: "hero-field",
    render: (l) => { const p = pick(l); return (<Sec><div className="grid gap-12 lg:grid-cols-12">
      <form className="space-y-5 rounded-3xl bg-white p-8 ring-1 ring-line lg:col-span-7">
        <div className="grid gap-5 sm:grid-cols-2"><Field id="n" label={p("আপনার নাম", "Your name")}><input id="n" className={inputCls} /></Field><Field id="e" label={p("ইমেইল বা মোবাইল", "Email or mobile")}><input id="e" className={inputCls} /></Field></div>
        <Field id="s" label={p("বিষয়", "Subject")}><Select id="s" name="subject" defaultValue="general" options={[{ value: "general", label: p("সাধারণ প্রশ্ন", "General question") }, { value: "reg", label: p("নিবন্ধন / পেমেন্ট", "Registration / payment") }, { value: "photos", label: p("ছবি পাঠাতে চাই", "I want to send photos") }, { value: "teacher", label: p("শিক্ষকের তথ্য দিতে চাই", "I want to add teacher details") }, { value: "donate", label: p("অনুদান / সহায়তা", "Donation / support") }]} /></Field>
        <Field id="m" label={p("বার্তা", "Message")}><textarea id="m" rows={6} className={inputCls} /></Field>
        <button type="button" className="rounded-full bg-forest px-7 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-dark">{p("বার্তা পাঠান", "Send message")}</button>
      </form>
      <aside className="space-y-4 lg:col-span-5">
        {[["pin", p("ঠিকানা", "Address"), school.address[l]], ["phone", p("ফোন (ডেমো)", "Phone (demo)"), "01XXX-XXXXXX"], ["mail", p("ইমেইল (ডেমো)", "Email (demo)"), "info@boaldhar-alumni.example"], ["calendar", p("সাড়া দেওয়ার সময়", "Response time"), p("সাধারণত ২ কার্যদিবসে", "Usually within 2 working days")]].map(([ic, k, v]) => (
          <div key={k} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-line"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-soft text-gold-text"><Icon n={ic as "pin"} /></span><div><p className="text-xs uppercase tracking-wider text-ink-soft">{k}</p><p className="font-medium text-forest">{v}</p></div></div>
        ))}
        <Photo name="paddy" locale={l} className="aspect-[16/9] rounded-2xl" />
      </aside></div><DemoNote l={l} /></Sec>); },
  },

  status: {
    eyebrow: ["নিবন্ধন", "Registration"], title: ["নিবন্ধনের অবস্থা দেখুন", "Check registration status"], lead: ["রেফারেন্স ও মোবাইল নম্বর দিয়ে অবস্থা জানুন।", "Use your reference and mobile number."], photo: "slates",
    render: (l) => { const p = pick(l); return (<Sec><div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
      <form className="space-y-5 rounded-3xl bg-white p-8 ring-1 ring-line"><Field id="r" label={p("রেজিস্ট্রেশন রেফারেন্স", "Registration reference")}><input id="r" className={inputCls} placeholder="REG-XXXXXX" /></Field><Field id="p" label={p("মোবাইল নম্বর", "Mobile number")}><input id="p" inputMode="tel" className={inputCls} /></Field><button type="button" className="w-full rounded-full bg-forest px-6 py-3 font-semibold text-white hover:bg-green-dark">{p("অবস্থা দেখুন", "Check status")}</button><p className="text-sm text-ink-soft">{p("রেফারেন্স হারিয়ে ফেললে মোবাইল নম্বর দিয়ে পুনরুদ্ধার করা যাবে।", "Lost your reference? Recover it with your mobile number.")}</p></form>
      <div><p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-text">{p("ফলাফলের নমুনা", "Sample result")}</p><div className="rounded-3xl bg-white p-6 ring-1 ring-line"><ol className="space-y-5">{[[p("নিবন্ধন জমা", "Registration submitted"), true], [p("পেমেন্ট যাচাই চলছে", "Payment under review"), true], [p("অনুমোদন", "Approved"), false], [p("ডিজিটাল টিকিট", "Digital ticket"), false]].map(([t, d], i) => (<li key={i} className="flex items-center gap-4"><span className={`grid h-8 w-8 place-items-center rounded-full text-sm ${d ? "bg-forest text-white" : "border-2 border-line text-ink-soft"}`}>{d ? <Icon n="check" className="h-4 w-4" /> : i + 1}</span><span className={d ? "font-medium text-forest" : "text-ink-soft"}>{t as string}</span></li>))}</ol></div></div>
    </div></Sec>); },
  },

  "reunion-2027/schedule": {
    eyebrow: ["রি-ইউনিয়ন ২০২৭", "Reunion 2027"], title: ["অনুষ্ঠানসূচি", "Schedule"], lead: ["প্রস্তাবিত খসড়া — তারিখ ঘোষণার পর চূড়ান্ত হবে।", "A proposed draft — final once the date is announced."], photo: "drums",
    render: (l) => (<Sec><Notice tone="warn">{pick(l)("তারিখ এখনো নির্ধারিত হয়নি। নিচের সূচিটি কেবল খসড়া।", "The date is not set yet. The programme below is a draft.")}</Notice>
      <ol className="relative mx-auto mt-12 max-w-3xl space-y-8 border-l-2 border-gold/50 pl-8">
        {schedule.map((s) => (<Reveal as="li" key={s.title.en} delay={0.05} className="relative"><span aria-hidden className="absolute -left-[2.65rem] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-gold ring-2 ring-gold/40" /><p className="text-sm font-semibold text-gold-text">{s.time[l]}</p><h3 className="font-display text-xl font-semibold text-forest">{s.title[l]}</h3><p className="text-ink-soft">{s.body[l]}</p></Reveal>))}
      </ol><DemoNote l={l} /></Sec>),
  },

  "reunion-2027/payment": {
    eyebrow: ["রি-ইউনিয়ন ২০২৭", "Reunion 2027"], title: ["পেমেন্ট নির্দেশনা", "Payment instructions"], lead: ["বিকাশ বা নগদে ফি পাঠিয়ে ট্রানজেকশন আইডি জমা দিন।", "Send the fee via bKash or Nagad and submit the transaction ID."], photo: "classroom",
    render: (l) => { const p = pick(l); return (<>
      <Sec><Reveal><SectionHead eyebrow={p("ধাপসমূহ", "Steps")} title={p("চার ধাপে পেমেন্ট", "Pay in four steps")} /></Reveal>
        <ol className="mt-10 grid gap-5 md:grid-cols-4">
          {[[p("নম্বর দেখুন", "Note the number"), p("নিচের বিকাশ/নগদ নম্বরটি দেখুন।", "See the bKash/Nagad number below.")], [p("টাকা পাঠান", "Send money"), p("‘Send Money’ অপশনে সঠিক পরিমাণ পাঠান।", "Use ‘Send Money’ for the exact amount.")], [p("আইডি জমা দিন", "Submit the ID"), p("নিবন্ধন ফর্মে ট্রানজেকশন আইডি লিখুন।", "Enter the transaction ID in the form.")], [p("টিকিট নিন", "Get your ticket"), p("অনুমোদনের পর QR টিকিট পাবেন।", "Receive your QR ticket after approval.")]].map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 0.08}><div className="h-full rounded-3xl bg-white p-6 ring-1 ring-line"><span className="font-display text-5xl text-gold">{String(i + 1).padStart(2, "0")}</span><h3 className="mt-2 font-semibold text-forest">{t}</h3><p className="mt-1 text-sm text-ink-soft">{d}</p></div></Reveal>
          ))}</ol></Sec>
      <Sec tone="white"><div className="grid gap-10 lg:grid-cols-2">
        <div><h2 className="font-display text-2xl font-semibold text-forest">{p("নিবন্ধন ফি (খসড়া)", "Registration fees (draft)")}</h2>
          <div className="mt-5 divide-y divide-line overflow-hidden rounded-2xl ring-1 ring-line">{fees.map((f) => (<div key={f.cat.en} className="flex items-center justify-between gap-4 bg-white p-5"><div><p className="font-semibold text-forest">{f.cat[l]}</p><p className="text-sm text-ink-soft">{f.note[l]}</p></div><p className="font-display text-2xl font-semibold text-forest">{l === "bn" ? f.amount : f.enAmount}</p></div>))}</div></div>
        <div><h2 className="font-display text-2xl font-semibold text-forest">{p("প্রাপকের নম্বর (ডেমো)", "Recipient numbers (demo)")}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">{[["bKash", "#e2136e"], ["Nagad", "#f6921e"]].map(([n, c]) => (<div key={n} className="rounded-2xl p-6 text-white" style={{ background: c }}><p className="text-sm opacity-90">{n} · Personal</p><p className="mt-3 font-display text-2xl tracking-wide">01XXX-XXXXXX</p></div>))}</div>
          <div className="mt-5"><Notice tone="warn">{p("সতর্কতা: পিন, পাসওয়ার্ড বা ওটিপি কারও সঙ্গে শেয়ার করবেন না — আমরা কখনো তা চাইব না।", "Warning: never share your PIN, password or OTP — we will never ask for it.")}</Notice></div></div>
      </div><DemoNote l={l} /></Sec>
    </>); },
  },

  help: {
    eyebrow: ["সহায়তা", "Help"], title: ["নিবন্ধন ও পেমেন্ট সহায়তা", "Registration & payment help"], lead: ["সচরাচর জিজ্ঞাসিত প্রশ্নের উত্তর।", "Answers to common questions."], photo: "reading",
    render: (l) => (<Sec><div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-3xl bg-white ring-1 ring-line">
      {faqs.map((f) => (<details key={f.q.en} className="group p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-forest">{f.q[l]}<span aria-hidden className="text-2xl text-gold transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 text-ink-soft">{f.a[l]}</p></details>))}
    </div><div className="mt-10 text-center"><Btn href={`/${l}/contact`}>{pick(l)("আরও সাহায্য দরকার?", "Need more help?")}</Btn></div></Sec>),
  },

  privacy: {
    eyebrow: ["আইনি", "Legal"], title: ["গোপনীয়তা নীতি", "Privacy policy"], lead: ["খসড়া — সংগঠনের অনুমোদনের পর চূড়ান্ত হবে।", "Draft — final after the association's approval."],
    render: (l) => { const p = pick(l); return (<Sec><Legal items={[
      [p("কী তথ্য সংগ্রহ করি", "What we collect"), p("নাম, মোবাইল, ব্যাচ ও পেমেন্ট রেফারেন্স — শুধু রি-ইউনিয়ন পরিচালনার জন্য।", "Name, mobile, batch and payment reference — only to run the reunion.")],
      [p("প্রাক্তনী তালিকা", "The alumni directory"), p("আপনার সম্মতি ছাড়া কোনো তথ্য প্রকাশ হয় না। ফোন নম্বর কখনো দেখানো হয় না।", "Nothing is shown without consent. Phone numbers are never displayed.")],
      [p("পেমেন্টের গোপনীয়তা", "Payment safety"), p("আমরা পিন, পাসওয়ার্ড বা ওটিপি সংগ্রহ বা সংরক্ষণ করি না।", "We never collect or store PINs, passwords or OTPs.")],
      [p("আপনার অধিকার", "Your rights"), p("যেকোনো সময় আপনার তথ্য সংশোধন বা মুছে ফেলার অনুরোধ করতে পারেন।", "You may ask us to correct or delete your data at any time.")],
    ]} /></Sec>); },
  },

  terms: {
    eyebrow: ["আইনি", "Legal"], title: ["শর্তাবলি", "Terms & conditions"], lead: ["খসড়া — সংগঠনের অনুমোদনের পর চূড়ান্ত হবে।", "Draft — final after the association's approval."],
    render: (l) => { const p = pick(l); return (<Sec><Legal items={[
      [p("নিবন্ধন", "Registration"), p("প্রশাসকের পেমেন্ট অনুমোদনের পরই নিবন্ধন কার্যকর হয়।", "A registration is valid only after an administrator approves the payment.")],
      [p("টিকিট", "Tickets"), p("টিকিট হস্তান্তরযোগ্য নয়; প্রতিটি QR কোড একবারই ব্যবহার করা যাবে।", "Tickets are non-transferable; each QR code works once.")],
      [p("ফেরত নীতি", "Refunds"), p("ফেরত নীতি আয়োজকরা পরে নির্ধারণ করবেন।", "The refund policy will be set by the organisers.")],
      [p("আচরণবিধি", "Conduct"), p("সবার প্রতি শ্রদ্ধাশীল আচরণ প্রত্যাশিত।", "Respectful behaviour towards everyone is expected.")],
    ]} /></Sec>); },
  },

  credits: {
    eyebrow: ["স্বীকৃতি", "Credits"], title: ["ছবির কৃতিত্ব", "Photo credits"], lead: ["ডেমো ছবিগুলো উইকিমিডিয়া কমন্স থেকে, নিজ নিজ লাইসেন্সে।", "Demo photographs from Wikimedia Commons under their own licences."],
    render: (l) => (<Sec><p className="mb-8 max-w-2xl text-ink-soft">{pick(l)("এগুলো এই বিদ্যালয়ের নিজস্ব ছবি নয়; আলোকচিত্রীদের প্রতি কৃতজ্ঞতা। প্রকৃত ছবি পেলে প্রতিস্থাপিত হবে।", "These are not photographs of this school; our thanks to the photographers. They will be replaced with the association's own photos.")}</p>
      <ul className="grid gap-4 sm:grid-cols-2">{credits.map((c) => (<li key={c.file} className="flex gap-4 rounded-2xl bg-white p-4 ring-1 ring-line"><Photo name={c.file} locale={l} zoom={false} className="h-20 w-28 shrink-0 rounded-lg" sizes="120px" /><div className="min-w-0 text-sm"><p className="truncate font-medium text-forest">{c.title}</p><p className="text-ink-soft">© {c.artist} · {c.license}</p><a className="text-forest underline" href={c.url} target="_blank" rel="noreferrer">Wikimedia Commons</a></div></li>))}</ul></Sec>),
  },
};
