import Image from "next/image";

export function Crest({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/logo.png"
      alt="বোয়ালধার সরকারি প্রাথমিক বিদ্যালয় অ্যালামনাই অ্যাসোসিয়েশন লোগো"
      width={256}
      height={256}
      priority={priority}
      className={`rounded-full ${className}`}
    />
  );
}
