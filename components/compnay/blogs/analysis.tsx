import React from 'react';
import { AnalysisProps } from '@/utilities/types';

const Analysis: React.FC<AnalysisProps> = ({
    title,
    description,
    pro_tip_title,
    pro_tip_description,
    conclusion,
}) => {
    return (
        <div
            id="analysis"
            className="mb-16"
            style={{ color: "var(--text-primary)" }}
        >
            <h2
                className="text-xl md:text-2xl lg:text-4xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
            >
                {title}
            </h2>

            <p
                style={{ color: "var(--text-secondary)" }}
                className='text-sm md:text-md lg:text-lg leading-relaxed'
            >
                {description}
            </p>

            {/* Pro Tip Box */}
            <div
                className="p-8 rounded-3xl border my-8"
                style={{
                    background: "rgba(211, 164, 255, 0.05)",
                    borderColor: "rgba(211, 164, 255, 0.2)"
                }}
            >
                <h4
                    className="font-bold mb-4"
                    style={{ color: "var(--accent-primary)" }}
                >
                    {pro_tip_title}
                </h4>

                <p
                    className="text-sm italic text-sm md:text-md lg:text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                >
                    {pro_tip_description}
                </p>
            </div>

            <p
                style={{ color: "var(--text-secondary)" }}
                className='text-sm md:text-md lg:text-lg leading-relaxed'
            >
                {conclusion}
            </p>
        </div>
    );
};

export default Analysis;