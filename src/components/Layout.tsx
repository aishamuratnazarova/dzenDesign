import { Link, Outlet } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Layout() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Custom Cursor (hidden on sm/touch devices natively via media queries or just simple pointer-events-none) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />
      
      <header className="fixed top-0 w-full z-40 bg-background/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <Logo />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary hidden lg:block ml-2 border-l border-white/10 pl-4">Открыт к новым проектам</span>
          </Link>
          <nav className="hidden md:flex flex-1 justify-center gap-10 text-[11px] uppercase tracking-[0.2em] font-semibold text-secondary">
            <Link to="/work" className="hover:text-accent transition-colors">Кейсы</Link>
            <Link to="/about" className="hover:text-white transition-colors">О нас</Link>
            <Link to="/playground" className="hover:text-white transition-colors">Песочница</Link>
          </nav>
          <Link 
            to="/brief" 
            className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all text-[11px] uppercase tracking-[0.2em] font-semibold"
          >
            Бриф
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-12 w-full md:w-auto">
            <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">
              <Logo />
            </Link>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-medium text-white/30">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Dribbble</a>
              <a href="#" className="hover:text-white transition-colors">Behance</a>
              <a href="#" className="hover:text-white transition-colors">Telegram</a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">Расположение</span>
            <span className="text-xs font-light text-white/70">Берлин, Германия (14:20 GMT+1)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
