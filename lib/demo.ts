/** DEMO CONTENT — placeholder data for the design preview. Replace with real, approved information before launch. */
export type Bi = { bn: string; en: string };
const b = (bn: string, en: string): Bi => ({ bn, en });

export const committee = [
  { role: b("সভাপতি", "President"), name: b("মোঃ আনোয়ার হোসেন", "Md. Anwar Hossain"), batch: b("১৯৯০ ব্যাচ", "Batch 1990") },
  { role: b("সহ-সভাপতি", "Vice President"), name: b("রফিকুল ইসলাম", "Rafiqul Islam"), batch: b("১৯৯৪ ব্যাচ", "Batch 1994") },
  { role: b("সাধারণ সম্পাদক", "General Secretary"), name: b("সুলতানা রাজিয়া", "Sultana Razia"), batch: b("১৯৯৮ ব্যাচ", "Batch 1998") },
  { role: b("যুগ্ম সম্পাদক", "Joint Secretary"), name: b("নুসরাত জাহান", "Nusrat Jahan"), batch: b("২০০৩ ব্যাচ", "Batch 2003") },
  { role: b("কোষাধ্যক্ষ", "Treasurer"), name: b("তানভীর আহমেদ", "Tanvir Ahmed"), batch: b("১৯৯৬ ব্যাচ", "Batch 1996") },
  { role: b("সাংগঠনিক সম্পাদক", "Organising Secretary"), name: b("ফারুক হাসান", "Faruk Hasan"), batch: b("২০০০ ব্যাচ", "Batch 2000") },
  { role: b("প্রচার সম্পাদক", "Publicity Secretary"), name: b("মাহফুজা আক্তার", "Mahfuza Akter"), batch: b("২০০৬ ব্যাচ", "Batch 2006") },
  { role: b("সদস্য", "Member"), name: b("আব্দুল মান্নান", "Abdul Mannan"), batch: b("১৯৯২ ব্যাচ", "Batch 1992") },
];

export const teachers = [
  { name: b("মোঃ আব্দুল করিম", "Md. Abdul Karim"), role: b("প্রধান শিক্ষক", "Head Teacher"), years: b("১৯৮৫ – ২০১০", "1985 – 2010"), note: b("সবার প্রিয় ‘করিম স্যার’ — অঙ্ক ও নৈতিকতার শিক্ষক।", "Beloved “Karim Sir” — teacher of mathematics and values.") },
  { name: b("রওশন আরা বেগম", "Roushan Ara Begum"), role: b("সহকারী শিক্ষক", "Assistant Teacher"), years: b("১৯৯০ – ২০১৮", "1990 – 2018"), note: b("বাংলা ও সংগীতের আলো ছড়িয়েছেন প্রজন্মের পর প্রজন্ম।", "Spread the joy of Bengali and music across generations.") },
  { name: b("শফিকুল ইসলাম", "Shafiqul Islam"), role: b("সহকারী শিক্ষক", "Assistant Teacher"), years: b("১৯৮৮ – ২০১২", "1988 – 2012"), note: b("খেলাধুলা ও শৃঙ্খলার প্রতীক।", "A symbol of sport and discipline.") },
  { name: b("নাসরিন সুলতানা", "Nasrin Sultana"), role: b("সহকারী শিক্ষক", "Assistant Teacher"), years: b("১৯৯৫ – ২০২২", "1995 – 2022"), note: b("ইংরেজি ও চিত্রাঙ্কনে অনুপ্রেরণাদাত্রী।", "An inspiration in English and drawing.") },
  { name: b("মোঃ ইব্রাহিম খলিল", "Md. Ibrahim Khalil"), role: b("সহকারী শিক্ষক", "Assistant Teacher"), years: b("১৯৮২ – ২০০৮", "1982 – 2008"), note: b("পরিবেশ পরিচিতি ও বিজ্ঞানের গল্পকার।", "Storyteller of science and the environment.") },
  { name: b("হাসিনা আক্তার", "Hasina Akter"), role: b("সহকারী শিক্ষক", "Assistant Teacher"), years: b("২০০০ – বর্তমান", "2000 – present"), note: b("বর্তমান শিক্ষার্থীদের পথপ্রদর্শক।", "Guide to today's pupils.") },
];

export const batches = [1990, 1993, 1996, 1999, 2002, 2005, 2008, 2011, 2014, 2017].map((y, i) => ({
  year: y,
  members: [34, 41, 52, 47, 63, 58, 71, 66, 80, 74][i],
  rep: [b("মোঃ আনোয়ার হোসেন", "Md. Anwar Hossain"), b("কামরুল হাসান", "Kamrul Hasan"), b("তানভীর আহমেদ", "Tanvir Ahmed"), b("সুমাইয়া ইসলাম", "Sumaiya Islam"), b("রাশেদ খান", "Rashed Khan"), b("লুৎফা বেগম", "Lutfa Begum"), b("জাহিদ হোসেন", "Zahid Hossain"), b("ফাতেমা খাতুন", "Fatema Khatun"), b("নাঈম উদ্দিন", "Naim Uddin"), b("তাসনিম আক্তার", "Tasnim Akter")][i],
}));

export const alumni = [
  { name: b("মোঃ আনোয়ার হোসেন", "Md. Anwar Hossain"), batch: "1990", job: b("ব্যবসায়ী", "Businessman"), city: b("ঢাকা", "Dhaka") },
  { name: b("সুলতানা রাজিয়া", "Sultana Razia"), batch: "1998", job: b("শিক্ষিকা", "Teacher"), city: b("কুমিল্লা", "Cumilla") },
  { name: b("তানভীর আহমেদ", "Tanvir Ahmed"), batch: "1996", job: b("হিসাবরক্ষক", "Accountant"), city: b("চট্টগ্রাম", "Chattogram") },
  { name: b("নুসরাত জাহান", "Nusrat Jahan"), batch: "2003", job: b("চিকিৎসক", "Physician"), city: b("ঢাকা", "Dhaka") },
  { name: b("ফারুক হাসান", "Faruk Hasan"), batch: "2000", job: b("সফটওয়্যার প্রকৌশলী", "Software engineer"), city: b("সিলেট", "Sylhet") },
  { name: b("মাহফুজা আক্তার", "Mahfuza Akter"), batch: "2006", job: b("ব্যাংকার", "Banker"), city: b("ঢাকা", "Dhaka") },
  { name: b("কামরুল হাসান", "Kamrul Hasan"), batch: "1993", job: b("কৃষি কর্মকর্তা", "Agriculture officer"), city: b("ময়মনসিংহ", "Mymensingh") },
  { name: b("সুমাইয়া ইসলাম", "Sumaiya Islam"), batch: "1999", job: b("আইনজীবী", "Lawyer"), city: b("ঢাকা", "Dhaka") },
  { name: b("রাশেদ খান", "Rashed Khan"), batch: "2002", job: b("প্রকৌশলী", "Engineer"), city: b("রাজশাহী", "Rajshahi") },
  { name: b("লুৎফা বেগম", "Lutfa Begum"), batch: "2005", job: b("নার্স", "Nurse"), city: b("খুলনা", "Khulna") },
  { name: b("জাহিদ হোসেন", "Zahid Hossain"), batch: "2008", job: b("উদ্যোক্তা", "Entrepreneur"), city: b("ঢাকা", "Dhaka") },
  { name: b("ফাতেমা খাতুন", "Fatema Khatun"), batch: "2011", job: b("গবেষক", "Researcher"), city: b("ঢাকা", "Dhaka") },
];

export const news = [
  { date: "2026-10-12", tag: b("রি-ইউনিয়ন", "Reunion"), title: b("রি-ইউনিয়ন ২০২৭ — প্রস্তুতি সভা অনুষ্ঠিত", "Reunion 2027 — preparatory meeting held"), body: b("কমিটি অনুষ্ঠানের রূপরেখা, ভেন্যু প্রস্তুতি ও স্বেচ্ছাসেবক তালিকা নিয়ে আলোচনা করেছে। তারিখ চূড়ান্ত হলেই জানানো হবে।", "The committee discussed the programme outline, venue preparation and volunteer roster. The date will be announced once finalised."), photo: "school-lawn" },
  { date: "2026-10-05", tag: b("নিবন্ধন", "Registration"), title: b("অনলাইন নিবন্ধন শীঘ্রই শুরু", "Online registration opening soon"), body: b("বিকাশ ও নগদের মাধ্যমে ফি জমা দেওয়ার নির্দেশনা প্রস্তুত করা হচ্ছে।", "Instructions for paying fees by bKash and Nagad are being prepared."), photo: "slates" },
  { date: "2026-09-28", tag: b("স্মৃতি", "Memories"), title: b("পুরনো ছবি পাঠানোর আহ্বান", "Call for old photographs"), body: b("ব্যাচের ছবি, অনুষ্ঠানের মুহূর্ত বা শিক্ষকদের সঙ্গে ছবি আমাদের পাঠান — স্মৃতির অ্যালবামে যুক্ত হবে।", "Send us batch photos, event moments or pictures with teachers — they will join the memory album."), photo: "alumni-group" },
  { date: "2026-09-15", tag: b("সামাজিক", "Community"), title: b("শিক্ষা সহায়তা তহবিল গঠনের প্রস্তাব", "Proposal for an education support fund"), body: b("অসচ্ছল শিক্ষার্থীদের পাশে দাঁড়াতে একটি স্বচ্ছ তহবিলের খসড়া আলোচনা হয়েছে।", "A draft for a transparent fund to support pupils in need was discussed."), photo: "students" },
  { date: "2026-09-02", tag: b("সংগঠন", "Association"), title: b("কার্যনির্বাহী কমিটির সভা", "Executive committee meeting"), body: b("সদস্য তালিকা হালনাগাদ ও ব্যাচ প্রতিনিধি নির্বাচনের সিদ্ধান্ত হয়েছে।", "Decided to update the member list and appoint batch representatives."), photo: "school-front" },
  { date: "2026-08-20", tag: b("সংগঠন", "Association"), title: b("ওয়েবসাইট উদ্বোধন", "Website launch"), body: b("প্রাক্তন শিক্ষার্থীদের সংযুক্ত করতে এই ওয়েবসাইট চালু হলো।", "This website goes live to connect former students."), photo: "paddy" },
];

export const schedule = [
  { time: b("সকাল ৮:০০", "8:00 am"), title: b("নিবন্ধন ও টিকিট যাচাই", "Registration & ticket check"), body: b("প্রবেশদ্বারে QR কোড স্ক্যান করে হাজিরা।", "Attendance by QR scan at the gate.") },
  { time: b("সকাল ৯:০০", "9:00 am"), title: b("জাতীয় সংগীত ও উদ্বোধন", "National anthem & inauguration"), body: b("প্রধান অতিথির স্বাগত বক্তব্য।", "Welcome address by the chief guest.") },
  { time: b("সকাল ১০:৩০", "10:30 am"), title: b("শিক্ষকদের সংবর্ধনা", "Honouring teachers"), body: b("প্রিয় শিক্ষকদের প্রতি শ্রদ্ধা ও উপহার।", "Tribute and gifts for beloved teachers.") },
  { time: b("দুপুর ১২:৩০", "12:30 pm"), title: b("মধ্যাহ্নভোজ", "Lunch"), body: b("ব্যাচ অনুযায়ী আড্ডা ও ছবি তোলা।", "Batch-wise gatherings and photographs.") },
  { time: b("বিকেল ৩:০০", "3:00 pm"), title: b("সাংস্কৃতিক অনুষ্ঠান", "Cultural programme"), body: b("গান, কবিতা ও স্মৃতিচারণ।", "Songs, poetry and recollections.") },
  { time: b("সন্ধ্যা ৫:৩০", "5:30 pm"), title: b("র‍্যাফেল ড্র ও সমাপনী", "Raffle draw & closing"), body: b("ধন্যবাদ জ্ঞাপন ও পরবর্তী পরিকল্পনা।", "Vote of thanks and next plans.") },
];

export const fees = [
  { cat: b("প্রাক্তন শিক্ষার্থী", "Alumni"), amount: "৳ ৫০০", enAmount: "৳ 500", note: b("খাবার ও স্যুভেনিরসহ", "Includes meal & souvenir") },
  { cat: b("শিক্ষক / অতিথি", "Teacher / guest"), amount: "৳ ৩০০", enAmount: "৳ 300", note: b("খাবারসহ", "Includes meal") },
  { cat: b("শিশু (১০ বছরের নিচে)", "Child (under 10)"), amount: "বিনামূল্যে", enAmount: "Free", note: b("অভিভাবকের সঙ্গে", "With a guardian") },
];

export const initiatives = [
  { title: b("মেধাবৃত্তি", "Merit scholarship"), body: b("প্রতি বছর বিদ্যালয়ের সেরা শিক্ষার্থীদের জন্য শিক্ষাবৃত্তি।", "An annual scholarship for the school's top pupils."), icon: "cap" as const },
  { title: b("শিক্ষা উপকরণ", "Learning materials"), body: b("অসচ্ছল শিক্ষার্থীদের খাতা, কলম ও স্কুল ব্যাগ বিতরণ।", "Notebooks, pens and school bags for pupils in need."), icon: "book" as const },
  { title: b("বিদ্যালয় উন্নয়ন", "School improvement"), body: b("শ্রেণিকক্ষ মেরামত, বই ও খেলার সামগ্রী সংগ্রহ।", "Classroom repairs, books and play equipment."), icon: "heart" as const },
  { title: b("স্বাস্থ্য ক্যাম্প", "Health camp"), body: b("এলাকার শিশুদের জন্য বিনামূল্যে স্বাস্থ্য পরীক্ষা।", "Free health check-ups for local children."), icon: "shield" as const },
];

export const milestones = [
  { y: "২০২৬ জুন", yEn: "Jun 2026", t: b("অ্যালামনাই অ্যাসোসিয়েশনের যাত্রা শুরু", "The alumni association begins"), d: b("প্রাক্তন শিক্ষার্থীরা একত্রিত হয়ে সংগঠন গঠনের সিদ্ধান্ত নেন।", "Former students decide to form an association.") },
  { y: "২০২৬ আগস্ট", yEn: "Aug 2026", t: b("ওয়েবসাইট ও সদস্য তালিকা", "Website and member list"), d: b("অনলাইনে নিবন্ধন ও প্রাক্তনী তালিকার কাজ শুরু।", "Online registration and alumni directory work starts.") },
  { y: "২০২৭", yEn: "2027", t: b("প্রথম পুনর্মিলনী", "First reunion"), d: b("বিদ্যালয় প্রাঙ্গণে সকল ব্যাচের মিলনমেলা — তারিখ ঘোষণা হবে।", "A gathering of all batches in the schoolyard — date to be announced.") },
];

export const faqs = [
  { q: b("আমার পেমেন্ট কবে যাচাই হবে?", "When will my payment be verified?"), a: b("সাধারণত ২৪–৪৮ ঘণ্টার মধ্যে প্রশাসক ম্যানুয়ালি যাচাই করেন। অবস্থা জানতে ‘নিবন্ধনের অবস্থা’ পাতা দেখুন।", "An administrator verifies manually, usually within 24–48 hours. Check the status page for updates.") },
  { q: b("ভুল ট্রানজেকশন আইডি দিলে কী করব?", "What if I entered the wrong transaction ID?"), a: b("যোগাযোগ পাতার মাধ্যমে আপনার রেজিস্ট্রেশন রেফারেন্সসহ আমাদের জানান।", "Contact us with your registration reference.") },
  { q: b("একই ট্রানজেকশন আইডি দুইবার ব্যবহার করা যায়?", "Can a transaction ID be reused?"), a: b("না, প্রতিটি আইডি কেবল একটি নিবন্ধনে ব্যবহৃত হতে পারে।", "No, each ID can be used for one registration only.") },
  { q: b("আমি কি পরিবারের সদস্যদের নিয়ে আসতে পারব?", "Can I bring family members?"), a: b("হ্যাঁ, নিবন্ধনের সময় অতিথি যুক্ত করুন। অতিথির ফি আলাদা।", "Yes, add guests while registering. Guest fees are separate.") },
  { q: b("টিকিট কীভাবে পাব?", "How do I get my ticket?"), a: b("পেমেন্ট অনুমোদনের পর সদস্য অ্যাকাউন্ট থেকে QR টিকিট ডাউনলোড করা যাবে।", "After approval, download your QR ticket from your member account.") },
  { q: b("আমার তথ্য কি সবাই দেখতে পাবে?", "Will everyone see my details?"), a: b("না। আপনি যা অনুমতি দেবেন কেবল তা-ই প্রাক্তনী তালিকায় দেখা যাবে। ফোন নম্বর কখনো প্রকাশ হয় না।", "No. Only what you allow appears in the directory. Your phone number is never shown.") },
];

export const memberTable = [
  { ref: "REG-A1B2C3", name: b("মোঃ আনোয়ার হোসেন", "Md. Anwar Hossain"), batch: "1990", tx: "8N7A6D5C4B", amt: "৳ 500", st: "approved" as const },
  { ref: "REG-D4E5F6", name: b("সুলতানা রাজিয়া", "Sultana Razia"), batch: "1998", tx: "9K3J2H1G0F", amt: "৳ 500", st: "pending" as const },
  { ref: "REG-G7H8I9", name: b("তানভীর আহমেদ", "Tanvir Ahmed"), batch: "1996", tx: "5P4O3N2M1L", amt: "৳ 500", st: "approved" as const },
  { ref: "REG-J1K2L3", name: b("নুসরাত জাহান", "Nusrat Jahan"), batch: "2003", tx: "7Q6W5E4R3T", amt: "৳ 300", st: "pending" as const },
  { ref: "REG-M4N5O6", name: b("ফারুক হাসান", "Faruk Hasan"), batch: "2000", tx: "2Y1U0I9O8P", amt: "৳ 500", st: "rejected" as const },
  { ref: "REG-P7Q8R9", name: b("মাহফুজা আক্তার", "Mahfuza Akter"), batch: "2006", tx: "3Z4X5C6V7B", amt: "৳ 500", st: "approved" as const },
];
