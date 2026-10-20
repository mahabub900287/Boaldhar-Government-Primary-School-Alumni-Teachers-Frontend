import { notFound } from "next/navigation";
import { isLocale, locales, pick } from "@/lib/i18n";
import { PortalShell, SampleBanner } from "@/components/Portal";
import { inputCls, StatusBadge } from "@/components/ui";
import { memberTable } from "@/lib/demo";
import { Select } from "@/components/Select";

const defs: [string, string, string][] = [
  ["", "ড্যাশবোর্ড", "Dashboard"],
  ["registrations", "রেজিস্ট্রেশন", "Registrations"],
  ["payments", "পেমেন্ট যাচাই", "Payment verification"],
  ["tickets", "টিকিট", "Tickets"],
  ["checkin", "QR চেক-ইন", "QR check-in"],
  ["alumni", "প্রাক্তনী", "Alumni"],
  ["batches", "ব্যাচ", "Batches"],
  ["events", "ইভেন্ট", "Events"],
  ["teachers", "শিক্ষক", "Teachers"],
  ["gallery", "গ্যালারি", "Gallery"],
  ["notices", "নোটিশ", "Notices"],
  ["committee", "কমিটি", "Committee"],
  ["finance", "অনুদান ও ব্যয়", "Donations & expenses"],
  ["reports", "রিপোর্ট", "Reports"],
  ["roles", "ভূমিকা ও অনুমতি", "Roles & permissions"],
  ["audit", "অডিট লগ", "Audit log"],
  ["settings", "সেটিংস", "Settings"],
];
const keys = defs.map((d) => d[0]);

export function generateStaticParams() {
  return locales.flatMap((locale) => keys.map((s) => ({ locale, section: s ? [s] : [] })));
}

export default async function Admin({ params }: PageProps<"/[locale]/admin/[[...section]]">) {
  const { locale, section } = await params;
  const key = section?.[0] ?? "";
  if (!isLocale(locale) || !keys.includes(key) || (section?.length ?? 0) > 1) notFound();
  const p = pick(locale);
  const base = `/${locale}/admin`;
  const links = defs.map(([s, bn, en]) => ({ href: s ? `${base}/${s}` : base, label: p(bn, en) }));
  const title = links[keys.indexOf(key)].label;

  const stLabel = { approved: p("অনুমোদিত", "Approved"), pending: p("যাচাই অপেক্ষমাণ", "Pending"), rejected: p("প্রত্যাখ্যাত", "Rejected") };
  const cnt = (st: string) => memberTable.filter((r) => r.st === st).length;
  const values = [memberTable.length, cnt("pending"), cnt("approved"), cnt("rejected"), `৳ ${cnt("approved") * 500}`, cnt("approved"), 0];
  const metrics = [
    p("মোট রেজিস্ট্রেশন", "Total registrations"),
    p("যাচাই অপেক্ষমাণ", "Pending verification"),
    p("অনুমোদিত পেমেন্ট", "Approved payments"),
    p("প্রত্যাখ্যাত", "Rejected"),
    p("যাচাইকৃত সংগ্রহ (৳)", "Verified collection (৳)"),
    p("টিকিট ইস্যু", "Tickets issued"),
    p("চেক-ইন", "Checked in"),
  ];

  return (
    <PortalShell title={p("অ্যাডমিন প্যানেল", "Admin panel")} links={links} current={key ? `${base}/${key}` : base}>
      <SampleBanner text={p("ডেমো তথ্য — লাইভে সংখ্যা ও সারি ডাটাবেস থেকে আসবে।", "Demo data — live figures and rows will come from the database.")} />
      <h1 className="font-display mb-6 text-3xl font-semibold text-forest">{title}</h1>

      {key === "" && (
        <>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <div key={m} className="rounded-2xl bg-white p-5 ring-1 ring-line transition-shadow hover:shadow-lg">
                <p className="text-xs text-ink-soft">{m}</p>
                <p className="font-display mt-1 text-3xl font-semibold text-forest">{values[i]}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-line">
              <h2 className="font-display text-xl font-semibold text-forest">{p("ব্যাচ অনুযায়ী রেজিস্ট্রেশন", "Registrations by batch")}</h2>
              <ul className="mt-5 space-y-3">
                {memberTable.map((r, i) => (
                  <li key={r.ref} className="flex items-center gap-3 text-sm"><span className="w-12 text-ink-soft">{r.batch}</span><span className="h-3 flex-1 overflow-hidden rounded-full bg-line"><span className="block h-full rounded-full bg-gradient-to-r from-green to-gold" style={{ width: `${35 + ((i * 17) % 55)}%` }} /></span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-line">
              <h2 className="font-display text-xl font-semibold text-forest">{p("সর্বশেষ কার্যক্রম", "Latest activity")}</h2>
              <ul className="mt-5 divide-y divide-line text-sm">
                {memberTable.slice(0, 4).map((r) => (
                  <li key={r.ref} className="flex items-center justify-between gap-3 py-3"><span>{r.name[locale]} · <span className="text-ink-soft">{r.ref}</span></span><StatusBadge status={r.st} label={stLabel[r.st]} /></li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}

      {(key === "registrations" || key === "payments" || key === "tickets") && (
        <>
          <form className="mb-4 grid gap-3 sm:grid-cols-4" role="search">
            <input aria-label={p("খুঁজুন", "Search")} placeholder={p("নাম, ফোন, রেফারেন্স…", "Name, phone, reference…")} className={`${inputCls} sm:col-span-2`} />
            <Select id="st" name="status" defaultValue="" options={[{ value: "", label: p("সব স্ট্যাটাস", "All statuses") }, { value: "pending", label: p("যাচাই অপেক্ষমাণ", "Pending") }, { value: "approved", label: p("অনুমোদিত", "Approved") }, { value: "rejected", label: p("প্রত্যাখ্যাত", "Rejected") }]} />
            <button type="button" className="rounded-lg border border-forest/40 px-4 py-2 font-semibold text-forest hover:bg-forest hover:text-white">{p("CSV এক্সপোর্ট", "Export CSV")}</button>
          </form>
          <div className="overflow-x-auto rounded-2xl bg-white ring-1 ring-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-ivory text-xs uppercase tracking-wider text-ink-soft">
                <tr>{[p("রেফারেন্স", "Reference"), p("নাম", "Name"), p("ব্যাচ", "Batch"), p("ট্রানজেকশন", "Transaction"), p("পরিমাণ", "Amount"), p("স্ট্যাটাস", "Status"), p("কাজ", "Action")].map((h) => <th key={h} className="px-4 py-3">{h}</th>)}</tr>
              </thead>
              <tbody>
                {memberTable.map((r) => (
                  <tr key={r.ref} className="border-t border-line transition-colors hover:bg-ivory/60">
                    <td className="px-4 py-3 font-mono text-xs">{r.ref}</td><td className="px-4 py-3">{r.name[locale]}</td><td className="px-4 py-3">{r.batch}</td><td className="px-4 py-3 font-mono text-xs">{r.tx}</td><td className="px-4 py-3">{r.amt}</td>
                    <td className="px-4 py-3"><StatusBadge status={r.st} label={stLabel[r.st]} /></td>
                    <td className="space-x-3 whitespace-nowrap px-4 py-3">{r.st === "pending" ? (<><button type="button" className="font-semibold text-ok underline">{p("অনুমোদন", "Approve")}</button><button type="button" className="font-semibold text-err underline">{p("প্রত্যাখ্যান", "Reject")}</button></>) : <button type="button" className="font-semibold text-forest underline">{p("দেখুন", "View")}</button>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {key === "checkin" && (
        <div className="max-w-md space-y-4">
          <div className="grid aspect-square place-items-center border-2 border-dashed border-forest/40 bg-white text-ink-soft">{p("ক্যামেরা স্ক্যানার এখানে", "Camera scanner here")}</div>
          <input aria-label={p("টিকিট নম্বর", "Ticket number")} placeholder={p("অথবা টিকিট নম্বর লিখুন", "Or type ticket number")} className={inputCls} />
          <button type="button" className="w-full rounded bg-forest py-3 font-semibold text-white">{p("যাচাই করুন", "Validate")}</button>
        </div>
      )}

      {!["", "registrations", "payments", "tickets", "checkin"].includes(key) && (
        <div className="rounded-2xl border border-dashed border-ink-soft/40 bg-white p-8 text-ink-soft">{p("এই বিভাগের ব্যবস্থাপনা স্ক্রিন ব্যাকএন্ড সংযোগের সময় যুক্ত হবে। এখনো কোনো তথ্য নেই।", "Management screen for this section arrives with backend integration. No data yet.")}</div>
      )}
    </PortalShell>
  );
}
