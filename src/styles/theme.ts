import { ViewStyle, Platform } from 'react-native';

/**
 * Interface completa do tema com todas as propriedades necessárias
 */
export interface Theme {
  // Fundos
  backgroundPrimary: string;
  backgroundSecondary: string;
  
  // Botões
  buttonPrimary: string;
  buttonSecondary: string;
  operatorButton: string;
  
  // Textos
  textPrimary: string;
  textSecondary: string;
  
  // Sombras
  shadowLight: ViewStyle;
  shadowDark: ViewStyle;
  
  // Propriedades legadas (para compatibilidade)
  background: string;
  surface: string;
  text: string;
  buttonNumber: string;
  buttonOperator: string;
  buttonAction: string;
  buttonEquals: string;
  buttonText: string;
  buttonTextLight: string;
}

/**
 * Tema claro (Light Mode) - Neumorphism Light + Fluent Design
 */
export const lightTheme: Theme = {
  // Fundos principais
  backgroundPrimary: '#F5F5F7',
  backgroundSecondary: '#FFFFFF',
  
  // Botões
  buttonPrimary: '#FFFFFF',
  buttonSecondary: '#E8E8ED',
  operatorButton: '#FF9500',
  
  // Textos
  textPrimary: '#000000',
  textSecondary: '#6D6D70',
  
  // Sombras
  shadowLight: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
      },
    }),
  },
  shadowDark: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
      },
    }),
  },
  
  // Propriedades legadas
  background: '#F5F5F7',
  surface: '#FFFFFF',
  text: '#000000',
  buttonNumber: '#FFFFFF',
  buttonOperator: '#FF9500',
  buttonAction: '#E8E8ED',
  buttonEquals: '#FF9500',
  buttonText: '#000000',
  buttonTextLight: '#FFFFFF',
};

/**
 * Tema escuro (Dark Mode) - Moderno e Profissional
 * Tons profundos com botões glass-like e sombras invertidas
 */
export const darkTheme: Theme = {
  // Fundos principais - tons profundos e elegantes
  backgroundPrimary: '#0D0D0D',
  backgroundSecondary: '#1A1A1A',
  
  // Botões - efeito glass-like com brilho leve
  buttonPrimary: 'rgba(34, 34, 34, 0.95)', // #222 com transparência sutil
  buttonSecondary: 'rgba(50, 50, 50, 0.95)', // Tom mais claro para ações
  operatorButton: '#FF9500',
  
  // Textos - branco suave
  textPrimary: '#F1F1F1',
  textSecondary: '#AEAEB2',
  
  // Sombras - invertidas para efeito glass-like
  shadowLight: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(255, 255, 255, 0.05)',
      },
    }),
  },
  shadowDark: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(255, 255, 255, 0.05)',
      },
    }),
  },
  
  // Propriedades legadas
  background: '#0D0D0D',
  surface: '#1A1A1A',
  text: '#F1F1F1',
  buttonNumber: 'rgba(34, 34, 34, 0.95)',
  buttonOperator: '#FF9500',
  buttonAction: 'rgba(50, 50, 50, 0.95)',
  buttonEquals: '#FF9500',
  buttonText: '#F1F1F1',
  buttonTextLight: '#FFFFFF',
};

/**
 * Retorna o tema baseado no esquema de cores do sistema
 * Por padrão, retorna o tema escuro
 * 
 * @param colorScheme - Esquema de cores ('light' | 'dark' | null)
 * @returns Tema correspondente (padrão: dark)
 */
export const getTheme = (colorScheme: 'light' | 'dark' | null | undefined): Theme => {
  return colorScheme === 'light' ? lightTheme : darkTheme;
};
