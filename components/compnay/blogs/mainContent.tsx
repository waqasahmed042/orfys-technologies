import React from 'react';
import { MainContentProps } from '@/utilities/types';

const MainContent: React.FC<MainContentProps> = ({ main_content }) => {
    return (
        <section id="main-content" className="scroll-mt-24 pb-20">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tight mb-4">
                In-Depth Analysis
            </h2>

            <div className="space-y-20">
                {main_content.map((section, index) => (
                    <article key={index} className="prose prose-invert max-w-none">
                        <h3 className="text-md md:text-lg lg:text-xl font-semibold text-[var(--text-primary)] mb-6">
                            {section.title}
                        </h3>

                        <div className="text-sm md:text-md lg:text-lg leading-relaxed text-[var(--text-secondary)]">
                            {section.description_1}
                        </div>

                        <div className="text-sm md:text-md lg:text-lg leading-relaxed my-2 text-[var(--text-secondary)]">
                            {section.description_2}
                        </div>

                        <div className="text-sm md:text-md lg:text-lg leading-relaxed text-[var(--text-secondary)]">
                            {section.description_3}
                        </div>

                        {section.key_words && (
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="text-sm font-medium text-gray-400">
                                    Key Words:
                                </span>
                                {section.key_words.map((word) => (
                                    <span
                                        key={word}
                                        className="text-xs md:text-sm underline text-gray-400 hover:text-gray-600 cursor-pointer transition-colors duration-200"
                                    >
                                        {word}
                                    </span>
                                ))}
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
};

export default MainContent;