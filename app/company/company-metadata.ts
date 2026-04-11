import type { Metadata } from "next";

export const company: Metadata = {
    title: "Company",
    description:
        "Discover our company's mission, vision, and values. Learn about our team, culture, and commitment to innovation. Explore our history, achievements, and future goals as we strive to make a positive impact in our industry and community.",
};

export const companyMetadataMap: Record<string, Metadata> = {
    "company": company,

    "about-us": {
        title: "About US",
        description: "Learn about our company's mission, vision, and values. Discover how we are driving innovation and making a difference in our industry.",
    },

    "blogs": {
        title: "Corporate Blog",
        description: "Read the latest insights, articles, and thought leadership from our team. Stay informed about industry trends and company updates.",
    },

    "news": {
        title: "News",
        description: "Stay updated with our latest news, announcements, and media coverage. Get all the important company updates in one place.",
    },

    "people": {
        title: "People",
        description: "Meet the talented individuals behind our success. Learn about our leadership team and our diverse workforce driving innovation.",
    },

    "careers": {
        title: "Careers",
        description: "Explore exciting career opportunities with our company. Join our team and grow your career in a dynamic and innovative environment.",
    },

    "engagement-models": {
        title: "Engagement Models",
        description: "Discover the various engagement models we offer to our clients, ensuring flexibility, efficiency, and tailored solutions for every project.",
    }
};