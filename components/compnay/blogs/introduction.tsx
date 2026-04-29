import React from 'react';

interface IntroductionProps {
    title: string;
    description: string;
}

const Introduction: React.FC<IntroductionProps> = ({ title, description }) => {
    return (
        <section
            id="introduction"
            className="pb-16"
        >
            {/* Section Header */}
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 tracking-tight text-[var(--text-primary)]">
                {title}
            </h2>

            {/* Description Content */}
            <p className="text-sm md:text-md lg:text-lg leading-relaxed text-[var(--text-secondary)]">
                {description}
            </p>
        </section>
    );
};

export default Introduction;