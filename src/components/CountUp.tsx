import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  /** A value like "60%" or "200+" — any non-numeric prefix/suffix is kept. */
  value: string;
  durationMs?: number;
}

/**
 * Counts from 0 up to the numeric part of `value` the first time it scrolls
 * into view, preserving any surrounding characters (%, +, etc.). Shows the
 * final value immediately when the user prefers reduced motion.
 */
export function CountUp({ value, durationMs = 1400 }: CountUpProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const hasNumber = match !== null;
  const prefix = match?.[1] ?? "";
  const numeric = match?.[2] ?? "0";
  const suffix = match?.[3] ?? "";
  const target = parseFloat(numeric);
  const decimals = numeric.includes(".") ? 1 : 0;

  const [display, setDisplay] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!hasNumber || reduceMotion || !inView) {
      setDisplay(target);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setDisplay(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // `target`, `hasNumber` derive from the stable `value` string — no array
    // identity in deps, so the effect runs once when it enters view.
  }, [inView, reduceMotion, hasNumber, target, durationMs]);

  if (!hasNumber) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
