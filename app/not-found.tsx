import React from "react";
import Link from "next/link";
import Image from "next/image";
import not_found from "@/public/404.svg"

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            <Image
                src={not_found}
                alt="Page Not Found"
                width={400}
                height={300}
                className="mb-6"
            />

            <p className="mt-2 text-lg text-gray-500">
                Oops! The page you are looking for doesn't exist.
            </p>

            <Link
                href="/"
                className="button inline-flex items-center justify-center mt-4 px-7 py-3.5 text-base font-semibold rounded-lg border-2 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
                style={{
                    borderColor: "var(--accent-primary)",
                    color: "var(--accent-primary)",
                }}
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;