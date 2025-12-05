/**
 * Calcula o resultado de uma expressão matemática de forma segura
 * Implementa um parser simples que respeita a precedência de operadores
 * 
 * @param expression - Expressão matemática como string (ex: "2+2*3")
 * @returns Resultado numérico ou null em caso de erro
 */
export const calculate = (expression: string): number | null => {
  try {
    // Remove espaços e normaliza a expressão
    let normalized = expression.replace(/\s/g, '');
    
    // Substitui símbolos visuais por operadores
    normalized = normalized
      .replace(/×/g, '*')
      .replace(/÷/g, '/');
    
    // Valida se a expressão contém apenas caracteres válidos
    if (!/^[0-9+\-*/.]+$/.test(normalized)) {
      return null;
    }
    
    // Remove operadores no final
    normalized = normalized.replace(/[+\-*/]+$/, '');
    
    if (normalized === '' || normalized === '0') {
      return 0;
    }
    
    // Processa a expressão respeitando a precedência de operadores
    const result = evaluateExpression(normalized);
    
    if (result === null || !isFinite(result)) {
      return null;
    }
    
    return result;
  } catch (error) {
    return null;
  }
};

/**
 * Avalia uma expressão matemática usando um parser simples
 * Respeita a precedência: multiplicação/divisão antes de adição/subtração
 * 
 * @param expression - Expressão matemática normalizada
 * @returns Resultado numérico ou null
 */
const evaluateExpression = (expression: string): number | null => {
  try {
    // Tokeniza a expressão em números e operadores
    const tokens = tokenize(expression);
    
    if (tokens.length === 0) {
      return null;
    }
    
    // Processa multiplicação e divisão primeiro (da esquerda para direita)
    const afterMulDiv = processOperations(tokens, ['*', '/']);
    
    // Depois processa adição e subtração (da esquerda para direita)
    const finalResult = processOperations(afterMulDiv, ['+', '-']);
    
    if (finalResult.length !== 1) {
      return null;
    }
    
    const result = parseFloat(finalResult[0]);
    
    if (isNaN(result) || !isFinite(result)) {
      return null;
    }
    
    return result;
  } catch (error) {
    return null;
  }
};

/**
 * Tokeniza uma expressão em números e operadores
 * Lida com números negativos no início da expressão
 * 
 * @param expression - Expressão a ser tokenizada
 * @returns Array de tokens (números e operadores)
 */
const tokenize = (expression: string): string[] => {
  const tokens: string[] = [];
  let currentNumber = '';
  let i = 0;
  
  // Se a expressão começa com sinal negativo, trata como parte do número
  if (expression[0] === '-') {
    currentNumber = '-';
    i = 1;
  }
  
  for (; i < expression.length; i++) {
    const char = expression[i];
    
    if ((char >= '0' && char <= '9') || char === '.') {
      // É um dígito ou ponto decimal
      currentNumber += char;
    } else if (['+', '-', '*', '/'].includes(char)) {
      // É um operador
      if (currentNumber !== '') {
        tokens.push(currentNumber);
        currentNumber = '';
      }
      tokens.push(char);
    }
  }
  
  // Adiciona o último número se houver
  if (currentNumber !== '') {
    tokens.push(currentNumber);
  }
  
  return tokens;
};

/**
 * Processa operações específicas na lista de tokens
 * Respeita a ordem da esquerda para direita
 * 
 * @param tokens - Array de tokens (números e operadores)
 * @param operators - Operadores a processar
 * @returns Array de tokens com operações resolvidas
 */
const processOperations = (tokens: string[], operators: string[]): string[] => {
  const result: string[] = [];
  let i = 0;
  
  while (i < tokens.length) {
    const token = tokens[i];
    
    // Se é um operador que queremos processar
    if (operators.includes(token) && i > 0 && i < tokens.length - 1) {
      const left = parseFloat(result[result.length - 1]);
      const right = parseFloat(tokens[i + 1]);
      
      if (isNaN(left) || isNaN(right)) {
        result.push(token);
        i++;
        continue;
      }
      
      // Remove o último número do resultado
      result.pop();
      
      let operationResult: number;
      
      switch (token) {
        case '*':
          operationResult = left * right;
          break;
        case '/':
          if (right === 0) {
            throw new Error('Division by zero');
          }
          operationResult = left / right;
          break;
        case '+':
          operationResult = left + right;
          break;
        case '-':
          operationResult = left - right;
          break;
        default:
          result.push(token);
          i++;
          continue;
      }
      
      // Adiciona o resultado
      result.push(operationResult.toString());
      i += 2; // Pula o operador e o número direito
    } else {
      // Não é um operador que queremos processar, mantém o token
      result.push(token);
      i++;
    }
  }
  
  return result;
};

/**
 * Valida se uma expressão pode ter um operador adicionado
 * Evita operadores duplicados
 * 
 * @param expression - Expressão atual
 * @param operator - Operador a ser adicionado
 * @returns true se o operador pode ser adicionado
 */
export const canAddOperator = (expression: string, operator: string): boolean => {
  if (expression === '0' || expression === '') {
    return false;
  }
  
  const lastChar = expression.slice(-1);
  const operators = ['+', '-', '*', '/'];
  
  // Não permite operador se o último caractere já é um operador
  if (operators.includes(lastChar)) {
    return false;
  }
  
  return true;
};

/**
 * Formata um número para exibição, removendo zeros desnecessários
 * 
 * @param num - Número a ser formatado
 * @returns String formatada
 */
export const formatNumber = (num: number): string => {
  // Limita a precisão para evitar números muito grandes
  const maxDecimals = 10;
  const rounded = Math.round(num * Math.pow(10, maxDecimals)) / Math.pow(10, maxDecimals);
  
  // Converte para string
  let result = rounded.toString();
  
  // Remove zeros desnecessários apenas após ponto decimal
  if (result.includes('.')) {
    result = result.replace(/\.?0+$/, '');
  }
  
  return result;
};

