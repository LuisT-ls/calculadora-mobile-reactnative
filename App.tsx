import React from 'react';
import { ThemeProvider } from './src/contexts';
import { CalculatorScreen } from './src/screens/CalculatorScreen';

/**
 * Componente principal do aplicativo
 */
export default function App() {
  return (
    <ThemeProvider>
      <CalculatorScreen />
    </ThemeProvider>
  );
}

