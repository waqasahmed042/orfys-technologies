"use client";

import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/lib/constants";

export default function ThemeSwitcher() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:opacity-80 transition-opacity"
      aria-label="Home"
    >
      {/* <Image
        src={companyInfo.logo}
        alt={`${companyInfo.name} Logo`}
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
        priority
      /> */}
    </Link>
  );
}

