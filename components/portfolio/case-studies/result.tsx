import React from 'react';
import { ProjectDataProps } from '@/utilities/types';

const Result: React.FC<ProjectDataProps> = ({ data }) => {
    return (
        <section
            id="results"
            className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-white/10 rounded-full"></div>
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
                            <p className="text-sm text-white md:text-[15px] leading-relaxed opacity-90">
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