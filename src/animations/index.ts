import { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

/**
 * Configurações de animação padrão
 */
export const animationConfig = {
  // Configuração de spring suave
  spring: {
    friction: 7,
    tension: 40,
  },
  
  // Configuração de timing suave
  timing: {
    duration: 200,
    easing: Easing.out(Easing.cubic),
  },
  
  // Configuração de timing rápido
  timingFast: {
    duration: 150,
    easing: Easing.out(Easing.quad),
  },
  
  // Configuração de timing lento
  timingSlow: {
    duration: 300,
    easing: Easing.out(Easing.cubic),
  },
};

/**
 * Hook para animação de escala ao pressionar (0.96 → 1.0)
 * 
 * @param scaleValue - Valor inicial da escala (padrão: 1.0)
 * @returns Objeto com animatedStyle e funções de controle
 */
export const usePressScaleAnimation = (scaleValue: number = 1.0) => {
  const scale = useRef(new Animated.Value(scaleValue)).current;

  const animatedStyle = {
    transform: [{ scale }],
  };

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.96,
      useNativeDriver: true,
      ...animationConfig.spring,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1.0,
      useNativeDriver: true,
      ...animationConfig.spring,
    }).start();
  };

  return {
    animatedStyle,
    handlePressIn,
    handlePressOut,
  };
};

/**
 * Hook para animação de fade + translateY
 * Útil para animar mudanças de conteúdo (ex: display da calculadora)
 * 
 * @param trigger - Valor que quando muda, dispara a animação
 * @returns animatedStyle com animação
 */
export const useFadeTranslateAnimation = (trigger: any) => {
  const opacity = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade out e move para cima
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: animationConfig.timingFast.duration,
        easing: animationConfig.timingFast.easing,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: -10,
        duration: animationConfig.timingFast.duration,
        easing: animationConfig.timingFast.easing,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Fade in e volta para posição original
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: animationConfig.timing.duration,
          easing: animationConfig.timing.easing,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: animationConfig.timing.duration,
          easing: animationConfig.timing.easing,
          useNativeDriver: true,
        }),
      ]).start();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  const animatedStyle = {
    opacity,
    transform: [{ translateY }],
  };

  return animatedStyle;
};

/**
 * Hook para animação de fadeIn inicial
 * 
 * @param delay - Delay em milissegundos antes de iniciar (padrão: 0)
 * @returns animatedStyle com fadeIn
 */
export const useFadeInAnimation = (delay: number = 0) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: animationConfig.timingSlow.duration,
          easing: animationConfig.timingSlow.easing,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: animationConfig.timingSlow.duration,
          easing: animationConfig.timingSlow.easing,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, opacity, translateY]);

  const animatedStyle = {
    opacity,
    transform: [{ translateY }],
  };

  return animatedStyle;
};

/**
 * Hook para animação de fadeIn sequencial (para múltiplos elementos)
 * 
 * @param index - Índice do elemento (para delay sequencial)
 * @param baseDelay - Delay base em milissegundos (padrão: 100)
 * @returns animatedStyle com fadeIn sequencial
 */
export const useSequentialFadeIn = (index: number, baseDelay: number = 100) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    const delay = baseDelay * index;
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: animationConfig.timing.duration,
          easing: animationConfig.timing.easing,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: animationConfig.timing.duration,
          easing: animationConfig.timing.easing,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);

    return () => clearTimeout(timer);
  }, [index, baseDelay, opacity, translateY]);

  const animatedStyle = {
    opacity,
    transform: [{ translateY }],
  };

  return animatedStyle;
};

/**
 * Hook para animação de pulso (útil para feedback visual)
 * 
 * @param trigger - Valor que quando muda, dispara o pulso
 * @returns animatedStyle com efeito de pulso
 */
export const usePulseAnimation = (trigger: any) => {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Pulsa quando o trigger muda
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.05,
        duration: 100,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  }, [trigger, scale]);

  const animatedStyle = {
    transform: [{ scale }],
  };

  return animatedStyle;
};
