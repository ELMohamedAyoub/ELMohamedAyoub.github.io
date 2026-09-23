import { NAME, PORTRAIT, type Mode } from "@/content/site";

// Four short arcs on a ring, one per quadrant.
const Arcs = ({ r }: { r: number }) => {
  const c = 100;
  const pts = [0, 90, 180, 270].map((deg) => {
    const a = (deg * Math.PI) / 180;
    const b = ((deg + 35) * Math.PI) / 180;
    return `M ${c + r * Math.sin(a)} ${c - r * Math.cos(a)} A ${r} ${r} 0 0 1 ${c + r * Math.sin(b)} ${c - r * Math.cos(b)}`;
  });
  return (
    <>
      {pts.map((d) => (
        <path key={d} d={d} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      ))}
    </>
  );
};

const Rings = () => (
  <svg className="rings" viewBox="0 0 200 200" aria-hidden="true">
    <g className="whirl whirl-slow">
      <circle cx="100" cy="100" r="97" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25" strokeDasharray="1 4" />
    </g>
    <g className="whirl whirl-medium">
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <Arcs r={90} />
    </g>
    <g className="whirl whirl-fast">
      <circle cx="100" cy="100" r="82" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <Arcs r={82} />
    </g>
  </svg>
);

const Face = ({ side }: { side: Mode }) => {
  const photo = PORTRAIT[side];
  const initials = side === "professional" ? "MA" : "A";

  return (
    <div className={`flip-face flip-${side === "professional" ? "front" : "back"}`}>
      <Rings />
      <div className="portrait-disc">
        {photo ? (
          <img src={photo} alt={`${NAME[side]} portrait`} width={300} height={300} />
        ) : (
          <span className="monogram" aria-hidden="true">
            {initials}
          </span>
        )}
      </div>
    </div>
  );
};

export const Portrait = ({ mode, onToggle }: { mode: Mode; onToggle: () => void }) => (
  <button
    type="button"
    className={`flip ${mode === "personal" ? "flipped" : ""}`}
    onClick={onToggle}
    aria-label="Flip portrait to switch view"
  >
    <div className="flip-inner">
      <Face side="professional" />
      <Face side="personal" />
    </div>
  </button>
);
