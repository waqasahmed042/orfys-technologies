import React from 'react';
import { MainConclusionProps } from '@/utilities/types';

const Conclusion: React.FC<MainConclusionProps> = ({ conclusion }) => {
    return (
        <div
            id="conclusion"
            className="p-10 rounded-3xl mb-16 relative overflow-hidden"
            style={{
                backgroundColor: "var(--text-primary)", // dark theme surface
                color: "#ffffff"
            }}
        >
            {/* Content */}
            <div className="relative z-10">
                <h2 className="text-3xl font-extrabold mb-6">
                    {conclusion.title ?? "Conclusion"}
                </h2>

                <p style={{ color: "rgba(255,255,255,0.75)" }}>
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