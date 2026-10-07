import { motion } from 'framer-motion';
import { Database, Brain, Code2, LineChart, Table, Sparkles, LayoutDashboard } from 'lucide-react';

const skills = [
    { name: 'Excel', icon: <Table size={24} />, category: 'Spreadsheet', color: 'text-green-400', bg: 'bg-green-400/10' },
    { name: 'SQL', icon: <Database size={24} />, category: 'Database', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { name: 'Python', icon: <Code2 size={24} />, category: 'Programming', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { name: 'Data Visualization', icon: <LineChart size={24} />, category: 'Analytics', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { name: 'Data Cleaning', icon: <Sparkles size={24} />, category: 'Preparation', color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { name: 'Predictive Modeling', icon: <Brain size={24} />, category: 'Modeling', color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { name: 'Business Intelligence', icon: <LayoutDashboard size={24} />, category: 'Dashboards', color: 'text-pink-400', bg: 'bg-pink-400/10' }
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 -skew-x-[30deg] -z-10 translate-x-1/4" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    {/* Biography Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-6"
                    >
                        <div className="inline-block">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-100">About Me</h2>
                            <div className="h-1 w-20 bg-blue-500 mt-2 rounded-full" />
                        </div>

                        <p className="text-lg text-slate-400 leading-relaxed">
                            I have a strong passion for Data Analysis, dedicated to extracting meaningful patterns from complex datasets. With a honed analytical foundation, I focus on developing data-driven solutions that deliver tangible business value.
                        </p>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            My expertise covers the end-to-end data processing lifecycle—from data wrangling and exploratory data analysis (EDA) to creating interactive data visualizations. I believe that data is more than just numbers; it is a narrative that guides strategic decision-making.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="border border-slate-700/50 bg-slate-800/30 p-4 rounded-xl backdrop-blur-sm flex flex-col justify-center">
                                <h3 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 leading-tight">Fresh Graduate</h3>
                                <p className="text-slate-400 font-medium mt-1">Data Analyst</p>
                            </div>
                            <div className="border border-slate-700/50 bg-slate-800/30 p-4 rounded-xl backdrop-blur-sm flex flex-col justify-center">
                                <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">20+</h3>
                                <p className="text-slate-400 font-medium mt-1">Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center md:text-left">Core Capabilities</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20"
                                >
                                    <div className={`p-3 rounded-lg ${skill.bg} ${skill.color}`}>
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-200">{skill.name}</h4>
                                        <span className="text-sm text-slate-500">{skill.category}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
