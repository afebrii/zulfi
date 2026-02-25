import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Calendar, X } from 'lucide-react';
import { useState } from 'react';
import dummySertifikat from '../assets/sertifikat/dummy_sertifikat.png';

const certificates = [
    {
        id: 1,
        title: 'Google Data Analytics Professional Certificate',
        issuer: 'Coursera (Google)',
        date: 'Aug 2025',
        image: dummySertifikat,
    },
    {
        id: 2,
        title: 'Machine Learning Specialization',
        issuer: 'DeepLearning.AI',
        date: 'Dec 2025',
        image: dummySertifikat,
    },
    {
        id: 3,
        title: 'Data Science Professional Certificate',
        issuer: 'IBM',
        date: 'Mar 2026',
        image: dummySertifikat,
    },
    {
        id: 4,
        title: 'AWS Certified Machine Learning – Specialty',
        issuer: 'Amazon Web Services',
        date: 'May 2026',
        image: dummySertifikat,
    }
];

export default function Certification() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Close modal on escape key
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedImage(null);
    };

    return (
        <section id="certifications" className="py-24 bg-slate-900/50 border-y border-slate-800/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-sm font-medium mb-4">
                        <Award size={16} />
                        <span>Continuous Learning</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">Licenses & Certifications</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A showcase of my commitment to staying current with the evolving landscape of Data Science and Artificial Intelligence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer rounded-2xl bg-slate-800/40 border border-slate-700 overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all flex flex-col"
                            onClick={() => setSelectedImage(cert.image)}
                        >
                            {/* Image Thumbnail */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900 shrink-0">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                                        <ExternalLink size={16} />
                                        View
                                    </span>
                                </div>
                            </div>

                            {/* Content Details */}
                            <div className="p-6 flex flex-col flex-1 justify-center">
                                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                                    {cert.title}
                                </h3>
                                <p className="text-slate-400 font-medium mb-4">{cert.issuer}</p>
                                <div className="flex items-center gap-2 text-sm text-slate-500 mt-auto">
                                    <Calendar size={14} />
                                    <span>Issued {cert.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Fullscreen Image Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out backdrop-blur-sm"
                            onClick={() => setSelectedImage(null)}
                            onKeyDown={handleKeyDown}
                            tabIndex={0}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative max-w-5xl w-full flex flex-col items-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="absolute -top-12 md:-top-4 md:-right-12 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full p-2 transition-colors cursor-pointer border border-slate-700"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <X size={24} />
                                </button>
                                <img
                                    src={selectedImage}
                                    alt="Certificate full view"
                                    className="w-full h-auto max-h-[85vh] object-contain rounded-xl border border-slate-700/50 shadow-2xl"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
