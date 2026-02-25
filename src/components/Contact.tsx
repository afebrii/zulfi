import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-900 border-t border-slate-800/50">
            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-sm font-medium mb-4">
                        <MessageSquare size={16} />
                        <span>Get In Touch</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">Let's Connect</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind, looking for a data-driven solution, or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
                            <h3 className="text-2xl font-bold text-slate-100 mb-6">Contact Details</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-medium mb-1">Email</p>
                                        <a href="mailto:zulfiseptiaanzana@gmail.com" className="text-slate-200 hover:text-blue-400 transition-colors font-medium">
                                            zulfiseptiaanzana@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-medium mb-1">Phone</p>
                                        <a href="tel:+6281234567890" className="text-slate-200 hover:text-blue-400 transition-colors font-medium">
                                            +62 812 3456 7890
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-medium mb-1">Location</p>
                                        <span className="text-slate-200 font-medium">
                                            Jakarta, Indonesia
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-8 mt-8 border-t border-slate-700/50">
                                <p className="text-sm text-slate-400 font-medium mb-4">Follow Me</p>
                                <div className="flex gap-4">
                                    <a href="#" className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-blue-600 transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="#" className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href="#" className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-blue-400 transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
                            <h3 className="text-2xl font-bold text-slate-100 mb-6">Send Me A Message</h3>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                                        placeholder="Hello Zulfi, I would like to discuss..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                                >
                                    <Send size={18} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
