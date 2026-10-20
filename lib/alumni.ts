/** REAL alumni list supplied by the association (40 people, 9 groups). Bengali spellings of Latin names can be added when supplied. */
export type Bi = { bn: string; en: string };
const b = (bn: string, en: string): Bi => ({ bn, en });

export const GROUPS = [
  { key: "medical", icon: "heart" as const, t: b("চিকিৎসা পেশায়", "In medicine") },
  { key: "education", icon: "book" as const, t: b("শিক্ষা ও শিক্ষকতা পেশায়", "In education & teaching") },
  { key: "tech", icon: "cap" as const, t: b("প্রকৌশল ও তথ্যপ্রযুক্তি পেশায়", "In engineering & IT") },
  { key: "jobs", icon: "shield" as const, t: b("সরকারি ও বেসরকারি চাকরিতে", "In public & private service") },
  { key: "business", icon: "ticket" as const, t: b("ব্যবসা ও উদ্যোক্তা", "In business & enterprise") },
  { key: "agri", icon: "pin" as const, t: b("কৃষি ও কৃষি উদ্যোক্তা", "In agriculture") },
  { key: "abroad", icon: "users" as const, t: b("প্রবাসে কর্মরত", "Working abroad") },
  { key: "study", icon: "star" as const, t: b("উচ্চশিক্ষা সম্পন্নকারী ও অধ্যয়নরত", "Completed or pursuing higher education") },
  { key: "others", icon: "calendar" as const, t: b("অন্যান্য সম্মানিত প্রাক্তন শিক্ষার্থী", "Other honoured alumni") },
] as const;
export type GroupKey = (typeof GROUPS)[number]["key"];

export type Alumnus = { no: number; name: Bi; role: Bi; org?: Bi; group: GroupKey; convener?: boolean; top?: boolean; unconfirmed?: boolean };

const TBC = b("পেশার বিস্তারিত নিশ্চিত করা প্রয়োজন", "Profession to be confirmed");

const raw: Alumnus[] = [
  // ১. চিকিৎসা
  { no: 1, name: b("ডা. রবিউল আলম", "Dr. Robiul Alam"), role: b("চিকিৎসক", "Physician"), group: "medical", top: true },
  { no: 2, name: b("ডা. রেজাউল করিম", "Dr. Rejaul Korim"), role: b("চিকিৎসক", "Physician"), group: "medical" },
  { no: 3, name: b("ডা. রিতা আক্তার", "Dr. Rita Akter"), role: b("চিকিৎসক", "Physician"), group: "medical" },
  // ২. শিক্ষা
  { no: 4, name: b("সিদ্দিকুর রহমান লিটন", "Siddiqur Rahman Liton"), role: b("সহযোগী অধ্যাপক", "Associate Professor"), org: b("বেগম রোকেয়া সরকারি কলেজ, রংপুর", "Begum Rokeya Government College, Rangpur"), group: "education", convener: true },
  { no: 5, name: b("আহম্মদ আলী", "Ahamoad Ali"), role: b("অধ্যাপক", "Professor"), group: "education" },
  { no: 6, name: b("আনোয়ার হোসেন", "Anawar Hossain"), role: b("শিক্ষক", "Teacher"), group: "education" },
  { no: 7, name: b("তেনজামুল ইসলাম", "Tenjamul Islam"), role: b("শিক্ষক", "Teacher"), group: "education" },
  { no: 8, name: b("শাহাদাত হোসেন", "Sahadad Hossain"), role: b("শিক্ষক", "Teacher"), group: "education" },
  { no: 9, name: b("আমিনুন ইসলাম", "Aminun Islam"), role: b("শিক্ষক", "Teacher"), group: "education" },
  { no: 10, name: b("সাহাজাহান আলী", "Sahajahan Ali"), role: b("অধ্যাপক", "Professor"), org: b("কুড়িগ্রাম পলিটেকনিক ইনস্টিটিউট", "Kurigram Polytechnic Institute"), group: "education" },
  { no: 11, name: b("হারুন অর রশিদ", "Harun Or Rosid"), role: b("জুনিয়র ইনস্ট্রাক্টর", "Junior Instructor"), org: b("দিনাজপুর পলিটেকনিক ইনস্টিটিউট", "Dinajpur Polytechnic Institute"), group: "education" },
  // ৩. প্রকৌশল ও আইটি
  { no: 12, name: b("ইঞ্জি. রাফুর ইসলাম", "Engr. Rafur Islam"), role: b("প্রকৌশলী", "Engineer"), group: "tech", top: true },
  { no: 13, name: b("আসাদুজ্জামান", "Asaduzzaman"), role: b("নেটওয়ার্ক প্রকৌশলী", "Network Engineer"), group: "tech" },
  { no: 14, name: b("শামীম হোসেন", "Shamin Hossain"), role: b("সফটওয়্যার প্রকৌশলী", "Software Engineer"), group: "tech" },
  { no: 15, name: b("মাহাবুব আলম", "Mahabub Alam"), role: b("সফটওয়্যার প্রকৌশলী", "Software Engineer"), group: "tech" },
  // ৪. চাকরি
  { no: 16, name: b("ইলিয়াস হোসেন", "Eliash Hossian"), role: b("তহশিলদার", "Tahsildar (land officer)"), group: "jobs" },
  { no: 17, name: b("তরিকুল ইসলাম", "Torikul Islam"), role: b("সরকারি চাকরিজীবী", "Government employee"), group: "jobs" },
  { no: 18, name: b("মোস্তাফিজুর রহমান", "Mostafijur Rahaman"), role: b("সরকারি চাকরিজীবী", "Government employee"), group: "jobs" },
  { no: 19, name: b("আসাদুজ্জামান", "Asaduzzaman"), role: b("পুলিশ সাব-ইন্সপেক্টর (SI)", "Police Sub-Inspector (SI)"), group: "jobs" },
  { no: 20, name: b("আসাদুজ্জামান ফরিদ", "Asaduzzaman Farid"), role: b("বেসরকারি চাকরিজীবী", "Private-sector employee"), group: "jobs" },
  { no: 21, name: b("ইয়াসিন আলী", "Yeasin Ali"), role: b("সরকারি চাকরিজীবী", "Government employee"), group: "jobs" },
  { no: 22, name: b("ইয়াসিন আলী (আমিন)", "Yeasin Ali (Amin)"), role: b("ভূমি জরিপকারী (আমিন)", "Land surveyor (Amin)"), group: "business" },
  { no: 23, name: b("ফিরোজ হোসেন", "Firoz Hossian"), role: b("ব্যাংকার", "Banker"), group: "jobs" },
  { no: 24, name: b("নাজমুল ইসলাম", "Namzmul Islam"), role: b("ব্যাংকার", "Banker"), group: "jobs" },
  { no: 0, name: b("মিলন হোসেন", "Milon Hossain"), role: b("সরকারি চাকরিজীবী", "Government employee"), group: "jobs" },
  { no: 25, name: b("সাকিলুর রহমান সুজন", "Sakilur Rahman Suzan"), role: b("কর্মরত", "Employed"), org: b("ব্র্যাক ব্যাংক", "BRAC Bank"), group: "jobs" },
  { no: 26, name: b("জিল্লুর রহমান", "Jillur Rahaman"), role: b("কর্মরত", "Serving"), org: b("বাংলাদেশ সেনাবাহিনী", "Bangladesh Army"), group: "jobs" },
  // ৫. ব্যবসা
  { no: 27, name: b("শাহানাজ হোসেন", "Sahanaz Hossain"), role: b("ব্যবসায়ী", "Businessperson"), group: "business" },
  { no: 28, name: b("রিপন ইসলাম", "Ripon Islam"), role: b("ব্যবসায়ী", "Businessperson"), group: "business" },
  { no: 29, name: b("হাবিবুর রহমান", "Habibur Rhaman"), role: b("ব্যবসায়ী", "Businessperson"), group: "business" },
  { no: 30, name: b("কামরুজ্জামান", "Kamruzzaman"), role: b("বৃহৎ কৃষি খামারের উদ্যোক্তা", "Large-scale agro-farm entrepreneur"), group: "business" },
  // ৬. কৃষি
  { no: 31, name: b("ইসমাইল হোসেন", "Ismail Hossain"), role: b("কৃষি উদ্যোক্তা", "Agri-entrepreneur"), group: "agri" },
  { no: 32, name: b("রবিউল আলম", "Robiul Alam"), role: b("কৃষক", "Farmer"), group: "agri" },
  { no: 33, name: b("বাবুল হোসেন", "Babul Hossain"), role: b("কৃষক", "Farmer"), group: "agri" },
  // ৭. প্রবাস
  { no: 34, name: b("হায়দার আলী", "Haidar Ali"), role: b("প্রবাসী", "Expatriate"), group: "abroad" },
  // ৮. উচ্চশিক্ষা
  { no: 35, name: b("মোঃ ইমদাদুল হক", "Md. Imdadul Haque"), role: b("শিক্ষার্থী", "Student"), org: b("ঢাকা বিশ্ববিদ্যালয়", "University of Dhaka"), group: "study" },
  { no: 36, name: b("দেলোয়ার হোসেন", "Delower Hossain"), role: b("শিক্ষার্থী", "Student"), org: b("গাজীপুর কৃষি বিশ্ববিদ্যালয়", "Gazipur Agricultural University"), group: "study" },
  { no: 37, name: b("ঈদমিরা আক্তার", "Eidmira Akter"), role: b("শিক্ষার্থী", "Student"), org: b("ঢাকা বিশ্ববিদ্যালয়", "University of Dhaka"), group: "study" },
  // ৯. অন্যান্য
  { no: 38, name: b("আহসান আলী", "Ahasan Ali"), role: TBC, group: "others", unconfirmed: true },
  { no: 39, name: b("পয়জাম আলী", "Poyjam Ali"), role: TBC, group: "others", unconfirmed: true },
];

/** `no` is assigned by position in the list above. */
export const alumni: Alumnus[] = raw.map((a, i) => ({ ...a, no: i + 1 }));

const sortKey = (n: string) => n.replace(/^(Dr\.|Engr\.|Md\.|ডা\.|ইঞ্জি\.|মোঃ)\s*/i, "").trim();

/** Alphabetical within each group (language-aware), serial numbers follow that order. The Chief Convener and Dr. Robiul Alam and Engr. Rafur Islam stay first in their groups. */
export function sortedAlumni(l: "bn" | "en"): Alumnus[] {
  const c = new Intl.Collator(l === "bn" ? "bn" : "en");
  const gi = (k: GroupKey) => GROUPS.findIndex((g) => g.key === k);
  return [...raw]
    .sort((a, b) => gi(a.group) - gi(b.group) || Number(!!(b.convener || b.top)) - Number(!!(a.convener || a.top)) || c.compare(sortKey(a.name[l]), sortKey(b.name[l])))
    .map((a, i) => ({ ...a, no: i + 1 }));
}

export const groupOf = (k: GroupKey) => GROUPS.find((g) => g.key === k)!;
export const countOf = (k: GroupKey) => alumni.filter((a) => a.group === k).length;

export const intro = {
  title: b("আমাদের প্রাক্তন শিক্ষার্থীরা আজ কোথায়?", "Where are our alumni today?"),
  body: b(
    "বোয়ালধার সরকারি প্রাথমিক বিদ্যালয় অ্যালামনাই অ্যাসোসিয়েশনের গর্ব আমাদের প্রাক্তন শিক্ষার্থীরা। এই বিদ্যালয়ের শিক্ষার্থীরা আজ চিকিৎসা, শিক্ষা, প্রকৌশল, তথ্যপ্রযুক্তি, সরকারি-বেসরকারি চাকরি, ব্যবসা, কৃষি ও প্রবাসে বিভিন্ন ক্ষেত্রে নিজেদের প্রতিষ্ঠিত করেছেন। তাঁদের সাফল্য আমাদের বিদ্যালয়ের গর্ব এবং ভবিষ্যৎ প্রজন্মের জন্য অনুপ্রেরণা।",
    "Our alumni are the pride of the Boaldhar Government Primary School Alumni Association. Today the school's former pupils have established themselves in medicine, education, engineering, information technology, public and private service, business, agriculture and work abroad. Their success is the pride of our school and an inspiration for future generations.",
  ),
};
