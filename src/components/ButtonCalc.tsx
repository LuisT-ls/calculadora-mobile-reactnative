import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { shadows, borderRadius, spacing } from '../styles/global';
import type { Theme } from '../styles/theme';

/**
 * Tipos de botão da calculadora
 */
export type ButtonType = 'number' | 'operator' | 'action' | 'equals';

/**
 * Props do componente ButtonCalc
 */
interface ButtonCalcProps {
  label: string;
  onPress: () => void;
  type?: ButtonType;
  flex?: number;
  theme: Theme;
}

/**
 * Componente de botão da calculadora com design moderno e suporte a temas
 * 
 * @param label - Texto exibido no botão
 * @param onPress - Função chamada ao pressionar o botão
 * @param type - Tipo do botão (number, operator, action, equals)
 * @param flex - Valor flex para ajustar largura (padrão: 1)
 * @param theme - Tema atual (light ou dark)
 */
export const ButtonCalc: React.FC<ButtonCalcProps> = ({
  label,
  onPress,
  type = 'number',
  flex = 1,
  theme,
}) => {
  // Determina o estilo do botão baseado no tipo
  const getButtonStyle = (): ViewStyle => {
    switch (type) {
      case 'operator':
        return { backgroundColor: theme.buttonOperator };
      case 'action':
        return { backgroundColor: theme.buttonAction };
      case 'equals':
        return { backgroundColor: theme.buttonEquals };
      default:
        return { backgroundColor: theme.buttonNumber };
    }
  };

  // Determina o estilo do texto baseado no tipo
  const getTextStyle = (): TextStyle => {
    switch (type) {
      case 'operator':
      case 'equals':
        return { color: theme.buttonTextLight };
      case 'action':
        return { color: theme.buttonTextLight };
      default:
        return { color: theme.buttonText };
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), { flex }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonLabel, getTextStyle()]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: spacing.sm,
    borderRadius: borderRadius.large,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 80,
    ...shadows.medium,
  },
  buttonLabel: {
    fontSize: 28,
    fontWeight: '600',
  },
});
