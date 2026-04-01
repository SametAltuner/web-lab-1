import type { ReactNode } from "react";

interface AlertProps {
  type: "error" | "success" | "info";
  children: ReactNode;
}

export default function Alert({ type, children }: AlertProps) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {children}
    </div>
  );
}
