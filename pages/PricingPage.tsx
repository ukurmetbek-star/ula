import React from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '0₽',
    features: [
      '3 AI анализа в день',
      'Базовые графики',
      'Поддержка по Email',
      'Доступ к сообществу'
    ]
  },
  {
    id: 'pro',
    name: 'Pro Trader',
    price: '2,900₽',
    isPopular: true,
    features: [
      '50 анализов в день',
      'Приоритетная скорость обработки',
      'Расширенные сигналы (Stop/Limit)',
      'Доступ к истории (30 дней)',
      'Персональная поддержка'
    ]
  },
  {
    id: 'premium',
    name: 'Institutional',
    price: '9,900₽',
    features: [
      'Безлимитный анализ',
      'API доступ к сигналам',
      'Кастомные настройки AI',
      'Менеджер 24/7',
      'Весь функционал платформы'
    ]
  }
];

const PricingPage: React.FC = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Тарифные планы</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Выберите инструмент, который подходит вашему стилю торговли. Отменяйте подписку в любое время.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative p-8 rounded-2xl flex flex-col ${
                plan.isPopular 
                  ? 'bg-surfaceHighlight border-2 border-primary shadow-[0_0_30px_rgba(139,92,246,0.2)] scale-105 z-10' 
                  : 'bg-surface border border-white/10'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Рекомендуем
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-300 mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/ месяц</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300 text-sm">
                    <Check className="text-primary mr-3 flex-shrink-0" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                plan.isPopular 
                  ? 'bg-primary hover:bg-primaryDark text-white shadow-lg shadow-primary/40' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                {plan.id === 'starter' ? 'Попробовать бесплатно' : 'Оформить подписку'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
