"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const certificates = [
    { id: 1, image: "/assets/images/cert-01.jpg", title: "AI500! Hackathon" },
    { id: 2, image: "/assets/images/cert-02.jpg", title: "Five Million Prompters Initiative" },
    { id: 3, image: "/assets/images/cert-03.jpg", title: "Google Cloud Certificate" },
    { id: 4, image: "/assets/images/cert-04.jpg", title: "MySQL for Data Analytics" },
    { id: 5, image: "/assets/images/cert-05.jpg", title: "RAU Scholarship" },
    { id: 6, image: "/assets/images/cert-06.jpg", title: "Prompt Engineering" },
]

export function Certificates() {
    const [selectedCert, setSelectedCert] = useState<number | null>(null)

    return (
        <section id="certificates" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3 mb-4"
                    >
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                            <Award className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Sertifikatlar va Mukofotlar
                        </h2>
                    </motion.div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Professional rivojlanish va yutuqlarimni tasdiqlovchi rasmiy sertifikatlar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedCert(cert.id)}
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass border border-white/10 hover:border-primary/50 transition duration-300">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                                    <div className="flex items-center gap-2 text-white">
                                        <Award className="w-5 h-5" />
                                        <span className="font-semibold text-sm">{cert.title}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Coming Soon Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-muted-foreground italic text-lg">
                        Ko'proq sertifikatlar tez orada...
                    </p>
                </motion.div>

                {/* Lightbox Modal */}
                {selectedCert && (
                    <div 
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition text-white z-10"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="relative w-full max-w-3xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={certificates.find(c => c.id === selectedCert)?.image || ""}
                                alt={certificates.find(c => c.id === selectedCert)?.title || ""}
                                fill
                                className="object-contain bg-white/5 backdrop-blur-sm"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                                <div className="flex items-center gap-2 text-white">
                                    <Award className="w-5 h-5" />
                                    <span className="font-semibold">{certificates.find(c => c.id === selectedCert)?.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
