import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  modernShadows,
  modernBorderRadius,
  modernSpacing,
  modernTypography,
  modernLayout,
} from '../styles/modern';
import { getTheme, type Theme } from '../styles/theme';
import { ButtonCalc, ButtonType } from '../components/ButtonCalc';
import { calculate, canAddOperator, formatNumber } from '../utils/calc';

/**
 * Tela principal da calculadora com design moderno e suporte a dark mode
 */
export const CalculatorScreen: React.FC = () => {
  // Detecta o esquema de cores do sistema
  const colorScheme = useColorScheme();
  
  // Obtém o tema baseado no esquema de cores (padrão: dark)
  const theme = useMemo(() => getTheme(colorScheme), [colorScheme]);
  
  // Determina o estilo da StatusBar (inverte: dark mode = light bar, light mode = dark bar)
  const statusBarStyle = colorScheme === 'light' ? 'dark' : 'light';
  
  // Estado para armazenar a expressão completa digitada
  const [expression, setExpression] = useState<string>('0');
  // Estado para armazenar o resultado calculado
  const [result, setResult] = useState<string>('');

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
        theme={theme}
      />
    );
  };

  // Estilos dinâmicos baseados no tema
  const dynamicStyles = useMemo(() => ({
    container: {
      backgroundColor: theme.background,
    },
    display: {
      backgroundColor: theme.surface,
    },
    expression: {
      color: theme.text,
    },
    result: {
      color: theme.textSecondary,
    },
  }), [theme]);

  return (
    <SafeAreaView style={[styles.container, dynamicStyles.container]}>
      <StatusBar style={statusBarStyle} />
      
      {/* Container principal com centralização para web */}
      <View style={styles.mainContainer}>
        {/* Display da calculadora */}
        <View style={styles.displayContainer}>
          <View style={[styles.display, dynamicStyles.display]}>
            {/* Expressão completa digitada */}
            <Text
              style={[styles.expression, dynamicStyles.expression]}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.5}
            >
              {expression}
            </Text>
            {/* Resultado calculado */}
            {result !== '' && (
              <Text
                style={[styles.result, dynamicStyles.result]}
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.5}
              >
                = {result}
              </Text>
            )}
          </View>
        </View>

        {/* Grade de botões */}
        <View style={styles.buttonsContainer}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      web: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      },
    }),
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    ...Platform.select({
      web: {
        maxWidth: modernLayout.maxWidth,
        marginHorizontal: 'auto',
        paddingHorizontal: modernLayout.containerPadding,
      },
      default: {
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
      },
    }),
  },
  display: {
    borderRadius: modernBorderRadius.large,
    paddingHorizontal: modernSpacing.xxl,
    paddingVertical: modernSpacing.xxxl,
    minHeight: modernLayout.displayMinHeight,
    justifyContent: 'flex-end',
    ...modernShadows.large,
    ...Platform.select({
      web: {
        backdropFilter: 'blur(10px)',
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
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0,
  },
});
