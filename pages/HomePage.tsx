import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Zap, ShieldCheck } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Трейдинг будущего
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              с искусственным интеллектом
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Получайте точные торговые сигналы, анализируйте тренды и автоматизируйте стратегии с помощью нашей мощной нейросети, интегрированной с n8n.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/analysis"
              className="px-8 py-4 rounded-xl bg-primary hover:bg-primaryDark text-white font-bold text-lg shadow-lg shadow-primary/40 transition-all hover:scale-105 flex items-center"
            >
              Начать анализ <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/auth"
              className="px-8 py-4 rounded-xl bg-surfaceHighlight border border-white/10 hover:bg-white/10 text-white font-semibold text-lg transition-all"
            >
              Войти в аккаунт
            </Link>
          </div>
        </div>

        {/* Mockup / Visual */}
        <div className="mt-20 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-30"></div>
          <div className="relative bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
             {/* Abstract Dashboard UI Representation */}
             <div className="grid grid-cols-12 gap-4 p-6 bg-[#0f0f0f]">
                <div className="col-span-12 md:col-span-8 bg-surfaceHighlight h-64 rounded-lg animate-pulse"></div>
                <div className="col-span-12 md:col-span-4 space-y-4">
                    <div className="h-20 bg-surfaceHighlight rounded-lg"></div>
                    <div className="h-20 bg-surfaceHighlight rounded-lg"></div>
                    <div className="h-16 bg-primary/10 border border-primary/20 rounded-lg"></div>
                </div>
             </div>
             <div className="bg-black/50 backdrop-blur absolute inset-0 flex items-center justify-center">
                 <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">Интерфейс системы AI Trade</p>
             </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Почему выбирают нас?</h2>
            <p className="mt-2 text-gray-400">Технологии институционального уровня для частных трейдеров</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="text-yellow-400" size={32} />}
              title="Молниеносный анализ"
              description="Наша AI модель обрабатывает миллионы датапоинтов за секунды, выдавая готовые сценарии."
            />
            <FeatureCard
              icon={<Activity className="text-primary" size={32} />}
              title="Умные сигналы"
              description="Определяем точки входа и выхода с точностью до 87% на основе исторических паттернов."
            />
            <FeatureCard
              icon={<ShieldCheck className="text-green-400" size={32} />}
              title="Риск-менеджмент"
              description="Автоматический расчет Stop-Loss и Take-Profit уровней для защиты вашего депозита."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-8 rounded-2xl bg-surfaceHighlight border border-white/5 hover:border-primary/50 transition-colors group">
    <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-white/10 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);

export default HomePage;
