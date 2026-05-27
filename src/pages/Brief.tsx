import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Brief() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: [] as string[],
    budget: '',
    description: '',
    link: ''
  });

  const updateForm = (key: keyof typeof formData, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const toggleProjectType = (type: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: prev.projectType.includes(type)
        ? prev.projectType.filter(t => t !== type)
        : [...prev.projectType, type]
    }));
  };

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.email)) return;
    if (step === 3 && !formData.description) return;
    setStep(s => s + 1);
  };

  const prevStep = () => setStep(s => s - 1);

  const submitForm = async () => {
    if (!formData.description) return;
    setIsSubmitting(true);
    
    // Simulate API delay and set success
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md px-6"
        >
          <CheckCircle2 className="w-20 h-20 text-accent mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-[54px] font-extrabold tracking-tighter mb-4 text-white">Заявка Получена</h2>
          <p className="text-secondary font-light mb-8 text-sm">
            Спасибо за интерес к «Дзен IT»! Мы внимательно изучим технические требования вашего проекта и свяжемся с вами в течение рабочего дня.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-accent text-black font-semibold rounded-full hover:bg-white transition-colors text-xs uppercase tracking-wider"
          >
            Вернуться на главную
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 min-h-[80vh] flex flex-col justify-center">
      {/* Progress Bar */}
      <div className="w-full bg-surface h-1 rounded-full mb-12 overflow-hidden">
        <motion.div 
          initial={false}
          animate={{ width: `${(step / 3) * 100}%` }}
          className="h-full bg-accent"
        />
      </div>

      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {/* STEP 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <h2 className="font-serif text-4xl md:text-[64px] font-extrabold leading-none tracking-tighter mb-6 text-white">Давайте <br className="hidden md:block"/>начнем.</h2>
              <p className="text-md font-light text-secondary mb-10">С кем нам предстоит сотрудничать?</p>
              
              <div className="space-y-6 text-left">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-secondary mb-2">Ваше Имя / Название организации *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => updateForm('name', e.target.value)}
                    className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors text-sm"
                    placeholder="Алексей Проектов"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-secondary mb-2">Контактный Email Адрес *</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => updateForm('email', e.target.value)}
                    className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors text-sm"
                    placeholder="org@company.ru"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <h2 className="font-serif text-4xl md:text-[64px] font-extrabold leading-none tracking-tighter mb-6 text-white">Специфика <br className="hidden md:block"/>проекта.</h2>
              <p className="text-md font-light text-secondary mb-10">Какие технологические задачи перед вами стоят?</p>
              
              <div className="space-y-8 text-left">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-secondary mb-4">Тип системы / услуги (можно выбрать несколько)</label>
                  <div className="flex flex-wrap gap-3">
                    {['МИС / ЛЛО', '1С:Медицина (Автоматизация)', 'RPA / ИИ Голосовой Робот', 'Веб-ресурсы / E-Commerce', 'ЭДО и СББ', 'Другое'].map(type => (
                      <button
                        key={type}
                        onClick={() => toggleProjectType(type)}
                        className={cn(
                          "px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border",
                          formData.projectType.includes(type)
                            ? "bg-accent text-black border-accent"
                            : "bg-surface text-secondary border-white/10 hover:border-white/30"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-secondary mb-4">Предполагаемый бюджет внедрения</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['< 300,000 ₽', '300,000 - 1,000,000 ₽', '1,000,000 ₽+'].map(range => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => updateForm('budget', range)}
                        className={cn(
                          "px-5 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border text-center",
                          formData.budget === range
                            ? "bg-accent text-black border-accent"
                            : "bg-surface text-secondary border-white/10 hover:border-white/30"
                        )}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              <h2 className="font-serif text-4xl md:text-[64px] font-extrabold leading-none tracking-tighter mb-6 text-white">Техническое <br className="hidden md:block"/>описание.</h2>
              <p className="text-md font-light text-secondary mb-10">Опишите ключевые цели, задачи и систему регулирования проекта.</p>
              
              <div className="space-y-6 text-left">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-secondary mb-2">Описание задач и инфраструктуры *</label>
                  <textarea 
                    value={formData.description}
                    onChange={(e) => updateForm('description', e.target.value)}
                    className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors min-h-[150px] resize-none text-sm"
                    placeholder="Нам необходимо внедрить 1С:Медицину и настроить выгрузку в ЕГИСЗ..."
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-secondary mb-2">Ссылка на текущую систему или техзадание (необязательно)</label>
                  <input 
                    type="url" 
                    value={formData.link}
                    onChange={(e) => updateForm('link', e.target.value)}
                    className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors text-sm"
                    placeholder="https://drive.google.com/..."
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/5">
        <button
          onClick={prevStep}
          className={cn(
            "flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-secondary hover:text-white transition-colors",
            step === 1 && "opacity-0 pointer-events-none"
          )}
        >
          <ArrowLeft className="w-4 h-4" /> Назад
        </button>
        
        {step < 3 ? (
          <button
            onClick={nextStep}
            disabled={step === 1 && (!formData.name || !formData.email)}
            className="flex items-center gap-2 px-6 py-4 bg-white text-black text-[11px] uppercase tracking-[0.1em] font-semibold rounded-full hover:bg-accent hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Продолжить <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={submitForm}
            disabled={!formData.description || isSubmitting}
            className="flex items-center gap-2 px-8 py-4 bg-accent text-black text-[11px] uppercase tracking-[0.1em] font-semibold rounded-full hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Отправка...' : 'Отправить Запрос'} <CheckCircle2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
