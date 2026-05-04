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
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-brand-dark mb-6">{title}</h2>
            <p className='text-sm md:text-md lg:text-lg leading-relaxed'>{description}</p>
        </section>
    );
};

export default Introduction;