"use client";
import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor: React.FC = () => {
    // Motion values for cursor position
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring config for smooth cursor movement
    const springConfig = { damping: 25, stiffness: 150 };
    const edgeX = useSpring(cursorX, springConfig);
    const edgeY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999]"
            style={{
                translateX: edgeX,
                translateY: edgeY,
                x: "-50%",
                y: "-50%",
                backgroundColor: "var(--accent-primary)",
                boxShadow: "0 0 15px var(--accent-primary)",
            }}
        />
    );
};

export default CustomCursor;