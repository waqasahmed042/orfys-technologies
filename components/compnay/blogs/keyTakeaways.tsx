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
        <>
            <section className="mb-16" id="key-takeaways">
                <h2 className="text-2xl font-extrabold text-brand-dark mb-8">Key Takeaways</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {points.map((point, index) => (
                        <div
                            key={index}
                            className="border border-[var(--border-default)] 
                            rounded-2xl p-7 hover:border-[var(--accent-secondary)] 
                            transition-all duration-300 group"
                        >
                            <div className="w-8 h-8 rounded-full bg-[var(--accent-secondary)]/10 
                                flex items-center justify-center text-[var(--accent-secondary)] 
                                font-semibold text-sm flex-shrink-0">
                                {index + 1}
                            </div>

                            <h3 className="font-bold text-brand-dark my-2">{point.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed"> {point.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default KeyTakeaways;