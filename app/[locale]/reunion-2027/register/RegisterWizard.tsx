"use client";
import { useRef, useState, type ReactNode } from "react";
import { pick, type Locale } from "@/lib/i18n";
import { Select } from "@/components/Select";
import { Notice } from "@/components/ui";

/** Static UI only: state is local, nothing is sent to any server yet. */

const input = "w-full rounded-lg border border-ink-soft/30 bg-white px-3.5 py-2.5 text-base transition-all placeholder:text-ink-soft/60 hover:border-ink-soft/60 focus:border-forest focus:shadow-[0_0_0_3px_rgba(31,111,84,.18)] user-invalid:border-err user-invalid:shadow-[0_0_0_3px_rgba(179,58,50,.12)]";

function F({ id, label, hint, req, children }: { id: string; label: string; hint?: string; req?: boolean; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center gap-1 text-sm font-semibold text-ink">
        {label}
        {req && <span className="text-err" aria-hidden>*</span>}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-ink-soft">{hint}</p>}
    </div>
  );
}

function Upload({ id, label, note, accept }: { id: string; label: string; note: string; accept: string }) {
  const [name, setName] = useState("");
  return (
    <label htmlFor={id} className="group flex cursor-pointer items-center gap-4 rounded-xl border-2 border-dashed border-ink-soft/30 bg-ivory/60 p-4 transition-colors hover:border-gold hover:bg-gold-soft/40 focus-within:border-forest">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-gold-text shadow-sm ring-1 ring-line transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 16V5m0 0l-4 4m4-4l4 4M5 19h14" /></svg>
      </span>
      <span className="min-w-0 text-sm"><span className="block font-semibold text-forest">{name || label}</span><span className="block text-ink-soft">{name ? "✓" : note}</span></span>
      <input id={id} type="file" accept={accept} className="sr-only" onChange={(e) => setName(e.target.files?.[0]?.name ?? "")} />
    </label>
  );
}

function Check({ children, name, defaultChecked, req }: { children: ReactNode; name?: string; defaultChecked?: boolean; req?: boolean }) {
  return (
    <label className="group flex cursor-pointer items-start gap-3 rounded-lg px-1 py-1.5">
      <input type="checkbox" name={name} defaultChecked={defaultChecked} required={req} className="peer sr-only" />
      <span aria-hidden className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink-soft/40 bg-white text-transparent transition-all peer-checked:border-forest peer-checked:bg-forest peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-gold/40 group-hover:border-forest">
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10.5l4 4 8-9" /></svg>
      </span>
      <span className="text-[0.95rem]">{children}</span>
    </label>
  );
}

export function RegisterWizard({ locale }: { locale: Locale }) {
  const p = pick(locale);
  const n = (v: number | string) => (locale === "bn" ? Number(v).toLocaleString("bn-BD", { useGrouping: false }) : String(v));
  const steps = [p("ব্যক্তিগত", "Personal"), p("প্রাক্তনী তথ্য", "Alumni"), p("পেশা", "Professional"), p("অংশগ্রহণ", "Participation"), p("পেমেন্ট", "Payment"), p("পর্যালোচনা", "Review")];
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);
  const [method, setMethod] = useState("bkash");
  const [cat, setCat] = useState("alumni");
  const [guests, setGuests] = useState(0);
  const top = useRef<HTMLDivElement>(null);

  const fee: Record<string, number> = { alumni: 500, guest: 300, teacher: 300 };
  const total = (fee[cat] ?? 0) + guests * 300;
  const go = (k: number) => { setI(k); top.current?.scrollIntoView({ behavior: "smooth", block: "start" }); };

  const batchOpts = [{ value: "", label: p("— নির্বাচন করুন —", "— Select —") }, ...[1990, 1993, 1996, 1999, 2002, 2005, 2008, 2011, 2014, 2017].map((y) => ({ value: String(y), label: `${p("ব্যাচ", "Batch")} ${n(y)}` })), { value: "other", label: p("তালিকায় নেই", "Not in the list") }];
  const years = Array.from({ length: 41 }, (_, k) => 2026 - k).map((y) => ({ value: String(y), label: n(y) }));

  if (done)
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-line bg-white p-10 text-center shadow-sm">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green/10 text-ok"><svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.500" /></svg></span>
        <h2 className="font-display mt-5 text-2xl font-semibold text-forest">{p("ডিজাইন প্রিভিউ সম্পন্ন", "Design preview complete")}</h2>
        <p className="mt-3 text-ink-soft">{p("এটি কেবল UI ডিজাইন; কোনো তথ্য জমা হয়নি। ব্যাকএন্ড সংযোগের পর এখানে রেজিস্ট্রেশন রেফারেন্স দেখানো হবে।", "This is a UI design only; nothing was submitted. After backend integration the registration reference will appear here.")}</p>
        <button onClick={() => { setDone(false); go(0); }} className="mt-6 rounded-full bg-forest px-6 py-2.5 font-semibold text-white">{p("আবার শুরু", "Start over")}</button>
      </div>
    );

  return (
    <div ref={top} className="grid scroll-mt-28 gap-10 md:grid-cols-12">
      <div className="md:col-span-3">
        <div className="mb-4 flex items-center justify-between text-xs text-ink-soft"><span>{p("ধাপ", "Step")} {n(i + 1)}/{n(6)}</span><span>{n(Math.round(((i + 1) / 6) * 100))}%</span></div>
        <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-line"><div className="h-full rounded-full bg-gradient-to-r from-green to-gold transition-all duration-500" style={{ width: `${((i + 1) / 6) * 100}%` }} /></div>
        <ol className="flex gap-2 overflow-x-auto md:flex-col" aria-label={p("ধাপসমূহ", "Steps")}>
          {steps.map((s, k) => (
            <li key={s} aria-current={k === i ? "step" : undefined}>
              <button type="button" disabled={k > i} onClick={() => go(k)} className={`flex w-full shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors disabled:cursor-default ${k === i ? "bg-forest font-semibold text-white shadow-md" : k < i ? "text-forest hover:bg-white" : "text-ink-soft"}`}>
                <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs ${k === i ? "bg-gold text-green-dark" : k < i ? "bg-green text-white" : "bg-line"}`}>{k < i ? "✓" : n(k + 1)}</span>{s}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <form className="space-y-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-line md:col-span-9 md:p-10" onSubmit={(e) => { e.preventDefault(); if (i < 5) go(i + 1); else setDone(true); }}>
        <div><h2 className="font-display text-2xl font-semibold text-forest">{steps[i]}</h2><p className="text-sm text-ink-soft">{p("* চিহ্নিত ঘরগুলো আবশ্যক", "Fields marked * are required")}</p></div>

        {i === 0 && (<>
          <div className="grid gap-5 sm:grid-cols-2">
            <F id="nbn" req label={p("পূর্ণ নাম (বাংলা)", "Full name (Bengali)")}><input id="nbn" required lang="bn" className={input} placeholder="মোঃ আনোয়ার হোসেন" /></F>
            <F id="nen" req label={p("পূর্ণ নাম (ইংরেজি)", "Full name (English)")}><input id="nen" required className={input} placeholder="Md. Anwar Hossain" /></F>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <F id="ph" req label={p("মোবাইল নম্বর", "Mobile number")} hint={p("১১ সংখ্যার নম্বর, যেমন 01XXXXXXXXX", "11 digits, e.g. 01XXXXXXXXX")}><input id="ph" required inputMode="tel" pattern="01[0-9]{9}" className={input} placeholder="01XXXXXXXXX" /></F>
            <F id="em" label={p("ইমেইল (ঐচ্ছিক)", "Email (optional)")}><input id="em" type="email" className={input} placeholder="name@example.com" /></F>
          </div>
          <F id="pf" label={p("প্রোফাইল ছবি (ঐচ্ছিক)", "Profile photo (optional)")}><Upload id="pf" accept="image/*" label={p("ছবি নির্বাচন করুন", "Choose a photo")} note={p("JPG বা PNG, সর্বোচ্চ ২ MB", "JPG or PNG, up to 2 MB")} /></F>
        </>)}

        {i === 1 && (<>
          <F id="rel" req label={p("বিদ্যালয়ের সঙ্গে সম্পর্ক", "Relationship to the school")}>
            <Select id="rel" name="relation" defaultValue="student" options={[{ value: "student", label: p("প্রাক্তন শিক্ষার্থী", "Former student") }, { value: "former-teacher", label: p("প্রাক্তন শিক্ষক", "Former teacher") }, { value: "teacher", label: p("বর্তমান শিক্ষক", "Current teacher") }, { value: "guest", label: p("অনুমোদিত অতিথি", "Approved guest") }]} />
          </F>
          <F id="bt" req label={p("ব্যাচ", "Batch")}><Select id="bt" name="batch" options={batchOpts} placeholder={p("— নির্বাচন করুন —", "— Select —")} required /></F>
          <div className="grid gap-5 sm:grid-cols-2">
            <F id="ye" label={p("ভর্তির বছর (জানা থাকলে)", "Year enrolled (if known)")}><Select id="ye" name="enrolled" options={years} placeholder={p("বছর", "Year")} searchable searchPlaceholder={p("বছর খুঁজুন", "Find year")} /></F>
            <F id="yl" label={p("পাশ/ছাড়ার বছর (প্রযোজ্য হলে)", "Year left / passed (if applicable)")}><Select id="yl" name="left" options={years} placeholder={p("বছর", "Year")} searchable searchPlaceholder={p("বছর খুঁজুন", "Find year")} /></F>
          </div>
        </>)}

        {i === 2 && (<>
          <div className="grid gap-5 sm:grid-cols-2">
            <F id="pr" label={p("পেশা", "Profession")}><input id="pr" className={input} placeholder={p("যেমন: প্রকৌশলী", "e.g. Engineer")} /></F>
            <F id="or" label={p("প্রতিষ্ঠান / কর্মস্থল", "Organisation / workplace")}><input id="or" className={input} /></F>
          </div>
          <F id="ci" label={p("বর্তমান জেলা / শহর", "Current district / city")}>
            <Select id="ci" name="city" searchable searchPlaceholder={p("খুঁজুন", "Search")} placeholder={p("— নির্বাচন করুন —", "— Select —")}
              options={[["ঢাকা", "Dhaka"], ["চট্টগ্রাম", "Chattogram"], ["সিলেট", "Sylhet"], ["রাজশাহী", "Rajshahi"], ["খুলনা", "Khulna"], ["বরিশাল", "Barishal"], ["রংপুর", "Rangpur"], ["ময়মনসিংহ", "Mymensingh"], ["কুমিল্লা", "Cumilla"], ["গাজীপুর", "Gazipur"], ["নারায়ণগঞ্জ", "Narayanganj"], ["দেশের বাইরে", "Outside Bangladesh"]].map(([b, e]) => ({ value: e, label: p(b, e) }))} />
          </F>
          <fieldset className="rounded-xl border border-line bg-ivory/50 p-5">
            <legend className="px-2 text-sm font-semibold text-forest">{p("প্রাক্তনী তালিকায় দৃশ্যমানতা", "Directory visibility")}</legend>
            <Check name="v-name" defaultChecked>{p("আমার নাম ও ব্যাচ দেখান", "Show my name and batch")}</Check>
            <Check name="v-job">{p("আমার পেশা দেখান", "Show my profession")}</Check>
            <Check name="v-city">{p("আমার শহর দেখান", "Show my city")}</Check>
            <p className="mt-2 flex items-center gap-2 text-xs text-ink-soft"><svg viewBox="0 0 24 24" className="h-4 w-4 text-green" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4.500-3.200 8-8 9-4.800-1-8-4.500-8-9V6z" /></svg>{p("ফোন নম্বর কখনোই প্রকাশ করা হয় না।", "Your phone number is never shown.")}</p>
          </fieldset>
        </>)}

        {i === 3 && (<>
          <div className="grid gap-5 sm:grid-cols-2">
            <F id="ev" label={p("ইভেন্ট", "Event")}><Select id="ev" name="event" defaultValue="reunion" options={[{ value: "reunion", label: p("রি-ইউনিয়ন ২০২৭", "Reunion 2027") }]} /></F>
            <F id="cat" req label={p("অংশগ্রহণকারীর ধরন", "Participant category")}>
              <Select id="cat" name="category" value={cat} onChange={setCat} options={[{ value: "alumni", label: p("প্রাক্তন শিক্ষার্থী", "Alumni"), hint: p("৳ ৫০০", "৳ 500") }, { value: "teacher", label: p("শিক্ষক", "Teacher"), hint: p("৳ ৩০০", "৳ 300") }, { value: "guest", label: p("অতিথি", "Guest"), hint: p("৳ ৩০০", "৳ 300") }]} />
            </F>
          </div>
          <F id="gs" label={p("অতিরিক্ত অতিথি", "Additional guests")} hint={p("প্রতি অতিথি ৳ ৩০০ (ডেমো)", "৳ 300 per guest (demo)")}>
            <div className="inline-flex items-center overflow-hidden rounded-lg border border-ink-soft/30 bg-white">
              <button type="button" aria-label="−" onClick={() => setGuests(Math.max(0, guests - 1))} className="grid h-11 w-11 place-items-center text-xl text-forest transition-colors hover:bg-gold-soft">−</button>
              <output id="gs" className="num grid h-11 w-14 place-items-center border-x border-ink-soft/20 font-semibold">{n(guests)}</output>
              <button type="button" aria-label="+" onClick={() => setGuests(Math.min(5, guests + 1))} className="grid h-11 w-11 place-items-center text-xl text-forest transition-colors hover:bg-gold-soft">+</button>
            </div>
          </F>
          <div className="overflow-hidden rounded-xl ring-1 ring-line">
            <div className="flex justify-between bg-white p-4"><span>{p("নিবন্ধন ফি", "Registration fee")}</span><b className="text-forest">৳ {n(fee[cat] ?? 0)}</b></div>
            <div className="flex justify-between border-t border-line bg-white p-4"><span>{p("অতিথি", "Guests")} × {n(guests)}</span><b className="text-forest">৳ {n(guests * 300)}</b></div>
            <div className="flex justify-between bg-forest p-4 text-white"><span>{p("মোট", "Total")}</span><b className="num text-gold">৳ {n(total)}</b></div>
          </div>
          <Notice tone="warn">{p("ডেমো ফি — চূড়ান্ত ফি আয়োজকরা ঘোষণা করবেন।", "Demo fees — the organisers will announce the final fee.")}</Notice>
        </>)}

        {i === 4 && (<>
          <fieldset>
            <legend className="mb-2 text-sm font-semibold">{p("পেমেন্ট মাধ্যম", "Payment method")} <span className="text-err">*</span></legend>
            <div className="grid grid-cols-2 gap-3">
              {[["bkash", "bKash", "#e2136e"], ["nagad", "Nagad", "#f6921e"]].map(([v, nm, c]) => (
                <label key={v} className={`relative flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all ${method === v ? "border-forest bg-white shadow-md" : "border-line bg-white/60 hover:border-ink-soft/40"}`}>
                  <input type="radio" name="m" value={v} checked={method === v} onChange={() => setMethod(v)} className="sr-only" />
                  <span aria-hidden className="h-9 w-9 shrink-0 rounded-lg" style={{ background: c }} />
                  <span className="font-semibold text-forest">{nm}</span>
                  {method === v && <span aria-hidden className="absolute right-3 top-3 grid h-5 w-5 place-items-center rounded-full bg-forest text-xs text-white">✓</span>}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="rounded-xl bg-ivory p-5 text-sm"><p className="text-ink-soft">{p("এই নম্বরে ‘Send Money’ করুন (ডেমো):", "Send Money to this number (demo):")}</p><p className="font-display mt-1 text-2xl tracking-wide text-forest">01XXX-XXXXXX</p><p className="mt-2 text-xs text-ink-soft">{p("পরিমাণ:", "Amount:")} <b className="num text-forest">৳ {n(total)}</b></p></div>
          <Notice>{p("পিন, পাসওয়ার্ড বা ওটিপি কখনো শেয়ার করবেন না।", "Never share your PIN, password or OTP.")}</Notice>
          <F id="tx" req label={p("ট্রানজেকশন আইডি", "Transaction ID")} hint={p("মেসেজে পাওয়া ১০ অক্ষরের আইডি", "The 10-character ID in your confirmation SMS")}><input id="tx" required className={`${input} font-mono uppercase tracking-widest`} placeholder="8N7A6D5C4B" /></F>
          <div className="grid gap-5 sm:grid-cols-2">
            <F id="am" req label={p("পরিমাণ (৳)", "Amount paid (৳)")}><input id="am" required inputMode="decimal" className={input} defaultValue={total} /></F>
            <F id="dt" label={p("পেমেন্টের সময়", "Payment date & time")}><input id="dt" type="datetime-local" className={input} /></F>
          </div>
          <F id="pp" label={p("পেমেন্টের প্রমাণ (ঐচ্ছিক)", "Payment proof (optional)")}><Upload id="pp" accept="image/*,.pdf" label={p("স্ক্রিনশট বা PDF যুক্ত করুন", "Attach a screenshot or PDF")} note={p("সর্বোচ্চ ৫ MB", "Up to 5 MB")} /></F>
        </>)}

        {i === 5 && (<>
          <dl className="divide-y divide-line overflow-hidden rounded-xl ring-1 ring-line">
            {[[p("ইভেন্ট", "Event"), p("রি-ইউনিয়ন ২০২৭", "Reunion 2027")], [p("স্থান", "Venue"), p("বোয়ালধার সরকারি প্রাথমিক বিদ্যালয়", "Boaldhar Government Primary School")], [p("ধরন", "Category"), { alumni: p("প্রাক্তন শিক্ষার্থী", "Alumni"), teacher: p("শিক্ষক", "Teacher"), guest: p("অতিথি", "Guest") }[cat] as string], [p("অতিথি", "Guests"), n(guests)], [p("পেমেন্ট মাধ্যম", "Payment"), method === "bkash" ? "bKash" : "Nagad"], [p("মোট", "Total"), `৳ ${n(total)}`], [p("স্ট্যাটাস", "Status"), p("জমা দেওয়ার পর: যাচাই অপেক্ষমাণ", "After submit: Pending verification")]].map(([k, v]) => (<div key={k} className="flex justify-between gap-4 bg-white p-4 text-sm"><dt className="text-ink-soft">{k}</dt><dd className="font-semibold text-forest">{v}</dd></div>))}
          </dl>
          <Check req>{p("আমি গোপনীয়তা নীতি ও শর্তাবলিতে সম্মত।", "I agree to the privacy policy and terms.")}</Check>
        </>)}

        <div className="flex items-center justify-between border-t border-line pt-6">
          <button type="button" disabled={i === 0} onClick={() => go(i - 1)} className="rounded-full border border-forest/40 px-6 py-2.5 font-semibold text-forest transition-colors hover:bg-forest hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-forest">← {p("পিছনে", "Back")}</button>
          <button type="submit" className="rounded-full bg-forest px-8 py-2.5 font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-green-dark">{i < 5 ? `${p("পরবর্তী", "Next")} →` : p("জমা দিন", "Submit")}</button>
        </div>
      </form>
    </div>
  );
}
