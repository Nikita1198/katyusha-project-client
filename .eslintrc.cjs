module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true, // Если вы используете Jest для тестирования
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended', // Добавлено для лучшей поддержки хуков React
    'plugin:jsx-a11y/recommended', // Добавлено для проверки доступности JSX
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'jest'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'react/react-in-jsx-scope': 'off', // Для React 17+ не требуется импортировать React в файлы JSX
    'react/prop-types': 'off', // Если вы не используете prop-types
    'react-hooks/rules-of-hooks': 'error', // Проверка правил хуков
    'react-hooks/exhaustive-deps': 'warn', // Проверка зависимостей эффектов
    // Добавьте или измените правила ESLint здесь
  },
};
