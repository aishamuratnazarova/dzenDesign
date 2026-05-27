import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { PROJECTS } from '../data';
import { ArrowLeft } from 'lucide-react';
import { useRef } from 'react';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = PROJECTS.find(p => p.slug === slug);
  const { scrollYProgress } = useScroll();
  const yResult = useTransform(scrollYProgress, [0, 1], [0, -100]);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  // Find next project
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[currentIndex + 1] || PROJECTS[0];

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: yResult }}
        >
          <div className="absolute inset-0 bg-background/60 z-10" />
          <img 
            src={project.mainImage} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/work" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-secondary hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> К списку работ
            </Link>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[96px] font-extrabold leading-[0.9] tracking-tighter mb-6">{project.title}</h1>
            <p className="text-xl md:text-2xl font-light text-secondary max-w-3xl mx-auto leading-relaxed">{project.summary}</p>
          </motion.div>
        </div>
      </header>

      {/* Meta Info */}
      <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-30">
        <div className="bg-surface border border-white/10 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] font-medium text-secondary mb-2">Роль</span>
            <span className="font-serif font-medium text-xl">{project.role}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] font-medium text-secondary mb-2">Продолжительность</span>
            <span className="font-serif font-medium text-xl">{project.duration}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] font-medium text-secondary mb-2">Категория</span>
            <span className="font-serif font-medium text-xl">
              {project.category === 'medicine' ? 'Здравоохранение' : project.category === 'automation' ? '1С & Автоматизация' : 'Роботы & AI'}
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] font-medium text-secondary mb-2">Платформа</span>
            <span className="font-serif font-medium text-xl">Web & Mobile</span>
          </div>
        </div>
      </div>

      {/* Content Blocks */}
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-24">
        {project.content.map((block, idx) => (
          <motion.section 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {block.type === 'text' && (
              <p className="text-lg md:text-xl leading-relaxed text-neutral-300 whitespace-pre-line">
                {block.value}
              </p>
            )}
            {block.type === 'image' && (
              <div className="rounded-2xl overflow-hidden bg-surface border border-white/10">
                <img src={block.value} alt="Process mockup" className="w-full h-auto" />
              </div>
            )}
            {block.type === 'metrics' && (
              <div className="bg-surface border border-white/10 rounded-2xl p-12 text-center">
                <div className="text-[80px] font-serif font-extrabold text-white mb-4 leading-none">{block.value.stat}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] font-medium text-secondary">{block.value.title}</div>
              </div>
            )}
          </motion.section>
        ))}
      </div>

      {/* Next Project Footer */}
      <section className="border-t border-white/10 py-32 bg-surface text-center px-6">
        <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-secondary mb-6">Следующий Проект</p>
        <Link to={`/work/${nextProject.slug}`} className="group inline-block">
          <h2 className="font-serif text-5xl md:text-[80px] font-extrabold leading-none group-hover:text-accent transition-colors">
            {nextProject.title}
          </h2>
        </Link>
      </section>
    </article>
  );
}
