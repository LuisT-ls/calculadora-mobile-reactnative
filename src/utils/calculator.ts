/**
 * Avalia uma expressão matemática de forma segura
 * 
 * @param expression - Expressão matemática como string (ex: "2+3*4")
 * @returns Resultado numérico ou null em caso de erro
 */
export const evaluateExpression = (expression: string): number | null => {
  try {
    // Remove espaços
    let sanitized = expression.replace(/\s/g, '');
    
    // Substitui símbolos visuais por operadores
    sanitized = sanitized
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/[^0-9+\-*/().]/g, ''); // Remove caracteres inválidos
    
    // Valida se a expressão contém apenas números e operadores válidos
    if (!/^[0-9+\-*/().\s]+$/.test(sanitized)) {
      return null;
    }
    
    // Usa Function para avaliar (limitado a expressões matemáticas)
    // Em produção, considere usar uma biblioteca de parsing como mathjs
    const result = Function(`"use strict"; return (${sanitized})`)();
    
    // Verifica se o resultado é um número válido
    if (typeof result === 'number' && !isNaN(result) && isFinite(result)) {
      return result;
    }
    
    return null;
  } catch (error) {
    return null;
  }
};

/**
 * Formata um número para exibição
 * 
 * @param num - Número a ser formatado
 * @returns String formatada
 */
export const formatNumber = (num: number): string => {
  // Limita casas decimais a 10 dígitos
  const rounded = Math.round(num * 10000000000) / 10000000000;
  
  // Remove zeros desnecessários no final
  return rounded.toString();
};

