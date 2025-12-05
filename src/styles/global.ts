import { ViewStyle, TextStyle } from 'react-native';
import { colors } from './colors';

/**
 * Estilos globais compartilhados da aplicação
 */

/**
 * Sombras padrão para elevação
 */
export const shadows = {
  small: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  } as ViewStyle,
  medium: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  } as ViewStyle,
  large: {
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  } as ViewStyle,
};

/**
 * Bordas arredondadas padrão
 */
export const borderRadius = {
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 24,
  round: 9999,
} as const;

/**
 * Espaçamentos padrão
 */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

/**
 * Tipografia padrão
 */
export const typography = {
  display: {
    fontSize: 48,
    fontWeight: '300' as TextStyle['fontWeight'],
    color: colors.text,
  } as TextStyle,
  heading: {
    fontSize: 32,
    fontWeight: '600' as TextStyle['fontWeight'],
    color: colors.textSecondary,
  } as TextStyle,
  body: {
    fontSize: 18,
    fontWeight: '400' as TextStyle['fontWeight'],
    color: colors.text,
  } as TextStyle,
  button: {
    fontSize: 28,
    fontWeight: '600' as TextStyle['fontWeight'],
  } as TextStyle,
};

