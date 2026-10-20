import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { PageHero } from "@/components/ui";
import { views } from "./views";

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(views).map((k) => ({ locale, slug: k.split("/") })));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/[...slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const v = views[slug.join("/")];
  if (!v || !isLocale(locale)) return {};
  const i = locale === "bn" ? 0 : 1;
  return { title: v.title[i], description: v.lead?.[i] };
}

export default async function Page({ params }: PageProps<"/[locale]/[...slug]">) {
  const { locale, slug } = await params;
  const v = views[slug.join("/")];
  if (!isLocale(locale) || !v) notFound();
  const i = locale === "bn" ? 0 : 1;
  return (
    <>
      <PageHero eyebrow={v.eyebrow[i]} title={v.title[i]} lead={v.lead?.[i]} photo={v.photo} locale={locale} />
      {v.render(locale)}
    </>
  );
}
