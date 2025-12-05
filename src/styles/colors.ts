/**
 * Tema de cores do aplicativo
 * Cores modernas e sofisticadas inspiradas em Apple Calculator + Fluent Design
 */
export const colors = {
  // Cores primárias (Apple Blue + Fluent Blue)
  primary: '#007AFF',
  primaryDark: '#0051D5',
  primaryLight: '#5AC8FA',
  
  // Cores secundárias
  secondary: '#5856D6',
  secondaryDark: '#3634A3',
  secondaryLight: '#AF52DE',
  
  // Cores de fundo (Dark Mode - Apple inspired)
  background: '#000000',
  backgroundLight: '#1C1C1E',
  backgroundDark: '#000000',
  surface: '#1C1C1E',
  surfaceLight: '#2C2C2E',
  surfaceDark: '#000000',
  
  // Cores de texto
  text: '#FFFFFF',
  textSecondary: '#AEAEB2',
  textTertiary: '#636366',
  textLight: '#FFFFFF',
  textDark: '#1C1C1E',
  
  // Cores de estado
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  info: '#007AFF',
  
  // Cores de borda
  border: '#38383A',
  borderLight: '#48484A',
  borderDark: '#1C1C1E',
  
  // Cores de botão da calculadora (Dark Mode - Apple Calculator inspired)
  // Números: cinza escuro elegante
  buttonNumber: '#2C2C2E',
  buttonNumberPressed: '#3A3A3C',
  // Operadores: laranja vibrante
  buttonOperator: '#FF9500',
  buttonOperatorPressed: '#FFB340',
  // Ações: cinza médio
  buttonAction: '#48484A',
  buttonActionPressed: '#5E5E62',
  // Igual: laranja vibrante (destaque)
  buttonEquals: '#FF9500',
  buttonEqualsPressed: '#FFB340',
  // Texto dos botões
  buttonText: '#FFFFFF',
  buttonTextLight: '#FFFFFF',
  buttonTextDark: '#1C1C1E',
} as const;

export type Colors = typeof colors;

