"use client";
import { useEffect, useId, useMemo, useRef, useState } from "react";

export type Option = { value: string; label: string; hint?: string };

/**
 * Accessible custom dropdown (select-only combobox pattern).
 * Works controlled (value + onChange) or uncontrolled (defaultValue). Submits through a hidden input when `name` is set.
 */
export function Select({
  id,
  name,
  options,
  value,
  defaultValue = "",
  onChange,
  placeholder = "—",
  required = false,
  className = "",
  searchable = false,
  searchPlaceholder = "Search…",
  emptyLabel = "No results",
}: {
  id: string;
  name?: string;
  options: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  emptyLabel?: string;
}) {
  const [inner, setInner] = useState(defaultValue);
  const val = value ?? inner;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [q, setQ] = useState("");
  const root = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const listId = useId();

  const shown = useMemo(() => (q ? options.filter((o) => o.label.toLowerCase().includes(q.toLowerCase())) : options), [options, q]);
  const current = options.find((o) => o.value === val);

  useEffect(() => {
    if (!open) return;
    const away = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", away);
    return () => document.removeEventListener("mousedown", away);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.getElementById(`${listId}-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [active, open, listId]);

  const pick = (v: string) => {
    setInner(v);
    onChange?.(v);
    setOpen(false);
    setQ("");
    btn.current?.focus();
  };

  const openList = () => {
    setActive(Math.max(0, shown.findIndex((o) => o.value === val)));
    setOpen(true);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(shown.length - 1, a + 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(0, a - 1)); }
    else if (e.key === "Home") { e.preventDefault(); setActive(0); }
    else if (e.key === "End") { e.preventDefault(); setActive(shown.length - 1); }
    else if (e.key === "Enter" || (e.key === " " && !searchable)) { e.preventDefault(); if (shown[active]) pick(shown[active].value); }
    else if (e.key === "Escape") { e.preventDefault(); setOpen(false); setQ(""); btn.current?.focus(); }
    else if (e.key === "Tab") setOpen(false);
    else if (!searchable && e.key.length === 1) {
      const i = shown.findIndex((o) => o.label.toLowerCase().startsWith(e.key.toLowerCase()));
      if (i >= 0) setActive(i);
    }
  };

  return (
    <div ref={root} className={`relative ${className}`} onKeyDown={onKey}>
      {name && <input type="hidden" name={name} value={val} />}
      <button
        ref={btn}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-required={required || undefined}
        onClick={() => (open ? setOpen(false) : openList())}
        className={`flex w-full items-center justify-between gap-3 rounded-lg border bg-white px-3.5 py-2.5 text-left text-base transition-all ${open ? "border-forest shadow-[0_0_0_3px_rgba(31,111,84,.18)]" : "border-ink-soft/30 hover:border-ink-soft/60"}`}
      >
        <span className={`truncate ${current ? "text-ink" : "text-ink-soft"}`}>{current?.label ?? placeholder}</span>
        <svg viewBox="0 0 20 20" aria-hidden className={`h-4 w-4 shrink-0 text-gold-text transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l5 5 5-5" /></svg>
      </button>

      {open && (
        <div className="anim-up absolute z-40 mt-2 w-full min-w-[12rem] overflow-hidden rounded-xl border border-line bg-white shadow-[0_24px_50px_-18px_rgba(10,24,48,.45)]" style={{ animationDuration: ".25s" }}>
          {searchable && (
            <div className="border-b border-line p-2">
              <input autoFocus value={q} onChange={(e) => { setQ(e.target.value); setActive(0); }} placeholder={searchPlaceholder} aria-label={searchPlaceholder} className="w-full rounded-lg bg-ivory px-3 py-2 text-sm outline-none placeholder:text-ink-soft" />
            </div>
          )}
          <ul id={listId} role="listbox" className="max-h-64 overflow-y-auto p-1.5">
            {shown.length === 0 && <li className="px-3 py-3 text-sm text-ink-soft">{emptyLabel}</li>}
            {shown.map((o, i) => {
              const sel = o.value === val;
              return (
                <li
                  key={o.value + i}
                  id={`${listId}-${i}`}
                  role="option"
                  aria-selected={sel}
                  onMouseEnter={() => setActive(i)}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => pick(o.value)}
                  className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[0.95rem] transition-colors ${i === active ? "bg-gold-soft/70" : ""} ${sel ? "font-semibold text-forest" : "text-ink"}`}
                >
                  <span className="min-w-0"><span className="block truncate">{o.label}</span>{o.hint && <span className="block text-xs font-normal text-ink-soft">{o.hint}</span>}</span>
                  {sel && <svg viewBox="0 0 20 20" aria-hidden className="h-4 w-4 shrink-0 text-green" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10.5l4 4 8-9" /></svg>}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
