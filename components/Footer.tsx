"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaGithub,
} from "react-icons/fa";
import { companyInfo } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const basePath = pathSegments[0] === "services" ? "/" : "";
  console.log(basePath);

  return (
    <footer
      className="border-t transition-colors duration-300"
      style={{
        backgroundColor: "#111827",
        borderColor: "var(--border-default)",
      }}
    >
      <div className="relative pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">

          {/* About & Socials */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src={companyInfo.desktopLogo}
                alt={`${companyInfo.name} Logo`}
                width={140}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="leading-relaxed text-sm opacity-90" style={{ color: "var(--bg-primary)" }}>
              Building the future of software development and workflow automation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              {[
                { Icon: FaFacebookF, href: "#" },
                { Icon: FaGithub, href: "#" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaYoutube, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 group"
                  style={{ backgroundColor: "rgba(147, 51, 234, 0.1)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#9333ea";
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) icon.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(147, 51, 234, 0.1)";
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) icon.style.color = "#ffffff";
                  }}
                >
                  <social.Icon className="text-lg transition-colors text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-6 border-b-2 pb-2 inline-block"
              style={{ color: "#FFFFFF", borderColor: "var(--accent-primary)" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Development Process", "Products", "Trusted Companies", "Testimonials", "Why Orfys"].map((item) => (
                <li key={item}>
                  <Link
                    href={`${basePath}#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group flex items-center gap-2 text-sm transition-all hover:translate-x-1 text-gray-300 hover:text-white"
                  >
                    <FaChevronRight size={12} style={{ color: "var(--accent-primary)" }} />
                    <span className="opacity-90 group-hover:opacity-100">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-medium mb-6 border-b-2 pb-2 inline-block"
              style={{ color: "#FFFFFF", borderColor: "var(--accent-primary)" }}>
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Software Development",
                "Workflow Automation",
                "Integration Services",
                "Data Analytics",
                "Mobile Solutions",
                "Security & Compliance"
              ].map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/[&\s]+/g, "-").replace(/--/g, "-")}`}
                    className="group flex items-center gap-2 text-sm transition-all hover:translate-x-1 text-gray-300 hover:text-white"
                  >
                    <FaChevronRight size={12} style={{ color: "var(--accent-primary)" }} />
                    <span className="opacity-90 group-hover:opacity-100">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-medium mb-6 border-b-2 pb-2 inline-block"
                style={{ color: "#FFFFFF", borderColor: "var(--accent-primary)" }}>
                Contact Us
              </h3>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-4">
                  <FaPhoneAlt className="mt-1" style={{ color: "var(--accent-primary)" }} />
                  <a href={`tel:${companyInfo.phone}`} className="hover:underline opacity-90">{companyInfo.phone}</a>
                </div>
                <div className="flex items-start gap-4">
                  <FaEnvelope className="mt-1" style={{ color: "var(--accent-primary)" }} />
                  <a href={`mailto:${companyInfo.email}`} className="hover:underline opacity-90 break-all">
                    {companyInfo.email}
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="mt-1 text-lg" style={{ color: "var(--accent-primary)" }} />
                  <span className="opacity-90">{companyInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-medium mb-2 border-b-2 pb-2 inline-block"
                style={{ color: "#FFFFFF", borderColor: "var(--accent-primary)" }}>
                Newsletter
              </h3>
              <p className="mb-4 text-xs opacity-70 text-gray-400">
                Subscribe to get updates on our latest events and offers.
              </p>
              <form className="flex shadow-sm">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 p-2 text-sm rounded-l-md outline-none bg-gray-800 border-none text-white"
                  style={{ borderColor: "var(--border-default)" }}
                />
                <button
                  type="submit"
                  className="p-3 rounded-r-md text-white transition-opacity hover:opacity-90 flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                >
                  <FaPaperPlane size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t text-center text-xs opacity-70 border-gray-800">
          <p className="flex items-center justify-center gap-1 text-gray-400">
            © {currentYear} {companyInfo.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};