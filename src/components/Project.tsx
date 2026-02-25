import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Database } from 'lucide-react';
import { useState } from 'react';

const categories = ['All Projects', 'Data Analyst', 'Data Science', 'Machine Learning', 'Deep Learning'];

const projects = [
    {
        id: 1,
        title: 'Customer Churn Prediction Model',
        description: 'Developed a machine learning model using XGBoost to predict customer churn for a telecom company, achieving 92% accuracy and identifying key drivers of customer attrition.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        tags: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn'],
        category: 'Machine Learning',
        github: '#',
        demo: '#'
    },
    {
        id: 2,
        title: 'Sales Dashboard Analytics',
        description: 'An interactive Tableau dashboard analyzing 3 years of e-commerce sales data. Designed automated ETL pipelines in Python to update the dashboard daily, improving reporting efficiency by 40%.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        tags: ['Tableau', 'SQL', 'Python', 'ETL'],
        category: 'Data Analyst',
        github: '#',
        demo: '#'
    },
    {
        id: 3,
        title: 'Sentiment Analysis on Social Media',
        description: 'Built an NLP pipeline to analyze public sentiment on Twitter regarding specific tech brands. Utilized Hugging Face transformers to classify tweets into positive, neutral, or negative categories.',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
        tags: ['PyTorch', 'Hugging Face', 'NLP', 'Tweepy'],
        category: 'Deep Learning',
        github: '#',
        demo: '#'
    },
    {
        id: 4,
        title: 'Customer Segmentation Clustering',
        description: 'Applied K-Means clustering algorithm on retail data to identify distinct customer segments based on purchasing behavior, enabling targeted marketing campaigns.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        tags: ['Python', 'Scikit-learn', 'Clustering', 'Seaborn'],
        category: 'Data Science',
        github: '#',
        demo: '#'
    }
];

export default function Project() {
    const [activeCategory, setActiveCategory] = useState('All Projects');

    const filteredProjects = activeCategory === 'All Projects'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-sm font-medium mb-4">
                        <Database size={16} />
                        <span>Portfolio</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">Featured Projects</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
                        A selection of my recent work in data analytics, machine learning, and predictive modeling.
                    </p>

                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                                    : 'bg-slate-800/50 text-slate-400 hover:text-slate-200 hover:bg-slate-700 border border-slate-700/50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group rounded-2xl bg-slate-800/30 border border-slate-700 overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900 border-b border-slate-700/50">
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="px-2 py-1 text-xs font-semibold rounded-md bg-slate-900/80 text-blue-400 border border-slate-700 backdrop-blur-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none" />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs font-medium rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-700/50">
                                        <a
                                            href={project.github}
                                            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                                        >
                                            <Github size={18} />
                                            Code
                                        </a>
                                        <a
                                            href={project.demo}
                                            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors ml-auto"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
