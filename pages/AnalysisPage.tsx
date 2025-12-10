import React, { useState } from 'react';
import { Search, AlertCircle, TrendingUp, TrendingDown, Crosshair } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { runMarketAnalysis } from '../services/n8nService';
import { AIAnalysisResult } from '../types';
import { Loader } from '../components/ui/Loader';

const AnalysisPage: React.FC = () => {
  const [asset, setAsset] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIAnalysisResult | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!asset.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const data = await runMarketAnalysis(asset);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert('Ошибка при анализе. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Рыночный Анализ</h2>
        <p className="text-gray-400">Введите тикер актива (например, BTC/USDT, ETH, AAPL) для запуска нейросети.</p>
      </div>

      {/* Input Section */}
      <div className="max-w-xl mx-auto mb-16">
        <form onSubmit={handleAnalyze} className="relative">
          <input
            type="text"
            value={asset}
            onChange={(e) => setAsset(e.target.value)}
            placeholder="Введите актив (BTC/USDT)..."
            className="w-full h-16 pl-6 pr-36 rounded-2xl bg-surfaceHighlight border border-white/10 text-white text-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
          <button
            type="submit"
            disabled={loading || !asset}
            className="absolute right-2 top-2 h-12 px-6 bg-primary hover:bg-primaryDark text-white font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? '...' : 'Анализ'}
          </button>
        </form>
      </div>

      {loading && <Loader />}

      {result && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {/* Main Chart Card */}
          <div className="lg:col-span-2 bg-surfaceHighlight rounded-2xl border border-white/10 p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold flex items-center">
                  {result.asset} 
                  <span className={`ml-3 px-3 py-1 text-sm rounded-full ${result.trend === 'bullish' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {result.trend === 'bullish' ? 'Восходящий' : 'Нисходящий'}
                  </span>
                </h3>
                <p className="text-3xl mt-2 font-mono font-bold">${result.price.toLocaleString()}</p>
              </div>
              <div className="text-right">
                 <p className="text-gray-400 text-sm">Уверенность AI</p>
                 <p className="text-primary font-bold text-xl">{result.confidence}%</p>
              </div>
            </div>

            <div className="h-[300px] w-full bg-black/20 rounded-lg p-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={result.chartData}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="date" stroke="#666" />
                  <YAxis stroke="#666" domain={['auto', 'auto']} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e1e1e', border: '1px solid #333', color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="price" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorPrice)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Signals & Stats Card */}
          <div className="bg-surfaceHighlight rounded-2xl border border-white/10 p-6 shadow-xl flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold mb-4 flex items-center text-gray-200">
                <Crosshair size={20} className="mr-2 text-primary" />
                Торговые Уровни
              </h4>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                  <p className="text-xs text-gray-400 uppercase">Зона входа</p>
                  <p className="text-green-400 font-mono font-bold text-lg">{result.entryZone}</p>
                </div>
                <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                  <p className="text-xs text-gray-400 uppercase">Цели (Take Profit)</p>
                  <p className="text-primary font-mono font-bold text-lg">{result.exitZone}</p>
                </div>
                <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                  <p className="text-xs text-gray-400 uppercase">Stop Loss</p>
                  <p className="text-red-400 font-mono font-bold text-lg">{result.stopLoss}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-sm font-bold text-gray-300 mb-2 flex items-center">
                <AlertCircle size={16} className="mr-2" /> 
                Комментарий AI
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {result.summary}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisPage;
