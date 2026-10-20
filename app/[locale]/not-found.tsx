import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="font-display text-4xl font-semibold text-forest">404</h1>
      <p className="mt-3 text-ink-soft">পাতাটি পাওয়া যায়নি · Page not found</p>
      <Link href="/bn" className="mt-6 inline-block rounded bg-forest px-5 py-3 font-semibold text-white">হোম / Home</Link>
    </Container>
  );
}
