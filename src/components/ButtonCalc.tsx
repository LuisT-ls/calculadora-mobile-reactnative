import React, { useRef } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Animated,
  Platform,
} from 'react-native';
import { modernShadows, modernBorderRadius, modernTypography, modernLayout, modernAnimations } from '../styles/modern';
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
 * Componente de botão da calculadora com design moderno, animações e suporte a temas
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
  // Animação de escala para feedback tátil
  const scaleAnim = useRef(new Animated.Value(1)).current;

  /**
   * Animação de press (escala para 0.96)
   */
  const handlePressIn = (): void => {
    Animated.spring(scaleAnim, {
      toValue: modernAnimations.pressScale,
      useNativeDriver: true,
      speed: 20,
      bounciness: 0,
    }).start();
  };

  /**
   * Animação de release (volta para 1)
   */
  const handlePressOut = (): void => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 0,
    }).start();
  };

  /**
   * Determina o estilo do botão baseado no tipo
   */
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      backgroundColor: theme.buttonNumber,
    };

    switch (type) {
      case 'operator':
        return { ...baseStyle, backgroundColor: theme.buttonOperator };
      case 'action':
        return { ...baseStyle, backgroundColor: theme.buttonAction };
      case 'equals':
        return { ...baseStyle, backgroundColor: theme.buttonEquals };
      default:
        return baseStyle;
    }
  };

  /**
   * Determina o estilo do texto baseado no tipo
   */
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
    <Animated.View
      style={[
        styles.buttonContainer,
        { flex },
        { transform: [{ scale: scaleAnim }] },
      ]}
    >
      <TouchableOpacity
        style={[styles.button, getButtonStyle()]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
      >
        <Text style={[styles.buttonLabel, getTextStyle()]}>{label}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: modernLayout.buttonGap / 2,
    marginVertical: modernLayout.buttonGap / 2,
  },
  button: {
    borderRadius: modernBorderRadius.large,
    justifyContent: 'center',
    alignItems: 'center',
    height: modernLayout.buttonHeight,
    ...modernShadows.medium,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all 0.2s ease',
      },
    }),
  },
  buttonLabel: {
    ...modernTypography.button,
  },
});
