export type MenuItem = {
    title: string;
    desc?: string;
    icon: string;
};

// 1. The main data object
export const dropdownData = {
    "Services": {
        "Software Development": [
            { title: "Web Development", desc: "Modern & scalable web apps", icon: "🌐" },
            { title: "Mobile Apps", desc: "iOS and Android excellence", icon: "📱" },
            { title: "Office Add-ins", desc: "Word, Outlook, Excel & PPT", icon: "🖇️" },
        ],
        "Web Services": [
            { title: "Custom Software", desc: "Tailored enterprise tools", icon: "💻" },
            { title: "API Integration", desc: "Seamless connectivity", icon: "🔌" },
            { title: "Cloud Solutions", desc: "Azure & AWS deployment", icon: "☁️" },
        ],
        "Backend Services": [
            { title: "Server Architecture", desc: "High-performance setups", icon: "⚙️" },
            { title: "Database Design", desc: "MongoDB & SQL Expert", icon: "🗄️" },
            { title: "Microservices", desc: "Scalable backend logic", icon: "🧩" },
        ],
        "Expert Support": [
            { title: "Consulting", desc: "Strategic tech roadmap", icon: "🤝" },
            { title: "QA Testing", desc: "Zero-bug guarantee", icon: "🧪" },
            { title: "Maintenance", desc: "24/7 reliability", icon: "🛠️" },
        ],
        "Microsoft Add-ins": [
            { title: "Outlook Plugins", desc: "Email automation", icon: "📧" },
            { title: "Excel Solutions", desc: "Data processing", icon: "📊" },
            { title: "Word/PPT Tools", desc: "Document plugins", icon: "📝" },
        ],
        "Google Workspace": [
            { title: "Gmail Add-ons", desc: "Inbox extensions", icon: "✉️" },
            { title: "Sheets & Docs", desc: "Productivity tools", icon: "📄" },
            { title: "Drive & Calendar", desc: "Integrated ecosystem", icon: "🗓️" },
        ]
    },
    "Technologies": {
        "Frontend": [
            { title: "React.js", desc: "Dynamic UI", icon: "⚛️" },
            { title: "Next.js", desc: "SSR & Performance", icon: "🚀" },
            { title: "Tailwind CSS", desc: "Modern Styling", icon: "🎨" },
        ],
        "Backend": [
            { title: "Node.js", desc: "Fast JS Runtime", icon: "🟢" },
            { title: "Python/Django", desc: "Secure & Robust", icon: "🐍" },
            { title: "Express.js", desc: "Minimalist API", icon: "⚡" },
        ],
        "Database": [
            { title: "MongoDB", desc: "NoSQL Database", icon: "🍃" },
            { title: "PostgreSQL", desc: "Relational SQL", icon: "🐘" },
            { title: "Redis", desc: "Caching & Speed", icon: "🛑" },
        ],
        "Mobile": [
            { title: "React Native", desc: "Cross-platform", icon: "📱" },
            { title: "Flutter", desc: "Native Performance", icon: "🐦" },
            { title: "Swift", desc: "iOS Native", icon: "🍎" },
        ],
        "Cloud": [
            { title: "AWS", desc: "Amazon Web Services", icon: "☁️" },
            { title: "Azure", desc: "Microsoft Cloud", icon: "💠" },
            { title: "Firebase", desc: "Real-time Apps", icon: "🔥" },
        ],
        "Tools": [
            { title: "Docker", desc: "Containerization", icon: "🐋" },
            { title: "Kubernetes", desc: "Orchestration", icon: "☸️" },
            { title: "Git / GitHub", desc: "Version Control", icon: "🐙" },
        ]
    }
} as const;

export const dropdownKeys = ["Services", "Technologies"] as const;

export const navLinks = ["Industries", "Expertise", "Portfolio", "Company"];