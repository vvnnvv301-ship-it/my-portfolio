import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Dilmurod Yusupov</h3>
                        <p className="text-sm text-muted-foreground">
                            AI Specialist & Digital Producer specializing in AgroTech startups and AI solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Tezkor Havolalar</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#summary" className="text-muted-foreground hover:text-primary transition">Xulosa</a></li>
                            <li><a href="#experience" className="text-muted-foreground hover:text-primary transition">Tajriba</a></li>
                            <li><a href="#projects" className="text-muted-foreground hover:text-primary transition">Loyihalar</a></li>
                            <li><a href="#certificates" className="text-muted-foreground hover:text-primary transition">Sertifikatlar</a></li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Bog'lanish</h3>
                        <div className="space-y-3 mb-4">
                            <a href="mailto:dilmurodyusupov2022@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
                                <Mail className="w-4 h-4" />
                                dilmurodyusupov2022@gmail.com
                            </a>
                            <a href="tel:+998906431103" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
                                <Phone className="w-4 h-4" />
                                +998 90 643 11 03
                            </a>
                        </div>
                        <div className="flex gap-3">
                            <a href="https://linkedin.com/in/dilmurod-yusupov-a921ab253" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass hover:bg-primary hover:text-white transition" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/vvnnvv301-ship-it" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass hover:bg-primary hover:text-white transition" aria-label="GitHub">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Dilmurod Yusupov. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
