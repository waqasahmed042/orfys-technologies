"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { CiDark, CiLight } from "react-icons/ci";

export default function ModeToggle() {
  const { mode, toggleMode } = useTheme();

  return (
    <button
      onClick={toggleMode}
      className="flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer border border-[var(--border-default)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-colors"
      aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
    >
      {mode === "dark" ? (
        <CiLight size={20} />
      ) : (
        <CiDark size={20} />
      )}
    </button>
  );
}
