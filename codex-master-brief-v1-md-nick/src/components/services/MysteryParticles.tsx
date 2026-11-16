import { type CSSProperties } from "react";

export function MysteryParticles({ compact = false }: { compact?: boolean }) {
  const scale = compact ? .22 : 1;
  return <>
    <span className="mystery-chest__inner-light" aria-hidden="true" />
    {Array.from({ length: 22 }, (_, i) => <span key={i} className="mystery-pixel mystery-pixel--alive" style={{
      "--pixel-x": `${36 + (i * 7 % 28)}%`,
      "--pixel-size": `${(3 + i % 5) * (compact ? .4 : 1)}px`,
      "--pixel-drift": `${(i % 2 ? 1 : -1) * (12 + i * 3) * scale}px`,
      "--pixel-rise": `${-155 * scale}px`,
      "--pixel-start": `${15 * scale}px`,
      "--pixel-delay": `${-i * .29}s`,
      "--pixel-duration": `${3.1 + (i % 5) * .4}s`,
      "--pixel-color": i % 4 === 0 ? "#fff0f4" : "#ff2447",
    } as CSSProperties} aria-hidden="true" />)}
  </>;
}
