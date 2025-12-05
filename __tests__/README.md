# Testes da Calculadora

Este diretório contém os testes unitários e de integração do aplicativo.

## Estrutura de Testes

- `calc.test.ts` - Testes para as funções de cálculo (`calculate`, `canAddOperator`, `formatNumber`)
- `CalculatorScreen.test.tsx` - Testes para o componente `CalculatorScreen`

## Como Rodar os Testes

### Executar todos os testes
```bash
npm test
```

### Executar testes em modo watch (re-executa ao salvar arquivos)
```bash
npm run test:watch
```

### Executar testes com cobertura de código
```bash
npm run test:coverage
```

### Executar um arquivo de teste específico
```bash
npm test calc.test.ts
```

### Executar testes que correspondem a um padrão
```bash
npm test -- --testNamePattern="calculate"
```

## Cobertura de Testes

Os testes cobrem:
- ✅ Função `calculate()` - operações básicas e sequenciais (30 testes passando)
- ✅ Função `canAddOperator()` - validação de operadores
- ✅ Função `formatNumber()` - formatação de números
- ✅ Componente `CalculatorScreen` - renderização básica
- ✅ Botões numéricos e operadores
- ✅ Limpeza da calculadora

**Nota:** Os testes do componente `CalculatorScreen` podem precisar de ajustes dependendo do ambiente de teste. Os testes de cálculo (`calc.test.ts`) estão 100% funcionais.

## Estrutura dos Testes

### Testes de Cálculo (`calc.test.ts`)
- Operações básicas (+, -, *, /)
- Operações sequenciais com precedência
- Números decimais
- Símbolos visuais (×, ÷)
- Casos de erro
- Espaços em branco

### Testes de Componente (`CalculatorScreen.test.tsx`)
- Renderização inicial
- Interação com botões
- Cálculo de resultados
- Limpeza da calculadora
- Validação de operadores

