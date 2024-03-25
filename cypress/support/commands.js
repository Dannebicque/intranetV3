// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/cypress/support/commands.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/02/2024 09:57

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password = 'test') => {
  cy.session(
    username,
    () => {
      cy.visit('/connexion')
      cy.contains('login')
      cy.get('#username').type(username)
      cy.get('#password').type(password)
      cy.get('button[name="connexionHorsUrca"]').click()
      cy.contains('Intranet du département MMI')
    },
    {
      validate: () => {
        cy.getCookie('PHPSESSID').should('exist')
      },
    },
  )
})
