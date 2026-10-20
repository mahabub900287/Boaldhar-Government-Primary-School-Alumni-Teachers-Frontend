import credits from "./credits.json";

export type PhotoName = (typeof credits)[number]["file"];

export const alt: Record<string, { bn: string; en: string }> = {
  "school-hero": { bn: "রঙিন প্রাথমিক বিদ্যালয় ভবন ও বিশাল গাছ", en: "A colourful primary school building beside a large tree" },
  "hero-field": { bn: "সোনালি ধানখেত ও বিশাল গাছ — গ্রামবাংলার প্রান্তর", en: "A golden paddy field and a large tree — the Bengal countryside" },
  "school-colour": { bn: "নীল আকাশের নিচে লাল-হলুদ দোতলা বিদ্যালয় ভবন", en: "A red and yellow two-storey school building under a blue sky" },
  "school-grass": { bn: "ঘাসে ঢাকা মাঠসহ বিদ্যালয় ভবন", en: "A school building beside a grassy playground" },
  "girl-board": { bn: "ব্ল্যাকবোর্ডে বাংলা অক্ষর লিখছে এক শিক্ষার্থী", en: "A pupil writing Bengali letters on the blackboard" },
  reading: { bn: "বিদ্যালয়ের মেঝেতে বসে বই পড়ছে শিশুরা", en: "Children reading books on the classroom floor" },
  smiles: { bn: "হাসিমুখ শিশুরা", en: "Smiling children" },
  "assembly-green": { bn: "সবুজ ইউনিফর্ম পরা শিক্ষার্থীরা সারিবদ্ধ", en: "Pupils in green uniforms lined up" },
  classroom: { bn: "রঙিন শ্রেণিকক্ষে কাজ করছে শিশুরা", en: "Children working in a colourful classroom" },
  fish: { bn: "বর্ণিল মঙ্গল শোভাযাত্রার মাছ", en: "A colourful fish at a Mangal Shobhajatra procession" },
  "kids-play": { bn: "মাটির দেয়ালের পাশে খেলছে দুই শিশু", en: "Two children playing by a mud wall" },
  "school-front": { bn: "প্রাথমিক বিদ্যালয়ের সামনের অংশ", en: "Front of a primary school building" },
  "school-lawn": { bn: "সবুজ মাঠসহ বিদ্যালয় প্রাঙ্গণ", en: "School grounds with a green lawn" },
  "school-row": { bn: "বিদ্যালয়ের শ্রেণিকক্ষের সারি ও উঠান", en: "Row of classrooms and a schoolyard" },
  students: { bn: "স্কুল ইউনিফর্ম পরা শিক্ষার্থীরা", en: "Students in school uniform" },
  assembly: { bn: "বিদ্যালয়ের সমাবেশ — ওপর থেকে", en: "A school assembly seen from above" },
  "boishakh-1": { bn: "পহেলা বৈশাখে শিশুদের উৎসব", en: "Children celebrating Pohela Boishakh" },
  "boishakh-2": { bn: "মুখোশ হাতে হাসিমুখ শিশুরা", en: "Smiling children holding festival masks" },
  paddy: { bn: "ধানখেতের মাঝে আঁকাবাঁকা পথ", en: "A winding path through green paddy fields" },
  "tree-mist": { bn: "কুয়াশায় ঢাকা সকালে গ্রামের পথ ও গাছ", en: "A village path and tree on a misty morning" },
  field: { bn: "গ্রামের মাঠে বিকেলের আলো", en: "Afternoon light over a village field" },
  silhouette: { bn: "গ্রামবাংলার সিলুয়েট — গাছ, সাইকেল ও গরুর গাড়ি", en: "Rural Bengal silhouette — tree, bicycle and bullock cart" },
  boat: { bn: "গোধূলিতে নৌকা", en: "A boat at dusk" },
  "boat-race": { bn: "নৌকা বাইচ", en: "Traditional boat race" },
  slates: { bn: "শিশুদের স্লেট ও পেন্সিল", en: "Children's slates and pencils" },
  library: { bn: "কলেজ গ্রন্থাগার", en: "A college library" },
  "alumni-group": { bn: "প্রাক্তন শিক্ষার্থীদের দলগত ছবি", en: "Group photo of former students" },
  drums: { bn: "ঢোল-বাদকদের উৎসব — ওপর থেকে", en: "Festival drummers seen from above" },
};
