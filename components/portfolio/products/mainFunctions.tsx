import React from 'react';
import { ProjectDataProps } from '@/utilities/types';

const MainFunctions: React.FC<ProjectDataProps> = ({ data }) => {
    return (
        <section
            id="main-functions"
            className="py-6 md:py-16 bg-[var(--bg-primary)]"
        >
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Illustration */}
                <div className="flex justify-center bg-blue-50 rounded-3xl p-10">
                    <div className="w-full aspect-video bg-blue-100 rounded-xl flex items-center justify-center text-blue-400 italic">
                        {data.illustration}
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="space-y-6">
                    <h2 className="text-lg md:text-4xl font-semibold text-[var(--accent-primary)] tracking-tight">
                        {data.title}
                    </h2>

                    <div className="space-y-8">
                        {data.bulletin && data.bulletin.length > 0 ? (
                            data.bulletin.map((item, index) => (
                                <div key={index} className="space-y-2">
                                    {/* Bullet Title */}
                                    <div className="flex items-start gap-4">
                                        <span className="mt-2 h-3 w-3 rounded-full bg-[var(--accent-primary)] shrink-0" />
                                        <h3 className="text-sm md:text-[18px] font-medium leading-snug text-[var(--text-primary)]">
                                            {item}
                                        </h3>
                                    </div>

                                    {/* Matching Paragraph */}
                                    {data.paragraphs[index] && (
                                        <p className="pl-7 text-sm md:text-[16px] leading-relaxed text-[var(--text-secondary)]">
                                            {data.paragraphs[index]}
                                        </p>
                                    )}
                                </div>
                            ))
                        ) : (
                            data.paragraphs.map((p, i) => (
                                <p
                                    key={i}
                                    className="text-sm md:text-[16px] leading-relaxed text-[var(--text-secondary)]"
                                >
                                    {p}
                                </p>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainFunctions;