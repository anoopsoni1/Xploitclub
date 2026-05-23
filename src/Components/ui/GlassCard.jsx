import { forwardRef } from "react";

const GlassCard = forwardRef(function GlassCard({ as: Tag = "div", className = "", children, hover = true, ...props }, ref) {
  return (
    <Tag
      ref={ref}
      className={[
        "rounded-2xl border border-white/[0.08] bg-white/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl",
        hover ? "transition-all duration-300 hover:border-cyan-400/25 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
});

export default GlassCard;
