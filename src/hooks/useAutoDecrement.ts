import { useRef, useEffect } from 'react';
import { TIMING } from '../constants/config';

interface UseAutoDecrementParams {
  setCounter: (value: React.SetStateAction<number>) => void;
}

export const useAutoDecrement = ({ setCounter }: UseAutoDecrementParams) => {
  const decrementIntervalRef = useRef<number | null>(null);
  const inactivityTimeoutRef = useRef<number | null>(null);
  const lastActionRef = useRef(Date.now());

  const clearAllTimers = () => {
    if (decrementIntervalRef.current) clearInterval(decrementIntervalRef.current);
    if (inactivityTimeoutRef.current) clearTimeout(inactivityTimeoutRef.current);
  };

  const startDecrement = () => {
    clearAllTimers();
    decrementIntervalRef.current = setInterval(() => {
      setCounter(prev => {
        if (prev <= 1) {
          clearAllTimers();
          return 0;
        }
        return prev - 1;
      });
    }, TIMING.DECREMENT_INTERVAL);
  };

  const scheduleDecrement = () => {
    clearAllTimers();
    inactivityTimeoutRef.current = setTimeout(() => {
      startDecrement();
    }, TIMING.INACTIVITY_DELAY);
  };

  // Cleanup on unmount
  useEffect(() => () => clearAllTimers(), []);

  return {
    scheduleDecrement,
    clearAllTimers,
    updateLastAction: () => lastActionRef.current = Date.now()
  };
};