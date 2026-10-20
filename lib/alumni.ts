/** REAL alumni list supplied by the association (99 people, 9 groups). Bengali spellings of Latin names can be added when supplied. */
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
  { no: 1, name: b("ডা. মোঃ রবিউল আলম", "Dr. Md. Robiul Alam"), role: b("চিকিৎসক", "Physician"), group: "medical", top: true },
  { no: 2, name: b("ডা. মোঃ রেজাউল করিম", "Dr. Md. Rejaul Korim"), role: b("চিকিৎসক", "Physician"), group: "medical" },
  { no: 3, name: b("ডা. রিতা আক্তার", "Dr. Rita Akter"), role: b("চিকিৎসক", "Physician"), group: "medical" },
  // ২. শিক্ষা
  { no: 4, name: b("মোঃ সিদ্দিকুর রহমান লিটন", "Md. Siddiqur Rahman Liton"), role: b("সহযোগী অধ্যাপক", "Associate Professor"), org: b("বেগম রোকেয়া সরকারি কলেজ, রংপুর", "Begum Rokeya Government College, Rangpur"), group: "education", convener: true },
  { no: 5, name: b("মোঃ আহম্মদ আলী", "Md. Ahamoad Ali"), role: b("অধ্যাপক", "Professor"), group: "education" },
  { no: 6, name: b("মোঃ আনোয়ার হোসেন", "Md. Anawar Hossain"), role: b("শিক্ষক", "Teacher"), group: "education" },
  { no: 7, name: b("মোঃ তেনজামুল ইসলাম", "Md. Tenjamul Islam"), role: b("শিক্ষক", "Teacher"), group: "education" },
  { no: 8, name: b("মোঃ শাহাদাত হোসেন", "Md. Sahadad Hossain"), role: b("শিক্ষক", "Teacher"), group: "education" },
  { no: 9, name: b("মোঃ আমিনুন ইসলাম", "Md. Aminun Islam"), role: b("শিক্ষক", "Teacher"), group: "education" },
  { no: 10, name: b("মোঃ সাহাজাহান আলী", "Md. Sahajahan Ali"), role: b("অধ্যাপক", "Professor"), org: b("কুড়িগ্রাম পলিটেকনিক ইনস্টিটিউট", "Kurigram Polytechnic Institute"), group: "education" },
  { no: 11, name: b("মোঃ হারুন অর রশিদ", "Md. Harun Or Rosid"), role: b("জুনিয়র ইনস্ট্রাক্টর", "Junior Instructor"), org: b("দিনাজপুর পলিটেকনিক ইনস্টিটিউট", "Dinajpur Polytechnic Institute"), group: "education" },
  // ৩. প্রকৌশল ও আইটি
  { no: 12, name: b("ইঞ্জি. মোঃ রাফুর ইসলাম", "Engr. Md. Rafur Islam"), role: b("প্রকৌশলী", "Engineer"), group: "tech", top: true },
  { no: 13, name: b("মোঃ আসাদুজ্জামান", "Md. Asaduzzaman"), role: b("নেটওয়ার্ক প্রকৌশলী", "Network Engineer"), group: "tech" },
  { no: 14, name: b("মোঃ শামীম হোসেন", "Md. Shamin Hossain"), role: b("সফটওয়্যার প্রকৌশলী", "Software Engineer"), group: "tech" },
  { no: 15, name: b("মোঃ মাহাবুব আলম", "Md. Mahabub Alam"), role: b("সফটওয়্যার প্রকৌশলী", "Software Engineer"), group: "tech" },
  // ৪. চাকরি
  { no: 16, name: b("মোঃ ইলিয়াস হোসেন", "Md. Eliash Hossian"), role: b("তহশিলদার", "Tahsildar (land officer)"), group: "jobs" },
  { no: 17, name: b("মোঃ তরিকুল ইসলাম", "Md. Torikul Islam"), role: b("সরকারি চাকরিজীবী", "Government employee"), group: "jobs" },
  { no: 18, name: b("মোঃ মোস্তাফিজুর রহমান", "Md. Mostafijur Rahaman"), role: b("সরকারি চাকরিজীবী", "Government employee"), group: "jobs" },
  { no: 19, name: b("মোঃ আসাদুজ্জামান", "Md. Asaduzzaman"), role: b("পুলিশ সাব-ইন্সপেক্টর (SI)", "Police Sub-Inspector (SI)"), group: "jobs" },
  { no: 20, name: b("মোঃ আসাদুজ্জামান ফরিদ", "Md. Asaduzzaman Farid"), role: b("বেসরকারি চাকরিজীবী", "Private-sector employee"), group: "jobs" },
  { no: 21, name: b("মোঃ ইয়াসিন আলী", "Md. Yeasin Ali"), role: b("সরকারি চাকরিজীবী", "Government employee"), group: "jobs" },
  { no: 22, name: b("মোঃ ইয়াসিন আলী (আমিন)", "Md. Yeasin Ali (Amin)"), role: b("ভূমি জরিপকারী (আমিন)", "Land surveyor (Amin)"), group: "business" },
  { no: 23, name: b("মোঃ ফিরোজ জামান", "Md. Firoz Zaman"), role: b("ব্যাংকার", "Banker"), org: b("সোনালী ব্যাংক", "Sonali Bank"), group: "jobs" },
  { no: 24, name: b("মোঃ নাজমুল ইসলাম", "Md. Namzmul Islam"), role: b("ব্যাংকার", "Banker"), group: "jobs" },
  { no: 0, name: b("মোঃ মিলন হোসেন", "Md. Milon Hossain"), role: b("সরকারি চাকরিজীবী", "Government employee"), group: "jobs" },
  { no: 25, name: b("মোঃ সাকিলুর রহমান সুজন", "Md. Sakilur Rahman Suzan"), role: b("কর্মরত", "Employed"), org: b("ব্র্যাক ব্যাংক", "BRAC Bank"), group: "jobs" },
  { no: 26, name: b("মোঃ জিল্লুর রহমান", "Md. Jillur Rahaman"), role: b("কর্মরত", "Serving"), org: b("বাংলাদেশ সেনাবাহিনী", "Bangladesh Army"), group: "jobs" },
  { no: 0, name: b("মোঃ ওলি ওয়ালিউল্লাহ", "Md. Oli Waliullah"), role: b("কর্মরত", "Serving"), org: b("বাংলাদেশ সেনাবাহিনী", "Bangladesh Army"), group: "jobs" },
  // ৫. ব্যবসা
  { no: 27, name: b("মোঃ শাহানাজ হোসেন", "Md. Sahanaz Hossain"), role: b("ব্যবসায়ী", "Businessperson"), group: "business" },
  { no: 28, name: b("মোঃ রিপন ইসলাম", "Md. Ripon Islam"), role: b("ব্যবসায়ী", "Businessperson"), group: "business" },
  { no: 29, name: b("মোঃ হাবিবুর রহমান", "Md. Habibur Rhaman"), role: b("ব্যবসায়ী", "Businessperson"), group: "business" },
  { no: 30, name: b("মোঃ কামরুজ্জামান", "Md. Kamruzzaman"), role: b("বৃহৎ কৃষি খামারের উদ্যোক্তা", "Large-scale agro-farm entrepreneur"), group: "business" },
  // ৬. কৃষি
  { no: 31, name: b("মোঃ ইসমাইল হোসেন", "Md. Ismail Hossain"), role: b("কৃষি উদ্যোক্তা", "Agri-entrepreneur"), group: "agri" },
  { no: 32, name: b("মোঃ রবিউল আলম", "Md. Robiul Alam"), role: b("কৃষক", "Farmer"), group: "agri" },
  { no: 33, name: b("মোঃ বাবুল হোসেন", "Md. Babul Hossain"), role: b("কৃষক", "Farmer"), group: "agri" },
  // ৭. প্রবাস
  { no: 34, name: b("মোঃ হায়দার আলী", "Md. Haidar Ali"), role: b("প্রবাসী", "Expatriate"), group: "abroad" },
  { no: 0, name: b("মোঃ জিল্লুর রহমান", "Md. Jillur Rhaman"), role: b("প্রবাসী", "Expatriate"), group: "abroad" },
  { no: 0, name: b("মোঃ মামুন অর রশিদ", "Md. Mamun Or Rasid"), role: b("প্রবাসী", "Expatriate"), group: "abroad" },
  { no: 0, name: b("মোঃ আনিসুর রহমান", "Md. Anisur Rhaman"), role: b("প্রবাসী", "Expatriate"), group: "abroad" },
  { no: 0, name: b("মোঃ সোহেল রানা", "Md. Sohel Rana"), role: b("প্রবাসী", "Expatriate"), group: "abroad" },
  { no: 0, name: b("মোঃ হামিদুর রহমান", "Md. Hamidur Rhaman"), role: b("প্রবাসী", "Expatriate"), group: "abroad" },
  { no: 0, name: b("মোঃ খালেক হোসেন", "Md. Khalek Hossain"), role: b("প্রবাসী", "Expatriate"), group: "abroad" },
  // ৮. উচ্চশিক্ষা
  { no: 35, name: b("মোঃ এমদাদুল হক", "Md. Emdadul Haque"), role: b("শিক্ষার্থী", "Student"), org: b("ঢাকা বিশ্ববিদ্যালয়", "University of Dhaka"), group: "study" },
  { no: 36, name: b("মোঃ দেলোয়ার হোসেন", "Md. Delower Hossain"), role: b("শিক্ষার্থী", "Student"), org: b("গাজীপুর কৃষি বিশ্ববিদ্যালয়", "Gazipur Agricultural University"), group: "study" },
  { no: 37, name: b("ঈদমিরা আক্তার", "Eidmira Akter"), role: b("শিক্ষার্থী", "Student"), org: b("ঢাকা বিশ্ববিদ্যালয়", "University of Dhaka"), group: "study" },
  // ৯. অন্যান্য
  { no: 38, name: b("মোঃ আহসান আলী", "Md. Ahasan Ali"), role: TBC, group: "others", unconfirmed: true },
  { no: 39, name: b("মোঃ পয়জাম আলী", "Md. Poyjam Ali"), role: TBC, group: "others", unconfirmed: true },
  // ── added later ──
  { no: 0, name: b("মোঃ ইলিয়াস হোসেন", "Md. Elish Hossain"), role: TBC, group: "others", unconfirmed: true },
  { no: 0, name: b("কাজী মোহাম্মদ", "Kazi Mohamod"), role: TBC, group: "others", unconfirmed: true },
  { no: 0, name: b("মোঃ ফারুক হোসেন", "Md. Faruk Hossain"), role: TBC, group: "others", unconfirmed: true },
  { no: 0, name: b("মোঃ আনসারুল", "Md. Ansarul"), role: TBC, group: "others", unconfirmed: true },
  { no: 0, name: b("মোঃ আব্দুল কুদ্দুস", "Md. Abdul Kuddus"), role: TBC, group: "others", unconfirmed: true },
  { no: 0, name: b("মোঃ নজরুল ইসলাম", "Md. Nuzrul Islam"), role: TBC, group: "others", unconfirmed: true },
  { no: 0, name: b("মোঃ পজির উদ্দিন", "Md. Pojir Uddin"), role: TBC, group: "others", unconfirmed: true },
  { no: 0, name: b("মোঃ সামাদ আলী", "Md. Samad Ali"), role: TBC, group: "others", unconfirmed: true },
  { no: 0, name: b("মোঃ জালাল উদ্দিন", "Md. Jalal Uddin"), role: b("ব্যবসায়ী", "Businessperson"), group: "business" },
  { no: 0, name: b("মোঃ মাসুদ রানা", "Md. Masud Rana"), role: b("বেসরকারি চাকরিজীবী", "Private-sector employee"), group: "jobs" },
  { no: 0, name: b("মোঃ সোহেল রানা", "Md. Sohel Rana"), role: b("বেসরকারি চাকরিজীবী", "Private-sector employee"), group: "jobs" },
  { no: 0, name: b("মোঃ সোহাগ আলী", "Md. Sohag Ali"), role: b("বেসরকারি চাকরিজীবী", "Private-sector employee"), group: "jobs" },
  { no: 0, name: b("মোঃ মওদুদ ইসলাম", "Md. Mowdud Islam"), role: b("বেসরকারি চাকরিজীবী", "Private-sector employee"), group: "jobs" },
  { no: 0, name: b("মোঃ ইসার উদ্দিন", "Md. Yesar Uddin"), role: b("কৃষক", "Farmer"), group: "agri" },
  { no: 0, name: b("মোঃ শাহীন ইসলাম", "Md. Shahin Islam"), role: b("কৃষি উদ্যোক্তা", "Agri-entrepreneur"), group: "agri" },
  { no: 0, name: b("মোঃ মানিক হোসেন", "Md. Manik Hossain"), role: b("শ্রমিক", "Worker"), group: "others" },
  { no: 0, name: b("মোঃ উজ্জ্বল হোসেন", "Md. Uzzal Hossain"), role: b("শিক্ষার্থী", "Student"), org: b("বালিয়াডাঙ্গী গোল্ডেন স্কুল", "Baliadangi Golden School"), group: "study" },
  { no: 0, name: b("মোঃ রাসেল আলী", "Md. Rasel Ali"), role: b("শিক্ষার্থী", "Student"), org: b("ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউট", "Thakurgaon Polytechnic Institute"), group: "study" },
  { no: 0, name: b("মোঃ সাব্বির হোসেন", "Md. Sabbir Hossain"), role: b("শিক্ষার্থী", "Student"), org: b("ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউট", "Thakurgaon Polytechnic Institute"), group: "study" },
  { no: 0, name: b("মোঃ রাকিব হোসেন", "Md. Rakib Hossain"), role: b("শিক্ষার্থী", "Student"), org: b("ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউট", "Thakurgaon Polytechnic Institute"), group: "study" },
  { no: 0, name: b("মোঃ আবির হোসেন", "Md. Abir Hossain"), role: b("শিক্ষার্থী", "Student"), org: b("ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউট", "Thakurgaon Polytechnic Institute"), group: "study" },
  { no: 0, name: b("মোঃ রিফাত", "Md. Rifat"), role: b("শিক্ষার্থী", "Student"), org: b("ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউট", "Thakurgaon Polytechnic Institute"), group: "study" },
  { no: 0, name: b("মোঃ ফজলে রাব্বি", "Md. Fozla Rabbi"), role: b("শিক্ষার্থী", "Student"), org: b("ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউট", "Thakurgaon Polytechnic Institute"), group: "study" },
  { no: 0, name: b("মোঃ আল-আমিন", "Md. Al-Amin"), role: b("শিক্ষার্থী", "Student"), group: "study" },
  { no: 0, name: b("মোঃ আরিফুল ইসলাম", "Md. Ariful Islam"), role: b("শিক্ষার্থী", "Student"), group: "study" },
  { no: 0, name: b("মোঃ তৌহিদুর ইসলাম", "Md. Tohidur Islam"), role: b("শিক্ষার্থী", "Student"), org: b("দিনাজপুর সরকারি কলেজ", "Dinajpur Government College"), group: "study" },
  { no: 0, name: b("মোঃ মারুফ ইসলাম", "Md. Maruf Islam"), role: b("শিক্ষার্থী", "Student"), group: "study" },
  { no: 0, name: b("মোঃ নাহিদ ইসলাম", "Md. Nahid Islam"), role: b("শিক্ষার্থী", "Student"), group: "study" },
  { no: 0, name: b("মোঃ সজিব মিয়া", "Md. Sojib Mia"), role: b("শিক্ষার্থী", "Student"), group: "study" },
  { no: 0, name: b("মোছাঃ আনিকা আক্তার", "Mst. Anika Akter"), role: b("শিক্ষার্থী", "Student"), group: "study" },
  { no: 0, name: b("মোছাঃ সুরভী আক্তার", "Mst. Surovi Akter"), role: b("শিক্ষার্থী", "Student"), org: b("রংপুর সরকারি কলেজ", "Rangpur Government College"), group: "study" },
  { no: 0, name: b("মোঃ রায়হান কবির", "Md. Rayhan Kabir"), role: b("শিক্ষার্থী ও উদ্যোক্তা", "Student & entrepreneur"), group: "study" },
  { no: 0, name: b("মোঃ শামীম হোসেন", "Md. Shamin Hossain"), role: b("শিক্ষার্থী", "Student"), group: "study" },
  { no: 0, name: b("মোঃ নাজমুল ইসলাম", "Md. Nazmul Islam"), role: b("শিক্ষার্থী", "Student"), org: b("হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", "Hajee Mohammad Danesh Science and Technology University"), group: "study" },
  { no: 0, name: b("মোঃ লাবিব হোসেন", "Md. Labib Hossain"), role: b("শিক্ষার্থী", "Student"), org: b("ঢাকা কলেজ", "Dhaka College"), group: "study" },
  { no: 0, name: b("মোঃ আলিফ হোসেন", "Md. Alif Hossain"), role: b("শিক্ষার্থী", "Student"), org: b("ঠাকুরগাঁও সরকারি কলেজ", "Thakurgaon Government College"), group: "study" },
  { no: 0, name: b("মোঃ লিটন আলী", "Md. Liton Ali"), role: b("শিক্ষার্থী", "Student"), org: b("ঠাকুরগাঁও সরকারি কলেজ", "Thakurgaon Government College"), group: "study" },
  { no: 0, name: b("মোঃ সোহাগ হোসেন", "Md. Sohag Hossain"), role: b("শিক্ষার্থী", "Student"), org: b("দিনাজপুর সরকারি কলেজ", "Dinajpur Government College"), group: "study" },
  { no: 0, name: b("মোঃ আরমান আলী", "Md. Arman Ali"), role: b("শিক্ষার্থী", "Student"), org: b("দিনাজপুর সরকারি কলেজ", "Dinajpur Government College"), group: "study" },
  { no: 0, name: b("মোঃ মমিন হোসেন", "Md. Momin Hossain"), role: b("শিক্ষার্থী", "Student"), org: b("ঢাকা কলেজ", "Dhaka College"), group: "study" },
  { no: 0, name: b("মোছাঃ শ্যামলী আক্তার", "Mst. Shamoli Akter"), role: b("শিক্ষার্থী", "Student"), org: b("রংপুর সরকারি কলেজ", "Rangpur Government College"), group: "study" },
  { no: 0, name: b("মোঃ সোহেল রানা", "Md. Sohel Rana"), role: b("কৃষি উদ্যোক্তা", "Agri-entrepreneur"), group: "agri" },
  { no: 0, name: b("মোঃ ইসমাইল হোসেন", "Md. Ismail Hossain"), role: b("খামারি ও কৃষি উদ্যোক্তা", "Farm owner & agri-entrepreneur"), group: "agri" },
  { no: 0, name: b("মোঃ আব্দুল কুদ্দুস", "Md. Abdul Kuddus"), role: b("কৃষক", "Farmer"), group: "agri" },
  { no: 0, name: b("মোঃ ইয়াসিন আলী", "Md. Yeasin Ali"), role: b("কৃষক", "Farmer"), group: "agri" },
  { no: 0, name: b("মোঃ বাসেদ আলী", "Md. Based Ali"), role: b("কৃষক", "Farmer"), group: "agri" },
  { no: 0, name: b("মোঃ কাসিম", "Md. Kasim"), role: b("কৃষক", "Farmer"), group: "agri" },
  { no: 0, name: b("মোঃ সইদুল", "Md. Soidul"), role: b("কৃষক", "Farmer"), group: "agri" },
  { no: 0, name: b("মোঃ আহসান আলী", "Md. Asahan Ali"), role: b("ব্যবসায়ী", "Businessperson"), group: "business" },
  { no: 0, name: b("মোঃ সইদুল", "Md. Soidul"), role: b("গার্মেন্টস কর্মকর্তা", "Garments officer"), group: "jobs" },
  { no: 0, name: b("মোঃ আনিসুর রহমান", "Md. Anisur Rhaman"), role: TBC, group: "others", unconfirmed: true },
  { no: 0, name: b("মোঃ ইসমাইল হোসেন", "Md. Ismail Hossain"), role: b("কৃষি উদ্যোক্তা", "Agri-entrepreneur"), group: "agri" },
];

/** `no` is assigned by position in the list above. */
export const alumni: Alumnus[] = raw.map((a, i) => ({ ...a, no: i + 1 }));

const sortKey = (n: string) => n.replace(/^((Dr\.|Engr\.|Md\.|Mst\.|ডা\.|ইঞ্জি\.|মোঃ|মোছাঃ)\s*)+/i, "").trim();

/** Alphabetical within each group (language-aware), serial numbers follow that order. The Chief Convener and Dr. Robiul Alam and Engr. Rafur Islam stay first in their groups. */
export function sortedAlumni(l: "bn" | "en"): Alumnus[] {
  const c = new Intl.Collator(l === "bn" ? "bn" : "en");
  const gi = (k: GroupKey) => GROUPS.findIndex((g) => g.key === k);
  // inside the higher-education group: universities, then colleges, then institutes, then everyone else
  const tier = (a: Alumnus) => {
    if (a.group !== "study") return 0;
    const org = `${a.org?.en ?? ""} ${a.org?.bn ?? ""}`;
    return /University|বিশ্ববিদ্যালয়/i.test(org) ? 0 : /College|কলেজ/i.test(org) ? 1 : /Institute|ইনস্টিটিউট/i.test(org) ? 2 : 3;
  };
  return [...raw]
    .sort((a, b) => gi(a.group) - gi(b.group) || Number(!!(b.convener || b.top)) - Number(!!(a.convener || a.top)) || tier(a) - tier(b) || c.compare(sortKey(a.name[l]), sortKey(b.name[l])))
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
