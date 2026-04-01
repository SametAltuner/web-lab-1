import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  id,
  className = "",
  ...rest
}: InputProps) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={`${error ? "input-error" : ""} ${className}`}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <small id={`${id}-error`} className="error-msg" role="alert">
          {error}
        </small>
      )}
    </div>
  );
}
