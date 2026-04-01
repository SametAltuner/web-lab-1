import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const base = "btn";
  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
        ? "btn-secondary"
        : "btn-outline";

  return (
    <button className={`${base} ${variantClass} ${className}`} {...rest}>
      {children}
    </button>
  );
}
