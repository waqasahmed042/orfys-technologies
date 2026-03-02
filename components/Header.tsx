"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { companyInfo, companyMenu, dropdownKeys, navigationMenus, portfolioMenu } from "@/lib/constants";
import ModeToggle from "./ModeToggle";
import { IoMenu, IoClose } from 'react-icons/io5';
import { MenuItem } from "@/utilities/types";
import { IoIosArrowUp } from "react-icons/io";

export default function Header() {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open and restore it when closed
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    };

    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  // Handle dropdown opening animation on desktop when mouse enters the category
  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>, category: string) => {
    setOpenCategory(category);
    const dropdown = e.currentTarget.querySelector(".dropdown-pane");

    if (dropdown) {
      gsap.killTweensOf(dropdown);
      gsap.fromTo(dropdown,
        { opacity: 0, y: 10, display: "none" },
        { opacity: 1, y: 0, display: "block", duration: 0.4, ease: "power2.out" }
      );
    };
  };

  // Handle dropdown closing animation on desktop when mouse leaves the category
  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    setOpenCategory(null);
    const dropdown = e.currentTarget.querySelector(".dropdown-pane");

    if (dropdown) {
      gsap.to(dropdown, {
        opacity: 0, y: 5, duration: 0.4, ease: "power2.in",
        onComplete: () => { gsap.set(dropdown, { display: "none" }); },
      });
    };
  };

  // Handle navigation opening animation on mobile screens
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      gsap.set(mobileMenuRef.current, { height: 0, opacity: 0, y: -20 });

      gsap.to(mobileMenuRef.current, {
        height: "calc(100vh - 64px)",
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [isMobileMenuOpen]);

  // Handle navigation closing animation on mobile screens
  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
    } else {
      if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power4.in",
          onComplete: () => {
            setIsMobileMenuOpen(false);
            setOpenCategory(null);
          }
        });
      }
    }
  };

  // Standard menu item component used in dropdowns
  const StandardItem = ({ item }: { item: MenuItem }) => (
    <Link href="#" className="group/item flex items-start p-3 rounded-xl transition-all duration-200 hover:bg-[var(--bg-secondary)] cursor-pointer">
      <div className="flex-shrink-0 w-9 h-9 border rounded-lg flex items-center justify-center text-lg transition-colors bg-[var(--bg-primary)] border-[var(--bg-secondary)] group-hover/item:border-[var(--accent-primary)]">
        <span style={{ color: "var(--accent-primary)" }}>{item.icon}</span>
      </div>

      <div className="ml-3 text-left">
        <p className="text-[12px] font-semibold text-[var(--text-primary)] transition-colors group-hover/item:text-[var(--accent-primary)]">
          {item.title}
        </p>

        <p className="text-[10px] leading-tight line-clamp-1 text-[var(--text-secondary)]">
          {item.desc}
        </p>
      </div>
    </Link>
  );

  // Card-style menu item component used in Portfolio and Company dropdowns
  const CardItem = ({ item }: { item: MenuItem }) => (
    <div className="group/card cursor-pointer p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-primary)]/40 bg-[var(--bg-secondary)]/30 border-[var(--bg-secondary)]">
      <div className="aspect-video rounded-xl mb-4 flex items-center justify-center text-4xl transition-transform group-hover/card:scale-105 bg-[var(--bg-secondary)]/50 shadow-inner border border-[var(--bg-secondary)]">
        {item.icon}
      </div>

      <h4 className="text-[11px] font-bold uppercase tracking-widest mb-2 transition-colors text-[var(--text-primary)] group-hover/card:text-[var(--accent-primary)]">
        {item.title}
      </h4>

      <p className="text-[12px] leading-relaxed transition-colors text-[var(--text-secondary)] opacity-80">
        {item.desc}
      </p>
    </div>
  );

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 px-6 sm:px-10 ${isScrolled ? "py-3 bg-[var(--bg-primary)]/90 backdrop-blur-md shadow-xl" : "py-6 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">

          {/* Brand Logo */}
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src={companyInfo.logo} alt="Logo" width={28} height={28} priority />
              <div className="flex leading-none">
                <span className="text-xl font-bold" style={{ color: "var(--accent-primary)" }}>Orfys</span>
                <span className="text-xl font-bold hidden sm:inline ml-1.5" style={{ color: "var(--text-primary)" }}>Technologies</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block static">
            <ul className="flex items-center gap-1 border transition-all duration-300 rounded-full px-4 py-1.5"
              style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--bg-secondary)", boxShadow: "0 4px 15px -1px rgb(0 0 0 / 0.1)" }}>

              {dropdownKeys.map((category) => (
                <li key={category} className="static group py-2" onMouseEnter={(e) => handleMouseEnter(e, category)} onMouseLeave={handleMouseLeave}>
                  <button className="relative flex items-center gap-1 px-3 text-[14px] font-semibold transition-colors capitalize" style={{ color: "var(--text-primary)" }}>
                    {category}
                    <span className="absolute bottom-[-2px] left-3 right-3 h-[2px] bg-[var(--accent-primary)] transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center" />
                  </button>

                  <div className="dropdown-pane absolute top-full left-0 w-full pt-4 hidden">
                    <div className="w-full border rounded-[2.5rem] p-8 shadow-2xl grid grid-cols-3 gap-8 overflow-y-auto custom-scrollbar"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--bg-secondary)",
                        maxHeight: "calc(100vh - 120px)",
                        overscrollBehavior: "contain"
                      }}>
                      {Object.entries(navigationMenus[category as keyof typeof navigationMenus]).map(([sub, items]) => (
                        <div key={sub} className="flex flex-col group/cat">
                          <h3 className="text-[10px] uppercase tracking-widest mb-4 font-bold border-b pb-2 transition-colors group-hover/cat:text-[var(--accent-primary)] group-hover/cat:border-[var(--accent-primary)]/40"
                            style={{ color: "var(--text-secondary)", borderColor: "var(--bg-secondary)" }}>{sub}</h3>
                          <div className="space-y-1">
                            {items.map((item: MenuItem) => <StandardItem key={item.title} item={item} />)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}

              {[{ title: "Portfolio", data: portfolioMenu }, { title: "Company", data: companyMenu }].map((menu) => (
                <li key={menu.title} className="static group py-2" onMouseEnter={(e) => handleMouseEnter(e, menu.title)} onMouseLeave={handleMouseLeave}>
                  <button className="relative px-3 text-[14px] font-semibold transition-colors" style={{ color: "var(--text-primary)" }}>
                    {menu.title}
                    <span className="absolute bottom-[-2px] left-3 right-3 h-[2px] bg-[var(--accent-primary)] transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center" />
                  </button>

                  <div className="dropdown-pane absolute top-full left-0 w-full pt-4 hidden">
                    <div className="w-full border rounded-[2.5rem] p-6 shadow-2xl grid grid-cols-4 gap-4 overflow-y-auto custom-scrollbar"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--bg-secondary)",
                        maxHeight: "calc(100vh - 120px)",
                        overscrollBehavior: "contain"
                      }}>
                      {menu.data.map((item) => <CardItem key={item.title} item={item} />)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex-1 flex justify-end items-center gap-2">
            <ModeToggle />

            <a
              href={`mailto:${companyInfo.email}?subject=Book%20a%20Call`}
              className="hidden lg:block px-6 py-2.5 border font-semibold text-sm rounded-lg transition-all active:scale-95 shadow-sm hover:shadow-md"
              style={{
                borderColor: "var(--accent-primary)",
                color: "var(--text-primary)",
              }}
            >
              Book a Call
            </a>

            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer border border-[var(--border-default)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-colors"
              style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-primary)" }}
              onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="lg:hidden fixed top-22 left-0 w-full h-[calc(100vh-64px)] overflow-y-auto bg-[var(--bg-primary)] z-[60] pb-20 shadow-2xl border-t border-[var(--bg-secondary)]">
            <nav className="flex flex-col p-6 gap-2">
              {[...dropdownKeys, "Portfolio", "Company"].map((key) => {
                const isMainKey = dropdownKeys.includes(key as keyof typeof navigationMenus);
                const menuData = isMainKey
                  ? navigationMenus[key as keyof typeof navigationMenus]
                  : (key === "Portfolio" ? portfolioMenu : companyMenu);

                return (
                  <div key={key} className="border-b last:border-none" style={{ borderColor: "var(--bg-secondary)" }}>
                    <button
                      onClick={() => setOpenCategory(openCategory === key ? null : key)}
                      className="flex items-center justify-between w-full py-4 text-left font-semibold text-lg uppercase tracking-wide"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {key} <IoIosArrowUp className={`transition-transform duration-300 ${openCategory === key ? 'rotate-180' : 'opacity-40'}`}
                        style={{ color: openCategory === key ? "var(--accent-primary)" : "inherit" }} />
                    </button>

                    {openCategory === key && (
                      <div className="pb-6 space-y-6">
                        {isMainKey ? (
                          Object.entries(menuData).map(([sub, items]) => (
                            <div key={sub}>
                              <p className="text-[10px] uppercase mb-3 tracking-widest font-bold border-b pb-1"
                                style={{ color: "var(--text-secondary)", borderColor: "var(--bg-secondary)" }}>{sub}</p>
                              <div className="space-y-2">
                                {(items as MenuItem[]).map((item) => <StandardItem key={item.title} item={item} />)}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="space-y-2">
                            {(menuData as MenuItem[]).map((item) => <StandardItem key={item.title} item={item} />)}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              <a
                href={`mailto:${companyInfo.email}?subject=Book%20a%20Call`}
                className="px-6 py-3 mt-4 border font-bold text-base rounded-xl transition-colors text-center shadow-sm"
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
      </header>
    </>
  );
};