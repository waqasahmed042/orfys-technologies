"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/chatWidget";
import ScrollToTop from "@/hooks/useScrollToTop";

export default function GlobalUI({ children }: { children: React.ReactNode }) {
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <ChatWidget open={chatOpen} setOpen={setChatOpen} />
            <ScrollToTop chatOpen={chatOpen} />
        </>
    );
};
