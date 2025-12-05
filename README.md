# 🧮 Calculadora Mobile - React Native

Aplicativo mobile de calculadora moderna desenvolvido com React Native, Expo e TypeScript. Interface elegante com suporte a dark mode automático e operações matemáticas avançadas.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white)](https://expo.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Funcionalidades

- ✅ **Interface Moderna**: Design limpo e responsivo com sombras e bordas arredondadas
- ✅ **Dark Mode Automático**: Detecta e adapta-se ao tema do sistema (padrão: dark)
- ✅ **Operações Sequenciais**: Suporta expressões complexas com precedência de operadores (ex: `2 + 2 * 3 = 8`)
- ✅ **Operações Básicas**: Adição (+), Subtração (-), Multiplicação (×), Divisão (÷)
- ✅ **Validação Inteligente**: Evita operadores duplicados e erros de entrada
- ✅ **Display Inteligente**: Mostra expressão completa e resultado separadamente
- ✅ **Testes Unitários**: Cobertura completa com Jest e Testing Library
- ✅ **TypeScript**: Tipagem forte para maior segurança e produtividade

## 🚀 Tecnologias

- **React Native** 0.81.5 - Framework mobile
- **Expo** 54.0.27 - Plataforma de desenvolvimento
- **TypeScript** 5.1.3 - Tipagem estática
- **Jest** 29.7.0 - Framework de testes
- **React Native Testing Library** - Testes de componentes

## 📁 Estrutura do Projeto

```
calculadora-mobile-reactnative/
├── __tests__/                 # Testes unitários
│   ├── calc.test.ts          # Testes de cálculo (30 testes ✅)
│   ├── CalculatorScreen.test.tsx
│   └── README.md
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── ButtonCalc.tsx   # Botão da calculadora
│   │   └── index.ts
│   ├── screens/              # Telas do aplicativo
│   │   ├── CalculatorScreen.tsx
│   │   └── index.ts
│   ├── styles/               # Estilos e temas
│   │   ├── colors.ts        # Cores do tema
│   │   ├── global.ts        # Estilos globais
│   │   ├── theme.ts         # Temas light/dark
│   │   └── index.ts
│   └── utils/               # Funções utilitárias
│       └── calc.ts          # Lógica de cálculo
├── App.tsx                   # Componente principal
├── app.json                  # Configuração do Expo
├── package.json              # Dependências
├── tsconfig.json             # Configuração TypeScript
├── jest.setup.js            # Configuração Jest
└── babel.config.js           # Configuração Babel
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18+ instalado
- Expo Go instalado no dispositivo móvel (Android/iOS)
- ou Android Studio / Xcode para emuladores

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/LuisT-ls/calculadora-mobile-reactnative.git
cd calculadora-mobile-reactnative
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm start
```

4. **Execute no dispositivo/emulador**
   - **Android**: `npm run android`
   - **iOS**: `npm run ios`
   - **Web**: `npm run web`
   - **Expo Go**: Escaneie o QR Code exibido no terminal

## 🧪 Testes

O projeto inclui testes unitários completos usando Jest e React Native Testing Library.

### Executar testes

```bash
# Executar todos os testes
npm test

# Modo watch (re-executa ao salvar)
npm run test:watch

# Com cobertura de código
npm run test:coverage

# Executar apenas testes de cálculo
npm test calc.test.ts
```

### Cobertura de Testes

- ✅ **30 testes** para funções de cálculo (100% passando)
- ✅ Testes de operações básicas e sequenciais
- ✅ Testes de validação e formatação
- ✅ Testes de renderização de componentes

## 🎨 Tema e Design

### Dark Mode Automático

O aplicativo detecta automaticamente o tema do sistema e adapta-se instantaneamente:
- **Modo Escuro** (padrão): Interface com fundo escuro e texto claro
- **Modo Claro**: Interface com fundo claro e texto escuro

### Sistema de Cores

O tema está definido em `src/styles/theme.ts` com suporte completo a:
- Cores de fundo e superfície
- Cores de texto (primário, secundário, terciário)
- Cores de botões (números, operadores, ações)
- Cores de estado (sucesso, erro, aviso)

### Estilos Globais

Arquivo `src/styles/global.ts` contém:
- Sistema de sombras (small, medium, large)
- Bordas arredondadas padronizadas
- Espaçamentos consistentes
- Tipografia hierárquica

## 📱 Funcionalidades da Calculadora

### Operações Suportadas

- **Adição**: `2 + 3 = 5`
- **Subtração**: `10 - 4 = 6`
- **Multiplicação**: `3 × 4 = 12`
- **Divisão**: `15 ÷ 3 = 5`

### Operações Sequenciais

A calculadora respeita a precedência de operadores:
- `2 + 2 × 3 = 8` (não 12)
- `10 - 8 ÷ 2 = 6` (não 1)
- `2 + 3 × 4 - 1 = 13`

### Recursos

- **Botão Clear (C)**: Limpa completamente a calculadora
- **Botão Igual (=)**: Calcula o resultado da expressão
- **Validação**: Previne operadores duplicados (ex: `2++3`)
- **Números Decimais**: Suporte completo a números decimais
- **Display Duplo**: Mostra expressão e resultado separadamente

## 🔧 Scripts Disponíveis

```bash
npm start          # Inicia o servidor Expo
npm run android    # Abre no Android
npm run ios        # Abre no iOS
npm run web        # Abre no navegador
npm test           # Executa testes
npm run test:watch # Testes em modo watch
npm run test:coverage # Testes com cobertura
```

## 📦 Dependências Principais

### Produção
- `expo` - Plataforma Expo
- `react` - Biblioteca React
- `react-native` - Framework React Native
- `expo-status-bar` - Barra de status do Expo

### Desenvolvimento
- `typescript` - Compilador TypeScript
- `jest` - Framework de testes
- `jest-expo` - Preset Jest para Expo
- `@testing-library/react-native` - Testes de componentes

## 🏗️ Arquitetura

### Componentes

- **ButtonCalc**: Componente reutilizável de botão com variantes (number, operator, action, equals)
- **CalculatorScreen**: Tela principal com lógica de estado e renderização

### Utilitários

- **calc.ts**: Funções de cálculo seguras sem uso de `eval()`
  - `calculate()`: Avalia expressões matemáticas
  - `canAddOperator()`: Valida adição de operadores
  - `formatNumber()`: Formata números para exibição

### Estilos

- **theme.ts**: Definição de temas light e dark
- **global.ts**: Estilos compartilhados (sombras, espaçamentos, tipografia)
- **colors.ts**: Paleta de cores (mantido para compatibilidade)

## 🐛 Resolução de Problemas

### Erro ao iniciar Expo

```bash
# Limpe o cache
npm start -- --clear
```

### Problemas com dependências

```bash
# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### Testes falhando

```bash
# Limpe o cache do Jest
npm test -- --clearCache
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**LuisT-ls**

- GitHub: [@LuisT-ls](https://github.com/LuisT-ls)
- Repositório: [calculadora-mobile-reactnative](https://github.com/LuisT-ls/calculadora-mobile-reactnative)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Changelog

### v1.0.0
- ✅ Interface moderna com design responsivo
- ✅ Dark mode automático baseado no tema do sistema
- ✅ Operações sequenciais com precedência de operadores
- ✅ Testes unitários completos (30 testes)
- ✅ TypeScript com tipagem forte
- ✅ Compatibilidade total com Expo Go

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
