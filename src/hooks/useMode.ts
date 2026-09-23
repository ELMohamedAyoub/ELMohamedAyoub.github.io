import { useCallback, useEffect, useState } from "react";
import type { Mode } from "@/content/site";

const readMode = (): Mode =>
  new URLSearchParams(window.location.search).get("mode") === "personal"
    ? "personal"
    : "professional";

// Mode lives in ?mode= so each view is linkable. Professional = dark, personal = light.
export function useMode(): [Mode, () => void] {
  const [mode, setMode] = useState<Mode>(readMode);

  useEffect(() => {
    const onPop = () => setMode(readMode());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "professional");
  }, [mode]);

  const toggle = useCallback(() => {
    const next: Mode = mode === "professional" ? "personal" : "professional";
    const url = new URL(window.location.href);
    url.searchParams.set("mode", next);
    window.history.pushState({}, "", url);
    setMode(next);
  }, [mode]);

  return [mode, toggle];
}
