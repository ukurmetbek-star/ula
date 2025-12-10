import React, { useState } from 'react';
import { Send } from 'lucide-react';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-surfaceHighlight border border-white/10 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {isLogin ? 'С возвращением' : 'Создать аккаунт'}
          </h2>
          <p className="text-gray-400 text-sm">
            {isLogin ? 'Войдите, чтобы продолжить анализ' : 'Зарегистрируйтесь для доступа к AI'}
          </p>
        </div>

        <form className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Имя пользователя</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="TraderOne"
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Пароль</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="button" // Mock type
            className="w-full py-3.5 rounded-xl bg-primary hover:bg-primaryDark text-white font-bold shadow-lg shadow-primary/30 transition-all transform hover:scale-[1.02]"
          >
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-surfaceHighlight text-gray-500">Или продолжить с</span>
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full py-3 rounded-xl bg-[#229ED9]/20 border border-[#229ED9]/50 text-[#229ED9] font-semibold hover:bg-[#229ED9]/30 transition-colors flex items-center justify-center">
              <Send size={20} className="mr-2" />
              Telegram
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <span className="text-gray-400">
            {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
          </span>
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-primary hover:text-primaryLight font-semibold"
          >
            {isLogin ? 'Регистрация' : 'Войти'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
