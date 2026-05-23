/**
 * Fixed layers: base color, neon gradient mesh, grid, soft orbs.
 * pointer-events-none so content stays interactive.
 */
export default function PageBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[var(--xp-bg)]" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% -10%, rgba(139, 92, 246, 0.14), transparent 50%),
            radial-gradient(ellipse 60% 40% at 90% 20%, rgba(59, 130, 246, 0.1), transparent 45%),
            radial-gradient(ellipse 50% 35% at 50% 100%, rgba(34, 211, 238, 0.08), transparent 50%)
          `,
        }}
      />
      <div className="xp-grid-mesh absolute inset-0 opacity-[0.22]" />
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[110px]" />
      <div className="absolute inset-0 opacity-[0.04] xp-noise" />
    </div>
  );
}
