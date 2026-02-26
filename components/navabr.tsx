"use client";

import { useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import orfys_logo from '@/public/o-logo.webp';
import { IoIosArrowUp } from "react-icons/io";
import { CiDark, CiLight } from "react-icons/ci";
import { IoClose, IoMenu } from 'react-icons/io5';
import { MenuItem } from '@/utilities/types';
import { dropdownData, dropdownKeys, portfolioData, companyData } from '@/utilities/navbarMenus';

const Header = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    useLayoutEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    const isDark = theme === 'dark';

    // UI: Desktop Card Layout (Portfolio/Company only)
    const CardItem = ({ item }: { item: MenuItem }) => (
        <div className={`group/card cursor-pointer p-4 rounded-2xl border transition-all duration-300 ${isDark ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-gray-50 border-gray-100 hover:bg-[#F4EAFC]'}`}>
            <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center text-4xl transition-transform group-hover/card:scale-105 ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-100 shadow-sm'}`}>
                {item.icon}
            </div>

            <h4 className={`text-[11px] font-bold uppercase tracking-widest mb-2 transition-colors ${isDark ? 'text-purple-400' : 'text-[#9333EA]'}`}>{item.title}</h4>
            <p className={`text-[12px] leading-relaxed transition-colors ${isDark ? 'text-gray-400 group-hover/card:text-white' : 'text-gray-600'}`}>{item.desc}</p>
        </div>
    );

    // UI: Standard Row Layout (All Mobile items + Desktop Services/Tech)
    const StandardItem = ({ item }: { item: MenuItem }) => (
        <a href="#" className={`group/item flex items-start p-4 mb-2 -m-4 rounded-xl transition-all duration-200 ${isDark ? 'hover:bg-slate-800' : 'hover:bg-[#F4EAFC]'}`}>
            <div className={`flex-shrink-0 w-11 h-11 border rounded-lg flex items-center justify-center text-xl transition-all shadow-sm ${isDark ? 'bg-slate-800 border-slate-700 group-hover/item:bg-slate-700' : 'bg-gray-50 border-gray-100 group-hover/item:bg-white'}`}>{item.icon}</div>
            <div className="ml-4 text-left">
                <p className={`text-[13px] font-bold transition-colors ${isDark ? 'text-gray-100 group-hover/item:text-purple-400' : 'text-gray-900 group-hover/item:text-[#9333EA]'}`}>{item.title}</p>
                <p className={`text-[11px] mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{item.desc}</p>
            </div>
        </a>
    );

    return (
        <nav className={`${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-gray-100'} border-b sticky top-0 z-[100] transition-colors duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* company name & logo */}
                    <div className='flex flex-row gap-4 items-center z-[110]'>
                        <Image src={orfys_logo} alt="Orfys Logo" className="h-8 w-8" />
                        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            <span className={isDark ? 'text-purple-400' : 'text-[#9333EA]'}>Orfys </span>
                            <span className="hidden sm:inline">Technologies</span>
                        </p>
                    </div>

                    {/* desktop navigation */}
                    <div className="hidden lg:block">
                        <ul className="flex space-x-1 items-center">
                            {dropdownKeys.map((category) => (
                                <li key={category} className="group static">
                                    <button className={`flex items-center px-4 py-7 text-sm font-bold transition-colors ${isDark ? 'text-gray-300 group-hover:text-purple-400' : 'text-gray-600 group-hover:text-[#9333EA]'}`}>
                                        {category}
                                    </button>

                                    <div className="absolute left-0 right-0 top-full hidden group-hover:block transition-all duration-300 z-[100]">
                                        <div className="mx-auto max-w-7xl px-4">
                                            <div className={`${isDark ? 'bg-slate-900 border-slate-800 shadow-2xl' : 'bg-white border-gray-100 shadow-2xl'} rounded-2xl border mt-1 p-10 grid grid-cols-3 gap-12`}>
                                                {Object.entries(dropdownData[category as keyof typeof dropdownData]).map(([sub, items]) => (
                                                    <div key={sub}>
                                                        <h3 className={`font-bold text-[11px] uppercase tracking-widest mb-6 border-b pb-2 ${isDark ? 'text-gray-500 border-slate-800' : 'text-gray-400 border-gray-100'}`}>{sub}</h3>
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

                            {/* portfolio and company dropdown */}
                            {[{ title: "Portfolio", data: portfolioData }, { title: "Company", data: companyData }].map((menu) => (
                                <li key={menu.title} className="group static">
                                    <button className={`flex items-center px-4 py-7 text-sm font-bold transition-colors ${isDark ? 'text-gray-300 group-hover:text-purple-400' : 'text-gray-600 group-hover:text-[#9333EA]'}`}>
                                        {menu.title}
                                    </button>

                                    <div className="absolute left-0 right-0 top-full hidden group-hover:block transition-all duration-300 z-[100]">
                                        <div className="mx-auto max-w-7xl px-4">
                                            <div className={`${isDark ? 'bg-slate-900 border-slate-800 shadow-2xl shadow-black/50' : 'bg-white border-gray-100 shadow-2xl'} rounded-2xl border mt-1 p-8 grid grid-cols-4 gap-6`}>
                                                {menu.data.map((item) => <CardItem key={item.title} item={item} />)}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* actions button */}
                    <div className="flex items-center gap-3 z-[110]">
                        <button onClick={toggleTheme} className={`p-2 rounded-lg cursor-pointer border transition-colors ${isDark ? 'text-yellow-400 hover:bg-slate-800 border-slate-700' : 'text-gray-600 hover:bg-gray-100 border-gray-100'}`}>
                            {isDark ? <CiLight size={20} /> : <CiDark size={20} />}
                        </button>

                        <a href="#" className={`hidden sm:block px-6 py-2.5 rounded-md transition shadow-md text-sm font-semibold border ${isDark ? 'border-purple-500 text-purple-400 hover:bg-purple-900/20' : 'border-[#9333EA] text-[#9333EA] hover:bg-[#F4EAFC]'}`}>Book Now</a>
                        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className={`lg:hidden cursor-pointer p-2 rounded-md transition-colors ${isDark ? 'text-gray-300 hover:bg-slate-800' : 'text-gray-600 hover:bg-gray-100'}`}>
                            {isMobileOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile navigation */}
            <div className={`lg:hidden fixed left-0 right-0 bottom-0 z-[90] overflow-y-auto transition-all duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-gray-900'} ${isMobileOpen ? 'top-20 opacity-100' : 'top-[-100%] opacity-0'}`}>
                <div className="p-6">
                    <div className="space-y-1">
                        {dropdownKeys.map((key) => (
                            <div key={key} className={`border-b ${isDark ? 'border-slate-800' : 'border-gray-100'}`}>
                                <button onClick={() => setOpenCategory(openCategory === key ? null : key)} className="flex items-center justify-between w-full py-5 text-left font-bold text-lg">
                                    {key} <IoIosArrowUp className={`${openCategory === key ? 'rotate-180 text-purple-400' : ''}`} />
                                </button>

                                {openCategory === key && (
                                    <div className="pb-6 pt-2 space-y-6">
                                        {Object.entries(dropdownData[key as keyof typeof dropdownData]).map(([sub, items]) => (
                                            <div key={sub}>
                                                <p className={`text-[10px] uppercase font-bold mb-4 tracking-widest border-b pb-1 ${isDark ? 'text-gray-500 border-slate-800' : 'text-gray-400 border-gray-100'}`}>{sub}</p>
                                                <div className="space-y-4">
                                                    {items.map((item: MenuItem) => <StandardItem key={item.title} item={item} />)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* portfolio and company dropdown */}
                        {[{ title: "Portfolio", data: portfolioData }, { title: "Company", data: companyData }].map((menu) => (
                            <div key={menu.title} className={`border-b ${isDark ? 'border-slate-800' : 'border-gray-100'}`}>
                                <button onClick={() => setOpenCategory(openCategory === menu.title ? null : menu.title)} className="flex items-center justify-between w-full py-5 text-left font-bold text-lg">
                                    {menu.title} <IoIosArrowUp className={`${openCategory === menu.title ? 'rotate-180 text-purple-400' : ''}`} />
                                </button>

                                {openCategory === menu.title && (
                                    <div className="pb-6 pt-2 space-y-4">
                                        <div className={`border-b mb-4 ${isDark ? 'border-slate-800' : 'border-gray-200'}`}></div>
                                        {menu.data.map((item) => <StandardItem key={item.title} item={item} />)}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;