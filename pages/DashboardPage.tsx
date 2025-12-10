import React from 'react';
import { User, Clock, Settings, CreditCard } from 'lucide-react';
import { UserHistoryItem } from '../types';

const DashboardPage: React.FC = () => {
  // Mock Data
  const history: UserHistoryItem[] = [
    { id: '1', date: '2023-10-25 14:30', asset: 'BTC/USDT', result: 'bullish' },
    { id: '2', date: '2023-10-24 09:15', asset: 'ETH/USDT', result: 'neutral' },
    { id: '3', date: '2023-10-23 18:45', asset: 'SOL/USDT', result: 'bearish' },
    { id: '4', date: '2023-10-22 11:20', asset: 'AAPL', result: 'bullish' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Личный кабинет</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Profile Card */}
        <div className="md:col-span-1 bg-surfaceHighlight p-6 rounded-2xl border border-white/10">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gradient-to-tr from-primary to-purple-800 rounded-full flex items-center justify-center mb-4 text-4xl font-bold text-white shadow-lg shadow-primary/30">
              A
            </div>
            <h3 className="text-xl font-bold">Alex Trader</h3>
            <p className="text-gray-400 text-sm">alex.trader@example.com</p>
            <div className="mt-4 px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full border border-primary/20">
              PRO PLAN
            </div>
          </div>
          
          <div className="mt-8 space-y-3">
             <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors text-gray-300">
                <span className="flex items-center"><Settings size={18} className="mr-3"/> Настройки</span>
             </button>
             <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors text-gray-300">
                <span className="flex items-center"><CreditCard size={18} className="mr-3"/> Подписка</span>
             </button>
          </div>

          <button className="w-full mt-6 py-3 rounded-xl bg-primary hover:bg-primaryDark text-white font-semibold transition-colors">
            Продлить подписку
          </button>
        </div>

        {/* Stats & History */}
        <div className="md:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-surfaceHighlight p-4 rounded-xl border border-white/10 text-center">
                    <p className="text-gray-400 text-xs uppercase mb-1">Анализов всего</p>
                    <p className="text-2xl font-bold text-white">1,248</p>
                </div>
                <div className="bg-surfaceHighlight p-4 rounded-xl border border-white/10 text-center">
                    <p className="text-gray-400 text-xs uppercase mb-1">Успешность</p>
                    <p className="text-2xl font-bold text-green-400">78%</p>
                </div>
                <div className="bg-surfaceHighlight p-4 rounded-xl border border-white/10 text-center">
                    <p className="text-gray-400 text-xs uppercase mb-1">Дней с нами</p>
                    <p className="text-2xl font-bold text-primary">45</p>
                </div>
            </div>

            {/* History Table */}
            <div className="bg-surfaceHighlight rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <h3 className="text-lg font-bold flex items-center">
                        <Clock size={20} className="mr-2 text-primary" /> История анализов
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-400">
                        <thead className="bg-white/5 text-gray-200 font-medium">
                            <tr>
                                <th className="px-6 py-3">Дата</th>
                                <th className="px-6 py-3">Актив</th>
                                <th className="px-6 py-3">Сигнал</th>
                                <th className="px-6 py-3 text-right">Статус</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {history.map(item => (
                                <tr key={item.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">{item.date}</td>
                                    <td className="px-6 py-4 font-bold text-white">{item.asset}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                                            item.result === 'bullish' ? 'bg-green-500/10 text-green-400' :
                                            item.result === 'bearish' ? 'bg-red-500/10 text-red-400' :
                                            'bg-gray-500/10 text-gray-400'
                                        }`}>
                                            {item.result.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <span className="text-green-500 text-xs">Завершено</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
