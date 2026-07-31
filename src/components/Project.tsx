import { motion, AnimatePresence } from 'framer-motion';
import { Database, Presentation } from 'lucide-react';
import { useState } from 'react';

// Import project images
import projek1 from '../assets/projects/projek1.png';
import projek2 from '../assets/projects/projek2.png';
import projek3 from '../assets/projects/projek3.png';
import projek4 from '../assets/projects/projek4.png';
import projek5 from '../assets/projects/projek5.png';
import projek6 from '../assets/projects/projek6.png';

const categories = ['All Projects', 'Data Analyst', 'Machine Learning', 'SQL'];

const projects = [
    {
        id: 1,
        title: 'Retail Sales Analytics & Forecasting (2020–2023) (kimia Farma)',
        description: 'Processed 672K+ rows of sales data to build an interactive Looker Studio executive dashboard. Developed a time-series forecasting model using Python with a 5.22% error rate to guide strategic business planning.',
        image: projek1,
        tags: ['SQL', 'Python', 'Looker Studio', 'Forecasting'],
        category: 'Data Analyst',
        link: 'https://drive.google.com/file/d/1DrtQOr-ODRPldd1EjjdnhNX2dpIcLLIt/view?usp=sharing'
    },
    {
        id: 2,
        title: 'Predictive Analytics & Web Interface (Skripsi)',
        description: 'Managed an end-to-end data pipeline for applied agricultural research. Acquired and preprocessed datasets using CLAHE to build a highly accurate predictive model (99.5% mAP50), integrated into an interactive Streamlit web application for automated model testing and visual classification.',
        image: projek2,
        tags: ['Python', 'Data Preprocessing', 'Streamlit', 'Model Testing'],
        category: 'Machine Learning',
        link: 'https://drive.google.com/file/d/1ogviLk3KcMdlWwUw3kxUjfkvS46vzNB5/view?usp=sharing'
    },
    {
        id: 3,
        title: 'E-Commerce Analytics & Interactive Dashboard (Special Skill)',
        description: 'Executed an end-to-end data analysis pipeline for e-commerce performance. Cleaned raw datasets and conducted statistical analysis to build a comprehensive, interactive management dashboard. Extracted actionable business insights regarding financial health, pinpointed the dominant 18-37 target demographic, and established the operational impact of delivery times on customer satisfaction.',
        image: projek3,
        tags: ['Excel', 'Data-Cleaning', 'Statistical-Analysis', 'Dashboard', 'Business-Intelligence'],
        category: 'Data Analyst',
        link: 'https://drive.google.com/file/d/1jeAA6LQ31bm0iSK0qmIerCNX61LN6hUi/view?usp=drive_link'
    },
    {
        id: 4,
        title: 'Online Sales & Customer Analytics Pipeline (DQLab)',
        description: 'Managed an end-to-end data pipeline using Google BigQuery (SQL) and Colab (Python) to process large-scale datasets. Designed an interactive Looker Studio dashboard to visualize online sales trends and facilitate data storytelling. Evaluated key consumer behavior metrics, including Customer Lifetime Value (CLV), Average Order Value (AOV), Basket Size, and Order Frequency, providing actionable insights to drive strategic business growth.',
        image: projek4,
        tags: ['SQL', 'Python', 'Looker-Studio', 'Data-Pipeline', 'Business-Intelligence'],
        category: 'Data Analyst',
        link: 'https://drive.google.com/file/d/1mKnKjWVEse3YFU-SvVcNSf89_vrNnQdw/view?usp=drive_link'
    },
    {
        id: 5,
        title: 'Sentiment Analysis of Cek Bansos App Reviews (Capstone MSIB Sanber Foundation)',
        description: 'Completed an intensive 900-hour Fullstack Data Science program and built an end-to-end sentiment analysis system for public social assistance reviews. Utilized Python (Pandas) for data processing and Natural Language Processing (NLP) techniques to classify public opinions into positive, neutral, and negative categories. Deployed the machine learning model into an interactive web application using Streamlit to visualize insights and make the findings accessible to users.',
        image: projek5,
        tags: ['Python', 'NLP', 'Machine-Learning', 'Streamlit', 'Data'],
        category: 'Machine Learning',
        link: 'https://drive.google.com/file/d/16kiS5huvhNIBJoo7f_eSYqSe9E9crYWm/view?usp=drive_link'
    },
    {
        id: 6,
        title: 'Customer Analytics for Marketing Campaign Optimization',
        description: 'Conducted an end-to-end customer personality analysis using Python (Pandas, NumPy, Seaborn) to evaluate marketing campaign effectiveness and consumer behavior patterns. Cleaned and processed 2,240 customer records, uncovering key insights regarding top-performing product categories (Wine) and high-value demographic segments. Evaluated campaign response rates and identified primary target characteristics such as high income, high total spend, low recency, and active digital engagement to deliver actionable marketing recommendations.',
        image: projek6,
        tags: ['Python', 'Pandas', 'Seaborn', 'Customer-Analytics', 'Data'],
        category: 'Data Analyst',
        link: 'https://drive.google.com/file/d/1zvZS9GQQdeTx0uv5twqHPXn6Fq-diwlr/view?usp=drive_link'
    },
    {
        id: 7,
        title: 'Rental Store Performance Analysis',
        description: 'Conducted a comprehensive relational database analysis using PostgreSQL (SQL) to evaluate inventory, customer behavior, and store operations across 15 tables. Performed inventory risk categorization, data quality audits (identifying orphan records), regional revenue mapping (top cities like Cape Coral and Saint-Denis vs. low-performing regions), and staff performance evaluations. Delivered strategic business insights to optimize inventory stocking, regional marketing, and operational efficiency.',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800',
        tags: ['PostgreSQL', 'SQL', 'Data-Analysis', 'Business-Intelligence'],
        category: 'SQL',
        link: '#'
    },
    {
        id: 8,
        title: 'HR Database & Compensation Analysis (PostgreSQL)',
        description: 'Designed and managed a relational Human Resources (HR) database using PostgreSQL (SQL) to analyze employee compensation and organizational structure. Implemented DDL/DML operations, virtual views, and multi-table joins across employee and department datasets. Applied advanced SQL techniques—including aggregate functions, Window Functions (RANK, ROLLUP), and running totals—to evaluate salary distributions, department hierarchies, payroll impacts from employee entries/departures, and top-earning positions to deliver data-driven insights.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
        tags: ['PostgreSQL', 'SQL', 'HR-Analytics', 'Database-Management', 'Data'],
        category: 'SQL',
        link: '#'
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
                                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-700/50 w-full">
                                        {project.link && project.link !== '#' ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors w-full py-2 bg-slate-800/40 rounded-lg border border-slate-700 hover:border-blue-500/30"
                                            >
                                                <Presentation size={18} className="text-blue-400" />
                                                Project Deck
                                            </a>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500 cursor-not-allowed w-full py-2 bg-slate-800/10 rounded-lg border border-slate-800">
                                                <Presentation size={18} className="text-slate-600" />
                                                No Deck Available
                                            </span>
                                        )}
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
