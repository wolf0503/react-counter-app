export interface ButtonConfig {
    value: number;
    disableDuration: number;
  }
  
  export const BUTTON_CONFIG: ButtonConfig[] = [
    { value: 1, disableDuration: 0.5 },
    { value: 2, disableDuration: 1 },
    { value: 3, disableDuration: 1.5 },
  ];
  
  export const TIMING = {
    INACTIVITY_DELAY: 10000,    // 10 seconds
    DECREMENT_INTERVAL: 1000,   // 1 second
    CHECK_INTERVAL: 1000        // 1 second
  } as const;