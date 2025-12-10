import { AIAnalysisResult } from '../types';

// In a real scenario, this would be your n8n webhook URL
// const N8N_WEBHOOK_URL = 'https://n8n.your-domain.com/webhook/analyze-market';

/**
 * Mocks the N8N webhook response for demonstration purposes.
 * Replace the setTimeout and mock data with a real fetch call in production.
 */
export const runMarketAnalysis = async (asset: string): Promise<AIAnalysisResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Logic to randomize result for demo
      const currentPrice = asset.toUpperCase().includes('BTC') ? 64000 : 3000;
      const volatility = currentPrice * 0.05;
      const isBullish = Math.random() > 0.4;
      
      const mockChartData = Array.from({ length: 7 }, (_, i) => ({
        date: `День ${i + 1}`,
        price: currentPrice + (Math.random() - 0.5) * volatility * (i + 1),
      }));

      resolve({
        asset: asset.toUpperCase(),
        price: currentPrice,
        trend: isBullish ? 'bullish' : 'bearish',
        confidence: 85 + Math.floor(Math.random() * 10),
        entryZone: `${(currentPrice * 0.98).toFixed(2)} - ${(currentPrice * 0.99).toFixed(2)}`,
        exitZone: `${(currentPrice * 1.05).toFixed(2)} - ${(currentPrice * 1.1).toFixed(2)}`,
        stopLoss: `${(currentPrice * 0.95).toFixed(2)}`,
        summary: isBullish 
          ? 'Наблюдается сильный восходящий импульс, подтвержденный объемами и RSI. Рекомендуется вход на откате.' 
          : 'Медвежья дивергенция на 4H таймфрейме. Высокий риск снижения к ближайшей зоне поддержки.',
        keyLevels: [currentPrice * 0.9, currentPrice * 1.0, currentPrice * 1.1],
        chartData: mockChartData
      });
    }, 2500); // Simulate 2.5s network delay
  });
};

/* 
// Real Implementation Example:
export const runMarketAnalysisReal = async (asset: string): Promise<AIAnalysisResult> => {
  const response = await fetch(N8N_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ asset }),
  });
  
  if (!response.ok) {
    throw new Error('Analysis failed');
  }

  return response.json();
};
*/
