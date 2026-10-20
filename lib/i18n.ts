export const locales = ["bn", "en"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

/** p("বাংলা", "English") -> picks the string for the active locale */
export const pick =
  (l: Locale) =>
  (bn: string, en: string) =>
    l === "bn" ? bn : en;

export const ORG = {
  bn: "বোয়ালধার সরকারি প্রাথমিক বিদ্যালয় অ্যালামনাই অ্যাসোসিয়েশন",
  en: "Boaldhar Government Primary School Alumni Association",
  short: { bn: "বোয়ালধার অ্যালামনাই অ্যাসোসিয়েশন", en: "Boaldhar Alumni Association" },
};

export const fmtDate = (l: Locale, iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString(l === "bn" ? "bn-BD" : "en-GB", { day: "numeric", month: "long", year: "numeric" });

export const num = (l: Locale, n: number) => n.toLocaleString(l === "bn" ? "bn-BD" : "en-US");
