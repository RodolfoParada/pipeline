// Task 2: Linting con ESLint (7 minutos)
// Configuración de reglas automáticas para mantener consistencia y calidad de código.

// ⚙️ Configuración de ESLint
// Instalación y setup básico:

// # Instalar ESLint
// npm install --save-dev eslint

// # Inicializar configuración
// npx eslint --init

// # O instalar preset específico
// npm install --save-dev @eslint/js eslint-config-standard
// Archivo .eslintrc.js completo:

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    '@react-eslint/recommended', // Para React
    'plugin:jest/recommended' // Para Jest
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'react-hooks',
    'jest',
    'import'
  ],
  rules: {
    // Reglas de estilo
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],

    // Reglas de buenas prácticas
    'no-console': 'warn', // Advertir sobre console.log en producción
    'no-debugger': 'error', // Error en debugger statements
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prefer-const': 'error',
    'no-var': 'error',

    // Reglas específicas de React
    'react/prop-types': 'off', // Si usas TypeScript
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Reglas de testing
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/prefer-to-have-length': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
// Concepto clave: ESLint configura reglas una vez y las aplica automáticamente.

// 🎨 Reglas Esenciales por Categoría
// 1. Error Prevention (Prevención de Errores):

{
  "no-undef": "error",              // Variables no definidas
  "no-unreachable": "error",        // Código unreachable
  "valid-typeof": "error",          // typeof comparisons inválidas
  "no-cond-assign": "error",        // Assignment en conditions
  "no-constant-condition": "error"  // Conditions siempre true/false
}
// 2. Code Quality (Calidad de Código):

{
  "complexity": ["error", 10],           // Complejidad ciclomática
  "max-depth": ["error", 4],             // Profundidad máxima de anidación
  "max-lines-per-function": ["error", 50], // Líneas por función
  "max-params": ["error", 4]             // Parámetros por función
}
// 3. Consistency (Consistencia):

{
  "consistent-return": "error",     // Returns consistentes
  "default-case": "error",          // Default en switches
  "dot-notation": "error",          // Notación de punto consistente
  "eqeqeq": "error"                 // === en lugar de ==
}
// Concepto clave: Las reglas de ESLint deben balancear rigor con practicidad.

