// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/cypress.config.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/02/2024 09:46

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'd3knxr',
  e2e: {
    baseUrl: 'https://intranetv3:8890/index.php/fr',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
