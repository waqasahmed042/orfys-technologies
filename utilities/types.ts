import { Theme, ThemeName, ThemeMode } from "@/lib/themes";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type MenuItem = {
    title: string;
    desc?: string;
    icon: string;
};

export interface Service {
    bgImg: StaticImageData | string;
    iconPath: IconType;
    route: string;
    title: string;
    description: string;
};

export interface Product {
    iconPath: string;
    badge: string;
    badgeColor: "purple" | "blue" | "red";
    title: string;
    description: string;
    features: string[];
    ctaText: string;
    ctaHref: string;
};

export interface TrustFactor {
    iconPath: string;
    title: string;
    description: string;
};

export interface ThemeContextType {
    theme: Theme;
    themeName: ThemeName;
    mode: ThemeMode;
    setThemeName: (name: ThemeName) => void;
    setMode: (mode: ThemeMode) => void;
    toggleMode: () => void;
};