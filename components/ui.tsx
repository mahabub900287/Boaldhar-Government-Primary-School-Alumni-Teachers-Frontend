import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { alt } from "@/lib/photos";
import type { Locale } from "@/lib/i18n";

/** Real photograph frame (demo photos from Wikimedia Commons — see /credits). */
export function Photo({ name, locale, className = "", priority = false, zoom = true, kenburns = false, sizes = "(min-width:1024px) 50vw, 100vw", pos = "center", quality = 90 }: { name: string; locale: Locale; className?: string; priority?: boolean; zoom?: boolean; kenburns?: boolean; sizes?: string; pos?: string; quality?: number }) {
  return (
    <div className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden bg-gold-soft ${zoom ? "zoom" : ""} ${className}`}>
      <Image src={`/photos/${name}.jpg`} alt={alt[name]?.[locale] ?? ""} fill priority={priority} quality={quality} sizes={sizes} className={`object-cover ${kenburns ? "kenburns" : ""}`} style={{ objectPosition: pos }} />
    </div>
  );
}

/** Labelled empty frame — only used where no photo is appropriate (e.g. a QR code). */
export function Placeholder({ label, className = "", tone = "green" }: { label: string; className?: string; tone?: "green" | "gold" }) {
  return (
    <div role="img" aria-label={label} className={`motif relative flex items-center justify-center overflow-hidden border border-line ${tone === "green" ? "bg-forest/10" : "bg-gold-soft"} ${className}`}>
      <span className="m-4 border border-dashed border-ink-soft/40 bg-white/70 px-3 py-1.5 text-center text-xs text-ink-soft">{label}</span>
    </div>
  );
}

export function Btn({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "gold" | "ghost" | "light"; className?: string }) {
  const v = {
    primary: "bg-forest text-white hover:bg-green-dark shadow-[0_8px_20px_-8px_rgba(20,40,75,.55)]",
    gold: "bg-gold text-green-dark hover:bg-[#d4b56a] shadow-[0_8px_20px_-8px_rgba(198,166,91,.9)]",
    ghost: "border border-forest/40 text-forest hover:border-forest hover:bg-forest hover:text-white",
    light: "border border-white/60 text-white hover:bg-white hover:text-forest",
  }[variant];
  return (
    <Link href={href} className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-all duration-300 hover:-translate-y-0.5 ${v} ${className}`}>
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 md:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] ${light ? "text-gold" : "text-gold-text"}`}>
      <span aria-hidden className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

export function SectionHead({ eyebrow, title, lead, light = false, center = false }: { eyebrow?: string; title: string; lead?: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center [&>p:first-child]:justify-center" : ""}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={`font-display mt-3 text-3xl font-semibold md:text-[2.5rem] md:leading-tight ${light ? "text-white" : "text-forest"}`}>{title}</h2>
      {lead && <p className={`mt-4 text-lg ${light ? "text-white/75" : "text-ink-soft"}`}>{lead}</p>}
    </div>
  );
}

/** Inner-page banner: full-bleed photo under a navy gradient, with breadcrumb. */
export function PageHero({ eyebrow, title, lead, photo, locale }: { eyebrow?: string; title: string; lead?: string; photo?: string; locale?: Locale }) {
  return (
    <section className="relative isolate overflow-hidden bg-green-dark text-white">
      {photo && locale && <Photo name={photo} locale={locale} zoom={false} kenburns priority sizes="100vw" className="absolute inset-0 -z-20" />}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-green-dark via-green-dark/80 to-green-dark/25" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gold/60" />
      <Container className="relative py-16 md:py-24">
        {locale && (
          <nav aria-label="Breadcrumb" className="anim-up mb-6 text-sm text-white/70">
            <Link href={`/${locale}`} className="hover:text-gold">{locale === "bn" ? "হোম" : "Home"}</Link>
            <span className="mx-2 text-gold">/</span>
            <span className="text-white/90">{title}</span>
          </nav>
        )}
        {eyebrow && <div className="anim-up"><Eyebrow light>{eyebrow}</Eyebrow></div>}
        <h1 className="anim-up font-display mt-3 max-w-3xl text-4xl font-semibold md:text-5xl" style={{ "--d": ".08s" } as React.CSSProperties}>{title}</h1>
        {lead && <p className="anim-up mt-5 max-w-xl text-lg text-white/80" style={{ "--d": ".16s" } as React.CSSProperties}>{lead}</p>}
      </Container>
    </section>
  );
}

export function Notice({ children, tone = "info" }: { children: ReactNode; tone?: "info" | "warn" }) {
  return (
    <div role="note" className={`rounded-lg border-l-4 p-4 text-[0.95rem] ${tone === "warn" ? "border-warn bg-gold-soft/60" : "border-gold bg-white"}`}>
      {children}
    </div>
  );
}

export function StatusBadge({ status, label }: { status: "pending" | "approved" | "rejected" | "awaiting" | "cancelled"; label: string }) {
  const c = {
    pending: "bg-gold-soft text-gold-text",
    approved: "bg-green/10 text-ok",
    rejected: "bg-err/10 text-err",
    awaiting: "bg-line text-ink-soft",
    cancelled: "bg-line text-ink-soft",
  }[status];
  return <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${c}`}>{label}</span>;
}

export function Field({ label, hint, children, id }: { label: string; hint?: string; children: ReactNode; id: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>
      {children}
      {hint && <p className="mt-1 text-xs text-ink-soft">{hint}</p>}
    </div>
  );
}

export const inputCls = "w-full rounded-lg border border-ink-soft/30 bg-white px-3.5 py-2.5 text-base transition-all placeholder:text-ink-soft/60 hover:border-ink-soft/60 focus:border-forest focus:shadow-[0_0_0_3px_rgba(31,111,84,.18)] user-invalid:border-err";

/** Small line icons, drawn inline (no icon font). */
export function Icon({ n, className = "h-6 w-6" }: { n: "book" | "users" | "heart" | "calendar" | "pin" | "ticket" | "cap" | "phone" | "mail" | "check" | "star" | "shield"; className?: string }) {
  const d: Record<string, string> = {
    book: "M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5zM20 5.5c0-.8-.7-1.5-1.5-1.5H13v15h5.5a1.500 1.500 0 0 0 1.500-1.500z",
    users: "M9 11a3.500 3.500 0 1 0 0-7 3.500 3.500 0 0 0 0 7zM2.500 20c0-3.300 2.900-5.500 6.500-5.500s6.500 2.200 6.500 5.500M16 4.500a3.500 3.500 0 0 1 0 6.600M18 14.800c2 .7 3.500 2.300 3.500 5.200",
    heart: "M12 20s-7.500-4.600-7.500-10A4.500 4.500 0 0 1 12 7a4.500 4.500 0 0 1 7.500 3c0 5.400-7.500 10-7.500 10z",
    calendar: "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM4 10h16M8 3v4M16 3v4",
    pin: "M12 21s-6.500-6-6.500-11a6.500 6.500 0 0 1 13 0c0 5-6.500 11-6.500 11zM12 12.500a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5z",
    ticket: "M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4zM14 6v12",
    cap: "M2 9l10-5 10 5-10 5zM6 11.500V16c0 1.500 2.700 3 6 3s6-1.500 6-3v-4.500",
    phone: "M6 3h3l1.500 4-2 1.500a11 11 0 0 0 6 6L16 12.500l4 1.500v3a2 2 0 0 1-2 2A15 15 0 0 1 4 5a2 2 0 0 1 2-2z",
    mail: "M3 6h18v12H3zM3 7l9 6.500L21 7",
    check: "M5 12.500l4.500 4.500L19 7.500",
    star: "M12 3.500l2.700 5.500 6 .9-4.400 4.200 1 6-5.300-2.800L6.700 20l1-6L3.300 9.900l6-.9z",
    shield: "M12 3l8 3v6c0 4.500-3.200 8-8 9-4.800-1-8-4.500-8-9V6z",
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d={d[n]} />
    </svg>
  );
}
