import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Award, 
  RefreshCw, 
  Zap, 
  Settings, 
  Activity, 
  Users2,
  Volume2,
  MessageSquare
} from 'lucide-react';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { LiquidButton } from "../components/ui/liquid-glass-button";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

export default function Home() {
  const featured = PROJECTS.filter(p => p.isFeatured);

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
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5 bg-black min-h-[75vh] flex items-center">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0 opacity-40">
          <BackgroundGradientAnimation />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-24 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.2em] font-medium text-accent">
              <span>МИС</span><span>•</span><span>RPA и Роботы</span><span>•</span><span>1С:Медицина</span><span>•</span><span>ЭДО</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[88px] font-bold leading-[0.95] tracking-tighter mb-8 text-white">
              Создаем цифровые <br className="hidden md:block"/>решения для <span className="text-secondary">здравоохранения</span>.
            </h1>
            <p className="text-lg text-secondary max-w-2xl leading-relaxed font-light mb-12">
              «Дзен IT» — технологический партнер в цифровизации медицины. Мы проектируем МИС, интегрируем RPA-системы и внедряем интеллектуальное ПО для автоматизации клиник, аптек и государственных программ. По всей России.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <LiquidButton 
                asChild 
                className="rounded-full border border-accent bg-accent/10 hover:bg-accent hover:text-black hover:border-accent text-accent font-semibold text-xs tracking-[0.1em] uppercase h-14 px-8"
              >
                <Link to="/brief">
                  Начать Проект <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                </Link>
              </LiquidButton>
              <LiquidButton 
                asChild 
                className="rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold text-xs tracking-[0.1em] uppercase h-14 px-8"
              >
                <Link to="/work">
                  Смотреть Кейсы
                </Link>
              </LiquidButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D Demo Section */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        <Card className="w-full h-auto md:h-[500px] bg-black/[0.96] border-white/10 relative overflow-hidden rounded-2xl">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex h-full flex-col md:flex-row">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent mb-3 block">Автоматизация Процессов</span>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-serif tracking-tighter leading-tight">
                Автоматизируем Работу Персонала
              </h2>
              <p className="mt-4 text-neutral-400 max-w-lg font-light leading-relaxed">
                Мы бережно автоматизируем работу врачей, фармацевтов и администраторов, освобождая их от изнурительной рутины, десятков ручных отчетов и бумажной волокиты. Специализированные МИС, умные RPA-роботы и сервисы интеграции позволяют персоналу сфокусироваться на пациентах и качестве лечения, пока система автоматически оформляет регламенты и документы.
              </p>
            </div>

            {/* Right content */}
            <div className="flex-1 relative h-[300px] md:h-full">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* Featured Work Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2 block">Портфолио проектов</span>
            <h2 className="font-serif text-4xl font-bold tracking-tight">Внедренные Системы</h2>
          </div>
          <Link to="/work" className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary hover:text-white transition-colors">
            Смотреть Все Кейсы
          </Link>
        </div>
        
        <BentoGrid 
          items={PROJECTS.slice(0, 3).map((project, idx) => ({
            title: project.title,
            description: project.summary,
            icon: getProjectIcon(project.slug),
            bgImage: project.mainImage,
            link: `/work/${project.slug}`,
            colSpan: idx === 0 ? 2 : 1,
            status: project.category === 'medicine' ? 'Здравоохранение' : project.category === 'automation' ? '1С & Автоматизация' : 'Роботы & AI',
            tags: project.category === 'medicine' ? ['Федеральный', 'ЕГИСЗ', 'ЛЛО'] : project.category === 'automation' ? ['1С', 'Поликлиника', 'Оптимизация'] : ['ИИ', 'Роботы', 'Голос'],
            cta: 'Подробнее'
          }))} 
        />
      </section>

      {/* Нашие возможности (Capabilities) */}
      <section className="bg-surface border-y border-white/10 py-24 my-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2 block">Комплексная экспертиза</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6">Наши Возможности</h2>
            <p className="text-secondary font-light max-w-2xl leading-relaxed">
              Мы обеспечиваем надежные комплексные услуги по разработке, внедрению и масштабированию инновационного ПО для государственного медицинского сектора и коммерческих структур.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                num: "01", 
                title: "Медицинские Системы (МИС)", 
                desc: "Глубокий опыт разработки и интеграции комплексных Медицинских Информационных Систем федерального значения, включая модули ЛЛО и ЕГИСЗ."
              },
              { 
                num: "02", 
                title: "RPA & Голосовые AI-роботы", 
                desc: "Создание и обучение телефонных роботов и сложных текстовых ассистентов для автоматического ведения заказов и консультирования 24/7."
              },
              { 
                num: "03", 
                title: "Автоматизация на базе «1С»", 
                desc: "Внедрение, перенастройка и кастомизация систем семейства «1С:Медицина» («Поликлиника», «Больница», «Аптека») и интеграция торгового оборудования."
              },
              { 
                num: "04", 
                title: "Разработка сайтов и E-com", 
                desc: "Проектирование крупных корпоративных порталов, онлайн-аптек с десятками тысяч SKU, настроенными личными кабинетами и быстрой оплатой под ключ."
              },
              { 
                num: "05", 
                title: "Внедрение цифрового ЭДО", 
                desc: "Связка электронной цифровой подписи (ЭЦП), перевод и синхронизация рабочих процессов на защищенный юридически значимый документооборот."
              },
              { 
                num: "06", 
                title: "Бизнес-анализ & OLAP-системы", 
                desc: "Построение BI-отчетов, OLAP-анализ данных для малого и среднего бизнеса. Разработка специализированных веб- и десктоп-клиентов баз данных."
              },
              { 
                num: "07", 
                title: "Тендерное сопровождение", 
                desc: "Профессиональная юридическая и методическая поддержка, помощь в подготовке технической и конкурсной документации для участия в торгах."
              },
              { 
                num: "08", 
                title: "Сопровождение & ТП", 
                desc: "Постоянный мониторинг, техническая поддержка ПО, оперативное обновление баз справочников и бесперебойное локальное развитие ИТ-инфраструктуры."
              },
              { 
                num: "09", 
                title: "Разработка приложений БД", 
                desc: "Разработка быстрых кастомных клиентских приложений для работы с реляционными и нереляционными базами данных любой сложности."
              }
            ].map((cap, idx) => (
              <div key={idx} className="bg-background border border-white/5 rounded-2xl p-8 hover:border-white/15 transition-colors">
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent block mb-3 font-mono">{cap.num} / Спецификация</span>
                <h3 className="text-xl font-serif font-semibold mb-3 text-white">{cap.title}</h3>
                <p className="text-sm text-secondary leading-relaxed font-light">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как мы работаем (How we work) */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2 block">Метрики и стандарты</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Как Мы Работаем</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8 text-accent" />,
              title: "Гибкий Подход",
              desc: "Разрабатываем программные продукты с нуля под ключ или оперативно подключаемся к проектам на любом этапе жизненного цикла."
            },
            {
              icon: <Activity className="w-8 h-8 text-accent" />,
              title: "Фокус на Бизнес-целях",
              desc: "Мы не зациклены на абстрактном коде. Каждое решение решает практические задачи клиента: ускоряет процессы, экономит ФОТ и повышает точность."
            },
            {
              icon: <Users2 className="w-8 h-8 text-accent" />,
              title: "Профильные Команды",
              desc: "С первого дня формируем команду разработчиков, аналитиков и лидов строго под технологическую специфику конкретного проекта."
            },
            {
              icon: <Settings className="w-8 h-8 text-accent" />,
              title: "Надежная Модель",
              desc: "Каждый шаг сопровождается открытой прозрачной связью и отчетами. Гарантируем простоту дальнейшей поддержки и легкое масштабирование."
            }
          ].map((step, idx) => (
            <div key={idx} className="bg-surface/50 border border-white/10 rounded-2xl p-8">
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-lg font-serif font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-xs text-secondary leading-relaxed font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
