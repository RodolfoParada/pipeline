// Task 1: Debugging Avanzado con Chrome DevTools (8 minutos)
// Técnicas profesionales para debugging eficiente en aplicaciones JavaScript modernas.

// 🔍 Chrome DevTools Mastery
// Paneles esenciales para debugging:

// 1. Console Panel:

// Logging inteligente
console.log('Usuario:', user); // Información general
console.warn('Advertencia:', message); // Advertencias
console.error('Error:', error); // Errores
console.table(users); // Arrays como tabla
console.time('Operation'); // Medir tiempo
// ... código ...
console.timeEnd('Operation'); // Resultado: Operation: 125.23ms
// 2. Sources Panel - Debugging Interactivo:

// Breakpoints estratégicos
function processUser(user) {
  debugger; // Breakpoint automático

  if (!user.name) {
    console.error('Usuario sin nombre:', user);
    return false;
  }

  // Conditional breakpoint: user.id === '123'
  validateUser(user);
  saveUser(user);

  return true;
}
// 3. Network Panel - Debugging de APIs:

// XHR/Fetch requests: Ver requests HTTP
// Response codes: Identificar errores 4xx/5xx
// Timing: Cuellos de botella en red
// Payload: Verificar datos enviados/recibidos
// 4. Application Panel - Estado de la App:

// Local Storage: Persistencia de datos
// Session Storage: Datos de sesión
// Cookies: Gestión de autenticación
// Service Workers: Caché y offline
// Concepto clave: Chrome DevTools es indispensable para debugging moderno.

// 🎯 Técnicas de Debugging Profesional
// Blackboxing para librerías:

// En DevTools Console
// Ignorar código de node_modules
// Settings → Blackboxing → Add pattern: node_modules

// O programáticamente
// Ignorar archivos específicos
function debugOnlyMyCode() {
  // Solo debuggear código propio
  if (new Error().stack.includes('node_modules')) {
    return;
  }
  debugger;
}
// Conditional Breakpoints:

// En Sources panel:
// Right-click en línea → Add conditional breakpoint
// Condition: user.role === 'admin' && action === 'delete'

// O en código:
if (user.role === 'admin' && action === 'delete') {
  debugger; // Solo para admins eliminando
}
// Watch Expressions:

// Expressions para monitorear en tiempo real:
// user.name
// cart.items.length
// api.isLoading
// new Date().toLocaleTimeString()
// Concepto clave: Debugging efectivo combina herramientas, estrategia y paciencia.
