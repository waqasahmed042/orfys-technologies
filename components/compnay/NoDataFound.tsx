'use client';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { NoDataFoundProps } from '@/utilities/types';

const NoDataFound: React.FC<NoDataFoundProps> = ({
    category,
    clearCategory
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4" data-aos="zoom-in">
            {/* Main Icon */}
            <div className="relative mb-8">
                <div className="w-32 h-32 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center shadow-lg">
                    <FaSearch className="text-4xl text-[var(--accent-primary)]" />
                </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 text-center font-raleway">
                No {category} Found
            </h3>

            {/* Description */}
            <div className="max-w-md text-center mb-8">
                <p className="text-[var(--text-secondary)] mb-4 font-roboto">
                    Currently, there are no {category} available in this category.
                    I'm constantly working on new posts and updates.
                </p>

                {/* Alternative suggestions */}
                <div className="bg-[var(--bg-secondary)] rounded-lg p-4 border border-[var(--border-default)]">
                    <div className="flex items-start space-x-3">
                        <div className="text-left">
                            <p className="text-sm font-medium text-[var(--text-primary)] font-roboto">
                                Explore other Blogs:
                            </p>
                            <ul className="text-sm text-[var(--text-secondary)] mt-2 space-y-1">
                                <li>• Check out other blogs</li>
                                <li>• View blogs in different categories</li>
                                <li>• Contact me for custom solutions or collaborations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={clearCategory}
                    className="px-6 py-3 bg-[var(--accent-primary)] cursor-pointer text-white font-semibold rounded-lg hover:bg-[var(--accent-secondary)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    View All Blogs
                </button>
            </div>
        </div>
    );
};

export default NoDataFound;