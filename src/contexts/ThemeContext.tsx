import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { Theme, getTheme } from '../styles/theme';

/**
 * Contexto do tema
 */
interface ThemeContextType {
  theme: Theme;
  colorScheme: 'light' | 'dark' | null;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Props do ThemeProvider
 */
interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Provider do tema que detecta automaticamente o esquema de cores do sistema
 * 
 * @param children - Componentes filhos que terão acesso ao tema
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Detecta o esquema de cores do sistema
  const colorScheme = useColorScheme();
  
  // Obtém o tema baseado no esquema de cores
  const theme = useMemo(() => getTheme(colorScheme), [colorScheme]);
  
  const value = useMemo(
    () => ({
      theme,
      colorScheme: colorScheme || 'dark',
    }),
    [theme, colorScheme]
  );
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook para acessar o tema e esquema de cores
 * 
 * @returns Objeto com theme e colorScheme
 * @throws Error se usado fora do ThemeProvider
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  
  return context;
};
