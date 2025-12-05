// Mock do useColorScheme
jest.mock('react-native/Libraries/Utilities/useColorScheme', () => {
  return jest.fn(() => 'dark');
});

// Mock do expo-status-bar
jest.mock('expo-status-bar', () => ({
  StatusBar: () => null,
}));

