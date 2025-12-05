import { ViewStyle, TextStyle, Platform } from 'react-native';

/**
 * Estilos modernos inspirados em Apple Calculator + Neumorphism Light + Fluent Design
 * Design profissional com sombras suaves, bordas arredondadas e animações elegantes
 */

/**
 * Sombras modernas e suaves (Neumorphism + Fluent Design)
 */
export const modernShadows = {
  // Sombra leve para elementos elevados
  light: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
    }),
  } as ViewStyle,

  // Sombra média para botões
  medium: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
      web: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
      },
    }),
  } as ViewStyle,

  // Sombra grande para display
  large: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
      web: {
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      },
    }),
  } as ViewStyle,

  // Sombra interna para efeito neumórfico (usado em light mode)
  inner: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    }),
  } as ViewStyle,
};

/**
 * Bordas arredondadas suaves
 */
export const modernBorderRadius = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
  round: 9999,
} as const;

/**
 * Espaçamentos modernos e consistentes
 */
export const modernSpacing = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,
  xxl: 32,
  xxxl: 40,
} as const;

/**
 * Tipografia moderna e elegante
 */
export const modernTypography = {
  display: {
    fontSize: 64,
    fontWeight: '300' as TextStyle['fontWeight'],
    letterSpacing: -1,
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }),
  } as TextStyle,

  displaySecondary: {
    fontSize: 48,
    fontWeight: '300' as TextStyle['fontWeight'],
    letterSpacing: -0.5,
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }),
  } as TextStyle,

  button: {
    fontSize: 32,
    fontWeight: '500' as TextStyle['fontWeight'],
    letterSpacing: 0.5,
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }),
  } as TextStyle,

  buttonSmall: {
    fontSize: 24,
    fontWeight: '500' as TextStyle['fontWeight'],
    letterSpacing: 0.3,
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }),
  } as TextStyle,
};

/**
 * Animações e transições
 */
export const modernAnimations = {
  // Escala para animação de toque
  pressScale: 0.96,
  
  // Duração das animações
  duration: {
    fast: 150,
    normal: 200,
    slow: 300,
  },
};

/**
 * Layout responsivo
 */
export const modernLayout = {
  // Largura máxima para web
  maxWidth: 420,
  
  // Padding do container
  containerPadding: modernSpacing.xl,
  
  // Espaçamento entre botões
  buttonGap: modernSpacing.sm,
  
  // Altura dos botões
  buttonHeight: 88,
  
  // Altura mínima do display
  displayMinHeight: 200,
};
