import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../styles/colors';
import { ButtonCalc, ButtonType } from '../components/ButtonCalc';
import { evaluateExpression, formatNumber } from '../utils/calculator';

/**
 * Tela principal da calculadora
 */
export const CalculatorScreen: React.FC = () => {
  // Estado para armazenar a expressão atual
  const [expression, setExpression] = useState<string>('0');
  // Estado para armazenar o resultado calculado
  const [result, setResult] = useState<string>('');

  /**
   * Limpa a calculadora
   */
  const handleClear = (): void => {
    setExpression('0');
    setResult('');
  };

  /**
   * Adiciona um número à expressão
   */
  const handleNumber = (num: string): void => {
    if (expression === '0') {
      setExpression(num);
    } else {
      setExpression(expression + num);
    }
    setResult('');
  };

  /**
   * Adiciona um operador à expressão
   */
  const handleOperator = (operator: string): void => {
    const lastChar = expression.slice(-1);
    
    // Se o último caractere já é um operador, substitui
    if (['+', '-', '*', '/'].includes(lastChar)) {
      setExpression(expression.slice(0, -1) + operator);
    } else {
      setExpression(expression + operator);
    }
    setResult('');
  };

  /**
   * Calcula o resultado da expressão
   */
  const handleEquals = (): void => {
    // Remove operadores no final da expressão antes de calcular
    let cleanExpression = expression.replace(/[+\-*/]$/, '');
    
    // Se não houver expressão válida, não calcula
    if (cleanExpression === '' || cleanExpression === '0') {
      return;
    }
    
    const calculatedResult = evaluateExpression(cleanExpression);
    
    if (calculatedResult !== null) {
      const formattedResult = formatNumber(calculatedResult);
      setResult(formattedResult);
      setExpression(formattedResult);
    } else {
      setResult('Erro');
      setExpression('0');
    }
  };

  /**
   * Renderiza um botão da calculadora
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Display da calculadora */}
      <View style={styles.displayContainer}>
        <View style={styles.display}>
          {/* Expressão atual */}
          <Text style={styles.expression} numberOfLines={1}>
            {expression}
          </Text>
          {/* Resultado calculado */}
          {result !== '' && (
            <Text style={styles.result} numberOfLines={1}>
              = {result}
            </Text>
          )}
        </View>
      </View>

      {/* Grade de botões */}
      <View style={styles.buttonsContainer}>
        {/* Linha 1: 7, 8, 9, / */}
        <View style={styles.buttonRow}>
          {renderButton('7', () => handleNumber('7'))}
          {renderButton('8', () => handleNumber('8'))}
          {renderButton('9', () => handleNumber('9'))}
          {renderButton('÷', () => handleOperator('/'), 'operator')}
        </View>

        {/* Linha 2: 4, 5, 6, * */}
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
          {renderButton('C', handleClear, 'function')}
          {renderButton('0', () => handleNumber('0'))}
          {renderButton('=', handleEquals, 'equals')}
          {renderButton('+', () => handleOperator('+'), 'operator')}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  displayContainer: {
    flex: 0.4,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  display: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    minHeight: 120,
    justifyContent: 'flex-end',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  expression: {
    fontSize: 48,
    fontWeight: '300',
    color: colors.text,
    textAlign: 'right',
    marginBottom: 8,
  },
  result: {
    fontSize: 32,
    fontWeight: '600',
    color: colors.textSecondary,
    textAlign: 'right',
  },
  buttonsContainer: {
    flex: 0.6,
    paddingHorizontal: 12,
    paddingBottom: 20,
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
});
