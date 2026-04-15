import React from 'react';
import { ProjectDataProps } from '@/utilities/types';

const MainFeatures: React.FC<ProjectDataProps> = ({ data }) => {
    return (
        <section
            id="main-features"
            className="py-6 md:py-16 bg-[var(--bg-primary)]"
        >
            <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Content */}
                <div className="space-y-4">
                    <h2 className="text-lg md:text-4xl font-semibold text-[var(--accent-primary)] tracking-tight">
                        {data.title}
                    </h2>

                    <div className="space-y-4">
                        {/* Paragraphs */}
                        {data.paragraphs.map((p, i) => (
                            <p key={i} className="text-sm md:text-[16px] leading-relaxed text-[var(--text-secondary)]">
                                {p}
                            </p>
                        ))}

                        {/* Bulletin (If present) */}
                        {data.bulletin && data.bulletin.length > 0 && (
                            <ul className="space-y-2 mt-4">
                                {data.bulletin.map((item, index) => (
                                    <li key={index} className="flex gap-4 group">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent-primary)] shrink-0" />
                                        <p className="text-xs md:text-[15px] leading-relaxed text-[var(--text-secondary)]">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Right Side: Illustration */}
                <div className="flex justify-center bg-blue-50 rounded-3xl p-10">
                    <div className="w-full aspect-video bg-blue-100 rounded-xl flex items-center justify-center text-blue-400 italic">
                        {data.illustration}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainFeatures;