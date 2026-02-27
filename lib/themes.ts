export type ThemeName = "default";
export type ThemeMode = "light" | "dark";

export interface Theme {
  name: ThemeName;
  mode: ThemeMode;
  variables: {
    "--bg-primary": string;
    "--bg-secondary": string;
    "--text-primary": string;
    "--text-secondary": string;
    "--accent-primary": string;
    "--accent-secondary": string;
    "--border-default": string;
  };
}

export const themes: Record<ThemeName, Record<ThemeMode, Theme>> = {
  default: {
    light: {
      name: "default",
      mode: "light",
      variables: {
        "--bg-primary": "#FFFFFF",
        "--bg-secondary": "#F9FAFB",
        "--text-primary": "#111827",
        "--text-secondary": "#6B7280",
        "--accent-primary": "#9333EA",
        "--accent-secondary": "#7C3AED",
        "--border-default": "#E5E7EB",
      },
    },
    dark: {
      name: "default",
      mode: "dark",
      variables: {
        "--bg-primary": "#0F172A",
        "--bg-secondary": "#1E293B",
        "--text-primary": "#F1F5F9",
        "--text-secondary": "#CBD5E1",
        "--accent-primary": "#A855F7",
        "--accent-secondary": "#9333EA",
        "--border-default": "#334155",
      },
    },
  },
};

export const getTheme = (themeName: ThemeName, mode: ThemeMode): Theme => {
  return themes[themeName][mode];
};

