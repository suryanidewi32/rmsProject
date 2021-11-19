module.exports = { 
  extends: "google",
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'react-hooks',
  ],
  rules: {
    'linebreak-style': 0,
    'react/prop-types': ['off']
  },
};
