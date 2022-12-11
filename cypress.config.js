// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/cypress.config.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/12/2022 10:29

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'd3knxr',
  e2e: {
    baseUrl: 'http://newintranet:8888/index.php/fr',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
