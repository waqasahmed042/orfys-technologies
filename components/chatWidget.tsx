"use client";

import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";

const ChatWidget = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-4 z-[60] flex flex-col items-end">

            {/* Chat Window */}
            <div
                className={`
                    transition-all duration-300 ease-out
                    w-[350px] h-[450px]
                    bg-white rounded-3xl shadow-2xl border border-slate-100
                    flex flex-col overflow-hidden mb-4
                    ${open ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
                `}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            🤖
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">Orfys AI Assistant</h4>
                            <p className="text-[10px] text-blue-100">
                                Online and ready to help
                            </p>
                        </div>
                    </div>

                    <button
                        className="h-8 w-8 hover:bg-white/10 p-1 flex justify-center items-center rounded-full cursor-pointer transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        <IoClose />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4">
                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            🤖
                        </div>

                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
                            <p className="text-xs text-slate-600">
                                Hi! I'm the Orfys AI assistant. How can I help you today?
                            </p>
                        </div>
                    </div>
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-slate-100">
                    <div className="relative">
                        <input
                            className="w-full pl-4 pr-12 py-3 bg-slate-50 rounded-2xl text-sm focus:ring-2 focus:ring-purple-200 outline-none"
                            placeholder="Type your message..."
                        />

                        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 text-white rounded-xl flex items-center justify-center cursor-pointer">
                            <AiOutlineSend />
                        </button>
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setOpen(!open)}
                className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 cursor-pointer rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
                {open ? <IoClose /> : <IoChatbubbleEllipsesOutline />}
            </button>
        </div>
    );
};

export default ChatWidget;