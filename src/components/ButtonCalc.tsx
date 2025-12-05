import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../styles/colors';
import { shadows, borderRadius, spacing } from '../styles/global';

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
}

/**
 * Componente de botão da calculadora com design moderno
 * 
 * @param label - Texto exibido no botão
 * @param onPress - Função chamada ao pressionar o botão
 * @param type - Tipo do botão (number, operator, action, equals)
 * @param flex - Valor flex para ajustar largura (padrão: 1)
 */
export const ButtonCalc: React.FC<ButtonCalcProps> = ({
  label,
  onPress,
  type = 'number',
  flex = 1,
}) => {
  // Determina o estilo do botão baseado no tipo
  const getButtonStyle = (): ViewStyle => {
    switch (type) {
      case 'operator':
        return styles.buttonOperator;
      case 'action':
        return styles.buttonAction;
      case 'equals':
        return styles.buttonEquals;
      default:
        return styles.buttonNumber;
    }
  };

  // Determina o estilo do texto baseado no tipo
  const getTextStyle = (): TextStyle => {
    switch (type) {
      case 'operator':
      case 'equals':
        return styles.buttonTextLight;
      case 'action':
        return styles.buttonTextLight;
      default:
        return styles.buttonText;
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
  buttonNumber: {
    backgroundColor: colors.buttonNumber,
  },
  buttonOperator: {
    backgroundColor: colors.buttonOperator,
  },
  buttonAction: {
    backgroundColor: colors.buttonAction,
  },
  buttonEquals: {
    backgroundColor: colors.buttonEquals,
  },
  buttonLabel: {
    fontSize: 28,
    fontWeight: '600',
  },
  buttonText: {
    color: colors.buttonText,
  },
  buttonTextLight: {
    color: colors.buttonTextLight,
  },
});
