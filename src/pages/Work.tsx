import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS, CATEGORIES } from '../data';
import { useState } from 'react';
import { 
  ArrowRight, 
  Activity, 
  Settings, 
  ShieldAlert, 
  Zap, 
  Volume2, 
  MessageSquare, 
  Award 
} from 'lucide-react';
import { cn } from '../lib/utils';
import { BentoGrid } from '../components/ui/bento-grid';

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const getProjectIcon = (slug: string) => {
    switch (slug) {
      case 'llo-module':
        return <Activity className="w-5 h-5" />;
      case 'doktor-pel-1c':
        return <Settings className="w-5 h-5" />;
      case 'teleapteka-fsin':
        return <ShieldAlert className="w-5 h-5" />;
      case 'aloe-online-pharmacy':
        return <Zap className="w-5 h-5" />;
      case 'vika-voice-bot':
        return <Volume2 className="w-5 h-5" />;
      case 'teleapteka-telegram-bot':
        return <MessageSquare className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="font-serif text-5xl md:text-[80px] font-extrabold leading-tight tracking-tighter mb-8">Наши Кейсы</h1>
        
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors border",
                activeCategory === cat.id 
                  ? "bg-white text-black border-white"
                  : "bg-surface text-secondary border-white/10 hover:border-white/30"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="flex flex-col gap-12">
        {filteredProjects.length > 0 ? (
          <BentoGrid 
            items={filteredProjects.map((project, index) => {
              // Calculate bento span alternating rows perfectly
              const colSpan = (index % 4 === 0 || index % 4 === 3) ? 2 : 1;
              
              const catName = CATEGORIES.find(c => c.id === project.category)?.name || '';
              const tags = project.category === 'medicine' 
                ? ['Федеральный', 'ЕГИСЗ', 'ЛЛО'] 
                : project.category === 'automation' 
                ? ['1С', 'Поликлиника', 'Оптимизация'] 
                : ['ИИ Роботы', 'Telegram', 'Чат-боты'];

              return {
                title: project.title,
                description: project.summary,
                icon: getProjectIcon(project.slug),
                bgImage: project.mainImage,
                link: `/work/${project.slug}`,
                colSpan,
                status: catName,
                tags,
                cta: 'Подробнее',
                hasPersistentHover: false
              };
            })} 
          />
        ) : (
          <div className="py-20 text-center text-secondary">
            Нет проектов в этой категории.
          </div>
        )}
      </div>
    </div>
  );
}
