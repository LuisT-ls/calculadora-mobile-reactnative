import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../styles/colors';

/**
 * Tela principal da calculadora
 */
export const CalculatorScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Text style={styles.title}>Calculadora</Text>
        <Text style={styles.subtitle}>Em desenvolvimento</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
});

