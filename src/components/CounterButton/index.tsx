import React from 'react';

interface CounterButtonProps {
  value: number;
  disabled: boolean;
  onClick: () => void;
}

export const CounterButton: React.FC<CounterButtonProps> = ({ 
  value, 
  disabled, 
  onClick 
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      padding: '0.75rem 1.5rem',
      fontSize: '1.25rem',
      fontWeight: '600',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: disabled ? '#cbd5e0' : '#4299e1',
      color: 'white',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: disabled ? 'none' : '0 2px 4px rgba(0,0,0,0.1)',
    }}
  >
    +{value}
  </button>
);