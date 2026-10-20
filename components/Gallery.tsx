"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type GalleryItem = { file: string; alt: string; caption: string; credit: string; ratio: "tall" | "wide" | "sq" };

export function Gallery({ items, closeLabel, nextLabel, prevLabel }: { items: GalleryItem[]; closeLabel: string; nextLabel: string; prevLabel: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const go = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go]);

  const span = { tall: "row-span-2 aspect-[3/4]", wide: "md:col-span-2 aspect-[16/10]", sq: "aspect-square" } as const;
  const cur = open === null ? null : items[open];

  return (
    <>
      <ul className="grid grid-flow-dense grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((it, i) => (
          <li key={it.file} className={span[it.ratio]}>
            <button type="button" onClick={() => setOpen(i)} className="zoom group relative block h-full w-full overflow-hidden bg-gold-soft text-left" aria-label={it.caption}>
              <Image src={`/photos/${it.file}.jpg`} alt={it.alt} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" />
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-3 text-sm text-white transition-transform duration-500 group-hover:translate-y-0 group-focus-visible:translate-y-0">{it.caption}</span>
            </button>
          </li>
        ))}
      </ul>
      {cur && (
        <div role="dialog" aria-modal="true" aria-label={cur.caption} className="anim-in fixed inset-0 z-50 flex flex-col bg-black/90 p-4 md:p-10" onClick={() => setOpen(null)}>
          <div className="flex justify-end">
            <button type="button" onClick={() => setOpen(null)} className="rounded border border-white/40 px-4 py-2 text-white hover:bg-white/10" autoFocus>✕ {closeLabel}</button>
          </div>
          <div className="relative my-4 min-h-0 flex-1" onClick={(e) => e.stopPropagation()}>
            <Image src={`/photos/${cur.file}.jpg`} alt={cur.alt} fill sizes="100vw" className="object-contain" />
          </div>
          <div className="flex items-center justify-between gap-4 text-white" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => go(-1)} className="rounded border border-white/40 px-4 py-2 hover:bg-white/10">← {prevLabel}</button>
            <p className="text-center text-sm">{cur.caption}<span className="block text-xs text-white/60">{cur.credit}</span></p>
            <button type="button" onClick={() => go(1)} className="rounded border border-white/40 px-4 py-2 hover:bg-white/10">{nextLabel} →</button>
          </div>
        </div>
      )}
    </>
  );
}
