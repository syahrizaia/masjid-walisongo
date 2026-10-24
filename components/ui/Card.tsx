import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "glass-dark" | "glass-gold" | "solid";
  hoverEffect?: boolean;
}

export function Card({
  className = "",
  variant = "glass-dark",
  hoverEffect = false,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    "glass-dark": "liquid-bento-card text-white",
    glass: "liquid-glass-panel text-gray-900 rounded-3xl",
    "glass-gold": "liquid-glass-gold text-yellow-100 rounded-3xl",
    solid: "bg-white text-gray-800 rounded-3xl border border-gray-100 shadow-xl",
  };

  const hoverClass = hoverEffect ? "hover:-translate-y-1 hover:shadow-2xl transition-all duration-300" : "";

  return (
    <div
      className={`overflow-hidden ${variantStyles[variant]} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex flex-col space-y-2 p-6 sm:p-7 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-xl font-bold tracking-tight text-white drop-shadow-sm ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`text-sm text-emerald-100/70 font-normal leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 sm:p-7 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex items-center p-6 sm:p-7 pt-0 border-t border-white/10 ${className}`} {...props}>
      {children}
    </div>
  );
}
