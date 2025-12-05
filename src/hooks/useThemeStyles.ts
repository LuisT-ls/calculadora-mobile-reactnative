import { useMemo } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { modernBorderRadius } from '../styles/modern';

/**
 * Estilos dinâmicos baseados no tema
 */
export interface ThemeStyles {
  // Containers
  container: ViewStyle;
  displayContainer: ViewStyle;
  display: ViewStyle;
  buttonsContainer: ViewStyle;
  
  // Textos
  textPrimary: TextStyle;
  textSecondary: TextStyle;
  expression: TextStyle;
  result: TextStyle;
  
  // Botões
  buttonNumber: ViewStyle;
  buttonOperator: ViewStyle;
  buttonAction: ViewStyle;
  buttonEquals: ViewStyle;
  buttonText: TextStyle;
  buttonTextLight: TextStyle;
}

/**
 * Hook para obter estilos dinâmicos baseados no tema atual
 * 
 * @returns Objeto com todos os estilos temáticos
 */
export const useThemeStyles = (): ThemeStyles => {
  const { theme } = useTheme();
  
  return useMemo(
    () => ({
      // Containers
      container: {
        backgroundColor: theme.backgroundPrimary,
      },
      displayContainer: {
        backgroundColor: theme.backgroundPrimary,
      },
      display: {
        backgroundColor: theme.backgroundSecondary,
        borderRadius: modernBorderRadius.large,
        ...theme.shadowDark,
      },
      buttonsContainer: {
        backgroundColor: theme.backgroundPrimary,
      },
      
      // Textos
      textPrimary: {
        color: theme.textPrimary,
      },
      textSecondary: {
        color: theme.textSecondary,
      },
      expression: {
        color: theme.textPrimary,
      },
      result: {
        color: theme.textSecondary,
      },
      
      // Botões
      buttonNumber: {
        backgroundColor: theme.buttonPrimary,
        borderRadius: modernBorderRadius.large,
        ...theme.shadowLight,
      },
      buttonOperator: {
        backgroundColor: theme.operatorButton,
        borderRadius: modernBorderRadius.large,
        ...theme.shadowLight,
      },
      buttonAction: {
        backgroundColor: theme.buttonSecondary,
        borderRadius: modernBorderRadius.large,
        ...theme.shadowLight,
      },
      buttonEquals: {
        backgroundColor: theme.operatorButton,
        borderRadius: modernBorderRadius.large,
        ...theme.shadowLight,
      },
      buttonText: {
        color: theme.textPrimary,
      },
      buttonTextLight: {
        color: theme.buttonTextLight,
      },
    }),
    [theme]
  );
};
