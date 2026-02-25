"use client";

import { useState } from 'react';
import Image from 'next/image';
import orfys_logo from '@/public/o-logo.webp';
import { IoIosArrowUp } from "react-icons/io";
import { IoClose, IoMenu } from 'react-icons/io5';
import { dropdownData, dropdownKeys, navLinks, MenuItem } from '@/utilities/navbarMenus';

const Header = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleMenu = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-[100]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Brand - Always visible and fixed in place */}
                    <div className='flex flex-row gap-4 items-center z-[110]'>
                        <Image src={orfys_logo} alt="Orfys Logo" className="h-8 w-8" />
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold truncate">
                            <span className='text-[#9333EA]'>Orfys </span>
                            <span className="hidden sm:inline">Technologies</span>
                        </p>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <ul className="flex space-x-1 items-center">
                            {dropdownKeys.map((category) => (
                                <li key={category} className="group static">
                                    <button className="flex items-center text-gray-600 group-hover:text-blue-600 px-4 py-7 text-sm font-bold transition-colors">
                                        {category}
                                        <svg className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Mega Menu - Consistent Grid */}
                                    <div className="absolute left-0 right-0 top-full hidden group-hover:block transition-all duration-300 z-[100]">
                                        <div className="mx-auto max-w-7xl px-4">
                                            <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 mt-1 p-10 grid grid-cols-3 gap-12">
                                                {Object.entries(dropdownData[category]).map(([subCategory, items]) => (
                                                    <div key={subCategory}>
                                                        <h3 className="text-gray-400 font-bold text-[11px] uppercase tracking-widest mb-6 border-b border-gray-50 pb-2">
                                                            {subCategory}
                                                        </h3>
                                                        <div className="space-y-4">
                                                            {items.map((item: MenuItem) => (
                                                                <a key={item.title} href="#" className="group/item flex items-start p-4 mb-2 -m-4 rounded-xl hover:bg-[#F4EAFC] transition-all duration-200">
                                                                    <div className="flex-shrink-0 w-11 h-11 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-xl group-hover/item:bg-white transition-colors shadow-sm">
                                                                        {item.icon}
                                                                    </div>
                                                                    <div className="ml-4 text-left">
                                                                        <p className="text-[13px] font-bold text-gray-900 group-hover/item:text-[#9333EA] transition-colors">
                                                                            {item.title}
                                                                        </p>
                                                                        <p className="text-[11px] text-gray-400 mt-0.5 font-medium">
                                                                            {item.desc}
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}

                            {navLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-600 hover:text-blue-600 px-4 py-7 text-sm font-bold transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Toggle + Book Now */}
                    <div className="flex items-center gap-3 z-[110]">
                        <a href="#" className="hidden sm:block border border-[#9333EA] px-6 py-2.5 rounded-md hover:bg-[#F4EAFC] transition shadow-md text-sm font-semibold text-[#9333EA]">
                            Book Now
                        </a>
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="lg:hidden p-2 text-gray-600 cursor-pointer hover:bg-gray-100 rounded-md transition-colors"
                        >
                            {/* Toggle between Menu and Cross Icon */}
                            {isMobileOpen ? (
                                <IoClose className='w-6 h-6' />
                            ) : (
                                <IoMenu className='w-6 h-6' />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar - Slide down from below header */}
            <div className={`lg:hidden fixed left-0 right-0 bottom-0 bg-white z-[90] overflow-y-auto transition-all duration-300 ease-in-out ${isMobileOpen ? 'top-20 opacity-100' : 'top-[-100%] opacity-0'}`}>
                <div className="p-6">
                    <div className="space-y-1">
                        {dropdownKeys.map((key) => (
                            <div key={key} className="border-b border-gray-50">
                                <button
                                    onClick={() => toggleMenu(key)}
                                    className="flex items-center justify-between w-full py-5 text-left"
                                >
                                    <span className="text-gray-900 font-bold text-lg">{key}</span>
                                    <IoIosArrowUp className={`text-gray-400 transition-transform duration-200 ${openCategory === key ? 'rotate-180' : ''}`} />
                                </button>

                                {openCategory === key && (
                                    <div className="pb-6 pt-2 space-y-8 animate-in fade-in slide-in-from-top-2">
                                        {Object.entries(dropdownData[key]).map(([sub, items]) => (
                                            <div key={sub} className="pl-2">
                                                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-bold">{sub}</p>
                                                <div className="space-y-6">
                                                    {items.map((item: MenuItem) => (
                                                        <a key={item.title} href="#" className="flex items-center gap-4 group p-4 mb-2 -m-4 rounded-xl hover:bg-[#F4EAFC] transition-all duration-200">
                                                            <span className="text-xl bg-gray-50 p-2 rounded-lg border border-gray-100 group-active:bg-blue-50 transition-colors">{item.icon}</span>
                                                            <div>
                                                                <p className="text-sm font-bold text-gray-800">{item.title}</p>
                                                                <p className="text-[11px] text-gray-400 leading-tight">{item.desc}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {navLinks.map(link => (
                            <a key={link} href="#" className="block py-5 text-gray-900 font-bold text-lg border-b border-gray-50">
                                {link}
                            </a>
                        ))}

                        <div className="pt-8">
                            <a href="#" className="block w-full text-center bg-[#9333EA] text-white py-4 rounded-xl font-bold shadow-lg shadow-purple-100">
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;