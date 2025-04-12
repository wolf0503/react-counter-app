import * as React from 'react';
import { useState } from 'react';
import { useAutoDecrement } from './hooks/useAutoDecrement';
import { CounterDisplay } from './components/CounterDisplay';
import { CounterControls } from './components/CounterControls';
import { BUTTON_CONFIG } from './constants/config';

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [disabledButtons, setDisabledButtons] = useState<Record<number, boolean>>(() =>
    BUTTON_CONFIG.reduce((acc, { value }) => ({ ...acc, [value]: false }), {}) as Record<number, boolean>
  );

  const { scheduleDecrement, clearAllTimers, updateLastAction } = useAutoDecrement({
    setCounter
  });

  const handleIncrement = (value: number, disableDuration: number) => {
    if (disabledButtons[value]) return;

    // Clear current timers and update last action
    clearAllTimers();
    updateLastAction();
    
    // Update counter
    setCounter(prev => prev + value);
    
    // Schedule new decrement check
    scheduleDecrement();

    // Disable button
    setDisabledButtons(prev => ({ ...prev, [value]: true }));
    setTimeout(() => {
      setDisabledButtons(prev => ({ ...prev, [value]: false }));
    }, disableDuration * 1000);
  };

  // Initial schedule when component mounts
  React.useEffect(() => {
    scheduleDecrement();
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f4f8',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <CounterDisplay value={counter} />
      <CounterControls
        buttons={BUTTON_CONFIG}
        disabledButtons={disabledButtons}
        onButtonClick={handleIncrement}
      />
    </div>
  );
};

export default App;