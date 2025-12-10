import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/30 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute top-2 left-2 w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
      </div>
      <p className="text-primary font-medium animate-pulse text-sm tracking-widest uppercase">
        AI анализирует данные...
      </p>
    </div>
  );
};
