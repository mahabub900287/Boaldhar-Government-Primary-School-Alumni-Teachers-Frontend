import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Noto_Sans_Bengali, Source_Serif_4 } from "next/font/google";
import "../globals.css";
import { isLocale, locales, ORG } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const bn = Noto_Sans_Bengali({ subsets: ["bengali", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-bn", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: { default: `${ORG[locale]} — ${locale === "bn" ? "রি-ইউনিয়ন ২০২৭" : "Reunion 2027"}`, template: `%s | ${ORG.short[locale]}` },
    description:
      locale === "bn"
        ? "বোয়ালধার সরকারি প্রাথমিক বিদ্যালয়ের প্রাক্তন শিক্ষার্থীদের মিলনমেলা ও কমিউনিটি।"
        : "The community and reunion home of Boaldhar Government Primary School alumni.",
    alternates: { languages: { bn: "/bn", en: "/en" } },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} className={`${bn.variable} ${inter.variable} ${serif.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2">
          {locale === "bn" ? "মূল কনটেন্টে যান" : "Skip to content"}
        </a>
        <Header locale={locale} />
        <main id="main" className="flex-1">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
