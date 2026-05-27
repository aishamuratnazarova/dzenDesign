import { motion } from 'motion/react';

export default function Playground() {
  const experiments = [
    { title: "Флюидная навигация", type: "Framer Motion", height: "h-64" },
    { title: "Глассморфизм Карточка", type: "CSS", height: "h-96" },
    { title: "3D Интеграция Spline", type: "Three.js", height: "h-80" },
    { title: "Кастомный Курсор", type: "GSAP", height: "h-64" },
    { title: "Генеративное искусство", type: "Canvas", height: "h-96" },
    { title: "Шкала Типографики", type: "Tailwind", height: "h-80" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="font-serif text-5xl md:text-[80px] font-extrabold leading-none tracking-tighter mb-6">Песочница</h1>
        <p className="text-xl text-secondary max-w-2xl font-light">
          Коллекция экспериментов, UI-концептов и технологических исследований. 
          Некоторые из них отполированы, некоторые незакончены — все это опыт.
        </p>
      </motion.div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {experiments.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
            className={`w-full ${exp.height} bg-surface border border-white/5 rounded-2xl p-6 flex flex-col justify-end break-inside-avoid relative overflow-hidden group`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-accent mb-2 block">{exp.type}</span>
              <h3 className="text-xl font-serif font-semibold">{exp.title}</h3>
            </div>
            
            {/* Visual Placeholder for experiment */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-50 flex items-center justify-center">
              <div className="w-16 h-16 border border-white/10 rounded-full animate-[spin_4s_linear_infinite]" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
