/**
 * Temas de cores para light mode e dark mode
 */

/**
 * Tema claro (Light Mode) - Neumorphism Light + Fluent Design
 */
export const lightTheme = {
  // Cores primárias
  primary: '#007AFF',
  primaryDark: '#0051D5',
  primaryLight: '#5AC8FA',
  
  // Cores secundárias
  secondary: '#5856D6',
  secondaryDark: '#3634A3',
  secondaryLight: '#AF52DE',
  
  // Cores de fundo (Neumorphism Light)
  background: '#E5E5EA',
  backgroundLight: '#F2F2F7',
  backgroundDark: '#D1D1D6',
  surface: '#FFFFFF',
  surfaceLight: '#FFFFFF',
  surfaceDark: '#F2F2F7',
  
  // Cores de texto
  text: '#000000',
  textSecondary: '#6D6D70',
  textTertiary: '#AEAEB2',
  textLight: '#FFFFFF',
  textDark: '#000000',
  
  // Cores de estado
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  info: '#007AFF',
  
  // Cores de borda
  border: '#E5E5EA',
  borderLight: '#F2F2F7',
  borderDark: '#C7C7CC',
  
  // Cores de botão da calculadora (Light Mode - Neumorphism)
  // Números: branco com sombra suave
  buttonNumber: '#FFFFFF',
  buttonNumberPressed: '#F2F2F7',
  // Operadores: laranja vibrante
  buttonOperator: '#FF9500',
  buttonOperatorPressed: '#FFB340',
  // Ações: cinza claro
  buttonAction: '#D1D1D6',
  buttonActionPressed: '#C7C7CC',
  // Igual: laranja vibrante
  buttonEquals: '#FF9500',
  buttonEqualsPressed: '#FFB340',
  // Texto dos botões
  buttonText: '#000000',
  buttonTextLight: '#FFFFFF',
  buttonTextDark: '#000000',
} as const;

/**
 * Tema escuro (Dark Mode) - Apple Calculator inspired
 */
export const darkTheme = {
  // Cores primárias
  primary: '#007AFF',
  primaryDark: '#0051D5',
  primaryLight: '#5AC8FA',
  
  // Cores secundárias
  secondary: '#5856D6',
  secondaryDark: '#3634A3',
  secondaryLight: '#AF52DE',
  
  // Cores de fundo (Apple Dark)
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
  
  // Cores de botão da calculadora (Dark Mode - Apple Calculator)
  // Números: cinza escuro elegante
  buttonNumber: '#2C2C2E',
  buttonNumberPressed: '#3A3A3C',
  // Operadores: laranja vibrante
  buttonOperator: '#FF9500',
  buttonOperatorPressed: '#FFB340',
  // Ações: cinza médio
  buttonAction: '#48484A',
  buttonActionPressed: '#5E5E62',
  // Igual: laranja vibrante
  buttonEquals: '#FF9500',
  buttonEqualsPressed: '#FFB340',
  // Texto dos botões
  buttonText: '#FFFFFF',
  buttonTextLight: '#FFFFFF',
  buttonTextDark: '#1C1C1E',
} as const;

/**
 * Interface do tema
 */
export interface Theme {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  secondaryDark: string;
  secondaryLight: string;
  background: string;
  backgroundLight: string;
  backgroundDark: string;
  surface: string;
  surfaceLight: string;
  surfaceDark: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  textLight: string;
  textDark: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  border: string;
  borderLight: string;
  borderDark: string;
  buttonNumber: string;
  buttonNumberPressed: string;
  buttonOperator: string;
  buttonOperatorPressed: string;
  buttonAction: string;
  buttonActionPressed: string;
  buttonEquals: string;
  buttonEqualsPressed: string;
  buttonText: string;
  buttonTextLight: string;
  buttonTextDark: string;
}

/**
 * Retorna o tema baseado no esquema de cores do sistema
 * Por padrão, retorna o tema escuro
 * 
 * @param colorScheme - Esquema de cores ('light' | 'dark' | null)
 * @returns Tema correspondente (padrão: dark)
 */
export const getTheme = (colorScheme: 'light' | 'dark' | null | undefined): Theme => {
  // Se o sistema está em modo claro, usa lightTheme
  // Caso contrário (dark, null ou undefined), usa darkTheme por padrão
  return colorScheme === 'light' ? lightTheme : darkTheme;
};

