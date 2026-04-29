import React from 'react';
import { MainConclusionProps } from '@/utilities/types';

const Conclusion: React.FC<MainConclusionProps> = ({ conclusion }) => {
    return (
        <section id="conclusion">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tight mb-6">
                {conclusion.title ?? "Conclusion"}
            </h2>

            <div className="text-sm md:text-md lg:text-lg leading-relaxed text-[var(--text-secondary)]">
                {conclusion.description}
            </div>

            {conclusion.key_words && conclusion.key_words.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                    <span className="text-sm font-medium text-gray-400">
                        Key Takeaways:
                    </span>

                    {conclusion.key_words.map((word) => (
                        <span
                            key={word}
                            className="text-xs md:text-sm underline text-gray-400 hover:text-gray-600 cursor-pointer transition-colors duration-200"
                        >
                            {word}
                        </span>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Conclusion;