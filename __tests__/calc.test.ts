import { calculate, canAddOperator, formatNumber } from '../src/utils/calc';

/**
 * Testes para a função calculate()
 */
describe('calculate', () => {
  describe('Operações básicas', () => {
    test('deve calcular adição simples', () => {
      expect(calculate('2+2')).toBe(4);
    });

    test('deve calcular subtração simples', () => {
      expect(calculate('5-3')).toBe(2);
    });

    test('deve calcular multiplicação simples', () => {
      expect(calculate('3*4')).toBe(12);
    });

    test('deve calcular divisão simples', () => {
      expect(calculate('10/2')).toBe(5);
    });
  });

  describe('Operações sequenciais', () => {
    test('deve respeitar precedência: multiplicação antes de adição', () => {
      expect(calculate('2+2*3')).toBe(8); // 2 + 6 = 8
    });

    test('deve respeitar precedência: divisão antes de subtração', () => {
      expect(calculate('10-8/2')).toBe(6); // 10 - 4 = 6
    });

    test('deve calcular expressão complexa', () => {
      expect(calculate('2+3*4-1')).toBe(13); // 2 + 12 - 1 = 13
    });

    test('deve calcular múltiplas operações', () => {
      expect(calculate('10/2+3*2')).toBe(11); // 5 + 6 = 11
    });
  });

  describe('Números decimais', () => {
    test('deve calcular com números decimais', () => {
      expect(calculate('2.5+3.5')).toBe(6);
    });

    test('deve calcular divisão com resultado decimal', () => {
      expect(calculate('7/2')).toBe(3.5);
    });
  });

  describe('Símbolos visuais', () => {
    test('deve converter × para *', () => {
      expect(calculate('2×3')).toBe(6);
    });

    test('deve converter ÷ para /', () => {
      expect(calculate('10÷2')).toBe(5);
    });
  });

  describe('Casos de erro', () => {
    test('deve retornar null para expressão inválida', () => {
      expect(calculate('abc')).toBeNull();
    });

    test('deve retornar null para divisão por zero', () => {
      expect(calculate('5/0')).toBeNull();
    });

    test('deve retornar null para expressão vazia', () => {
      expect(calculate('')).toBeNull();
    });

    test('deve retornar 0 para expressão "0"', () => {
      expect(calculate('0')).toBe(0);
    });

    test('deve remover operadores no final', () => {
      expect(calculate('2+3+')).toBe(5);
    });
  });

  describe('Espaços em branco', () => {
    test('deve ignorar espaços em branco', () => {
      expect(calculate('2 + 3')).toBe(5);
    });

    test('deve calcular com múltiplos espaços', () => {
      expect(calculate('2  +  3  *  4')).toBe(14);
    });
  });
});

/**
 * Testes para a função canAddOperator()
 */
describe('canAddOperator', () => {
  test('deve retornar false para expressão vazia', () => {
    expect(canAddOperator('', '+')).toBe(false);
  });

  test('deve retornar false para expressão "0"', () => {
    expect(canAddOperator('0', '+')).toBe(false);
  });

  test('deve retornar false quando último caractere é operador', () => {
    expect(canAddOperator('2+', '+')).toBe(false);
  });

  test('deve retornar true quando pode adicionar operador', () => {
    expect(canAddOperator('2', '+')).toBe(true);
  });

  test('deve retornar true para número com múltiplos dígitos', () => {
    expect(canAddOperator('123', '*')).toBe(true);
  });
});

/**
 * Testes para a função formatNumber()
 */
describe('formatNumber', () => {
  test('deve formatar número inteiro', () => {
    expect(formatNumber(5)).toBe('5');
  });

  test('deve formatar número decimal', () => {
    expect(formatNumber(3.5)).toBe('3.5');
  });

  test('deve remover zeros desnecessários', () => {
    expect(formatNumber(5.0)).toBe('5');
  });

  test('deve manter decimais significativos', () => {
    expect(formatNumber(3.14159)).toBe('3.14159');
  });

  test('deve formatar número negativo', () => {
    expect(formatNumber(-5)).toBe('-5');
  });

  test('deve formatar número grande', () => {
    expect(formatNumber(1000000)).toBe('1000000');
    expect(formatNumber(1234567)).toBe('1234567');
  });
});

