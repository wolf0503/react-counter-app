// src/components/CounterDisplay/index.tsx
import * as React from 'react';

interface CounterDisplayProps {
  value: number;
}

export const CounterDisplay: React.FC<CounterDisplayProps> = ({ 
  value 
}: CounterDisplayProps) => (
  <h1 style={{
    fontSize: '4rem',
    color: '#1a365d',
    marginBottom: '2rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  }}>{value}</h1>
);