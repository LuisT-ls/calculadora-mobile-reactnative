/**
 * Temas de cores para light mode e dark mode
 */

/**
 * Tema claro (Light Mode)
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
  
  // Cores de fundo
  background: '#F2F2F7',
  backgroundLight: '#FFFFFF',
  backgroundDark: '#E5E5EA',
  surface: '#FFFFFF',
  surfaceLight: '#FFFFFF',
  surfaceDark: '#F2F2F7',
  
  // Cores de texto
  text: '#000000',
  textSecondary: '#8E8E93',
  textTertiary: '#C7C7CC',
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
  
  // Cores de botão da calculadora
  buttonNumber: '#FFFFFF',
  buttonNumberPressed: '#F2F2F7',
  buttonOperator: '#FF9500',
  buttonOperatorPressed: '#FFAD33',
  buttonAction: '#D1D1D6',
  buttonActionPressed: '#C7C7CC',
  buttonEquals: '#FF9500',
  buttonEqualsPressed: '#FFAD33',
  buttonText: '#000000',
  buttonTextLight: '#FFFFFF',
  buttonTextDark: '#000000',
} as const;

/**
 * Tema escuro (Dark Mode)
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
  
  // Cores de fundo
  background: '#000000',
  backgroundLight: '#1C1C1E',
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
  
  // Cores de botão da calculadora
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

