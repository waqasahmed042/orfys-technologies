"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
<<<<<<< HEAD
import { companyInfo, companyMenu, dropdownKeys, navigationMenus, portfolioMenu } from "@/lib/constants";
=======
import { companyInfo, companyMenu, dropdownKeys, navigationLinks, navigationMenus, portfolioMenu } from "@/lib/constants";
>>>>>>> 5a14d13eb59b0b29ff3d238a4047e177ceb3c087
import ModeToggle from "./ModeToggle";
import { IoMenu, IoClose } from 'react-icons/io5';
import { MenuItem } from "@/utilities/types";
import { IoIosArrowUp } from "react-icons/io";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // Refs for animation
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Desktop Hover Animations
  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const dropdown = e.currentTarget.querySelector(".dropdown-pane");
    if (dropdown) {
      gsap.killTweensOf(dropdown);
      gsap.fromTo(
        dropdown,
        { opacity: 0, y: -20, display: "none" },
        { opacity: 1, y: 0, display: "block", duration: 0.5, ease: "power3.out" }
      );
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    const dropdown = e.currentTarget.querySelector(".dropdown-pane");
    if (dropdown) {
      gsap.to(dropdown, {
        opacity: 0,
        y: -15,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(dropdown, { display: "none" });
        },
      });
    }
  };

  // Toggle Mobile Menu with Animation
  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
    } else {
      if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, {
          height: 0, opacity: 0, y: -20, duration: 0.5, ease: "power4.in",
          onComplete: () => {
            setIsMobileMenuOpen(false);
            setOpenCategory(null);
          }
        });
      }
    }
  };

  // Entry Animation for Mobile Menu
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0, y: -20 },
        { height: "auto", opacity: 1, y: 0, duration: 0.6, ease: "power4.out" }
      );
    }
  }, [isMobileMenuOpen]);

  const StandardItem = ({ item }: { item: MenuItem }) => (
    <a href="#" className="group/item flex items-start p-4 mb-2 -m-4 rounded-xl transition-all duration-200 hover:bg-[var(--accent-primary)]/5">
      <div className="flex-shrink-0 w-11 h-11 border rounded-lg flex items-center justify-center text-xl transition-all shadow-sm bg-[var(--bg-secondary)] border-[var(--border-default)]">
        {item.icon}
      </div>

      <div className="ml-4 text-left">
        <p className="text-[13px] font-bold transition-colors text-[var(--text-primary)]">{item.title}</p>
        <p className="text-[11px] mt-0.5 text-[var(--text-secondary)] opacity-70">{item.desc}</p>
      </div>
    </a>
  );

  const CardItem = ({ item }: { item: MenuItem }) => (
    <div className="group/card cursor-pointer p-4 rounded-2xl border border-[var(--border-default)] transition-all duration-300 hover:border-[var(--accent-primary)]/30 bg-[var(--bg-secondary)]/30">
      <div className="aspect-video rounded-xl mb-4 flex items-center justify-center text-4xl transition-transform group-hover/card:scale-105 bg-[var(--bg-primary)]">
        {item.icon}
      </div>

      <h4 className="text-[11px] font-bold uppercase tracking-widest mb-2 transition-colors text-[var(--text-primary)]">{item.title}</h4>
      <p className="text-[12px] leading-relaxed transition-colors text-[var(--text-secondary)] opacity-80">{item.desc}</p>
    </div>
  );

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm border-b transition-colors"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-default)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 min-w-0">

          {/* Company Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0">
            <Image
              src={companyInfo.logo}
              alt={`${companyInfo.name} Logo`}
              width={120}
              height={40}
              className="h-7 sm:h-8 w-auto object-contain flex-shrink-0"
              priority
            />

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold truncate" style={{ color: "var(--text-primary)" }}>
              <span style={{ color: "var(--accent-primary)" }}>Orfys</span>
              <span className="hidden sm:inline">{" "}Technologies</span>
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            <ul className="flex space-x-1 items-center">
              {dropdownKeys.map((category) => (
                <li key={category} className="group static" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<<<<<<< HEAD
                  <button
                    className="flex items-center px-3 py-7 text-sm font-semibold uppercase transition-colors hover:text-[var(--accent-primary)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span className="relative">
                      {category}
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--accent-primary)] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                    </span>
=======
                  <button className="flex items-center px-4 py-7 text-sm font-bold transition-colors text-[var(--text-primary)] hover:text-[var(--accent-primary)]">
                    {category}
>>>>>>> 5a14d13eb59b0b29ff3d238a4047e177ceb3c087
                  </button>

                  <div className="dropdown-pane absolute left-0 right-0 top-full hidden z-[100]">
                    <div className="mx-auto max-w-7xl px-4">
                      <div
                        className="rounded-2xl border mt-1 p-10 grid grid-cols-3 gap-12 shadow-2xl"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          borderColor: "var(--border-default)",
                          color: "var(--text-primary)"
                        }}
                      >
                        {Object.entries(navigationMenus[category as keyof typeof navigationMenus]).map(([sub, items]) => (
                          <div key={sub}>
<<<<<<< HEAD
                            <h3 className="text-[11px] uppercase tracking-widest mb-6 border-b pb-2 opacity-60" style={{ borderColor: "var(--border-default)" }}>
=======
                            <h3 className="font-bold text-[11px] uppercase tracking-widest mb-6 border-b pb-2 opacity-60" style={{ borderColor: "var(--border-default)" }}>
>>>>>>> 5a14d13eb59b0b29ff3d238a4047e177ceb3c087
                              {sub}
                            </h3>
                            <div className="space-y-4">
                              {items.map((item: MenuItem) => <StandardItem key={item.title} item={item} />)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}

              {[{ title: "Portfolio", data: portfolioMenu }, { title: "Company", data: companyMenu }].map((menu) => (
                <li key={menu.title} className="group static" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<<<<<<< HEAD
                  <button
                    className="flex items-center px-3 py-7 text-sm font-semibold uppercase transition-colors hover:text-[var(--accent-primary)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span className="relative">
                      {menu.title}
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--accent-primary)] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                    </span>
=======
                  <button className="flex items-center px-4 py-7 text-sm font-bold transition-colors text-[var(--text-primary)] hover:text-[var(--accent-primary)]">
                    {menu.title}
>>>>>>> 5a14d13eb59b0b29ff3d238a4047e177ceb3c087
                  </button>

                  <div className="dropdown-pane absolute left-0 right-0 top-full hidden z-[100]">
                    <div className="mx-auto max-w-7xl px-4">
                      <div
                        className="rounded-2xl border mt-1 p-8 grid grid-cols-4 gap-6 shadow-2xl"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          borderColor: "var(--border-default)",
                          color: "var(--text-primary)"
                        }}
                      >
                        {menu.data.map((item) => <CardItem key={item.title} item={item} />)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side CTA */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <ModeToggle />
            <a
              href={`mailto:${companyInfo.email}?subject=Book%20a%20Call`}
              className="hidden sm:inline-flex px-6 py-2.5 border text-[var(--text-primary)] font-semibold text-sm rounded-lg hover:bg-[var(--accent-primary)]/10 transition-colors"
              style={{ borderColor: "var(--accent-primary)" }}
            >
              Book a Call
            </a>

            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer border border-[var(--border-default)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-colors"
              style={{ color: "var(--text-primary)" }}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile navigation menu"
            >
              {isMobileMenuOpen ? <IoClose className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden pb-6 border-t mt-4 pt-4 overflow-hidden"
            style={{
              borderColor: "var(--border-default)",
              backgroundColor: "var(--bg-primary)"
            }}
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              <div className="space-y-1">
                {dropdownKeys.map((key) => (
                  <div key={key} className={`border-b border-[var(--border-default)]`}>
                    <button onClick={() => setOpenCategory(openCategory === key ? null : key)} className="flex items-center justify-between w-full py-5 text-left font-bold text-lg">
                      {key} <IoIosArrowUp className={`${openCategory === key ? 'cursor-pointer rotate-180 text-purple-400' : 'cursor-pointer'}`} />
                    </button>

                    {openCategory === key && (
                      <div className="pb-6 pt-2 space-y-6">
                        {Object.entries(navigationMenus[key as keyof typeof navigationMenus]).map(([sub, items]) => (
                          <div key={sub}>
<<<<<<< HEAD
                            <p className={`text-[10px] uppercase mb-4 tracking-widest border-b border-[var(--border-default)] pb-1`}>{sub}</p>
=======
                            <p className={`text-[10px] uppercase font-bold mb-4 tracking-widest border-b border-[var(--border-default)] pb-1`}>{sub}</p>
>>>>>>> 5a14d13eb59b0b29ff3d238a4047e177ceb3c087
                            <div className="space-y-4">
                              {items.map((item: MenuItem) => <StandardItem key={item.title} item={item} />)}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {[{ title: "Portfolio", data: portfolioMenu }, { title: "Company", data: companyMenu }].map((menu) => (
                  <div key={menu.title} className={`border-b border-[var(--border-default)]`}>
<<<<<<< HEAD
                    <button onClick={() => setOpenCategory(openCategory === menu.title ? null : menu.title)} className="flex items-center justify-between w-full py-5 text-left text-lg">
=======
                    <button onClick={() => setOpenCategory(openCategory === menu.title ? null : menu.title)} className="flex items-center justify-between w-full py-5 text-left font-bold text-lg">
>>>>>>> 5a14d13eb59b0b29ff3d238a4047e177ceb3c087
                      {menu.title} <IoIosArrowUp className={`${openCategory === menu.title ? 'cursor-pointer rotate-180 text-purple-400' : 'cursor-pointer'}`} />
                    </button>

                    {openCategory === menu.title && (
                      <div className="pb-6 pt-2 space-y-4">
                        <div className={`border-b border-[var(--border-default)] mb-4`}></div>
                        {menu.data.map((item) => <StandardItem key={item.title} item={item} />)}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${companyInfo.email}?subject=Book%20a%20Call`}
                className="px-6 py-2.5 mt-2 border font-semibold text-sm rounded-lg transition-colors text-center"
                style={{
                  borderColor: "var(--accent-primary)",
                  color: "var(--text-primary)",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Call
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}