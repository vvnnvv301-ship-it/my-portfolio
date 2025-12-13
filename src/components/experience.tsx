"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Calendar } from "lucide-react"

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Ish Tajribasi
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Professional sayohat va asosiy yutuqlar.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 pb-12 border-l-2 border-primary/20"
                    >
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>

                        <div className="glass p-8 rounded-2xl hover:bg-card/50 transition duration-300">
                            <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Mijozlarga Xizmat Ko&apos;rsatish Mutaxassisi</h3>
                                    <h4 className="text-lg text-primary mb-2">Ritz-Carlton & Red Sea Projects</h4>
                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>Fevral 2022 - Yanvar 2024</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            <span>Saudiya Arabistoni</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                            </div>
                            <ul className="space-y-3 text-muted-foreground leading-relaxed">
                                <li className="flex gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Yuqori daromadli shaxslar bilan bevosita muloqot orqali ajoyib muloqot va mijozlarni boshqarish ko&apos;nikmalarini rivojlantirdim, bu ko&apos;p funksiyali hamkorlik uchun muhim professional asos yaratdi.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Murakkab, vaqt-muhim mijoz muammolarini hal qilish orqali tez diagnostika va muammolarni hal qilish qobiliyatlarini rivojlantirdim, doimiy ravishda 95%+ mijozlar qoniqish reytinglariga erishdim.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Haqiqiy biznes ehtiyojlari va xizmat bo&apos;shliqlari haqida chuqur tushunchaga ega bo&apos;ldim, bu Smart AI Studio startap tashabbusining tijorat kontseptsiyasi va foydalanuvchi tajribasi dizayniga bevosita ilhom berdi.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Xalqaro mehmonlar va mahalliy jamoalar o&apos;rtasida madaniyatlararo muloqotni boshqardim, global AI bozor ehtiyojlariga mos keladigan madaniy intellektni oshirdim.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
