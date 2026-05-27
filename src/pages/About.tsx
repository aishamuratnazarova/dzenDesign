import { motion } from 'motion/react';
import { Download, FileText, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-4 sticky top-32"
        >
          <div className="rounded-3xl overflow-hidden aspect-[3/4] mb-8 bg-surface border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
              alt="Дзен IT Офис" 
              className="w-full h-full object-cover grayscale opacity-85 transition-all duration-75 hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
          </div>
          <a href="#" className="inline-flex w-full justify-center items-center gap-2 px-6 py-4 bg-surface border border-white/10 rounded-xl transition-all text-[11px] uppercase tracking-[0.1em] font-semibold hover:bg-white hover:text-black">
             Скачать презентацию <Download className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-8 space-y-16"
        >
          <section>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2 block">О Компании</span>
            <h1 className="font-serif text-5xl md:text-[80px] font-extrabold leading-none tracking-tighter mb-8">ДЗЕН IT</h1>
            <div className="space-y-6 text-lg text-secondary leading-relaxed font-light">
              <p>
                «Дзен IT» — это инновационное ведущее решение в сфере цифрового здравоохранения. Мы гибко отвечаем задачам национальных проектов РФ, обеспечиваем интуитивно понятное рабочее пространство и радикально повышаем доступность критически важных ИТ-продуктов для широкого круга пользователей. Мы работаем по всей территории России!
              </p>
              <p>
                Наша компания продуктивно сотрудничает как с государственными структурами федерального уровня, так и с лидерами частного коммерческого сектора. «Дзен IT» бесшовно интегрирует современные digital-технологии во внутреннее и внешнее управление вашей организации, способствуя автоматизации и максимальной оптимизации ключевых бизнес-процессов.
              </p>
            </div>
          </section>

          <section>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2 block">ЦЕННОСТИ И ПРЕИМУЩЕСТВА</span>
            <h2 className="font-serif text-3xl font-bold tracking-tight mb-8">Наши Стандарты</h2>
            <div className="grid sm:grid-cols-2 gap-8 text-left">
              {[
                { 
                  title: "Федеральный масштаб", 
                  desc: "Создаваемые нами продукты (такие как модуль ЛЛО) соответствуют жестким регламентам информационной безопасности и подключаются к центральным информационным базам РФ." 
                },
                { 
                  title: "Оптимизация до 2х раз", 
                  desc: "Мы автоматизируем рутинные медицинские и кассовые операции, сокращая невостребованность ресурсов клиник и ускоряя выписку документов в 2 раза." 
                },
                { 
                  title: "Клиентоориентированность", 
                  desc: "Каждый проект курирует выделенная фокусная команда, подобранная под технологический стек и особенности медицинской или коммерческой задачи клиента." 
                },
                { 
                  title: "Простота развития", 
                  desc: "Разрабатываем решения с чистой, отлично документированной архитектурой, гарантирующей простоту дальнейшего масштабирования и долгосрочной технической поддержки." 
                }
              ].map((val, idx) => (
                <div key={idx} className="bg-surface/50 border border-white/5 rounded-2xl p-6">
                  <CheckCircle2 className="w-5 h-5 text-accent mb-4" />
                  <h3 className="text-lg font-serif font-semibold mb-2 text-white">{val.title}</h3>
                  <p className="text-xs text-secondary leading-relaxed font-light">{val.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2 block">Таймлайн событий</span>
            <h2 className="font-serif text-3xl font-bold tracking-tight mb-8">Ключевые направления</h2>
            <div className="space-y-8 text-left">
              {[
                { title: "Льготное Лекарственное Обеспечение (ЛЛО)", category: "Здравоохранение", desc: "Ускорение выписки льготных лекарственных рецептов на уровне федеральных ведомственных программ со связкой с Честным Знаком и СФР." },
                { title: "1С:Медицина & Клиническое Управление", category: "Автоматизация", desc: "Глубокая оптимизация внутренних бизнес-процессов современных клиник. Комплексная интеграция оборудования и реестров." },
                { title: "AI-телефония & RPA-решения", category: "Робототехника и AI", desc: "Развертывание голосовых интеллектуальных помощников и диалоговых ботов в мессенджерах для мгновенного заказа медикаментов." }
              ].map((milestone, idx) => (
                <div key={idx} className="border-l border-white/10 pl-6 pb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-accent mb-2 block">{milestone.category}</span>
                  <h3 className="text-2xl font-serif font-semibold tracking-tight mb-2">{milestone.title}</h3>
                  <p className="text-sm text-secondary font-light leading-relaxed">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
