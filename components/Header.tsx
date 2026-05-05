"use client";
import { useState, useRef, useEffect, type ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useTheme } from "@/contexts/ThemeContext";
import {
  companyInfo, companyMenu, dropdownKeys,
  navigationMenus, portfolioMenu
} from "@/lib/constants";
import ModeToggle from "./ModeToggle";
import { IoMenu, IoClose } from 'react-icons/io5';
import { MenuItem } from "@/utilities/types";
import { IoIosArrowUp } from "react-icons/io";

const Header = () => {
  const { mode } = useTheme();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>, category: string) => {
    setOpenCategory(category);
    const dropdown = e.currentTarget.querySelector(".dropdown-pane");

    if (dropdown) {
      gsap.killTweensOf(dropdown);
      gsap.fromTo(dropdown,
        { opacity: 0, y: 15, display: "none" },
        { opacity: 1, y: 0, display: "block", duration: 0.4, ease: "power2.out" }
      );
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    setOpenCategory(null);
    const dropdown = e.currentTarget.querySelector(".dropdown-pane");

    if (dropdown) {
      gsap.to(dropdown, {
        opacity: 0, y: 10, duration: 0.3, ease: "power2.in",
        onComplete: () => { gsap.set(dropdown, { display: "none" }); },
      });
    }
  };

  // Improved close function
  const closeDropdown = () => {
    setOpenCategory(null);

    document.querySelectorAll('.dropdown-pane').forEach((pane: Element) => {
      gsap.to(pane, {
        opacity: 0,
        y: 10,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(pane, { display: "none" });
        },
      });
    });
  };

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

  // MENU ITEM COMPONENTS
  const StandardItem = ({ item, onClick }: {
    item: MenuItem;
    onClick?: () => void
  }) => {
    return (
      <Link
        href={item.path ?? "#"}
        onClick={onClick}
        className="group/item flex items-start p-3 rounded-xl transition-all duration-200 hover:bg-[var(--bg-secondary)] cursor-pointer"
      >
        <div
          className="flex-shrink-0 w-9 h-9 border rounded-lg flex items-center justify-center text-lg transition-colors bg-[var(--bg-primary)] border-[var(--bg-secondary)] group-hover/item:border-[var(--accent-primary)]"
          style={{ "--hover-color": item.hover } as React.CSSProperties}
        >
          <item.icon
            className="text-xl transition-colors duration-200 text-[var(--accent-primary)] group-hover/item:!text-[var(--hover-color)]"
          />
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
  };

  const CardItem = ({ item, onClick }: {
    item: MenuItem;
    onClick?: () => void
  }) => {
    const content = (
      <div className="group/card cursor-pointer p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-primary)]/40 bg-[var(--bg-secondary)]/30 border-[var(--bg-secondary)]">
        <div
          className="aspect-video rounded-xl mb-4 flex items-center justify-center text-4xl transition-transform group-hover/card:scale-105 bg-[var(--bg-secondary)]/50 shadow-inner border border-[var(--bg-secondary)]"
        >
          <item.icon
            className="text-xl transition-colors"
            style={{ color: "var(--accent-primary)" }}
          />
        </div>

        <h4 className="text-[11px] font-bold uppercase tracking-widest mb-2 transition-colors text-[var(--text-primary)] group-hover/card:text-[var(--accent-primary)]">
          {item.title}
        </h4>

        <p className="text-[12px] leading-relaxed transition-colors text-[var(--text-secondary)] opacity-80">
          {item.desc}
        </p>
      </div>
    );

    return item.path ? (
      <Link href={item.path} onClick={onClick}>
        {content}
      </Link>
    ) : content;
  };

  const ServiceItem = ({ item, onClick }: {
    item: MenuItem;
    onClick?: () => void
  }) => {
    return (
      <Link
        href={item.path ?? "#"}
        onClick={() => {
          onClick?.();
          setIsMobileMenuOpen(false);
        }}
        className="group/service flex items-center justify-between p-4 rounded-xl border transition-all duration-300 bg-[var(--bg-secondary)]/20 border-[var(--bg-secondary)] hover:border-[var(--accent-primary)]/50 hover:bg-[var(--bg-secondary)]/40"
      >
        <div className="flex items-center gap-3">
          <div
            className="flex-shrink-0 w-9 h-9 border rounded-lg flex items-center justify-center text-lg transition-colors bg-[var(--bg-primary)] border-[var(--bg-secondary)] group-hover/service:border-[var(--accent-primary)]"
            style={{ "--hover-color": item.hover } as React.CSSProperties}
          >
            <item.icon
              className="text-xl transition-colors duration-200 text-[var(--accent-primary)] group-hover/service:!text-[var(--hover-color)]"
            />
          </div>

          <span className="text-sm font-medium text-[var(--text-primary)]">{item.title}</span>
        </div>

        <div className="w-6 h-6 rounded-full bg-[var(--bg-primary)] flex items-center justify-center border border-[var(--bg-secondary)] group-hover/service:border-[var(--accent-primary)] transition-colors">
          <IoIosArrowUp className="rotate-90 text-[10px] text-[var(--text-secondary)] group-hover/service:text-[var(--accent-primary)]" />
        </div>
      </Link>
    );
  };

  return (
    <>
      <header className={`fixed top-0 z-30 w-full transition-all duration-500 mt-4 px-8 flex justify-center ${isScrolled ? "pt-2 px-4" : "pt-0 px-0"}`}>
        <div className="flex items-center justify-between transition-all duration-500 ease-in-out max-w-[1220px] w-full px-8 py-2.5 rounded-full border bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border-white/30">

          {/* Brand Logo */}
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={mode === "dark" ? companyInfo.desktopLogoWhite : companyInfo.desktopLogoDark}
                alt={`${companyInfo.name} Logo`}
                width={100}
                height={40}
                priority
                className="hidden sm:block"
              />
              <Image
                src={companyInfo.mobileLogo}
                alt="Logo"
                width={40}
                height={40}
                priority
                className="block sm:hidden"
              />
              <h1 className="block sm:hidden text-2xl font-semibold tracking-[-0.04em] leading-none" style={{ color: "var(--text-primary)" }}>
                Orfys
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {dropdownKeys.map((category) => (
                <li key={category} className="static group py-2"
                  onMouseEnter={(e) => handleMouseEnter(e, category)}
                  onMouseLeave={handleMouseLeave}>
                  <button className="relative flex items-center cursor-pointer gap-1 px-3 text-[14px] font-semibold transition-colors capitalize"
                    style={{ color: "var(--text-primary)" }}>
                    {category}
                    <span className="absolute bottom-[-2px] left-3 right-3 h-[2px] bg-[var(--accent-primary)] transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center" />
                  </button>

                  <div className="dropdown-pane absolute top-[80%] inset-x-0 px-8 hidden pt-4">
                    <div className="w-full border rounded-[2.5rem] p-8 shadow-2xl grid grid-cols-3 gap-8 overflow-y-auto custom-scrollbar"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--bg-secondary)",
                        maxHeight: "calc(100vh - 120px)",
                      }}>

                      {Object.entries(navigationMenus[category as keyof typeof navigationMenus]).map(([sub, items]) => (
                        <div key={sub} className="flex flex-col group/cat">
                          <h3 className="text-[10px] uppercase tracking-widest mb-4 font-bold border-b pb-2 transition-colors group-hover/cat:text-[var(--accent-primary)] group-hover/cat:border-[var(--accent-primary)]/40"
                            style={{ color: "var(--text-secondary)", borderColor: "var(--bg-secondary)" }}>
                            {sub}
                          </h3>
                          <div className="space-y-1">
                            {items.map((item: MenuItem) => (
                              <StandardItem
                                key={item.title}
                                item={item}
                                onClick={closeDropdown}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}

              {/* Portfolio & Company */}
              {[{ title: "Portfolio", data: portfolioMenu }, { title: "Company", data: companyMenu }].map((menu) => (
                <li key={menu.title} className="static group py-2"
                  onMouseEnter={(e) => handleMouseEnter(e, menu.title)}
                  onMouseLeave={handleMouseLeave}>
                  <button className="relative px-3 text-[14px] cursor-pointer font-semibold transition-colors"
                    style={{ color: "var(--text-primary)" }}>
                    {menu.title}
                    <span className="absolute bottom-[-2px] left-3 right-3 h-[2px] bg-[var(--accent-primary)] transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center" />
                  </button>

                  <div className="dropdown-pane absolute top-[80%] inset-x-0 px-8 hidden pt-4">
                    <div className="w-full border rounded-[2.5rem] p-6 shadow-lg grid grid-cols-4 gap-4 overflow-y-auto custom-scrollbar"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--bg-secondary)",
                        maxHeight: "calc(100vh - 120px)",
                      }}>
                      {menu.data.map((item) => (
                        <CardItem
                          key={item.title}
                          item={item}
                          onClick={closeDropdown}
                        />
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex-1 flex justify-end items-center gap-2">
            <ModeToggle />

            <a
              href={`mailto:${companyInfo.email}?subject=Book%20a%20Call`}
              className="hidden lg:block px-6 py-2 border font-semibold text-sm rounded-lg transition-all active:scale-95 shadow-sm hover:shadow-md"
              style={{ borderColor: "var(--accent-primary)", color: "var(--text-primary)" }}
            >
              Book a Call
            </a>

            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer border border-[var(--border-default)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-colors"
              onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="lg:hidden fixed top-22 left-0 w-full h-[calc(100vh-64px)] overflow-y-auto bg-[var(--bg-primary)] z-30 pb-20 shadow-2xl border-t border-[var(--bg-secondary)]">
            <nav className="flex flex-col p-6 gap-2">
              {[...dropdownKeys, "Portfolio", "Company"].map((key) => {
                const isMainKey = dropdownKeys.includes(key as keyof typeof navigationMenus);
                const useServiceLayout = key.toLowerCase().includes("service") || key.toLowerCase().includes("solution");

                const menuData = isMainKey
                  ? navigationMenus[key as keyof typeof navigationMenus]
                  : (key === "Portfolio" ? portfolioMenu : companyMenu);

                return (
                  <div key={key} className="border-b last:border-none" style={{ borderColor: "var(--bg-secondary)" }}>
                    <button
                      onClick={() => setOpenCategory(openCategory === key ? null : key)}
                      className="flex items-center justify-between cursor-pointer w-full py-4 text-left font-semibold text-lg uppercase tracking-wide"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {key}
                      <IoIosArrowUp className={`transition-transform duration-300 ${openCategory === key ? 'rotate-180' : 'opacity-40'}`}
                        style={{ color: openCategory === key ? "var(--accent-primary)" : "inherit" }} />
                    </button>

                    {openCategory === key && (
                      <div className="pb-6 space-y-6">
                        {isMainKey ? (
                          Object.entries(menuData).map(([sub, items]) => (
                            <div key={sub}>
                              <p className="text-[10px] uppercase mb-3 tracking-widest font-bold border-b pb-1"
                                style={{ color: "var(--text-secondary)", borderColor: "var(--bg-secondary)" }}>
                                {sub}
                              </p>
                              <div className="space-y-2">
                                {(items as MenuItem[]).map((item) => (
                                  useServiceLayout ? (
                                    <ServiceItem
                                      key={item.title}
                                      item={item}
                                      onClick={closeDropdown}
                                    />
                                  ) : (
                                    <StandardItem
                                      key={item.title}
                                      item={item}
                                      onClick={() => {
                                        closeDropdown();
                                        setIsMobileMenuOpen(false);
                                      }}
                                    />
                                  )
                                ))}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="space-y-2">
                            {(menuData as MenuItem[]).map((item) => (
                              <StandardItem
                                key={item.title}
                                item={item}
                                onClick={() => {
                                  closeDropdown();
                                  setIsMobileMenuOpen(false);
                                }}
                              />
                            ))}
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
                style={{ borderColor: "var(--accent-primary)", color: "var(--text-primary)" }}
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

export default Header;