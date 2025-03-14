export default {
  'package.json': 'sort-package-json',
  '*': [
    'prettier --write --ignore-unknown',
    'autocorrect --fix',
    'cspell lint --no-progress --relative --no-must-find-files --dot --gitignore',
  ],
  // '*.ts': 'bash -c tsc --noEmit',
  // '*.{js,mjs,cjs,ts}': 'eslint --fix',
  '*.css': 'stylelint --fix',
  '*.html': 'htmlhint',
  '*.md': 'markdownlint --dot --fix',
};
