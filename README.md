#### 1. crea carpeta Theory para guardar las tasks. 
#### 2. crea carpeta Practice para guardar el ejercicio práctico.
#### 3. desarrollo de la actividad:
  #### instalción de dependencias.
  ```
  npm install --save-dev eslint @eslint/js eslint-config-standard \
  prettier eslint-config-prettier eslint-plugin-prettier \
  eslint-plugin-react eslint-plugin-react-hooks
  
  ```
  ```
  npx eslint --init
  ```

  ```
  npm install --save-dev jest jest-environment-jsdom
  ```
  ``` 
  npm install --save-dev husky lint-staged \
  @commitlint/cli @commitlint/config-conventional
  ```

   ```husky
   npx husky install
   npm set-script prepare "husky install"
   npm run prepare
   ```
   ```Hooks
   npx husky add .husky/pre-commit "npx lint-staged"
   npx husky add .husky/commit-msg "npx --no -- commitlint --edit \$1"
   ```
   ```
   npm install --save-dev jest jest-environment-jsdom
   ```



   # Pipeline de Calidad de Código

Este proyecto implementa un pipeline completo de calidad:

## 🧪 Testing
- Jest
- Code coverage con umbrales mínimos (80%)

## 🧹 Linting
- ESLint
- Prettier
- Reglas estándar

## 🪝 Pre-commit Hooks
- Husky
- lint-staged
- Commitlint (conventional commits)

## Scripts
```bash
npm test
npm run test:coverage
npx eslint .
```

#### Objetivo 
    #### Garantizar calidad, mantenibilidad y prevención de errores antes del merge.


    #### Levantar el programa
    ```
    npm test
    ```