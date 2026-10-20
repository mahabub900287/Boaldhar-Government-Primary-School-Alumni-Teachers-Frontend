import Link from "next/link";
import { navGroups } from "@/lib/nav";
import { pick, type Locale } from "@/lib/i18n";
import { LangSwitch } from "./LangSwitch";
import { Crest } from "./Crest";
import { Icon } from "./ui";

const Chevron = () => (
  <svg viewBox="0 0 20 20" aria-hidden className="h-3.5 w-3.5 transition-transform duration-300 group-hover/nav:rotate-180 group-focus-within/nav:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5" /></svg>
);

export function Header({ locale }: { locale: Locale }) {
  const p = pick(locale);
  return (
    <>
      <div className="bg-forest text-[0.8rem] text-white/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-1.5 md:px-8">
          <p className="flex items-center gap-2">
            <Icon n="calendar" className="h-3.5 w-3.5 text-gold" />
            <span><strong className="text-gold">{p("রি-ইউনিয়ন ২০২৭", "Reunion 2027")}</strong> · {p("তারিখ শীঘ্রই ঘোষণা করা হবে", "Date to be announced")}</span>
          </p>
          <div className="hidden items-center gap-5 sm:flex">
            <Link href={`/${locale}/status`} className="hover:text-gold">{p("নিবন্ধনের অবস্থা", "Registration status")}</Link>
            <Link href={`/${locale}/member/login`} className="hover:text-gold">{p("সদস্য লগইন", "Member login")}</Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-[60] border-b border-line bg-white shadow-[0_1px_0_rgba(20,40,75,.04)]">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-2 md:px-8">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Crest className="h-14 w-14 shrink-0 drop-shadow-md transition-transform duration-500 hover:rotate-6" priority />
            <span className="leading-tight">
              <span className="font-display block text-[1.05rem] font-semibold text-forest sm:hidden">{p("বোয়ালধার অ্যালামনাই", "Boaldhar Alumni")}</span>
              <span className="font-display hidden max-w-[17rem] text-[1.02rem] font-semibold leading-snug text-forest sm:block">{p("বোয়ালধার সরকারি প্রাথমিক বিদ্যালয় অ্যালামনাই অ্যাসোসিয়েশন", "Boaldhar Government Primary School Alumni Association")}</span>
            </span>
          </Link>

          {/* desktop nav with dropdowns */}
          <nav aria-label={p("প্রধান মেনু", "Main")} className="ml-auto hidden items-center gap-1 xl:flex">
            {navGroups.map((g) =>
              g.items ? (
                <div key={g.key} className="group/nav relative">
                  <button type="button" className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-[0.95rem] font-medium text-ink transition-colors hover:text-forest focus-visible:text-forest" aria-haspopup="true">
                    {p(g.bn, g.en)}
                    <Chevron />
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-[0_30px_60px_-20px_rgba(10,24,48,.4)]">
                      <span aria-hidden className="absolute left-1/2 top-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-line bg-white" />
                      {g.items.map((it) => (
                        <Link key={it.href} href={`/${locale}/${it.href}`} className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-gold-soft/60 focus-visible:bg-gold-soft/60">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold transition-transform group-hover/item:scale-150" />
                          <span><span className="block font-semibold text-forest">{p(it.bn, it.en)}</span><span className="block text-xs text-ink-soft">{p(it.dbn ?? "", it.den ?? "")}</span></span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={g.key} href={`/${locale}/${g.href}`} className="rounded-lg px-3 py-2 text-[0.95rem] font-medium text-ink transition-colors hover:text-forest">{p(g.bn, g.en)}</Link>
              ),
            )}
          </nav>

          <div className="ml-auto flex items-center gap-3 xl:ml-2">
            <LangSwitch locale={locale} />
            <Link href={`/${locale}/reunion-2027/register`} className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(20,40,75,.55)] transition-all hover:-translate-y-0.5 hover:bg-green-dark md:inline-flex">
              <Icon n="ticket" className="h-4 w-4" />
              {p("নিবন্ধন", "Register")}
            </Link>

            {/* mobile menu */}
            <details className="group relative xl:hidden">
              <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full border border-line bg-white" aria-label={p("মেনু", "Menu")}>
                <span aria-hidden className="space-y-1.5">
                  <span className="block h-0.5 w-5 bg-forest transition-transform group-open:translate-y-2 group-open:rotate-45" />
                  <span className="block h-0.5 w-5 bg-forest transition-opacity group-open:opacity-0" />
                  <span className="block h-0.5 w-5 bg-forest transition-transform group-open:-translate-y-2 group-open:-rotate-45" />
                </span>
              </summary>
              <div className="anim-in absolute right-0 mt-3 max-h-[75vh] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto rounded-2xl border border-line bg-white p-2 shadow-2xl">
                {navGroups.map((g) =>
                  g.items ? (
                    <details key={g.key} className="group/acc rounded-xl open:bg-ivory">
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 font-semibold text-forest hover:bg-ivory">
                        {p(g.bn, g.en)}
                        <svg viewBox="0 0 20 20" aria-hidden className="h-4 w-4 text-gold-text transition-transform group-open/acc:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5" /></svg>
                      </summary>
                      <div className="pb-2 pl-4">
                        {g.items.map((it) => (
                          <Link key={it.href} href={`/${locale}/${it.href}`} className="block rounded-lg px-4 py-2.5 text-ink hover:bg-white">{p(it.bn, it.en)}</Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link key={g.key} href={`/${locale}/${g.href}`} className="block rounded-xl px-4 py-3 font-semibold text-forest hover:bg-ivory">{p(g.bn, g.en)}</Link>
                  ),
                )}
                <Link href={`/${locale}/reunion-2027/register`} className="mt-2 block rounded-xl bg-forest px-4 py-3 text-center font-semibold text-white">{p("নিবন্ধন করুন", "Register")}</Link>
                <Link href={`/${locale}/member/login`} className="block rounded-xl px-4 py-3 text-center text-ink-soft hover:bg-ivory">{p("সদস্য লগইন", "Member login")}</Link>
              </div>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
