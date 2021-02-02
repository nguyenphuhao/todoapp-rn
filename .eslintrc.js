module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  root: true,
  extends: [
    '@react-native-community',
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  rules: {
    "no-unused-vars": "off",
  }
};
