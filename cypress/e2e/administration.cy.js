// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/cypress/e2e/administration.cy.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/02/2024 10:05

describe('Partie Administration', () => {
  beforeEach(() => {
    cy.login('annebi01')
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

  it('Originaux', () => {
    cy.visit('/originaux')
    cy.contains('Documents')
  })

  it('Administration', () => {
    cy.visit('/administration')
    cy.contains('Administration')
  })
})
