"use client"

import { motion } from "framer-motion"

export function Summary() {
    return (
        <section id="summary" className="py-24 bg-background relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Professional Xulosa
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Kelajakni shakllantirish uchun AI va texnologiya innovatsiyalari.
                    </p>
                    <p className="text-lg leading-relaxed text-foreground/90">
                        &quot;Aniq ko&apos;rish bilan hamma narsa mumkin&quot; deb ishonuvchi yuqori motivatsiyali Dasturchi va AI Mutaxassisi. Qishloq xo&apos;jaligi sohasidagi akademik ta&apos;lim va mijozlarga xizmat ko&apos;rsatish sohasidagi qimmatli professional tajribani Generative AI, Advanced Prompt Engineering va Raqamli Media Ishlab Chiqarish bo&apos;yicha maxsus texnik ko&apos;nikmalar bilan birlashtiradi.
                        <br /><br />
                        O&apos;zbekistonning yetakchi IT akademiyasi Najot Ta&apos;lim bitiruvchisi, Prompt Engineering bo&apos;yicha maxsus ta&apos;limga ega. Murakkab muammolarni hal qilish va kengaytiriladigan kontent yaratish uchun noyob tizim promptlaridan foydalangan holda AI botlarni loyihalash va joylashtirish bo&apos;yicha malakali. Qishloq xo&apos;jaligi texnologiyalari (AgroTech) sohasida startaplar yaratishga alohida qiziqish bildiradi va AI yordamida qishloq xo&apos;jaligi muammolarini hal qilishga intiladi. Haqiqiy dunyo muammolarini hal qiladigan yuqori darajadagi AI Mutaxassisiga aylanishga sodiq.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
