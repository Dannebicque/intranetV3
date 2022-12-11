// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/.eslintrc.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/12/2022 10:29

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:cypress/recommended',
  ],
  plugins: [
    'cypress',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: 0,
    'no-underscore-dangle': 0,
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',
  },
}
