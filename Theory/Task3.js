// Task 3: Code Coverage con Istanbul (8 minutos)
// Medición y análisis de cobertura de código para asegurar calidad de testing.

// 📊 ¿Qué es Code Coverage?
// Métricas de cobertura:

// 1. Line Coverage (Cobertura de Líneas):

// ❌ Sin cobertura
function isAdult(age) {
  return age >= 18; // Esta línea nunca se ejecuta en tests
}

// ✅ Con cobertura completa
describe('isAdult', () => {
  test('retorna true para edad >= 18', () => {
    expect(isAdult(18)).toBe(true);  // Cubre línea 2
    expect(isAdult(25)).toBe(true);  // Cubre línea 2
  });

  test('retorna false para edad < 18', () => {
    expect(isAdult(17)).toBe(false); // Cubre línea 2
    expect(isAdult(10)).toBe(false); // Cubre línea 2
  });
});
// 2. Branch Coverage (Cobertura de Ramas):

// ❌ Cobertura incompleta de branches
function getDiscount(price, isVip) {
  if (isVip) {           // Branch 1: true
    return price * 0.1;  // Esta línea se cubre
  } else {               // Branch 2: false (NUNCA se ejecuta)
    return 0;            // Esta línea NO se cubre
  }
}

// ✅ Cobertura completa
describe('getDiscount', () => {
  test('aplica descuento para VIP', () => {
    expect(getDiscount(100, true)).toBe(10); // Branch true
  });

  test('no aplica descuento para no VIP', () => {
    expect(getDiscount(100, false)).toBe(0); // Branch false
  });
});
// 3. Function Coverage:

// Porcentaje de funciones ejecutadas en tests
// Meta: >95% para funciones críticas
// 4. Statement Coverage:

// Porcentaje de statements ejecutados
// Meta: >90% general
// Concepto clave: Code coverage mide qué código se ejecuta en tests, no calidad de tests.

// 🎯 Configuración de Cobertura con Jest
// Configuración en jest.config.js:

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.js',           // Archivo de entrada
    '!src/**/*.test.{js,jsx,ts,tsx}', // Tests
    '!src/**/*.spec.{js,jsx,ts,tsx}', // Specs
    '!src/**/*.stories.{js,jsx,ts,tsx}', // Storybook
    '!src/**/types/**',        // Archivos de tipos
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',      // Consola
    'html',      // HTML detallado
    'lcov',      // Para CI/CD
    'json'       // Para herramientas externas
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    },
    // Umbrales específicos por archivo/carpeta
    'src/components/': {
      branches: 90,
      functions: 90
    },
    'src/utils/': {
      branches: 95,
      functions: 95
    }
  }
};
// Interpretación del reporte:

// =============================== Coverage summary ===============================
// Statements   : 85.5% ( 1062/1241 )
// Branches     : 79.2% ( 346/437 )
// Functions    : 88.9% ( 217/244 )
// Lines        : 85.7% ( 1056/1232 )
// =======================================================================
// Concepto clave: Cobertura es guía, no objetivo absoluto - calidad sobre cantidad.