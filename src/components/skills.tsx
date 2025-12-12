"use client"

import { Database, Brain, Code, Video, Users, Sparkles, Globe, Wrench } from "lucide-react"
import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export function Skills() {
    const skills = [
        { icon: Brain, name: "Sun'iy Intellekt", desc: "Generative AI, Advanced Prompt Engineering, AI System Design, AI Bot Development", color: "text-purple-500" },
        { icon: Sparkles, name: "Tez Moslashuv", desc: "Tez O'rganuvchi, Yangi Modellarni Qabul Qiluvchi, Moslashuvchan", color: "text-blue-500" },
        { icon: Code, name: "Dasturlash", desc: "Vibe Coder", color: "text-yellow-500" },
        { icon: Database, name: "Ma'lumotlar Tahlili", desc: "MySQL for Data Analytics, Data Visualization", color: "text-cyan-500" },
        { icon: Video, name: "Raqamli Media", desc: "2D/3D Animation, Cartoon & Movie Production, Visual Storytelling", color: "text-red-500" },
        { icon: Globe, name: "Tillar", desc: "O'zbek (Ona tili), Ingliz (Professional), Rus (Boshlang'ich)", color: "text-green-500" },
        { icon: Users, name: "Yumshoq Ko'nikmalar", desc: "Madaniyatlararo Muloqot, Murakkab Muammolarni Hal Qilish, Mijozlar bilan Munosabatlar", color: "text-pink-500" },
        { icon: Wrench, name: "Texnik Vositalar", desc: "OpenAI GPT, Gemini, Midjourney, Stable Diffusion, Git, VS Code", color: "text-orange-500" },
    ]

    return (
        <section id="skills" className="py-24 bg-accent/5 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Texnik Ko'nikmalar
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        AI, Machine Learning, Dasturlash va Raqamli Media sohasidagi professional ko'nikmalarim.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={item}
                            className="p-6 rounded-2xl glass hover:bg-card/50 transition-all duration-300 border border-white/5 hover:border-primary/20 group"
                        >
                            <div className={`p-3 rounded-xl bg-background w-fit mb-4 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                                <skill.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                            <p className="text-sm text-muted-foreground">{skill.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
