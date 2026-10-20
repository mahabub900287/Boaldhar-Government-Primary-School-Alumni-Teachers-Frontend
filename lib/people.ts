/** DEMO CONTENT — placeholder data for the design preview. Replace with real, approved information before launch. */
export type Bi = { bn: string; en: string };
const b = (bn: string, en: string): Bi => ({ bn, en });

/* ───────────── Teachers & staff ───────────── */
export type Teacher = { name: Bi; role: Bi; cat: "head" | "former" | "current" | "patron"; years: Bi; subject: Bi; note: Bi };
export const teacherList: Teacher[] = [
  { name: b("মোঃ হাবিবুর রহমান", "Md. Habibur Rahman"), role: b("প্রধান শিক্ষক", "Head Teacher"), cat: "head", years: b("১৯৭২ – ১৯৮৫", "1972 – 1985"), subject: b("সকল বিষয়", "All subjects"), note: b("বিদ্যালয়ের প্রথম দিকের প্রধান শিক্ষক; শৃঙ্খলা ও সময়ানুবর্তিতার প্রতীক।", "An early head teacher, remembered for discipline and punctuality.") },
  { name: b("মোঃ আব্দুল করিম", "Md. Abdul Karim"), role: b("প্রধান শিক্ষক", "Head Teacher"), cat: "head", years: b("১৯৮৫ – ২০১০", "1985 – 2010"), subject: b("গণিত", "Mathematics"), note: b("সবার প্রিয় ‘করিম স্যার’ — অঙ্ক ও নৈতিকতার শিক্ষক।", "Beloved “Karim Sir” — teacher of mathematics and values.") },
  { name: b("মোসাম্মৎ জাহানারা বেগম", "Mst. Jahanara Begum"), role: b("প্রধান শিক্ষিকা", "Head Teacher"), cat: "head", years: b("২০১০ – ২০২০", "2010 – 2020"), subject: b("বাংলা", "Bengali"), note: b("বিদ্যালয়ে ডিজিটাল ক্লাসরুম চালুর উদ্যোক্তা।", "Introduced the school's first digital classroom.") },
  { name: b("মোঃ আলমগীর হোসেন", "Md. Alamgir Hossain"), role: b("প্রধান শিক্ষক", "Head Teacher"), cat: "current", years: b("২০২০ – বর্তমান", "2020 – present"), subject: b("প্রশাসন", "Administration"), note: b("বর্তমান প্রধান শিক্ষক; প্রাক্তনীদের সঙ্গে সেতুবন্ধনে সক্রিয়।", "The current head teacher, active in bridging with alumni.") },
  { name: b("রওশন আরা বেগম", "Roushan Ara Begum"), role: b("সহকারী শিক্ষিকা", "Assistant Teacher"), cat: "former", years: b("১৯৯০ – ২০১৮", "1990 – 2018"), subject: b("বাংলা ও সংগীত", "Bengali & music"), note: b("বাংলা ও সংগীতের আলো ছড়িয়েছেন প্রজন্মের পর প্রজন্ম।", "Spread the joy of Bengali and music across generations.") },
  { name: b("শফিকুল ইসলাম", "Shafiqul Islam"), role: b("সহকারী শিক্ষক", "Assistant Teacher"), cat: "former", years: b("১৯৮৮ – ২০১২", "1988 – 2012"), subject: b("শারীরিক শিক্ষা", "Physical education"), note: b("খেলাধুলা ও শৃঙ্খলার প্রতীক।", "A symbol of sport and discipline.") },
  { name: b("নাসরিন সুলতানা", "Nasrin Sultana"), role: b("সহকারী শিক্ষিকা", "Assistant Teacher"), cat: "former", years: b("১৯৯৫ – ২০২২", "1995 – 2022"), subject: b("ইংরেজি ও চিত্রাঙ্কন", "English & drawing"), note: b("ইংরেজি ও চিত্রাঙ্কনে অনুপ্রেরণাদাত্রী।", "An inspiration in English and drawing.") },
  { name: b("মোঃ ইব্রাহিম খলিল", "Md. Ibrahim Khalil"), role: b("সহকারী শিক্ষক", "Assistant Teacher"), cat: "former", years: b("১৯৮২ – ২০০৮", "1982 – 2008"), subject: b("বিজ্ঞান", "Science"), note: b("পরিবেশ পরিচিতি ও বিজ্ঞানের গল্পকার।", "Storyteller of science and the environment.") },
  { name: b("আব্দুস সালাম", "Abdus Salam"), role: b("সহকারী শিক্ষক", "Assistant Teacher"), cat: "former", years: b("১৯৭৮ – ২০০২", "1978 – 2002"), subject: b("সমাজ ও ধর্ম", "Social studies"), note: b("গ্রামের ইতিহাস ও সংস্কৃতির গল্প শোনাতেন।", "Told stories of the village's history and culture.") },
  { name: b("সালমা খাতুন", "Salma Khatun"), role: b("সহকারী শিক্ষিকা", "Assistant Teacher"), cat: "former", years: b("১৯৯২ – ২০১৫", "1992 – 2015"), subject: b("প্রাথমিক গণিত", "Primary mathematics"), note: b("ছোটদের হাতেখড়ির ধৈর্যশীল শিক্ষিকা।", "A patient teacher of the youngest beginners.") },
  { name: b("হাসিনা আক্তার", "Hasina Akter"), role: b("সহকারী শিক্ষিকা", "Assistant Teacher"), cat: "current", years: b("২০০০ – বর্তমান", "2000 – present"), subject: b("বাংলা ও পরিবেশ", "Bengali & environment"), note: b("বর্তমান শিক্ষার্থীদের পথপ্রদর্শক।", "Guide to today's pupils.") },
  { name: b("মোঃ জাকির হোসেন", "Md. Zakir Hossain"), role: b("সহকারী শিক্ষক", "Assistant Teacher"), cat: "current", years: b("২০০৮ – বর্তমান", "2008 – present"), subject: b("ইংরেজি", "English"), note: b("ইংরেজি ক্লাবের সংগঠক।", "Organiser of the English club.") },
  { name: b("ফাহমিদা আক্তার", "Fahmida Akter"), role: b("সহকারী শিক্ষিকা", "Assistant Teacher"), cat: "current", years: b("২০১২ – বর্তমান", "2012 – present"), subject: b("বিজ্ঞান ও গণিত", "Science & mathematics"), note: b("শিক্ষায় প্রযুক্তি ব্যবহারে অগ্রণী।", "A pioneer of technology in the classroom.") },
  { name: b("মোঃ রেজাউল করিম", "Md. Rezaul Karim"), role: b("সহকারী শিক্ষক", "Assistant Teacher"), cat: "current", years: b("২০১৫ – বর্তমান", "2015 – present"), subject: b("চারু ও কারুকলা", "Arts & crafts"), note: b("শিশুদের সৃজনশীলতার বিকাশে নিবেদিত।", "Devoted to nurturing children's creativity.") },
  { name: b("আলহাজ্ব মোঃ ইউনুস আলী", "Alhaj Md. Yunus Ali"), role: b("পৃষ্ঠপোষক", "Patron"), cat: "patron", years: b("বিদ্যালয়ের শুভানুধ্যায়ী", "School well-wisher"), subject: b("—", "—"), note: b("বিদ্যালয়ের উন্নয়নে দীর্ঘদিনের সহায়তাকারী।", "A long-time supporter of the school's development.") },
  { name: b("মোসাম্মৎ রোকেয়া বেগম", "Mst. Rokeya Begum"), role: b("পৃষ্ঠপোষক", "Patron"), cat: "patron", years: b("বিদ্যালয়ের শুভানুধ্যায়ী", "School well-wisher"), subject: b("—", "—"), note: b("শিক্ষার্থীদের বৃত্তি তহবিলে অবদানকারী।", "Contributor to the pupils' scholarship fund.") },
];

/* ───────────── School at a glance & history (DEMO) ───────────── */
/** REAL: founding year (1933) and location (Rangpur Division → Thakurgaon → Baliadangi). Pupils / teachers / classes are DEMO. */
export const school = {
  founded: { bn: "১৯৩৩", en: "1933" },
  chain: [
    { k: b("বিভাগ", "Division"), v: b("রংপুর", "Rangpur") },
    { k: b("জেলা", "District"), v: b("ঠাকুরগাঁও", "Thakurgaon") },
    { k: b("উপজেলা", "Upazila"), v: b("বালিয়াডাঙ্গী", "Baliadangi") },
    { k: b("বিদ্যালয়", "School"), v: b("বোয়ালধার সরকারি প্রাথমিক বিদ্যালয়", "Boaldhar Government Primary School") },
  ],
  address: b("বোয়ালধার সরকারি প্রাথমিক বিদ্যালয়, বালিয়াডাঙ্গী, ঠাকুরগাঁও, রংপুর বিভাগ, বাংলাদেশ", "Boaldhar Government Primary School, Baliadangi, Thakurgaon, Rangpur Division, Bangladesh"),
};

export const schoolFacts = [
  { k: b("প্রতিষ্ঠা", "Established"), v: b("১৯৩৩", "1933"), real: true },
  { k: b("ধরন", "Type"), v: b("সরকারি প্রাথমিক বিদ্যালয়", "Government primary school"), real: true },
  { k: b("বিভাগ", "Division"), v: b("রংপুর", "Rangpur"), real: true },
  { k: b("জেলা", "District"), v: b("ঠাকুরগাঁও", "Thakurgaon"), real: true },
  { k: b("উপজেলা", "Upazila"), v: b("বালিয়াডাঙ্গী", "Baliadangi"), real: true },
  { k: b("শ্রেণি", "Classes"), v: b("প্রাক-প্রাথমিক – ৫ম", "Pre-primary – Grade 5"), real: false },
  { k: b("শিক্ষার্থী", "Pupils"), v: b("প্রায় ২৪০ জন", "About 240"), real: false },
  { k: b("শিক্ষক", "Teachers"), v: b("৮ জন", "8"), real: false },
];

export const history = [
  { y: "১৯৩৩", yEn: "1933", t: b("বিদ্যালয় প্রতিষ্ঠা", "The school is founded"), d: b("ঠাকুরগাঁও জেলার বালিয়াডাঙ্গী উপজেলায় বোয়ালধার সরকারি প্রাথমিক বিদ্যালয়ের যাত্রা শুরু।", "Boaldhar Government Primary School begins in Baliadangi upazila, Thakurgaon district.") },
  { y: "১৯৭৩", yEn: "1973", t: b("সরকারিকরণ", "Taken under government"), d: b("বিদ্যালয় সরকারি প্রাথমিক বিদ্যালয়ের মর্যাদা পায়।", "The school becomes a government primary school.") },
  { y: "১৯৮৫", yEn: "1985", t: b("নতুন ভবন", "A new building"), d: b("শ্রেণিকক্ষ সম্প্রসারণ ও নতুন ভবন নির্মাণ।", "Classrooms expanded and a new building constructed.") },
  { y: "২০০৫", yEn: "2005", t: b("সুবর্ণজয়ন্তীর প্রস্তুতি", "Golden-jubilee preparations"), d: b("প্রাক্তনীদের নিয়ে প্রথম বড় সম্মিলন আয়োজনের উদ্যোগ।", "First big gathering of alumni is planned.") },
  { y: "২০১৫", yEn: "2015", t: b("ডিজিটাল ক্লাসরুম", "Digital classroom"), d: b("মাল্টিমিডিয়া ক্লাসরুম চালু।", "A multimedia classroom is introduced.") },
  { y: "২০২৬", yEn: "2026", t: b("অ্যালামনাই অ্যাসোসিয়েশনের যাত্রা", "The alumni association begins"), d: b("প্রাক্তন শিক্ষার্থীরা একত্রিত হয়ে সংগঠন গঠন করেন।", "Former students come together and form the association.") },
  { y: "২০২৭", yEn: "2027", t: b("প্রথম রি-ইউনিয়ন", "The first reunion"), d: b("বিদ্যালয় প্রাঙ্গণে সকল ব্যাচের মিলনমেলা — তারিখ শীঘ্রই ঘোষণা।", "A gathering of all batches in the schoolyard — date to be announced.") },
];

/* ───────────── Five values (About page) ───────────── */
export const values = [
  { icon: "heart" as const, t: b("কৃতজ্ঞতা", "Gratitude"), d: b("শিক্ষক ও বিদ্যালয়ের প্রতি চিরকৃতজ্ঞ — তাঁদের হাত ধরেই আমাদের শুরু।", "Forever grateful to our teachers and school — it all began with them.") },
  { icon: "users" as const, t: b("একতা", "Unity"), d: b("সব ব্যাচ, সব প্রজন্ম — আমরা এক পরিবার, একে অপরের পাশে।", "Every batch, every generation — one family standing together.") },
  { icon: "shield" as const, t: b("স্বচ্ছতা", "Transparency"), d: b("আয়-ব্যয়ের প্রতিটি হিসাব সবার জন্য উন্মুক্ত ও নিয়মিত প্রকাশিত।", "Every account of income and expense is open and regularly published.") },
  { icon: "cap" as const, t: b("শিক্ষার অঙ্গীকার", "Commitment to learning"), d: b("বৃত্তি, বই ও শিক্ষা-উপকরণে আজকের শিক্ষার্থীদের পাশে থাকা।", "Standing by today's pupils with scholarships, books and learning materials.") },
  { icon: "star" as const, t: b("ঐতিহ্য ও সম্মান", "Heritage & respect"), d: b("বিদ্যালয়ের স্মৃতি, শিক্ষক ও ইতিহাসকে সম্মানের সঙ্গে সংরক্ষণ।", "Preserving the school's memories, teachers and history with respect.") },
];
