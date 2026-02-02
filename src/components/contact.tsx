"use client"

import { Mail, Phone, Github, Linkedin, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState, FormEvent } from "react"
import emailjs from '@emailjs/browser'

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setStatus('idle')

        try {
            // Initialize EmailJS (replace with your actual credentials)
            emailjs.init('YOUR_PUBLIC_KEY') // Replace with your EmailJS public key

            // Send email using EmailJS
            await emailjs.send(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Dilmurod Yusupov',
                }
            )

            setStatus('success')
            setFormData({ name: '', email: '', message: '' })

            setTimeout(() => setStatus('idle'), 5000)
        } catch (error) {
            console.error('Form error:', error)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Men Bilan Bog&apos;laning
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Loyiha yoki hamkorlik bo&apos;yicha savollaringiz bormi? Quyidagi ma&apos;lumotlar orqali bog&apos;lanishingiz mumkin.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4 p-6 rounded-2xl glass hover:bg-accent/50 transition duration-300">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                                <a href="tel:+998906431103" className="text-muted-foreground hover:text-primary transition">
                                    +998 90 643 11 03
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 rounded-2xl glass hover:bg-accent/50 transition duration-300">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Email</h3>
                                <a href="mailto:dilmurodyusupov2022@gmail.com" className="text-muted-foreground hover:text-primary transition">
                                    dilmurodyusupov2022@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a href="https://linkedin.com/in/dilmurod-yusupov-a921ab253" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass hover:bg-primary hover:text-white transition duration-300">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://github.com/vvnnvv301-ship-it" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass hover:bg-primary hover:text-white transition duration-300">
                                <Github className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl glass"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Ism</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition disabled:opacity-50"
                                    placeholder="Ismingiz"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition disabled:opacity-50"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Xabar</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition disabled:opacity-50 resize-none"
                                    placeholder="Xabaringizni yozing..."
                                ></textarea>
                            </div>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm">
                                    ✓ Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beramiz.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm">
                                    ✗ Xatolik yuz berdi. Iltimos, qaytadan urinib ko&apos;ring.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Yuborilmoqda...
                                    </>
                                ) : (
                                    <>
                                        Yuborish <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
