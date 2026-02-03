import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  style?: string;
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function ActionButton({
  style,
  children,
  href,
  disabled = false,
  onClick,
  variant = "primary",
}: Props) {
  const baseStyles = `
    inline-flex items-center justify-center
    px-4 py-2 rounded-lg text-sm font-medium
    transition whitespace-nowrap
  `;

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50 ",
  };

  const className = `${baseStyles} ${variants[variant]} ${style} `;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
