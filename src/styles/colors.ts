/**
 * Tema de cores do aplicativo
 * Cores modernas e equilibradas para a calculadora
 */
export const colors = {
  // Cores primárias
  primary: '#007AFF',
  primaryDark: '#0051D5',
  primaryLight: '#5AC8FA',
  
  // Cores secundárias
  secondary: '#5856D6',
  secondaryDark: '#3634A3',
  secondaryLight: '#AF52DE',
  
  // Cores de fundo
  background: '#1C1C1E',
  backgroundLight: '#2C2C2E',
  backgroundDark: '#000000',
  surface: '#1C1C1E',
  surfaceLight: '#2C2C2E',
  surfaceDark: '#000000',
  
  // Cores de texto
  text: '#FFFFFF',
  textSecondary: '#8E8E93',
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
  
  // Cores de botão da calculadora (tema escuro moderno)
  buttonNumber: '#2C2C2E',
  buttonNumberPressed: '#3A3A3C',
  buttonOperator: '#FF9500',
  buttonOperatorPressed: '#FFAD33',
  buttonAction: '#48484A',
  buttonActionPressed: '#636366',
  buttonEquals: '#FF9500',
  buttonEqualsPressed: '#FFAD33',
  buttonText: '#FFFFFF',
  buttonTextLight: '#FFFFFF',
  buttonTextDark: '#1C1C1E',
} as const;

export type Colors = typeof colors;

