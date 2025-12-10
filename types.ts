export interface MarketDataPoint {
  date: string;
  price: number;
}

export interface AIAnalysisResult {
  asset: string;
  price: number;
  trend: 'bullish' | 'bearish' | 'neutral';
  confidence: number;
  entryZone: string;
  exitZone: string;
  stopLoss: string;
  summary: string;
  keyLevels: number[];
  chartData: MarketDataPoint[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface UserHistoryItem {
  id: string;
  date: string;
  asset: string;
  result: 'bullish' | 'bearish' | 'neutral';
}
