module.exports = {
  features: {
    gitignore: true,
    gitattributes: true,
    editorconfig: true,
    prettier: {
      patterns: ['**'],
    },
    tsc: {
      patterns: ['**/*.ts'],
    },
    eslint: {
      patterns: ['**/*.{js,mjs,cjs,ts}'],
      // vitestPatterns: ['**/*.test.ts'],
    },
    markdownlint: {
      patterns: ['**/*.md'],
    },
    cspell: {
      patterns: ['**'],
      ignorePatterns: ['mac/'],
    },
    'sort-package-json': true,
    commitlint: true,
    commitizen: true,
    'lint-staged': true,
    husky: true,
  },
};
