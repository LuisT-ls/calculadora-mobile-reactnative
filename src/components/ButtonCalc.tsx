import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Platform,
  Animated,
} from 'react-native';
import { modernTypography, modernLayout } from '../styles/modern';
import { useTheme } from '../contexts/ThemeContext';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { usePressScaleAnimation } from '../animations';

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
 * Componente de botão da calculadora com design moderno, animações e suporte a temas
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
  // Obtém o tema e estilos do contexto
  const { theme } = useTheme();
  const themeStyles = useThemeStyles();
  
  // Animação de escala suave usando react-native-reanimated
  const { animatedStyle: scaleAnimatedStyle, handlePressIn, handlePressOut } = usePressScaleAnimation();

  /**
   * Determina o estilo do botão baseado no tipo
   */
  const getButtonStyle = (): ViewStyle => {
    switch (type) {
      case 'operator':
        return themeStyles.buttonOperator;
      case 'action':
        return themeStyles.buttonAction;
      case 'equals':
        return themeStyles.buttonEquals;
      default:
        return themeStyles.buttonNumber;
    }
  };

  /**
   * Determina o estilo do texto baseado no tipo
   */
  const getTextStyle = (): TextStyle => {
    switch (type) {
      case 'operator':
      case 'equals':
        return themeStyles.buttonTextLight;
      case 'action':
        return themeStyles.buttonTextLight;
      default:
        return themeStyles.buttonText;
    }
  };

  // Estilo adicional para dark mode (glass-like effect)
  const buttonStyle = getButtonStyle();
  const isDarkMode = theme.backgroundPrimary === '#0D0D0D';
  
  const enhancedButtonStyle: ViewStyle = {
    ...buttonStyle,
    ...Platform.select({
      web: isDarkMode ? {
        border: '1px solid rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(10px)',
        background: buttonStyle.backgroundColor,
      } : {},
    }),
  };

  return (
    <Animated.View
      style={[
        styles.buttonContainer,
        Platform.select({
          web: { flex: 1, minWidth: 0 },
          default: { flex },
        }),
        scaleAnimatedStyle,
      ]}
    >
      <TouchableOpacity
        style={[styles.button, enhancedButtonStyle]}
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
    ...Platform.select({
      web: {
        flex: 1,
        minWidth: 0,
        display: 'inline-flex',
      },
      default: {
        marginHorizontal: modernLayout.buttonGap / 2,
        marginVertical: modernLayout.buttonGap / 2,
        flex: 1,
      },
    }),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: modernLayout.buttonHeight,
    ...Platform.select({
      web: {
        width: '100%',
        cursor: 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        transition: 'all 0.2s ease',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
        // Efeito glass-like para dark mode na web
        border: '1px solid transparent',
        boxSizing: 'border-box',
        overflow: 'hidden',
      },
    }),
  },
  buttonLabel: {
    ...modernTypography.button,
  },
});
