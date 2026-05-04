import { slugify } from "@/utilities/slugify";

export const navigationMenus = {
    Services: [
        "Software Development",
        "Workflow Automation",
        "Integration Services",
        "Data Analytics",
        "Mobile Solutions",
        "Security & Compliance",
    ],

    Technologies: [
        "React",
        "Next.js",
        "Node.js",
        "API Development",
        "Python",
        "AI/ML",
        "AWS",
        "Cloud Infrastructure",
        "Docker",
        "DevOps",
        "n8n",
        "Automation Tools",
        "Firebase",
        "Realtime Database",
        "Data Visualization",
        "Dashboards",
    ],

    Industries: [
        "Healthcare & Finance",
        "E-Commerce & Logistics",
        "Gaming, Edu & Energy",
        "Crypto & Blockchain",
        "Media & Emerging",
    ],

    Expertise: [
        "Business Solutions",
        "Management Software",
        "Advanced Tech",
    ],
};

type FilterKeys = "service" | "tech" | "industry" | "expertise";
type NavigationKey = keyof typeof navigationMenus;

export const filterKeyMap: Record<NavigationKey, FilterKeys> = {
    Services: "service",
    Technologies: "tech",
    Industries: "industry",
    Expertise: "expertise",
};

import case_1 from "@/public/portfolio/case-study/case-1.png";
import case_2 from "@/public/portfolio/case-study/case-2.png";
import case_3 from "@/public/portfolio/case-study/case-3.png";
import case_4 from "@/public/portfolio/case-study/case-4.png";
import case_5 from "@/public/portfolio/case-study/case-5.png";
import case_6 from "@/public/portfolio/case-study/case-6.png";

export const projectsData = [
    {
        service: "Software Development",
        subService: "Enterprise Systems",
        title: "AI-Assisted Multi-lingual PIM System for Manufacturing",
        description: "Built a scalable product information management system with multi-language AI support for global manufacturing operations.",
        tech: ["React", "Node.js", "MongoDB", "AI APIs", "E-Commerce"],
        industry: "E-Commerce",
        hiddenTags: ["PIM", "Product Management", "Multi-language", "AI Integration", "Manufacturing", "Scalable System"],
        img: case_1,
        clientOverview: {
            illustration: "Client Overview Illustration",
            title: "Overview Of Our Client",
            paragraphs: [
                "Our client was a leading European banking institution, implementing SEPA payments and processing massive volumes of transfers every day. They operated under strict regulatory oversight and required live compliance checks to ensure that every transaction followed EU standards.",
                "In this regard, the bank needed a high-throughput solution that could integrate into their core payment pipelines, as well as maintain full auditability, zero downtime, and the ability to scale horizontally during peak transaction periods."
            ]
        },
        challenge: {
            illustration: "Challenge Illustration",
            title: "Challenge",
            paragraphs: [],
            bulletin: [
                "Strict and evolving EU regulations requiring compliance checks for every single transfer.",
                "Extremely high throughput demands, reaching tens of thousands of SEPA requests per second (a \"heavy load\" even for the largest EU banks).",
                "The need for zero downtime processing, since any interruption in payment pipelines may result in massive financial penalties.",
                "Granular analysis of large batch files, where each transfer must be screened individually without losing batch-level context."
            ]
        },
        mainGoals: {
            illustration: "Main Goals Illustration",
            title: "Main Goals",
            paragraphs: ["To fulfil all the requirements of the project, we defined the following goals:"],
            bulletin: [
                "Automate ALR/AML compliance checks for instant SEPA payments.",
                "Categorize transactions into Accepted, Suspicious, and Manual Review flows.",
                "Integrate into bank core processing pipelines without introducing significant latency.",
                "Use sharding and horizontal scaling to handle peak loads (e.g., end-of-month salary runs).",
                "Provide reliable message storage and searchability for audit trails and regulatory reporting.",
                "Implement an active-active high availability architecture with no single point of failure."
            ]
        },
        projectOverview: {
            illustration: "Project Overview Illustration",
            title: "Project Overview",
            paragraphs: [
                "We built a high-throughput financial middleware platform based on stream processing and distributed messaging. Apache Kafka handled reliable ingestion and queueing, allowing the system to process massive SEPA flows without message loss.",
                "SEPA messages and processing results were stored in sharded MongoDB, which enabled horizontal scaling, high-concurrency writes, and fast lookups for auditing and regulatory reporting.",
                "The infrastructure ran in an active-active configuration to eliminate single points of failure and ensure uninterrupted processing during outages or maintenance."
            ],
            bulletin: []
        },
        solution: {
            illustration: "Solution Illustration",
            title: "Solution",
            paragraphs: [
                "The result represented a high-availability financial middleware solution that could operate directly inside SEPA payment pipelines. It intercepted large incoming SEPA batches, split them into individual transfers, and performed automated regulatory checks on both transaction-level messages and the batch as a whole.",
                "Each payment was classified as Accepted, Suspicious, or requiring Manual Review, guaranteeing that only compliant transactions were forwarded for execution."
            ],
            bulletin: [
                "Batch splitting and transaction-level parsing of SEPA files with context-aware re-assembly of validated transfers.",
                "Automated tri-state compliance classification into Accepted, Suspicious, and Manual flows.",
                "Live message ingestion and queueing powered by Apache Kafka.",
                "Active-active high-availability infrastructure complying with DORA standards.",
                "Low-latency compliance checks optimized for tens of thousands of requests per second."
            ]
        },
        coreTeam: {
            illustration: "Core Team",
            title: "Core Team",
            paragraphs: [],
            bulletin: [
                "Fintech Systems Architect: Designed the SEPA processing model and ISO 20022 compliance approach.",
                "Distributed Systems Engineers: Implemented Kafka-based ingestion and tuned active-active synchronization.",
                "NoSQL Database Expert: Built MongoDB sharding strategy and optimized high-concurrency storage.",
                "Compliance & Regulatory Logic Developers: Developed ALR/AML rule sets and transaction classification logic."
            ]
        },
        result: {
            illustration: "Results",
            title: "Results",
            paragraphs: ["The system enabled reliable and high-speed verification of SEPA transaction compliance at the scale required by major European banks. In particular, we achieved:"],
            bulletin: [
                "Reduced regulatory risks by automatically checking each SEPA message.",
                "Improved operational efficiency by automating large-scale transaction filtering.",
                "High performance under peak loads, providing stable processing for large banking environments.",
                "Better infrastructure resilience thanks to an active-active architecture."
            ]
        },
    },
    {
        service: "Workflow Automation",
        subService: "Business Automation",
        title: "AI-Powered News Scanning & Reporting Automation",
        description: "Automated news aggregation, filtering, and report generation using AI workflows and APIs.",
        tech: ["n8n", "OpenAI", "Node.js", "Webhooks", "Media & AI"],
        industry: "Media & AI",
        hiddenTags: ["Automation", "News Aggregation", "AI Workflow", "Content Processing", "Web Scraping"],
        img: case_2,
        clientOverview: {
            illustration: "Media Client Illustration",
            title: "Digital Media Agency",
            paragraphs: [
                "The client is a global media monitoring firm that provides real-time news insights to corporate executives. They handle thousands of news sources and social feeds, requiring instant analysis and summarization.",
                "They needed an automated way to filter noise and deliver high-quality, relevant reports to their subscribers without manual intervention."
            ]
        },
        challenge: {
            illustration: "Data Overload Illustration",
            title: "Challenge",
            paragraphs: ["Managing massive data streams was proving impossible for a human team:"],
            bulletin: [
                "High volume of duplicate or irrelevant news stories across different regions.",
                "Difficulty in categorizing complex topics like emerging tech or geopolitical shifts accurately.",
                "Scaling report generation to 24/7 coverage without hiring dozens of analysts.",
                "Integrating multiple third-party APIs into a cohesive, reliable workflow."
            ]
        },
        mainGoals: {
            illustration: "Automation Goals Illustration",
            title: "Main Goals",
            paragraphs: ["Our objectives centered on speed and intelligence:"],
            bulletin: [
                "Deploy an autonomous pipeline to aggregate news from 500+ sources.",
                "Use AI to rank and score news relevance based on client-specific keywords.",
                "Automate the generation of daily executive briefs via Slack and Email.",
                "Ensure the system can recover from API rate limits or downtime automatically."
            ]
        },
        projectOverview: {
            illustration: "Workflow Illustration",
            title: "Project Overview",
            paragraphs: [
                "We designed an n8n-based automation framework that acts as the central nervous system for their data intake. Using custom Node.js hooks, we connected scraping tools to OpenAI's GPT-4 for deep text analysis.",
                "The system uses a vector-based filtering approach to ensure that only unique, high-value stories reach the final reporting stage."
            ],
            bulletin: []
        },
        solution: {
            illustration: "AI Solution Illustration",
            title: "Solution",
            paragraphs: ["We built a multi-layered AI agent workflow:"],
            bulletin: [
                "Automated ingestion from RSS, Webhooks, and Scraping APIs.",
                "Topic modeling and sentiment analysis using Large Language Models.",
                "Custom report templates that auto-populate based on filtered content.",
                "A feedback loop where users can 'upvote' stories to improve AI accuracy."
            ]
        },
        coreTeam: {
            illustration: "Automation Team",
            title: "Core Team",
            paragraphs: [],
            bulletin: [
                "Automation Architect: Designed the n8n logic and error-handling flows.",
                "AI Engineer: Configured LLM prompts and fine-tuning for news classification.",
                "Backend Developer: Built custom API integrations for legacy data sources."
            ]
        },
        result: {
            illustration: "Automation Results",
            title: "Results",
            paragraphs: ["The client saw a complete transformation in their delivery speed:"],
            bulletin: [
                "90% reduction in manual content curation time.",
                "Zero-latency reporting, with news reaching clients within 5 minutes of publication.",
                "300% increase in the number of news sources monitored simultaneously."
            ]
        }
    },
    {
        service: "Integration Services",
        subService: "Cloud Integrations",
        title: "Infrastructure & Database Migration to AWS",
        description: "Migrated legacy systems to AWS with secure API integrations and optimized cloud architecture.",
        tech: ["AWS", "Docker", "Node.js", "Terraform", "CloudWatch", "Software"],
        industry: "Software",
        hiddenTags: ["AWS Migration", "Cloud Architecture", "DevOps", "CI/CD", "System Integration"],
        img: case_3,
        clientOverview: {
            illustration: "SaaS Client Overview",
            title: "SaaS Management Provider",
            paragraphs: [
                "The client provides resource management software for international logistics companies. Their legacy infrastructure was struggling with high maintenance costs and unpredictable downtime.",
                "They sought a complete transition to a modern, cloud-native environment to support their expanding global user base."
            ]
        },
        challenge: {
            illustration: "Migration Challenge",
            title: "Challenge",
            paragraphs: ["The transition faced several technical hurdles:"],
            bulletin: [
                "Legacy monolithic database that was difficult to shard.",
                "Highly sensitive customer data requiring strict encryption and compliance.",
                "The need for a 'zero-downtime' migration strategy to avoid disrupting global logistics.",
                "Lack of automated deployment pipelines in the existing setup."
            ]
        },
        mainGoals: {
            illustration: "Cloud Goals",
            title: "Main Goals",
            paragraphs: ["We targeted resilience and scalability:"],
            bulletin: [
                "Migrate all services to AWS with 100% data integrity.",
                "Implement a containerized architecture using Docker and ECS.",
                "Enable auto-scaling to handle variable traffic loads.",
                "Build a fully automated CI/CD pipeline for rapid software updates."
            ]
        },
        projectOverview: {
            illustration: "AWS Architecture",
            title: "Project Overview",
            paragraphs: [
                "We re-architected the monolith into a microservices-friendly structure. Using AWS RDS for the database and S3 for storage, we ensured that the application was decoupled and highly available.",
                "Security was baked in using IAM roles, VPC subnets, and AWS Shield for DDoS protection."
            ],
            bulletin: []
        },
        solution: {
            illustration: "Cloud Solution",
            title: "Solution",
            paragraphs: ["Our solution involved a staged migration approach:"],
            bulletin: [
                "Infrastructure-as-Code (IaC) setup using Terraform.",
                "Blue-Green deployment strategy to ensure zero downtime during cutover.",
                "Centralized logging and monitoring via CloudWatch and ELK stack.",
                "Enhanced security protocols for data-at-rest and data-in-transit."
            ]
        },
        coreTeam: {
            illustration: "Cloud Team",
            title: "Core Team",
            paragraphs: [],
            bulletin: [
                "Cloud Architect: Lead the AWS infrastructure design and migration strategy.",
                "DevOps Engineer: Built the CI/CD pipelines and Docker configurations.",
                "Database Specialist: Managed the migration from legacy SQL to AWS RDS."
            ]
        },
        result: {
            illustration: "Migration Result",
            title: "Results",
            paragraphs: ["The migration delivered immediate operational improvements:"],
            bulletin: [
                "40% reduction in monthly infrastructure costs.",
                "99.99% uptime achieved over the first six months.",
                "Deployment times reduced from 4 hours to under 15 minutes."
            ]
        }
    },
    {
        service: "Data Analytics",
        subService: "Business Intelligence",
        title: "AI Blockchain Market Analysis Dashboard",
        description: "Developed a real-time analytics dashboard for crypto market trends using AI-driven insights.",
        tech: ["Python", "Next.js", "Chart.js", "APIs", "Blockchain"],
        industry: "Blockchain",
        hiddenTags: ["Crypto Analytics", "Real-time Data", "Dashboard", "AI Predictions", "Market Trends"],
        img: case_4,
        clientOverview: {
            illustration: "Crypto Client Illustration",
            title: "Crypto Venture Fund",
            paragraphs: [
                "A boutique investment firm focused on early-stage blockchain projects. They needed a way to track market sentiment and on-chain metrics in real-time to make informed trading decisions.",
                "The goal was to move away from fragmented data sources into a single, unified intelligence platform."
            ]
        },
        challenge: {
            illustration: "Data Complexity",
            title: "Challenge",
            paragraphs: ["The crypto market presents unique data challenges:"],
            bulletin: [
                "Fragmentation of data across dozens of exchanges and blockchains.",
                "High frequency of data updates (sub-second changes).",
                "Extreme noise in social media sentiment that skews analysis.",
                "Complexity in visualizing multi-dimensional on-chain data."
            ]
        },
        mainGoals: {
            illustration: "Analytics Goals",
            title: "Main Goals",
            paragraphs: ["Our focus was on clarity and prediction:"],
            bulletin: [
                "Aggregating price, volume, and social data into one interface.",
                "Developing AI models to predict short-term volatility.",
                "Visualizing on-chain whale movements and wallet clusters.",
                "Creating a customizable alert system for unusual market activity."
            ]
        },
        projectOverview: {
            illustration: "Dashboard Overview",
            title: "Project Overview",
            paragraphs: [
                "We built a high-performance dashboard using Next.js for the frontend and Python for the heavy-duty data processing backend. WebSockets were used for live updates, ensuring the UI is always in sync with the market.",
                "AI models were trained on historical market data to identify patterns that precede significant price swings."
            ],
            bulletin: []
        },
        solution: {
            illustration: "Visual Solution",
            title: "Solution",
            paragraphs: ["We delivered a custom BI suite:"],
            bulletin: [
                "Real-time data ingestion via exchange APIs and blockchain nodes.",
                "Natural Language Processing (NLP) for sentiment analysis on Twitter and Discord.",
                "Advanced charting using Chart.js with technical indicator overlays.",
                "Secure user authentication for private investment data access."
            ]
        },
        coreTeam: {
            illustration: "Analytics Team",
            title: "Core Team",
            paragraphs: [],
            bulletin: [
                "Data Scientist: Developed the volatility prediction and sentiment models.",
                "Frontend Lead: Built the Next.js dashboard and real-time chart integrations.",
                "Blockchain Developer: Integrated on-chain data scraping from Ethereum and Solana."
            ]
        },
        result: {
            illustration: "Analytics Results",
            title: "Results",
            paragraphs: ["The platform became a core tool for the fund's strategy:"],
            bulletin: [
                "Significant increase in alpha generation through faster sentiment detection.",
                "Unified view reduced 'tab fatigue' and improved decision-making speed.",
                "24/7 monitoring and alerts prevented exposure to three major market crashes."
            ]
        }
    },
    {
        service: "Mobile Solutions",
        subService: "Cross-Platform Apps",
        title: "Cocktail Recipes Mobile App with Smart Recommendations",
        description: "Built a cross-platform mobile app with personalized cocktail suggestions based on user preferences.",
        tech: ["React Native", "Firebase", "AI APIs", "Media & AI"],
        industry: "Media & AI",
        hiddenTags: ["Mobile App", "Recommendation Engine", "User Personalization", "Food & Beverage", "Cross-platform"],
        img: case_5,
        clientOverview: {
            illustration: "Mobile App Client",
            title: "Lifestyle Content Creator",
            paragraphs: [
                "A popular mixologist and content creator wanted to monetize their expertise through a mobile app. They aimed to provide a premium, interactive experience for cocktail enthusiasts at home.",
                "The app needed to feel personal and modern, moving beyond a simple digital recipe book."
            ]
        },
        challenge: {
            illustration: "App Challenge",
            title: "Challenge",
            paragraphs: ["Creating a sticky mobile experience involved several factors:"],
            bulletin: [
                "Developing an intuitive UI that works seamlessly on both iOS and Android.",
                "Creating a recommendation engine that suggests drinks based on available home ingredients.",
                "Optimizing high-resolution image and video loading for a smooth user experience.",
                "Implementing offline access so recipes are available without a connection."
            ]
        },
        mainGoals: {
            illustration: "Mobile Goals",
            title: "Main Goals",
            paragraphs: ["The primary focus was user engagement:"],
            bulletin: [
                "Launch a high-performance app using React Native.",
                "Integrate an AI 'Virtual Bartender' for personalized chat-based recipes.",
                "Implement a robust 'My Bar' feature for inventory tracking.",
                "Ensure fast, secure user profiles and favorites synchronization via Firebase."
            ]
        },
        projectOverview: {
            illustration: "Mobile Tech Stack",
            title: "Project Overview",
            paragraphs: [
                "We chose React Native to maximize code reuse while maintaining native performance. Firebase was used as the backend for its real-time database and easy social authentication integration.",
                "The AI component used a lightweight GPT-based model to understand natural language requests like 'Something sour with Gin'."
            ],
            bulletin: []
        },
        solution: {
            illustration: "App Solution",
            title: "Solution",
            paragraphs: ["We created an immersive beverage platform:"],
            bulletin: [
                "Ingredient-based search algorithm with smart substitutions.",
                "Step-by-step interactive mixing guides with video snippets.",
                "User social sharing and recipe rating community features.",
                "Personalized taste profile based on user likes and history."
            ]
        },
        coreTeam: {
            illustration: "Mobile Team",
            title: "Core Team",
            paragraphs: [],
            bulletin: [
                "Mobile Developer: Lead React Native development and cross-platform optimization.",
                "UI/UX Designer: Crafted the high-end, premium look and feel of the app.",
                "Backend Engineer: Set up Firebase functions and AI API bridges."
            ]
        },
        result: {
            illustration: "App Results",
            title: "Results",
            paragraphs: ["The app saw rapid adoption post-launch:"],
            bulletin: [
                "Reached Top 50 in the App Store Food & Drink category within 3 months.",
                "High user retention (45% Daily Active Users).",
                "Average user session length of 12 minutes, indicating high engagement with content."
            ]
        }
    },
    {
        service: "Security & Compliance",
        subService: "Security Audits",
        title: "Enterprise Application Security & Compliance System",
        description: "Implemented security audits, vulnerability detection, and compliance tracking for enterprise applications.",
        tech: ["Node.js", "OWASP Tools", "JWT", "Healthcare", "Cloud Security"],
        industry: "Healthcare",
        hiddenTags: ["Cybersecurity", "OWASP", "Vulnerability Scan", "Compliance", "Data Protection"],
        img: case_6,
        clientOverview: {
            illustration: "Security Client Overview",
            title: "Health-Tech Enterprise",
            paragraphs: [
                "A large healthcare provider managing millions of patient records. They needed to modernize their internal portals while meeting strict HIPAA and GDPR compliance requirements.",
                "The focus was on building a security-first environment to protect against the rising threat of medical data breaches."
            ]
        },
        challenge: {
            illustration: "Security Challenge",
            title: "Challenge",
            paragraphs: ["Securing medical data is a high-stakes task:"],
            bulletin: [
                "Legacy portals with known vulnerabilities and outdated auth protocols.",
                "Complex regulatory requirements that vary by region and state.",
                "The need for detailed audit logs for every single data access event.",
                "Balancing high security with ease of use for medical staff."
            ]
        },
        mainGoals: {
            illustration: "Security Goals",
            title: "Main Goals",
            paragraphs: ["We prioritized compliance and threat prevention:"],
            bulletin: [
                "Perform a complete security audit based on OWASP Top 10.",
                "Implement Multi-Factor Authentication (MFA) and RBAC.",
                "Automate vulnerability scanning in the development pipeline.",
                "Achieve 100% compliance with industry-standard security benchmarks."
            ]
        },
        projectOverview: {
            illustration: "Security Framework",
            title: "Project Overview",
            paragraphs: [
                "We overhauled the entire authentication layer using JWT with rotating keys. A custom security middleware was developed for the Node.js backend to intercept and validate every request against the user's role and permission set.",
                "Logs are streamed to a tamper-proof storage system to ensure audit integrity."
            ],
            bulletin: []
        },
        solution: {
            illustration: "Security Solution",
            title: "Solution",
            paragraphs: ["We implemented a multi-layered security suite:"],
            bulletin: [
                "End-to-end encryption for all patient-identifiable information (PII).",
                "Automated CI/CD security gates to catch code vulnerabilities early.",
                "Continuous monitoring for suspicious login patterns or brute-force attempts.",
                "Staff training portals to reduce social engineering risks."
            ]
        },
        coreTeam: {
            illustration: "Security Team",
            title: "Core Team",
            paragraphs: [],
            bulletin: [
                "Cybersecurity Lead: Performed audits and designed the security architecture.",
                "Backend Security Engineer: Implemented auth protocols and middleware.",
                "Compliance Specialist: Ensured all features met HIPAA and GDPR standards."
            ]
        },
        result: {
            illustration: "Security Results",
            title: "Results",
            paragraphs: ["The project established a new gold standard for the client:"],
            bulletin: [
                "Successfully passed 3 third-party security audits without major findings.",
                "Zero data breaches or security incidents reported since deployment.",
                "Full regulatory compliance achieved, opening up new partnership opportunities."
            ]
        }
    },
].map((project) => ({ ...project, slug: slugify(project.title) }));