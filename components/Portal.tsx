import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "./ui";

export type PortalLink = { href: string; label: string };

export function PortalShell({ title, links, current, children }: { title: string; links: PortalLink[]; current: string; children: ReactNode }) {
  return (
    <Container className="grid gap-8 py-10 md:grid-cols-12">
      <nav aria-label={title} className="md:col-span-3">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-text">{title}</p>
        <ul className="flex gap-1 overflow-x-auto md:flex-col">
          {links.map((l) => (
            <li key={l.href} className="shrink-0">
              <Link href={l.href} aria-current={l.href === current ? "page" : undefined}
                className={`block whitespace-nowrap rounded-xl px-4 py-2.5 text-[0.95rem] transition-colors ${l.href === current ? "bg-forest font-semibold text-white shadow-md" : "text-ink-soft hover:bg-white"}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="md:col-span-9">{children}</div>
    </Container>
  );
}

export function SampleBanner({ text }: { text: string }) {
  return <p className="mb-5 rounded-lg border border-dashed border-warn bg-gold-soft/60 px-3 py-2 text-xs text-gold-text">{text}</p>;
}
