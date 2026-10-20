"use client";
import { useState } from "react";
import { Select } from "./Select";

export type Person = { no: number; name: string; role: string; org?: string; group: string; groupLabel: string; convener?: boolean; unconfirmed?: boolean };
type Labels = { search: string; group: string; sort: string; all: string; results: string; none: string; reset: string; byGroup: string; byName: string; convener: string; confirm: string };

const initial = (n: string) => n.replace(/^((Dr\.|Engr\.|Md\.|ডা\.|ইঞ্জি\.|মোঃ)\s*)+/i, "").trim()[0] ?? "?";

export function DirectoryExplorer({ people, groups, labels, digits }: { people: Person[]; groups: { value: string; label: string }[]; labels: Labels; digits: "bn" | "en" }) {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState("");
  const [sort, setSort] = useState("group");
  const nf = (n: number) => (digits === "bn" ? n.toLocaleString("bn-BD", { useGrouping: false }) : String(n));

  const list = people
    .filter((p) => (!group || p.group === group) && (!q || (p.name + p.role + (p.org ?? "")).toLowerCase().includes(q.toLowerCase())))
    .sort((a, b) => (sort === "name" ? a.name.localeCompare(b.name, digits) : a.no - b.no));
  const dirty = q || group;
  const grouped = sort === "group" && !group;

  const card = (p: Person) => (
    <li key={p.no} className={`group relative flex items-center gap-4 rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl ${p.convener ? "border-gold/60 ring-1 ring-gold/30 sm:col-span-2 lg:col-span-3" : "border-line"} ${p.unconfirmed ? "opacity-80" : ""}`}>
      <span aria-hidden className={`grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-forest to-green font-display text-white ring-4 ring-gold-soft ${p.convener ? "h-16 w-16 text-2xl" : "h-14 w-14 text-xl"}`}>{initial(p.name)}</span>
      <span className="min-w-0 flex-1">
        <span className={`font-display block font-semibold leading-snug text-forest ${p.convener ? "text-2xl" : "truncate text-lg"}`}>{p.name}</span>
        <span className={`block text-sm ${p.unconfirmed ? "italic text-ink-soft" : "text-ink-soft"}`}>{p.role}</span>
        {p.org && <span className="block text-sm text-forest/80">{p.org}</span>}
        <span className="mt-2 flex flex-wrap gap-1.5 text-xs">
          <span className="rounded-full bg-gold-soft px-2.5 py-0.5 text-gold-text">{p.groupLabel}</span>
          {p.convener && <span className="rounded-full bg-forest px-2.5 py-0.5 font-semibold text-gold">{labels.convener}</span>}
          {p.unconfirmed && <span className="rounded-full bg-ivory px-2.5 py-0.5 text-ink-soft ring-1 ring-line">{labels.confirm}</span>}
        </span>
      </span>
      <span aria-hidden className="num font-display text-3xl text-line transition-colors group-hover:text-gold/50">{nf(p.no)}</span>
    </li>
  );

  return (
    <div>
      <form role="search" onSubmit={(e) => e.preventDefault()} className="relative z-10 rounded-3xl border border-line bg-white p-5 shadow-[0_20px_50px_-30px_rgba(10,24,48,.35)] md:p-6">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-5">
            <label htmlFor="dq" className="mb-1.5 block text-sm font-semibold">{labels.search}</label>
            <div className="relative">
              <svg viewBox="0 0 24 24" aria-hidden className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
              <input id="dq" value={q} onChange={(e) => setQ(e.target.value)} className="w-full rounded-lg border border-ink-soft/30 bg-white py-2.5 pl-11 pr-3 text-base transition-shadow focus:border-forest focus:shadow-[0_0_0_3px_rgba(31,111,84,.18)]" />
            </div>
          </div>
          <div className="md:col-span-4"><label htmlFor="dg" className="mb-1.5 block text-sm font-semibold">{labels.group}</label><Select id="dg" options={[{ value: "", label: labels.all }, ...groups]} value={group} onChange={setGroup} /></div>
          <div className="md:col-span-3"><label htmlFor="ds" className="mb-1.5 block text-sm font-semibold">{labels.sort}</label><Select id="ds" options={[{ value: "group", label: labels.byGroup }, { value: "name", label: labels.byName }]} value={sort} onChange={setSort} /></div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <p className="text-ink-soft" aria-live="polite"><b className="text-forest">{nf(list.length)}</b> {labels.results}</p>
          {dirty ? <button type="button" onClick={() => { setQ(""); setGroup(""); }} className="font-semibold text-forest underline underline-offset-4 hover:text-green">{labels.reset}</button> : null}
        </div>
      </form>

      {list.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-dashed border-ink-soft/40 bg-white p-10 text-center text-ink-soft">{labels.none}</p>
      ) : grouped ? (
        <div className="mt-10 space-y-12">
          {groups.map((g) => {
            const items = list.filter((p) => p.group === g.value);
            if (!items.length) return null;
            return (
              <section key={g.value} aria-label={g.label}>
                <h3 className="font-display mb-5 flex items-center gap-4 text-2xl font-semibold text-forest"><span aria-hidden className="h-px w-8 bg-gold" />{g.label}<span className="rounded-full bg-gold-soft px-3 py-0.5 text-sm font-medium text-gold-text">{nf(items.length)}</span></h3>
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map(card)}</ul>
              </section>
            );
          })}
        </div>
      ) : (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map(card)}</ul>
      )}
    </div>
  );
}
