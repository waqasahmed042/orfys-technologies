import React from 'react';
import { ProjectDataProps } from '@/utilities/types';

const Result: React.FC<ProjectDataProps> = ({ data }) => {
    return (
        <section
            id="results"
            className="py-10 max-w-[1300px] mx-auto px-6 md:py-20 bg-[var(--accent-primary)] text-white"
        >
            <div className="space-y-6">
                {/* Header Section */}
                <div className="space-y-4">
                    <h2 className="text-lg md:text-4xl font-semibold text-white tracking-tight">
                        {data.title}
                    </h2>

                    <div className="space-y-4">
                        {/* Render dynamic intro paragraphs */}
                        {data.paragraphs?.map((p, i) => (
                            <p key={i} className="text-sm md:text-[16px] leading-relaxed text-white">
                                {p}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Bullet List */}
                <ul className="space-y-3">
                    {data.bulletin?.map((res, index) => (
                        <li key={index} className="flex gap-4 items-start group">
                            <span className="mt-2.5 h-2 w-2 rounded-full bg-white shrink-0" />
                            <p className="text-sm md:text-[15px] leading-relaxed opacity-90">
                                {res}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Result;