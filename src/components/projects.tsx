"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Play, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const projects = [
    {
        title: "\"Ecojon\" – 3D Ekologik Animatsiya",
        category: "3D Animation & Digital Media",
        description: "Ekologik inqirozlarni hal qilish va sayyorani qutqarishga bag'ishlangan qahramon xarakter \"Ecojon\" ishtirokidagi 3D animatsion seriyani kontseptsiyalashtirdim va ishlab chiqdim. To'liq 3D ishlab chiqarish konveyerini boshqardim, jumladan xarakter dizayni, rigging, animatsiya va rendering. Ekologik barqarorlik (Eco-Tech) haqida xabardorlikni oshirish uchun vizual hikoya qilishdan foydalandim.",
        vimeoId: "1146094986",
        tags: ["3D Animation", "Character Design", "Environmental Storytelling"],
        hasVideo: true
    },
    {
        title: "Smart AI Studio – AI-Powered Content Platform",
        category: "AI & Web Development",
        description: "AI-driven kontent yaratishga ixtisoslashgan jonli veb-ilovani ishlab chiqdim va hozirda qo'llab-quvvatlayman. Bir nechta domenlarda kengaytiriladigan kontent yaratish va muammolarni hal qilish uchun maxsus tizim promptlaridan foydalangan holda murakkab AI yechimlarini yaratdim. Texnik AI imkoniyatlarini ijodiy ishlab chiqarish ish oqimlari bilan bog'laydigan foydalanuvchilarga qulay interfeyslarni loyihalashtirdim.",
        image: "/assets/images/hero-bg.png",
        tags: ["Next.js", "AI System Design", "Vercel", "Custom Prompts"],
        link: "https://smart-ai-studio-se9t.vercel.app/",
        github: "https://github.com/vvnnvv301-ship-it",
        hasVideo: false
    }
]

export function Projects() {
    const [showVideoModal, setShowVideoModal] = useState(false)

    const openVideoModal = () => {
        setShowVideoModal(true)
    }

    const closeVideoModal = () => {
        setShowVideoModal(false)
    }

    return (
        <>
            <section id="projects" className="py-24 bg-accent/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-4"
                        >
                            Asosiy Loyihalar
                        </motion.h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            AI va raqamli media sohasidagi professional loyihalarim va ijodiy ishlarim.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group rounded-3xl overflow-hidden glass hover:bg-card/50 transition-all duration-500 border border-white/5 hover:border-primary/20"
                            >
                                {/* Project Image/Video */}
                                <div className="relative h-64 overflow-hidden">
                                    {project.hasVideo ? (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={`https://vumbnail.com/${project.vimeoId}.jpg`}
                                                alt={project.title}
                                                fill
                                                className="object-cover opacity-80 group-hover:opacity-100 transition duration-700"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">
                                                <button
                                                    onClick={openVideoModal}
                                                    className="p-4 rounded-full bg-primary/90 hover:bg-primary transition transform hover:scale-110"
                                                >
                                                    <Play className="w-8 h-8 text-white" />
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <Image
                                            src={project.image || "/placeholder.png"}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 pointer-events-none">
                                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/20 px-3 py-1 rounded-full border border-primary/20 backdrop-blur-md">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold group-hover:text-primary transition">{project.title}</h3>
                                        <div className="flex gap-3">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition">
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition">
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground mb-6">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full-Screen Video Modal */}
            {showVideoModal && (
                <div className="fixed inset-0 z-50 bg-black flex items-center justify-center" onClick={closeVideoModal}>
                    <button
                        onClick={closeVideoModal}
                        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition text-white z-10"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="relative w-full h-full flex items-center justify-center p-8">
                        <iframe
                            src={`https://player.vimeo.com/video/${projects[0].vimeoId}?autoplay=1`}
                            className="w-full h-full max-w-5xl max-h-[80vh]"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            onClick={(e) => e.stopPropagation()}
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    )
}
