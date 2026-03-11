import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiChevronRight } from 'react-icons/fi';

const PathSegments: React.FC = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter((item) => item !== "");

    return (
        <>
            <nav className="inline-flex items-center gap-2 backdrop-blur-md group transition-all">
                <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest"
                    style={{ color: "var(--text-secondary)" }}
                >
                    <FiHome className="text-sm" />
                    Home
                </Link>

                {pathSegments.map((segment, index) => {
                    const isLast = index === pathSegments.length - 1;
                    const formattedName = segment.replace(/-/g, " ");

                    const isServices = segment.toLowerCase() === "services";
                    const isPortfolio = segment.toLowerCase() === "portfolio";

                    const url = isServices
                        ? "/#services"
                        : `/${pathSegments.slice(0, index + 1).join("/")}`;

                    return (
                        <React.Fragment key={index}>
                            <FiChevronRight className="text-gray-600 text-xs" />

                            {isLast ? (
                                <span className="text-[var(--accent-primary)] font-extrabold text-[10px] md:text-xs uppercase tracking-widest">
                                    {formattedName}
                                </span>
                            ) : isPortfolio ? (
                                <span
                                    className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {formattedName}
                                </span>
                            ) : (
                                <Link
                                    href={url}
                                    className="text-gray-400 hover:text-white transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {formattedName}
                                </Link>
                            )}
                        </React.Fragment>
                    );
                })}
            </nav>
        </>
    )
};

export default PathSegments;
