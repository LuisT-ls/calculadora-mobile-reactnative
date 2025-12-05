/**
 * Tema de cores do aplicativo
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
  background: '#F2F2F7',
  backgroundDark: '#000000',
  surface: '#FFFFFF',
  surfaceDark: '#1C1C1E',
  
  // Cores de texto
  text: '#000000',
  textSecondary: '#8E8E93',
  textLight: '#FFFFFF',
  textDark: '#1C1C1E',
  
  // Cores de estado
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  info: '#007AFF',
  
  // Cores de borda
  border: '#C6C6C8',
  borderLight: '#E5E5EA',
  borderDark: '#38383A',
  
  // Cores de botão da calculadora
  buttonNumber: '#FFFFFF',
  buttonOperator: '#FF9500',
  buttonFunction: '#D4D4D2',
  buttonText: '#000000',
  buttonTextLight: '#FFFFFF',
} as const;

export type Colors = typeof colors;

