"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// const messages = [
//     "Bienvenue à Timini ! 🌿",
//     "L'élégance au cœur de Ségou.",
//     "Une expérience éco-responsable.",
//     "Profitez de votre séjour !",
// ];

const messages = [
    "Bienvenue au Timini Hotel ! 🌿 Votre havre de paix à Ségou",
    "Plongez dans notre piscine aux eaux cristallines 💦",
    "Équipés de panneaux solaires pour un tourisme durable ☀️",
    "30 chambres élégantes pour vos nuits sereines 🛏️",
    "Notre salle de conférence: où l'élégance rencontre l'efficacité 💼",
    "Timini: l'écologie au service de votre confort 🌍",
    "Détendez-vous, nous pensons à votre bien-être 🍃",
    "Une oasis de tranquillité en plein cœur de Ségou 🌴",
    "Votre séjour, notre engagement éco-responsable ♻️",
    "Le charme malien allié au confort moderne ✨",
    "Piscine rafraîchissante avec vue sur les jardins 🌸",
    "Énergie solaire: notre engagement pour la planète ☀️",
    "Chambres spacieuses au design épuré et naturel 🏡",
    "L'art de l'hospitalité malienne réinventé 💫"
];

export default function HotelBot() {
    const [msgIndex, setMsgIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setMsgIndex((prev) => (prev + 1) % messages.length);
        }, 5000); // Change message every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="absolute bottom-6 right-8 z-30 flex flex-col items-end pointer-events-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Speech Bubble */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={msgIndex}
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/90 backdrop-blur-md text-primary px-4 py-2 rounded-2xl rounded-br-none shadow-lg mb-3 max-w-[200px] text-sm font-medium border border-primary/10"
                >
                    {messages[msgIndex]}
                </motion.div>
            </AnimatePresence>

            {/* Robot Character */}
            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative w-16 h-16"
            >
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-xl"
                >
                    {/* Body */}
                    <motion.rect
                        x="20"
                        y="30"
                        width="60"
                        height="50"
                        rx="10"
                        fill="#D97706" // Primary Amber
                        initial={{ fill: "#D97706" }}
                        whileHover={{ fill: "#B45309" }}
                    />

                    {/* Screen/Face */}
                    <rect x="30" y="40" width="40" height="30" rx="5" fill="#1F2937" />

                    {/* Eyes */}
                    <motion.g
                        animate={{ opacity: [1, 1, 0, 1, 1] }}
                        transition={{
                            duration: 3,
                            times: [0, 0.9, 0.95, 0.98, 1],
                            repeat: Infinity,
                            repeatDelay: Math.random() * 2
                        }}
                    >
                        <circle cx="40" cy="55" r="3" fill="#60A5FA" /> {/* Blue eyes */}
                        <circle cx="60" cy="55" r="3" fill="#60A5FA" />
                    </motion.g>

                    {/* Antenna */}
                    <line x1="50" y1="30" x2="50" y2="15" stroke="#D97706" strokeWidth="4" />
                    <circle cx="50" cy="15" r="4" fill="#EF4444">
                        <animate
                            attributeName="opacity"
                            values="1;0.5;1"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </circle>

                    {/* Arms */}
                    <motion.path
                        d="M20 50 H10"
                        stroke="#D97706"
                        strokeWidth="6"
                        strokeLinecap="round"
                        animate={{ rotate: isHovered ? [0, -20, 0] : 0 }}
                        style={{ originX: 1 }}
                    />
                    <motion.path
                        d="M80 50 H90"
                        stroke="#D97706"
                        strokeWidth="6"
                        strokeLinecap="round"
                        animate={{ rotate: isHovered ? [0, 20, 0] : 0 }}
                        style={{ originX: 0 }}
                    />
                </svg>
            </motion.div>
        </div>
    );
}
