// src/components/CounterControls/index.tsx
import * as React from 'react';
import { CounterButton } from '../CounterButton';
import { ButtonConfig } from '../../constants/config';

interface CounterControlsProps {
  buttons: ButtonConfig[];
  disabledButtons: Record<number, boolean>;
  onButtonClick: (value: number, disableDuration: number) => void;
}

export const CounterControls: React.FC<CounterControlsProps> = ({ 
  buttons, 
  disabledButtons, 
  onButtonClick 
}: CounterControlsProps) => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    {buttons.map(({ value, disableDuration }: ButtonConfig) => (
      <CounterButton
        key={value}
        value={value}
        disabled={disabledButtons[value]}
        onClick={() => onButtonClick(value, disableDuration)}
      />
    ))}
  </div>
);