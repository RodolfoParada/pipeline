// Task 4: Pre-commit Hooks con Husky (7 minutos)
// Automatización de calidad de código en el flujo de desarrollo.

// 🪝 Husky + lint-staged Pipeline
// Instalación completa:

// # Instalar Husky y lint-staged
// npm install --save-dev husky lint-staged

// # Inicializar Husky
// npx husky install

// # Crear hook de pre-commit
// npx husky add .husky/pre-commit "npx lint-staged"
// Configuración en package.json:

{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",           // Lint y auto-fix
      "prettier --write",       // Formateo automático
      "jest --findRelatedTests" // Tests relacionados
    ],
    "*.{json,css,md}": [
      "prettier --write"        // Solo formateo
    ]
  }
}
// Hook de commit-msg para Conventional Commits:

// # Crear hook
// npx husky add .husky/commit-msg "npx --no -- commitlint --edit \$1"

// # Instalar commitlint
// npm install --save-dev @commitlint/cli @commitlint/config-conventional

// # commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat',     // Nueva funcionalidad
      'fix',      // Corrección de bug
      'docs',     // Documentación
      'style',    // Formateo
      'refactor', // Refactorización
      'test',     // Tests
      'chore'     // Mantenimiento
    ]]
  }
};
// Concepto clave: Pre-commit hooks atrapan problemas antes de que lleguen al repositorio.

// 🎯 Pipeline Completo de Calidad
// Scripts en package.json:

{
  "scripts": {
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write src/**/*.{js,jsx,ts,tsx,json,css,md}",
    "format:check": "prettier --check src/**/*.{js,jsx,ts,tsx,json,css,md}",
    "test": "jest",
    "test:coverage": "jest --coverage",
    "test:ci": "jest --ci --coverage --watchAll=false",
    "prepare": "husky install"
  }
}
// Flujo de desarrollo automatizado:

// # 1. Escribir código
// # 2. git add .
// # 3. git commit -m "feat: add user authentication"

// # 🚫 Si hay errores de linting:
// # ❌ ESLint errors found
// # ❌ Prettier formatting issues
// # ❌ Tests failing

// # ✅ Si todo pasa:
// # ✔ Linting passed
// # ✔ Formatting applied
// # ✔ Tests passed
// # ✔ Commit successful
// Concepto clave: La calidad se automatiza para que sea invisible al desarrollador