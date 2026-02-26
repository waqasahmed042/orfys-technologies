"use client";

import { useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import orfys_logo from '@/public/o-logo.webp';
import { IoIosArrowUp } from "react-icons/io";
import { CiDark, CiLight } from "react-icons/ci";
import { IoClose, IoMenu } from 'react-icons/io5';
import { dropdownData, dropdownKeys, navLinks, MenuItem } from '@/utilities/navbarMenus';

const Header = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    // Handle initial theme detection from localStorage
    useLayoutEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const toggleMenu = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    // Helper for conditional classes
    const isDark = theme === 'dark';

    return (
        <>
            <nav className={`${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-gray-100'} border-b sticky top-0 z-[100] transition-colors duration-300`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                        {/* Brand */}
                        <div className='flex flex-row gap-4 items-center z-[110]'>
                            <Image src={orfys_logo} alt="Orfys Logo" className="h-8 w-8" />
                            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                <span className={isDark ? 'text-purple-400' : 'text-[#9333EA]'}>Orfys </span>
                                <span className="hidden sm:inline">Technologies</span>
                            </p>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:block">
                            <ul className="flex space-x-1 items-center">
                                {dropdownKeys.map((category) => (
                                    <li key={category} className="group static">
                                        <button className={`flex items-center px-4 py-7 text-sm font-bold transition-colors ${isDark ? 'text-gray-300 group-hover:text-purple-400' : 'text-gray-600 group-hover:text-[#9333EA]'}`}>
                                            {category}
                                            <svg className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* Mega Menu */}
                                        <div className="absolute left-0 right-0 top-full hidden group-hover:block transition-all duration-300 z-[100]">
                                            <div className="mx-auto max-w-7xl px-4">
                                                <div className={`${isDark ? 'bg-slate-900 border-slate-800 shadow-2xl shadow-black/50' : 'bg-white border-gray-100 shadow-2xl'} rounded-2xl border mt-1 p-10 grid grid-cols-3 gap-12`}>
                                                    {Object.entries(dropdownData[category]).map(([subCategory, items]) => (
                                                        <div key={subCategory}>
                                                            <h3 className={`font-bold text-[11px] uppercase tracking-widest mb-6 border-b pb-2 ${isDark ? 'text-gray-500 border-slate-800' : 'text-gray-400 border-gray-50'}`}>
                                                                {subCategory}
                                                            </h3>
                                                            <div className="space-y-4">
                                                                {items.map((item: MenuItem) => (
                                                                    <a key={item.title} href="#" className={`group/item flex items-start p-4 mb-2 -m-4 rounded-xl transition-all duration-200 ${isDark ? 'hover:bg-slate-800' : 'hover:bg-[#F4EAFC]'}`}>
                                                                        <div className={`flex-shrink-0 w-11 h-11 border rounded-lg flex items-center justify-center text-xl transition-colors shadow-sm ${isDark ? 'bg-slate-800 border-slate-700 group-hover/item:bg-slate-700' : 'bg-gray-50 border-gray-100 group-hover/item:bg-white'}`}>
                                                                            {item.icon}
                                                                        </div>
                                                                        <div className="ml-4 text-left">
                                                                            <p className={`text-[13px] font-bold transition-colors ${isDark ? 'text-gray-100 group-hover/item:text-purple-400' : 'text-gray-900 group-hover/item:text-[#9333EA]'}`}>
                                                                                {item.title}
                                                                            </p>
                                                                            <p className={`text-[11px] mt-0.5 font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
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
                                        <a href="#" className={`px-4 py-7 text-sm font-bold transition-colors ${isDark ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-[#9333EA]'}`}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 z-[110]">
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-lg cursor-pointer border border-gray-100 transition-colors ${isDark ? 'text-yellow-400 hover:bg-slate-800' : 'text-gray-600 hover:bg-gray-100'}`}
                            >
                                {isDark ? <CiLight size={20} /> : <CiDark size={20} />}
                            </button>

                            <a href="#" className={`hidden sm:block px-6 py-2.5 rounded-md transition shadow-md text-sm font-semibold border ${isDark ? 'border-purple-500 text-purple-400 hover:bg-purple-900/20' : 'border-[#9333EA] text-[#9333EA] hover:bg-[#F4EAFC]'}`}>
                                Book Now
                            </a>

                            <button
                                onClick={() => setIsMobileOpen(!isMobileOpen)}
                                className={`lg:hidden cursor-pointer p-2 rounded-md transition-colors ${isDark ? 'text-gray-300 hover:bg-slate-800' : 'text-gray-600 hover:bg-gray-100'}`}
                            >
                                {isMobileOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar */}
                <div className={`lg:hidden fixed left-0 right-0 bottom-0 z-[90] overflow-y-auto transition-all duration-300 ease-in-out ${isDark ? 'bg-slate-950' : 'bg-white'} ${isMobileOpen ? 'top-20 opacity-100' : 'top-[-100%] opacity-0'}`}>
                    <div className="p-6">
                        <div className="space-y-1">
                            {dropdownKeys.map((key) => (
                                <div key={key} className={`border-b ${isDark ? 'border-slate-800' : 'border-gray-50'}`}>
                                    <button onClick={() => toggleMenu(key)} className="flex items-center justify-between w-full py-5 text-left">
                                        <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{key}</span>
                                        <IoIosArrowUp className={`transition-transform duration-200 ${isDark ? 'text-gray-500' : 'text-gray-400'} ${openCategory === key ? 'rotate-180' : ''}`} />
                                    </button>

                                    {openCategory === key && (
                                        <div className="pb-6 pt-2 space-y-8">
                                            {Object.entries(dropdownData[key]).map(([sub, items]) => (
                                                <div key={sub} className="pl-2">
                                                    <p className={`text-[10px] uppercase tracking-widest mb-4 font-bold ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{sub}</p>
                                                    <div className="space-y-6">
                                                        {items.map((item: MenuItem) => (
                                                            <a key={item.title} href="#" className={`flex items-center gap-4 group p-4 mb-2 -m-4 rounded-xl transition-all ${isDark ? 'hover:bg-slate-800' : 'hover:bg-[#F4EAFC]'}`}>
                                                                <span className={`text-xl p-2 rounded-lg border transition-colors ${isDark ? 'bg-slate-800 border-slate-700 text-gray-200' : 'bg-gray-50 border-gray-100 text-gray-700'}`}>{item.icon}</span>
                                                                <div>
                                                                    <p className={`text-sm font-bold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{item.title}</p>
                                                                    <p className={`text-[11px] leading-tight ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{item.desc}</p>
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
                                <a key={link} href="#" className={`block py-5 font-bold text-lg border-b ${isDark ? 'text-white border-slate-800' : 'text-gray-900 border-gray-50'}`}>
                                    {link}
                                </a>
                            ))}

                            <div className="pt-8">
                                <a href="#" className="block w-full text-center bg-[#9333EA] text-white py-4 rounded-xl font-bold shadow-lg">
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;