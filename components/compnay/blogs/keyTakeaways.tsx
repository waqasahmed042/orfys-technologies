import React from 'react';
import { KeyTakeawaysProps } from '@/utilities/types';

const KeyTakeaways: React.FC<KeyTakeawaysProps> = ({
    key_takeaways,
}) => {
    const points = key_takeaways || [];

    if (points.length === 0) {
        return null;
    };

    return (
        <section
            id="key-takeaways"
            className="scroll-mt-24 pb-16"
        >
            <div className="mb-10">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tight mb-3">
                    Key Takeaways
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {points.map((point, index) => (
                    <div
                        key={index}
                        className="bg-[var(--card-bg)] border border-[var(--border-default)] 
                            rounded-2xl p-7 hover:border-[var(--accent-secondary)] 
                            transition-all duration-300 group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-[var(--accent-secondary)]/10 
                                flex items-center justify-center text-[var(--accent-secondary)] 
                                font-semibold text-sm flex-shrink-0 mt-1">
                                {index + 1}
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg mb-2.5 transition-colors">
                                    {point.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KeyTakeaways;