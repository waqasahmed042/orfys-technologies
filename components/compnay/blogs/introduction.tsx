import React from 'react';

interface IntroductionProps {
    title: string;
    description: string;
};

const Introduction: React.FC<IntroductionProps> = ({ title, description }) => {
    return (
        <section
            id="introduction"
            className="prose prose-lg max-w-none mb-16"
            style={{ color: "var(--text-primary)" }}
        >
            <h2 className="text-3xl font-extrabold text-brand-dark mb-6">{title}</h2>
            <p>{description}</p>
        </section>
    );
};

export default Introduction;