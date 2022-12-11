// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/cypress/e2e/dashboard.cy.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/10/2022 22:37

describe('Dashboard', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.login()
  })

  it('Agenda', () => {
    cy.visit('/agenda')
    cy.contains('Agenda / Emploi du temps')
  })

  it('Trombinoscope', () => {
    cy.visit('/trombinoscope')
    cy.contains('Trombinoscope')
  })

  it('Applications', () => {
    cy.visit('/application')
    cy.contains('Applications')
  })

  it('Documents', () => {
    cy.visit('/document')
    cy.contains('Documents')
  })
})
