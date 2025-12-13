"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap, Download } from "lucide-react"

const education = [
    {
        school: "International Agriculture University",
        degree: "To'liq Stipendiya",
        year: "2025 - 2029 (Kutilmoqda)",
        desc: "Akademik mukammallik uchun 2025-2029 dasturini qamrab oluvchi to'liq stipendiya bilan taqdirlangan. Dastur to'liq ingliz tilida o'qitiladi va Buyuk Britaniyaning Royal Agricultural University tomonidan akkreditatsiya qilingan."
    },
    {
        school: "Najot Ta'lim IT Academy",
        degree: "Advanced Prompt Engineering",
        year: "Tamomlangan",
        desc: "O'zbekistonning eng yetakchi IT ta'lim markazlaridan birida keng qamrovli o'quv dasturini muvaffaqiyatli tamomlagan. Katta Til Modellarining (LLM) arxitekturasini, few-shot prompting va chain-of-thought fikrlashni biznes va ijodiy ilovalar uchun AI natijalarini optimallashtirish uchun o'zlashtirdim."
    }
]

const certifications = [
    { name: "Introduction to Generative AI", issuer: "Google Cloud (Coursera)" },
    { name: "Five Million Prompters Initiative", issuer: "AI System Engineering" },
    { name: "MySQL for Data Analytics", issuer: "Sertifikat" },
    { name: "AI500! Hackathon - Stage 1", issuer: "Noyabr 2025" },
    { name: "Prompt Engineering Course", issuer: "Najot Ta'lim (To'liq stipendiya)" },
]

export function Education() {
    return (
        <section id="education" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
                                <GraduationCap className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold">Ta&apos;lim</h2>
                        </div>
                        <div className="space-y-8">
                            {education.map((edu, idx) => (
                                <div key={idx} className="pl-4 border-l-2 border-border relative">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-orange-500"></span>
                                    <h3 className="text-xl font-bold">{edu.school}</h3>
                                    <p className="text-primary font-medium text-sm mb-1">{edu.degree} | {edu.year}</p>
                                    <p className="text-muted-foreground">{edu.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                                <Award className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold">Sertifikatlar va Mukofotlar</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {certifications.map((cert, idx) => (
                                <div key={idx} className="p-4 rounded-xl glass border border-white/5 hover:bg-accent/50 transition flex items-center gap-3">
                                    <Award className="w-5 h-5 text-blue-500" />
                                    <div>
                                        <h4 className="font-bold text-sm">{cert.name}</h4>
                                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-500/20 glass border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold">Rezyumeni yuklab olish</h3>
                                <p className="text-sm text-muted-foreground">Batafsil ma&apos;lumot uchun PDF variantni ko&apos;ring.</p>
                            </div>
                            <a href="/assets/docs/resume-en.pdf" download className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition flex items-center gap-2 shadow-lg shadow-primary/25">
                                <Download className="w-5 h-5" />
                                Yuklab olish (PDF)
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
