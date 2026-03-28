import { Theme, ThemeName, ThemeMode } from "@/lib/themes";
import { Metadata } from "next";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type MenuItem = {
    title: string;
    desc?: string;
    icon: string;
    path?: string;
};

export interface Service {
    bgImg: StaticImageData | string;
    iconPath: IconType;
    route: string;
    title: string;
    description: string;
};

export interface contentMap {
    title: string;
    highlight: string;
    desc: string;
    img: StaticImageData | string;
    alt: string;
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

export interface TestimonialData {
    id: number;
    name: string;
    role: string;
    image: string;
    rating: number;
    text: string;
};

export interface FAQItem {
    question: string;
    answer: string;
};

export type FilterKeys = "service" | "tech" | "industry" | "expertise";

export interface SlugProps {
    params: Promise<{ slug: string }>;
};

export type TechCategory = 'frontend' | 'backend' | 'broker' | 'database' | 'architecture' | 'protocol';

export interface TechCard {
    title: string;
    description: string;
    icon: string;
};

export interface ProjectDataProps {
    data: {
        illustration?: string;
        title?: string;
        paragraphs: string[];
        bulletin?: string[];
    };
};