// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/cypress/e2e/login.cy.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/10/2022 21:46

describe('Access to login page', () => {
  it('Access to login page', () => {
    cy.visit('/')
    cy.contains('login')
  })
})

describe('Try to login', () => {
  it('Try to login', () => {
    cy.visit('/connexion')
    cy.contains('login')
    cy.get('#username').type('annebi01')
    cy.get('#password').type('test')
    cy.get('button[name="connexionHorsUrca"]').click()
    cy.contains('Intranet du département MMI')
  })
})
