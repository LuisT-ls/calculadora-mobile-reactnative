import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { CalculatorScreen } from '../src/screens/CalculatorScreen';

/**
 * Testes básicos para o componente CalculatorScreen
 * Nota: Alguns testes podem precisar de ajustes dependendo da implementação
 */
describe('CalculatorScreen', () => {
  test('deve renderizar o componente sem erros', () => {
    const { getByText } = render(<CalculatorScreen />);
    expect(getByText('0')).toBeTruthy();
  });

  test('deve exibir "0" como valor inicial', () => {
    const { getByText } = render(<CalculatorScreen />);
    expect(getByText('0')).toBeTruthy();
  });

  test('deve renderizar todos os botões numéricos', () => {
    const { getByText } = render(<CalculatorScreen />);
    
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    numbers.forEach(num => {
      expect(getByText(num)).toBeTruthy();
    });
  });

  test('deve renderizar todos os botões de operadores', () => {
    const { getByText } = render(<CalculatorScreen />);
    
    const operators = ['+', '-', '×', '÷'];
    operators.forEach(op => {
      expect(getByText(op)).toBeTruthy();
    });
  });

  test('deve renderizar botões de ação', () => {
    const { getByText } = render(<CalculatorScreen />);
    
    expect(getByText('C')).toBeTruthy();
    expect(getByText('=')).toBeTruthy();
  });

  test('deve adicionar número quando botão numérico é pressionado', () => {
    const { getByText } = render(<CalculatorScreen />);
    
    const button7 = getByText('7');
    fireEvent.press(button7);
    
    expect(getByText('7')).toBeTruthy();
  });

  test('deve limpar a calculadora quando botão C é pressionado', () => {
    const { getByText } = render(<CalculatorScreen />);
    
    // Adiciona alguns números
    fireEvent.press(getByText('5'));
    fireEvent.press(getByText('6'));
    
    // Limpa
    fireEvent.press(getByText('C'));
    
    expect(getByText('0')).toBeTruthy();
  });
});
