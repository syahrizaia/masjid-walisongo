import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost" | "glass" | "glass-gold";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  isLoading = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none liquid-sheen active:scale-[0.98]";

  const variants = {
    // Primary: Liquid Emerald Glass with specular rim highlight
    primary:
      "bg-emerald-600/90 hover:bg-emerald-500 text-white backdrop-blur-xl border border-emerald-400/40 shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.4),0_12px_24px_-8px_rgba(5,150,105,0.4)] focus:ring-emerald-400 focus:ring-offset-emerald-950 hover:shadow-[0_16px_32px_-8px_rgba(5,150,105,0.6)]",
    
    // Secondary: Liquid Champagne Gold Glass
    secondary:
      "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-emerald-950 font-bold border border-yellow-200/50 shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.7),0_12px_24px_-8px_rgba(234,179,8,0.45)] focus:ring-yellow-400 focus:ring-offset-emerald-950 hover:scale-[1.02]",
    
    // Outline: Translucent border glass
    outline:
      "bg-white/5 hover:bg-white/10 text-emerald-100 hover:text-white backdrop-blur-xl border border-white/20 hover:border-white/40 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2)] focus:ring-emerald-500 focus:ring-offset-emerald-950",
    
    // Danger: Ruby Glass
    danger:
      "bg-red-600/85 hover:bg-red-500 text-white backdrop-blur-xl border border-red-400/30 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.35),0_12px_24px_-8px_rgba(239,68,68,0.3)] focus:ring-red-500",
    
    // Ghost: Subtle highlight
    ghost:
      "text-emerald-100 hover:text-white hover:bg-white/10 transition-colors focus:ring-emerald-500",
      
    // Pure Liquid Glass
    glass:
      "bg-white/15 hover:bg-white/25 text-white backdrop-blur-2xl border border-white/30 shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.5),0_16px_32px_-10px_rgba(0,0,0,0.3)] focus:ring-white/50",
      
    // Gold Glass
    "glass-gold":
      "bg-yellow-500/15 hover:bg-yellow-500/25 text-yellow-300 hover:text-yellow-200 backdrop-blur-2xl border border-yellow-400/40 shadow-[inset_0_1px_1.5px_0_rgba(254,240,138,0.5),0_16px_32px_-10px_rgba(234,179,8,0.2)] focus:ring-yellow-400",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs tracking-wide",
    md: "h-11 px-5 py-2.5 text-sm",
    lg: "h-13 px-8 py-3.5 text-base tracking-wide",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2.5 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
