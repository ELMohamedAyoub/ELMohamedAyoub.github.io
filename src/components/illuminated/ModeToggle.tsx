import type { Mode } from "@/content/site";
import { Sun } from "./Ornaments";

interface Props {
  mode: Mode;
  onToggle: () => void;
}

export const ModeToggle = ({ mode, onToggle }: Props) => {
  const isPersonal = mode === "personal";

  return (
    <div className="toggle-row">
      <Sun />
      <button
        type="button"
        className={`toggle ${isPersonal ? "is-personal" : ""}`}
        onClick={onToggle}
        role="switch"
        aria-checked={isPersonal}
        aria-label="Switch between professional and personal view"
      >
        <span className="toggle-indicator" aria-hidden="true" />
        <span className={`toggle-option ${isPersonal ? "" : "active"}`}>
          <span className="toggle-icon">⚙</span> Professional
        </span>
        <span className={`toggle-option ${isPersonal ? "active" : ""}`}>
          <span className="toggle-icon">✦</span> Personal
        </span>
      </button>
      <Sun reverse />
    </div>
  );
};
