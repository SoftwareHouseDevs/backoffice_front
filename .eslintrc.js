module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxt/eslint-config' // Configuração recomendada do Nuxt (inclui Vue, TypeScript)
  ],
  rules: {
    // --- Desativar regras específicas (se necessário) ---
    // 'vue/multi-word-component-names': 'off', // Permite nomes de componentes de uma palavra (ex: index.vue, default.vue)

    // --- Regras de Estilo (Exemplos - ajuste conforme preferência) ---
    'semi': ['error', 'never'], // Não usar ponto e vírgula
    'quotes': ['error', 'single'], // Usar aspas simples
    'comma-dangle': ['error', 'never'], // Não usar vírgula pendente
    'indent': ['error', 2], // Indentação de 2 espaços

    // --- Outras regras úteis ---
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // Avisar sobre variáveis não usadas (ignorar as com _)
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Permitir console em dev, avisar em prod
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'  // Permitir debugger em dev, avisar em prod
  }
};
