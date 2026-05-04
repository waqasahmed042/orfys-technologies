import React from 'react';
import { MainConclusionProps } from '@/utilities/types';

const Conclusion: React.FC<MainConclusionProps> = ({ conclusion }) => {
    return (
        <div
            id="conclusion"
            className="p-6 md:p-8 rounded-3xl mb-16 relative overflow-hidden"
            style={{
                color: "#ffffff",
                backgroundColor: "var(--text-primary)"
            }}
        >
            {/* Content */}
            <div className="relative z-10">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-extrabold mb-4">
                    {conclusion.title ?? "Conclusion"}
                </h2>

                <p
                    style={{ color: "rgba(255,255,255,0.75)" }}
                    className="text-sm md:text-md lg:text-md leading-relaxed"
                >
                    {conclusion.description}
                </p>
            </div>

            {/* Glow effect (purple blob) */}
            <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
                style={{
                    backgroundColor: "rgba(124, 58, 237, 0.2)",
                    transform: "translate(50%, -50%)"
                }}
            />
        </div>
    );
};

export default Conclusion;