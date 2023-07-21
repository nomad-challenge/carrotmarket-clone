import Link from "next/link";

interface IFloatingButtonProps {
  href: string;
  children: React.ReactNode;
}
export default function FloatingButton({
  children,
  href,
}: IFloatingButtonProps) {
  return (
    <Link href={href}>
      <button className="fixed bottom-24 right-5 rounded-full bg-orange-400 p-4 text-white shadow-xl transition-colors hover:bg-orange-500">
        {children}
      </button>
    </Link>
  );
}
