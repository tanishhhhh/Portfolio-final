"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface GravityContainerProps {
    children: React.ReactNode;
    className?: string;
    gravityStrength?: number; // How much the element moves towards mouse
    floatDuration?: number; // Duration of the floating cycle
    floatDistance?: number; // Distance of floating movement
}

export const GravityContainer = ({
    children,
    className,
    gravityStrength = 15,
    floatDuration = 6,
    floatDistance = 10,
}: GravityContainerProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        x.set(mouseX / gravityStrength);
        y.set(mouseY / gravityStrength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn("relative", className)}
            style={{
                x: mouseXSpring,
                y: mouseYSpring,
            }}
        >
            <motion.div
                animate={{
                    y: [0, -floatDistance, 0],
                }}
                transition={{
                    duration: floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};
