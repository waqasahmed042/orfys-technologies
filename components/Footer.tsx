"use client";

import Image from "next/image";
import Link from "next/link";
import { companyInfo, navigationLinks } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 border-t border-gray-50"
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-secondary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src={companyInfo.desktopLogo}
                alt={`${companyInfo.name} Logo`}
                width={140}
                height={40}
                className="h-6 w-auto object-contain"
              />
            </Link>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Building the future of software development and workflow automation.
            </p>
          </div>
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="theme-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="theme-link"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li style={{ color: "var(--text-secondary)" }}>{companyInfo.location}</li>
            </ul>
          </div>
        </div>
        <div
          className="border-t pt-8 text-center text-sm"
          style={{
            borderColor: "var(--border-default)",
            color: "var(--text-secondary)",
          }}
        >
          <p>
            © {currentYear} {companyInfo.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

