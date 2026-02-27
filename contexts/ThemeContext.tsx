"use client";

import { ThemeName, ThemeMode, getTheme } from "@/lib/themes";
import { ThemeContextType } from "@/utilities/types";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeNameState] = useState<ThemeName>("default");
  const [mode, setModeState] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-name") as ThemeName | null;
    const savedMode = localStorage.getItem("theme-mode") as ThemeMode | null;

    if (savedTheme && savedTheme === "default") {
      setThemeNameState(savedTheme);
    }
    if (savedMode && ["light", "dark"].includes(savedMode)) {
      setModeState(savedMode);
    }
    setMounted(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return;

    const theme = getTheme(themeName, mode);
    const root = document.documentElement;

    Object.entries(theme.variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Save to localStorage
    localStorage.setItem("theme-name", themeName);
    localStorage.setItem("theme-mode", mode);
  }, [themeName, mode, mounted]);

  const setThemeName = (name: ThemeName) => {
    setThemeNameState(name);
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
  };

  const toggleMode = () => {
    setModeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = getTheme(themeName, mode);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeName,
        mode,
        setThemeName,
        setMode,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

