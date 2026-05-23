type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  /** e.g. "01" — Joseph-style section index */
  index?: string;
};

export function SectionHeading({ title, subtitle, index }: SectionHeadingProps) {
  return (
    <div className="mb-14 md:mb-16">
      <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {index ? (
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-white/40">
            {"// "}
            {index}
          </span>
        ) : null}
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-portfolio-accent/80">
          Cyber Club
        </span>
      </div>
      <h2 className="max-w-3xl text-[clamp(1.75rem,5vw,3rem)] font-semibold leading-[1.08] tracking-tight text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 max-w-2xl font-mono text-sm leading-relaxed text-portfolio-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
