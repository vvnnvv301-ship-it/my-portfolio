"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const posts = [
    {
        title: "Prompt Engineering' asoslari",
        excerpt: "AI bilan samarali muloqot qilishning zamonaviy usullari va strategiyalari.",
        date: "Dec 12, 2024",
        category: "AI"
    },
    {
        title: "Raqamli Media kelajagi",
        excerpt: "Video montaj va grafik dizaynda sun'iy intellektning o'rni.",
        date: "Nov 28, 2024",
        category: "Digital Media"
    },
    {
        title: "Katta Til Modellari (LLM)",
        excerpt: "ChatGPT va boshqa modellar qanday ishlaydi?",
        date: "Nov 15, 2024",
        category: "Machine Learning"
    }
]

export function Blog() {
    return (
        <section id="blog" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        So&apos;nggi Maqolalar
                    </motion.h2>
                    <p className="text-muted-foreground">AI va texnologiya olamidagi yangiliklar.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition bg-card"
                        >
                            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse group-hover:animate-none group-hover:scale-105 transition duration-500" />
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4 text-xs text-muted-foreground">
                                    <span>{post.date}</span>
                                    <span className="text-primary font-bold">{post.category}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">{post.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                                <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 transition-all">
                                    O&apos;qish <ArrowRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
