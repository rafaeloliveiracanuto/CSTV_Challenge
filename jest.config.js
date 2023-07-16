module.exports = {
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native|(react-native-screens|@react-native-community/masked-view)/)',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  preset: 'react-native',
  testEnvironment: 'jest-environment-jsdom',
};
