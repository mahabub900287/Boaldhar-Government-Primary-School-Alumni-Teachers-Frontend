"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export function LangSwitch({ locale }: { locale: Locale }) {
  const path = usePathname() || `/${locale}`;
  const rest = path.replace(/^\/(bn|en)/, "");
  return (
    <div role="group" aria-label="Language" className="flex rounded-full border border-line bg-white p-0.5 text-sm shadow-sm">
      {(["bn", "en"] as const).map((l) => (
        <Link
          key={l}
          href={`/${l}${rest}`}
          hrefLang={l}
          lang={l}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded-full px-3 py-1 transition-colors ${l === locale ? "bg-forest font-semibold text-white" : "text-ink-soft hover:text-forest"}`}
        >
          {l === "bn" ? "বাংলা" : "EN"}
        </Link>
      ))}
    </div>
  );
}
