"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
    const name = "Dilmurod Yusupov"

    // Animation variants for each letter
    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/hero-bg.png"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-40 dark:opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                {/* Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 mt-16 flex justify-center"
                >
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20">
                        <Image
                            src="/assets/images/profile-photo-new.png"
                            alt="Dilmurod Yusupov"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                    AI Specialist & Digital Producer
                </motion.div>

                {/* Animated Name - Letter by Letter */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 whitespace-nowrap">
                    {name.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.5,
                                delay: 0.5 + index * 0.05,
                                ease: "easeOut"
                            }}
                            className="inline-block"
                            style={{ display: char === " " ? "inline" : "inline-block" }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="text-xl md:text-2xl font-light text-muted-foreground mb-8 text-balance max-w-3xl mx-auto"
                >
                    &quot;Aniq ko&apos;rish bilan hamma narsa mumkin&quot;
                </motion.h2>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a href="#projects" className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-lg shadow-primary/20">
                        Loyihalarimni Ko&apos;rish
                    </a>
                    <a href="#contact" className="px-8 py-3 rounded-full border border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition">
                        Bog&apos;lanish
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
