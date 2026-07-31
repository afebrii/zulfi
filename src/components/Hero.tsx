import { motion } from 'framer-motion';
import { ArrowRight, Download, Briefcase } from 'lucide-react';
import profileImg from '../assets/profile/profile.jpeg';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10 mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl -z-10 mix-blend-screen" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10 opacity-30" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm"
                    >
                        <Briefcase size={16} />
                        <span>Open to work</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-100 mb-4"
                    >
                        I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Zulfi Septia Anzana</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-300 font-semibold mb-8"
                    >
                        Data Analyst
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="max-w-xl text-slate-400 text-lg md:text-xl mb-12"
                    >
                        Transforming complex data into actionable insights and interactive dashboards to solve real-world business problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#projects"
                            className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
                        >
                            View My Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium border border-slate-700 transition-all flex items-center justify-center gap-2"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 flex justify-center md:justify-end relative w-full max-w-md md:max-w-lg"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-br from-blue-500 to-cyan-400 overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.3)] group">
                        <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden relative border-4 border-slate-900">
                            <img
                                src={profileImg}
                                alt="Zulfi Septia Anzana"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
