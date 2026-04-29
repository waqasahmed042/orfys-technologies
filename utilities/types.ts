import { Theme, ThemeName, ThemeMode } from "@/lib/themes";
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

type ServiceItem = {
    icon: React.ReactNode;
    title: string;
    desc: string;
    longDesc?: string;
};

export type ServiceSection = {
    title: string;
    subtitle: string;
    items: ServiceItem[];
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
        paragraphs: readonly string[];
        bulletin?: readonly string[];
    };
};

export interface HeroProps {
    title: string;
    description: string;
    buttonText: string;
    image: StaticImageData | string;
    imageAlt: string;
};

export interface BlogsHeroProps {
    title: string;
    description: string;
    published: string;
    categories: string[];
    image: StaticImageData | string;
    imageAlt: string;
};

export interface NoDataFoundProps {
    category?: string;
    clearCategory?: () => void;
};

export interface CounterProps {
    target: number;
    duration?: number;
};

export interface UploadFilesProps {
    onFilesChange: (files: FilePreviewProps[]) => void;
};

export interface FilePreviewProps {
    name: string;
    type: string;
    size: number;
    base64?: string;
};

interface ConclusionProps {
    title?: string;
    description: string;
    key_words?: string[];
};

export interface MainConclusionProps {
    conclusion: ConclusionProps;
};

interface Section {
    title: string;
    description_1: string;
    description_2: string;
    description_3: string;
    key_words?: string[];
};

export interface MainContentProps {
    main_content: Section[];
};

export interface RelatedPostsProps {
    currentSlug: string;
    relatedPosts: string[];
};

interface KeyPoint {
    title: string;
    description: string;
};

export interface KeyTakeawaysProps {
    key_takeaways?: KeyPoint[];
};