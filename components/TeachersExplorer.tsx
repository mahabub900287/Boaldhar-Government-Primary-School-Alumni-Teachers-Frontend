"use client";
import { useState } from "react";

export type TeacherCard = { name: string; role: string; years: string; subject: string; note: string; cat: "head" | "former" | "current" | "patron" };
type Tab = { key: "all" | TeacherCard["cat"]; label: string };

export function TeachersExplorer({ items, tabs, subjectLabel, digits = "en" }: { items: TeacherCard[]; tabs: Tab[]; subjectLabel: string; digits?: "bn" | "en" }) {
  const [tab, setTab] = useState<Tab["key"]>("all");
  const list = items.filter((t) => tab === "all" || t.cat === tab);
  const count = (k: Tab["key"]) => (k === "all" ? items.length : items.filter((t) => t.cat === k).length);

  return (
    <div>
      <div role="tablist" aria-label="Teachers" className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            type="button"
            aria-selected={tab === t.key}
            onClick={() => setTab(t.key)}
            className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-[0.95rem] font-semibold transition-all ${tab === t.key ? "bg-forest text-white shadow-md" : "bg-white text-ink-soft ring-1 ring-line hover:text-forest hover:ring-forest/40"}`}
          >
            {t.label}
            <span className={`rounded-full px-2 py-0.5 text-xs ${tab === t.key ? "bg-white/20 text-white" : "bg-gold-soft text-gold-text"}`}>{digits === "bn" ? count(t.key).toLocaleString("bn-BD", { useGrouping: false }) : count(t.key)}</span>
          </button>
        ))}
      </div>

      <ul role="tabpanel" className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((t) => (
          <li key={t.name} className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-xl">
            <div className="flex items-center gap-4">
              <span aria-hidden className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-forest to-green font-display text-2xl text-white ring-4 ring-gold-soft">{t.name.trim()[0]}</span>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-semibold leading-snug text-forest">{t.name}</h3>
                <p className="text-sm text-gold-text">{t.role}</p>
              </div>
            </div>
            <p className="mt-5 flex-1 border-l-2 border-gold pl-4 text-ink-soft">{t.note}</p>
            <dl className="mt-5 flex flex-wrap gap-2 text-xs">
              <div className="rounded-full bg-gold-soft px-3 py-1 text-gold-text"><dt className="sr-only">Years</dt><dd>{t.years}</dd></div>
              {t.subject !== "—" && <div className="rounded-full bg-ivory px-3 py-1 text-ink-soft ring-1 ring-line"><dt className="sr-only">{subjectLabel}</dt><dd>{t.subject}</dd></div>}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
