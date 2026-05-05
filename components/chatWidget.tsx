"use client";
import { useEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";
import { Message, ChatWidgetProps } from "@/utilities/types";

const ChatWidget = ({ open, setOpen }: ChatWidgetProps) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi! I'm the Orfys AI assistant. How can I help you today?",
            sender: "bot",
        },
    ]);

    const chatEndRef = useRef<HTMLDivElement | null>(null);

    // auto scroll
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now(),
            text: input,
            sender: "user",
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");

        // Dummy bot reply
        setTimeout(() => {
            const botMsg: Message = {
                id: Date.now() + 1,
                text: "Got it 👍 Let me know how can i help you?",
                sender: "bot",
            };

            setMessages((prev) => [...prev, botMsg]);
        }, 800);
    };

    return (
        <>
            {open && (
                <div className="fixed bottom-24 right-6 z-50 w-[350px] h-[450px] bg-white rounded-3xl shadow-2xl border border-[var(--border-default)] flex flex-col overflow-hidden">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                🤖
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Orfys AI Assistant</h4>
                                <p className="text-[10px] text-blue-100">Online and ready to help</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setOpen(false)}
                            className="h-8 w-8 hover:bg-white/10 cursor-pointer flex justify-center items-center rounded-full"
                        >
                            <IoClose />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto bg-[var(--bg-secondary)] space-y-3">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`p-3 max-w-[75%] text-xs rounded-2xl shadow-sm
                                    ${msg.sender === "user"
                                            ? "bg-purple-600 text-white rounded-br-none"
                                            : "bg-white text-slate-600 rounded-tl-none"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-[var(--bg-secondary)] border-t border-[var(--border-default)]">
                        <div className="relative">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                className="w-full pl-4 pr-12 py-3 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Type your message..."
                            />

                            <button
                                onClick={sendMessage}
                                className="absolute right-2 top-1/2 cursor-pointer -translate-y-1/2 w-9 h-9 bg-purple-600 text-white rounded-xl flex items-center justify-center"
                            >
                                <AiOutlineSend />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-4 z-50 w-12 h-12 cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all"
            >
                {open ? <IoClose size={24} /> : <IoChatbubbleEllipsesOutline size={26} />}
            </button>
        </>
    );
};

export default ChatWidget;