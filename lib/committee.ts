/** REAL proposed convening committee supplied by the association — a PROPOSAL, final list to be set by consensus. */
export type Bi = { bn: string; en: string };
const b = (bn: string, en: string): Bi => ({ bn, en });

export const chief = { name: b("সিদ্দিকুর রহমান লিটন", "Siddiqur Rahman Liton"), role: b("প্রধান আহ্বায়ক", "Chief Convener"), detail: b("সহযোগী অধ্যাপক, বেগম রোকেয়া সরকারি কলেজ, রংপুর", "Associate Professor, Begum Rokeya Government College, Rangpur") };

export const conveners = [
  { name: b("ডা. রবিউল আলম", "Dr. Robiul Alam"), role: b("আহ্বায়ক", "Convener"), detail: b("চিকিৎসক", "Physician") },
  { name: b("সাহাজাহান আলী", "Sahajahan Ali"), role: b("আহ্বায়ক", "Convener"), detail: b("অধ্যাপক, কুড়িগ্রাম পলিটেকনিক ইনস্টিটিউট", "Professor, Kurigram Polytechnic Institute") },
  { name: b("ইলিয়াস হোসেন", "Eliash Hossian"), role: b("আহ্বায়ক", "Convener"), detail: b("তহশিলদার", "Tahsildar (land officer)") },
];

const m = (bn: string, en: string) => b(bn, en);
export const members: Bi[] = [
  m("আনোয়ার হোসেন", "Anawar Hossain"),
  m("তেনজামুল ইসলাম", "Tenjamul Islam"),
  m("শাহাদাত হোসেন", "Sahadad Hossain"),
  m("আমিনুন ইসলাম", "Aminun Islam"),
  m("হারুন অর রশিদ", "Harun Or Rosid"),
  m("ইঞ্জি. রাফুর ইসলাম", "Engr. Rafur Islam"),
  m("মাহাবুব আলম", "Mahabub Alam"),
  m("তরিকুল ইসলাম", "Tarikul Islam"),
  m("মোস্তাফিজুর রহমান", "Mostafijur Rahaman"),
  m("আসাদুজ্জামান", "Asaduzzaman"),
  m("আসাদুজ্জামান ফরিদ", "Asaduzzaman Farid"),
  m("ফিরোজ হোসেন", "Firoz Hossian"),
  m("সাকিলুর রহমান সুজন", "Sakilur Rahman Suzan"),
  m("জিল্লুর রহমান", "Jillur Rahaman"),
  m("শাহানাজ হোসেন", "Sahanaz Hossain"),
  m("রিপন ইসলাম", "Ripon Islam"),
  m("হাবিবুর রহমান", "Habibur Rhaman"),
  m("কামরুজ্জামান", "Kamruzzaman"),
  m("এমদাদুল ইসলাম", "Emdadul Islam"),
  m("দেলোয়ার হোসেন", "Delower Hossain"),
  m("সোহাগ হোসেন", "Sohag Hossain"),
  m("ফরিদ ইসলাম", "Farid Islam"),
  m("তৌহিদুর ইসলাম", "Touhidur Islam"),
  m("শামীম হোসেন", "Shamim Hossain"),
  m("মিলন হোসেন", "Milon Hossain"),
];

export const duties = [
  { icon: "calendar" as const, t: b("অনুষ্ঠানের পরিকল্পনা", "Event planning") },
  { icon: "users" as const, t: b("প্রাক্তন শিক্ষার্থীদের সঙ্গে যোগাযোগ", "Reaching out to alumni") },
  { icon: "mail" as const, t: b("আমন্ত্রণ", "Invitations") },
  { icon: "ticket" as const, t: b("নিবন্ধন", "Registration") },
  { icon: "star" as const, t: b("প্রচার-প্রচারণা", "Publicity") },
  { icon: "shield" as const, t: b("অর্থ ব্যবস্থাপনা", "Financial management") },
  { icon: "check" as const, t: b("অন্যান্য প্রয়োজনীয় কার্যক্রম", "Other necessary work") },
];

export const text = {
  proposed: b("প্রস্তাবিত আহ্বায়ক কমিটি", "Proposed convening committee"),
  forEvent: b("পুনর্মিলনী ২০২৭ উপলক্ষে", "For Reunion 2027"),
  dutiesIntro: b(
    "প্রস্তাবিত এই আহ্বায়ক কমিটি পুনর্মিলনী অনুষ্ঠান সফলভাবে আয়োজনের লক্ষ্যে কাজ করবে। অনুষ্ঠানের পরিকল্পনা, প্রাক্তন শিক্ষার্থীদের সঙ্গে যোগাযোগ, আমন্ত্রণ, নিবন্ধন, প্রচার-প্রচারণা, অর্থ ব্যবস্থাপনা এবং অন্যান্য প্রয়োজনীয় কার্যক্রম পরিচালনার জন্য কমিটির সদস্যদের মধ্যে দায়িত্ব ও কাজের বণ্টন পরবর্তী সময়ে আলোচনা ও সবার সম্মতিক্রমে নির্ধারণ করা হবে।",
    "This proposed convening committee will work to organise the reunion successfully. Responsibilities for event planning, contacting alumni, invitations, registration, publicity, financial management and other necessary work will be divided among the members later, through discussion and with everyone's consent.",
  ),
  note: b(
    "বিশেষ দ্রষ্টব্য: এটি একটি প্রস্তাবিত আহ্বায়ক কমিটি। সংশ্লিষ্ট সবার আলোচনা ও সম্মতির ভিত্তিতে কমিটির চূড়ান্ত তালিকা এবং দায়িত্ব বণ্টন নির্ধারণ করা হবে।",
    "Special note: this is a proposed convening committee. The final list and the division of responsibilities will be set through discussion and with the consent of everyone concerned.",
  ),
};

const key = (n: string) => n.replace(/^(Dr\.|Engr\.|ডা\.|ইঞ্জি\.)\s*/i, "").trim();
const sortBi = <T extends { name: Bi }>(arr: T[], l: "bn" | "en") => {
  const col = new Intl.Collator(l === "bn" ? "bn" : "en");
  return [...arr].sort((a, b) => col.compare(key(a.name[l]), key(b.name[l])));
};
/** Alphabetical, per language. */
export const sortedConveners = (l: "bn" | "en") => sortBi(conveners, l);
export const sortedMembers = (l: "bn" | "en") => {
  const col = new Intl.Collator(l === "bn" ? "bn" : "en");
  return [...members].sort((a, b) => col.compare(key(a[l]), key(b[l])));
};
