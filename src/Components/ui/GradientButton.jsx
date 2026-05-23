import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-inter text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const variants = {
  primary:
    "bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 text-white shadow-[0_0_32px_rgba(139,92,246,0.35)] hover:shadow-[0_0_44px_rgba(34,211,238,0.35)] hover:scale-[1.02] active:scale-[0.99]",
  ghost:
    "border border-white/15 bg-white/5 text-slate-100 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]",
};

export default function GradientButton({
  to,
  href,
  variant = "primary",
  className = "",
  type = "button",
  children,
  ...props
}) {
  const cls = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} {...props}>
      {children}
    </button>
  );
}
