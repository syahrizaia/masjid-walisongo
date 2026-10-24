import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: "glass" | "glass-dark";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, helperText, id, variant = "glass-dark", ...props }, ref) => {
    const inputId = id || React.useId();
    
    return (
      <div className="w-full flex flex-col gap-2">
        {label && (
          <label htmlFor={inputId} className="text-sm font-semibold text-emerald-100/90 tracking-wide">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`flex h-12 w-full rounded-2xl bg-black/25 backdrop-blur-xl border border-white/15 px-4 py-2 text-sm text-white placeholder:text-emerald-100/40 shadow-[inset_0_1px_1.5px_0_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/80 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? "border-red-500/80 focus:ring-red-400" : ""
          } ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-description` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-xs font-medium text-red-400 flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-description`} className="text-xs text-emerald-100/60 mt-0.5">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
