"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Point = {
    x: number;
    y: number;
    id: number;
};

const CustomCursor: React.FC = () => {
    const [points, setPoints] = useState<Point[]>([]);

    useEffect(() => {
        let id = 0;

        const handleMouseMove = (e: MouseEvent) => {
            const newPoint = { x: e.clientX, y: e.clientY, id: id++ };

            setPoints((prev) => {
                const updated = [...prev, newPoint];
                return updated.slice(-20); // keep last 20 points (trail length)
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            {points.map((point, index) => {
                const opacity = index / points.length; // fade effect
                const scale = index / points.length;

                return (
                    <motion.div
                        key={point.id}
                        className="fixed pointer-events-none z-[9999] rounded-full"
                        style={{
                            left: point.x,
                            top: point.y,
                            width: "6px",
                            height: "6px",
                            backgroundColor: "var(--accent-primary)",
                            opacity,
                            transform: "translate(-50%, -50%)",
                            scale,
                            boxShadow: "0 0 8px var(--accent-primary)",
                        }}
                    />
                );
            })}
        </>
    );
};

export default CustomCursor;