import React from 'react';
import { ProjectDataProps } from '@/utilities/types';

const ProjectOverview: React.FC<ProjectDataProps> = ({ data }) => {
    return (
        <section id="project-overview" className="py-6 md:py-16 bg-[var(--bg-primary)]">
            <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Content */}
                <div className="space-y-4">
                    <h2 className="text-lg md:text-4xl font-semibold text-[var(--accent-primary)] tracking-tight">
                        {data.title}
                    </h2>

                    <div className="space-y-4">
                        {/* Render dynamic paragraphs from projectsData */}
                        {data.paragraphs?.map((p, i) => (
                            <p key={i} className="text-sm md:text-[16px] leading-relaxed text-[var(--text-secondary)]">
                                {p}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Right Side: Illustration */}
                <div className="flex justify-center bg-blue-50 rounded-3xl p-10 order-first lg:order-last">
                    <div className="w-full aspect-video bg-blue-100 rounded-xl flex items-center justify-center text-blue-400 italic">
                        {data.illustration}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectOverview;