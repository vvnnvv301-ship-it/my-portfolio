"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-2xl"
            >
                <motion.h1
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-9xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-4"
                >
                    404
                </motion.h1>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Sahifa Topilmadi
                </h2>

                <p className="text-muted-foreground mb-8 text-lg">
                    Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition"
                    >
                        <Home className="w-5 h-5" />
                        Bosh Sahifa
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-input bg-background hover:bg-accent transition"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Orqaga
                    </button>
                </div>

                <motion.div
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="mt-12 text-6xl"
                >
                    🤖
                </motion.div>
            </motion.div>
        </div>
    )
}
