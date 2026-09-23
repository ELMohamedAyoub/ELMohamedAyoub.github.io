// Small decorative SVGs in the style of an illuminated manuscript.

export const Divider = () => (
  <div className="divider" aria-hidden="true">
    <span className="divider-line" />
    <svg width="20" height="20" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="2" fill="currentColor" />
      <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>
    <span className="divider-line divider-line-rev" />
  </div>
);

export const Compass = () => (
  <div className="compass" aria-hidden="true">
    <svg width="64" height="64" viewBox="0 0 64 64" className="spin-slow">
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
      <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M32 2 V62 M2 32 H62" stroke="currentColor" strokeWidth="0.4" />
      <path d="M11 11 L53 53 M53 11 L11 53" stroke="currentColor" strokeWidth="0.3" />
      <circle cx="32" cy="32" r="2" fill="currentColor" />
    </svg>
  </div>
);

// Eight-point star that turns beside the mode toggle.
export const Sun = ({ reverse = false }: { reverse?: boolean }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    className={`sun ${reverse ? "sun-reverse" : ""}`}
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
    <circle cx="11" cy="11" r="1.2" fill="currentColor" />
    {Array.from({ length: 8 }, (_, i) => (
      <path
        key={i}
        d="M11 1.5 L11 5"
        stroke="currentColor"
        strokeWidth={i % 2 ? 0.5 : 0.9}
        strokeLinecap="round"
        transform={`rotate(${i * 45} 11 11)`}
      />
    ))}
  </svg>
);

const CORNERS = ["tl", "tr", "bl", "br"] as const;

export const Filigree = () => (
  <div className="filigree" aria-hidden="true">
    {CORNERS.map((corner) => (
      <svg key={corner} width="22" height="22" viewBox="0 0 24 24" className={`corner corner-${corner}`}>
        <path d="M2 2 L8 2 L2 8 Z M2 2 L4 4 L2 6 Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
      </svg>
    ))}
  </div>
);
