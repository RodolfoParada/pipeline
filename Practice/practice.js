// Practical exercise to apply the concepts learned.
// 🛠️ Implementación Práctica
// Configura pipeline completo de calidad de código:

// Chrome DevTools Debugging

// Practicar debugging de aplicación React
// Usar breakpoints condicionales
// Analizar performance con Performance tab
// Configurar ESLint Completo

// Instalar y configurar ESLint con React
// Crear reglas personalizadas para el proyecto
// Integrar con VS Code para linting automático
// Code Coverage con Jest

// Configurar umbrales de cobertura
// Analizar reportes HTML de cobertura
// Identificar código no cubierto y escribir tests
// Pre-commit Hooks con Husky

// Configurar lint-staged para archivos staged
// Crear conventional commits
// Verificar que hooks prevengan commits con errores
// Métricas de Calidad

// Usar herramientas como SonarQube
// Analizar complejidad ciclomática
// Revisar maintainability index
// Ejercicio: Configura un proyecto desde cero con todo el pipeline de calidad, incluyendo tests, linting, coverage, y pre-commit hooks.

// Requerimientos:
// # Calidad de código completa
// npm install --save-dev eslint @eslint/js eslint-config-standard \
//   prettier eslint-config-prettier eslint-plugin-prettier \
//   husky lint-staged @commitlint/cli @commitlint/config-conventional \
//   jest jest-environment-jsdom

// # Configurar husky
// npx husky install
// npm set-script prepare "husky install"

// # Crear hooks
// npx husky add .husky/pre-commit "npx lint-staged"
// npx husky add .husky/commit-msg "npx --no -- commitlint --edit \$1"
