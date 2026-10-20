type Item = { href: string; bn: string; en: string; dbn?: string; den?: string };
export type NavGroup = { key: string; bn: string; en: string; href?: string; items?: Item[] };

export const navGroups: NavGroup[] = [
  {
    key: "school", bn: "বিদ্যালয়", en: "School",
    items: [
      { href: "about", bn: "আমাদের কথা", en: "About us", dbn: "বিদ্যালয় ও সংগঠনের পরিচয়", den: "The school and the association" },
      { href: "teachers", bn: "শিক্ষকবৃন্দ", en: "Teachers", dbn: "শিক্ষক, প্রধান শিক্ষক ও পৃষ্ঠপোষক", den: "Teachers, head teachers & patrons" },
      { href: "committee", bn: "আহ্বায়ক কমিটি", en: "Convening committee", dbn: "পুনর্মিলনীর প্রস্তাবিত কমিটি", den: "The proposed reunion committee" },
    ],
  },
  {
    key: "alumni", bn: "প্রাক্তনী", en: "Alumni",
    items: [
      { href: "directory", bn: "প্রাক্তনী তালিকা", en: "Alumni directory", dbn: "নাম, ব্যাচ, পেশা ও শহর দিয়ে খুঁজুন", den: "Search by name, batch, profession, city" },
      { href: "batches", bn: "ব্যাচসমূহ", en: "Batches", dbn: "ব্যাচভিত্তিক সদস্য ও প্রতিনিধি", den: "Members and representatives by batch" },
    ],
  },
  {
    key: "reunion", bn: "রি-ইউনিয়ন ২০২৭", en: "Reunion 2027",
    items: [
      { href: "reunion-2027", bn: "অনুষ্ঠান পরিচিতি", en: "Overview", dbn: "তারিখ, স্থান ও ফি", den: "Date, venue and fees" },
      { href: "reunion-2027/schedule", bn: "অনুষ্ঠানসূচি", en: "Schedule", dbn: "প্রস্তাবিত দিনের সূচি", den: "The proposed day plan" },
      { href: "reunion-2027/register", bn: "নিবন্ধন", en: "Register", dbn: "ছয় ধাপে আসন নিশ্চিত করুন", den: "Secure your seat in six steps" },
      { href: "reunion-2027/payment", bn: "পেমেন্ট নির্দেশনা", en: "Payment guide", dbn: "বিকাশ / নগদে ফি জমা", den: "Paying by bKash / Nagad" },
      { href: "status", bn: "নিবন্ধনের অবস্থা", en: "Check status", dbn: "রেফারেন্স দিয়ে দেখুন", den: "Look up with your reference" },
    ],
  },
  {
    key: "community", bn: "কমিউনিটি", en: "Community",
    items: [
      { href: "gallery", bn: "স্মৃতিচিত্র", en: "Memories", dbn: "ছবির অ্যালবাম", den: "The photo album" },
      { href: "news", bn: "নোটিশ ও সংবাদ", en: "News & notices", dbn: "সংগঠনের ঘোষণা", den: "Announcements" },
      { href: "community", bn: "কমিউনিটি কার্যক্রম", en: "Activities", dbn: "উৎসব, খেলা ও সেবা", den: "Festivals, sport and service" },
      { href: "scholarships", bn: "বৃত্তি ও উদ্যোগ", en: "Scholarships", dbn: "শিক্ষা সহায়তা কর্মসূচি", den: "Education-support programmes" },
    ],
  },
  { key: "contact", bn: "যোগাযোগ", en: "Contact", href: "contact" },
];
