import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Animated,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  modernSpacing,
  modernTypography,
  modernLayout,
} from '../styles/modern';
import { useTheme } from '../contexts/ThemeContext';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { ButtonCalc, ButtonType } from '../components/ButtonCalc';
import { calculate, canAddOperator, formatNumber } from '../utils/calc';
import { useFadeTranslateAnimation, useFadeInAnimation } from '../animations';

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedView = Animated.createAnimatedComponent(View);

/**
 * Tela principal da calculadora com design moderno e suporte a dark mode
 */
export const CalculatorScreen: React.FC = () => {
  // Obtém o tema e esquema de cores do contexto
  const { theme, colorScheme } = useTheme();
  
  // Obtém estilos dinâmicos baseados no tema
  const themeStyles = useThemeStyles();
  
  // Determina o estilo da StatusBar (inverte: dark mode = light bar, light mode = dark bar)
  const statusBarStyle = colorScheme === 'light' ? 'dark' : 'light';
  
  // Estado para armazenar a expressão completa digitada
  const [expression, setExpression] = useState<string>('0');
  // Estado para armazenar o resultado calculado
  const [result, setResult] = useState<string>('');
  
  // Animação de fadeIn inicial para a tela
  const containerFadeIn = useFadeInAnimation(100);
  
  // Animação para o display quando o valor muda (trigger baseado em expression e result)
  const displayTrigger = `${expression}-${result}`;
  const displayAnimatedStyle = useFadeTranslateAnimation(displayTrigger);

  /**
   * Limpa completamente a calculadora
   */
  const handleClear = (): void => {
    setExpression('0');
    setResult('');
  };

  /**
   * Adiciona um número à expressão
   * 
   * @param num - Número a ser adicionado (0-9)
   */
  const handleNumber = (num: string): void => {
    // Se a expressão atual é "0" ou um resultado, substitui
    if (expression === '0' || result !== '') {
      setExpression(num);
      setResult('');
    } else {
      // Adiciona o número à expressão atual
      setExpression(expression + num);
      setResult('');
    }
  };

  /**
   * Adiciona um operador à expressão
   * Evita operadores duplicados
   * 
   * @param operator - Operador a ser adicionado (+, -, *, /)
   */
  const handleOperator = (operator: string): void => {
    // Se há um resultado, usa ele como base para nova expressão
    if (result !== '') {
      setExpression(result + operator);
      setResult('');
      return;
    }

    const lastChar = expression.slice(-1);
    const operators = ['+', '-', '*', '/'];
    
    // Se o último caractere já é um operador, substitui
    if (operators.includes(lastChar)) {
      setExpression(expression.slice(0, -1) + operator);
    } else if (canAddOperator(expression, operator)) {
      // Adiciona o operador à expressão
      setExpression(expression + operator);
    }
    
    setResult('');
  };

  /**
   * Calcula o resultado da expressão completa
   * Suporta operações sequenciais (ex: 2 + 2 * 3)
   */
  const handleEquals = (): void => {
    // Remove operadores no final da expressão antes de calcular
    let cleanExpression = expression.replace(/[+\-*/]+$/, '');
    
    // Se não houver expressão válida, não calcula
    if (cleanExpression === '' || cleanExpression === '0') {
      return;
    }
    
    // Calcula o resultado usando a função segura
    const calculatedResult = calculate(cleanExpression);
    
    if (calculatedResult !== null) {
      const formattedResult = formatNumber(calculatedResult);
      setResult(formattedResult);
      // Mantém a expressão original para referência
    } else {
      setResult('Erro');
      setExpression('0');
    }
  };

  /**
   * Renderiza um botão da calculadora
   * 
   * @param label - Texto do botão
   * @param onPress - Função a ser chamada ao pressionar
   * @param type - Tipo do botão
   * @param flex - Valor flex para largura
   */
  const renderButton = (
    label: string,
    onPress: () => void,
    type: ButtonType = 'number',
    flex: number = 1
  ): React.ReactElement => {
    return (
      <ButtonCalc
        key={label}
        label={label}
        onPress={onPress}
        type={type}
        flex={flex}
      />
    );
  };

  // Estilo adicional para dark mode (glass-like effect no display)
  const isDarkMode = theme.backgroundPrimary === '#0D0D0D';
  const displayStyle = [
    styles.display,
    themeStyles.display,
    Platform.select({
      web: isDarkMode ? {
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
      } : {},
    }),
  ];

  return (
    <AnimatedView style={[styles.container, themeStyles.container, containerFadeIn]}>
      <SafeAreaView style={StyleSheet.absoluteFill}>
        <StatusBar style={statusBarStyle} />
        
        {/* Container principal com centralização para web */}
        <View style={styles.mainContainer}>
          {/* Display da calculadora */}
          <View style={[styles.displayContainer, themeStyles.displayContainer]}>
            <AnimatedView style={[displayStyle, displayAnimatedStyle]}>
              {/* Expressão completa digitada */}
              <AnimatedText
                style={[styles.expression, themeStyles.expression]}
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.5}
              >
                {expression}
              </AnimatedText>
              {/* Resultado calculado */}
              {result !== '' && (
                <AnimatedText
                  style={[styles.result, themeStyles.result]}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.5}
                >
                  = {result}
                </AnimatedText>
              )}
            </AnimatedView>
          </View>

          {/* Grade de botões */}
          <View style={[styles.buttonsContainer, themeStyles.buttonsContainer]}>
            {/* Linha 1: 7, 8, 9, ÷ */}
            <View style={styles.buttonRow}>
              {renderButton('7', () => handleNumber('7'))}
              {renderButton('8', () => handleNumber('8'))}
              {renderButton('9', () => handleNumber('9'))}
              {renderButton('÷', () => handleOperator('/'), 'operator')}
            </View>

            {/* Linha 2: 4, 5, 6, × */}
            <View style={styles.buttonRow}>
              {renderButton('4', () => handleNumber('4'))}
              {renderButton('5', () => handleNumber('5'))}
              {renderButton('6', () => handleNumber('6'))}
              {renderButton('×', () => handleOperator('*'), 'operator')}
            </View>

            {/* Linha 3: 1, 2, 3, - */}
            <View style={styles.buttonRow}>
              {renderButton('1', () => handleNumber('1'))}
              {renderButton('2', () => handleNumber('2'))}
              {renderButton('3', () => handleNumber('3'))}
              {renderButton('-', () => handleOperator('-'), 'operator')}
            </View>

            {/* Linha 4: C, 0, =, + */}
            <View style={styles.buttonRow}>
              {renderButton('C', handleClear, 'action')}
              {renderButton('0', () => handleNumber('0'))}
              {renderButton('=', handleEquals, 'equals')}
              {renderButton('+', () => handleOperator('+'), 'operator')}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      web: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        padding: modernSpacing.xl,
        boxSizing: 'border-box',
      },
      default: {
        flexGrow: 1,
      },
    }),
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    ...Platform.select({
      web: {
        maxWidth: modernLayout.maxWidth,
        width: '100%',
        margin: '0 auto',
        paddingHorizontal: modernSpacing.xl,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      },
      default: {
        flexGrow: 1,
        paddingHorizontal: modernLayout.containerPadding,
      },
    }),
  },
  displayContainer: {
    flex: 0.45,
    justifyContent: 'flex-end',
    paddingBottom: modernSpacing.xl,
    ...Platform.select({
      web: {
        paddingTop: modernSpacing.xxxl,
        width: '100%',
        boxSizing: 'border-box',
      },
    }),
  },
  display: {
    paddingHorizontal: modernSpacing.xxl,
    paddingVertical: modernSpacing.xxxl,
    minHeight: modernLayout.displayMinHeight,
    justifyContent: 'flex-end',
    ...Platform.select({
      web: {
        width: '100%',
        boxSizing: 'border-box',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      },
    }),
  },
  expression: {
    ...modernTypography.display,
    textAlign: 'right',
    marginBottom: modernSpacing.md,
    minHeight: 72,
    ...Platform.select({
      web: {
        lineHeight: 72,
      },
    }),
  },
  result: {
    ...modernTypography.displaySecondary,
    textAlign: 'right',
    minHeight: 56,
    opacity: 0.8,
    ...Platform.select({
      web: {
        lineHeight: 56,
      },
    }),
  },
  buttonsContainer: {
    flex: 0.55,
    paddingTop: modernSpacing.lg,
    paddingBottom: modernSpacing.xl,
    justifyContent: 'center',
    ...Platform.select({
      web: {
        width: '100%',
        boxSizing: 'border-box',
      },
    }),
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0,
    ...Platform.select({
      web: {
        width: '100%',
        display: 'flex',
        gap: modernLayout.buttonGap,
      },
    }),
  },
});
