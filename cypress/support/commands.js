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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("waitLoadingScreen", () => {
    cy.get('#loading-screen')
    .should('have.attr', 'class')
    .and('contains', 'hidden')
})

Cypress.Commands.add("waitSkipButton", () => {
    let i = 0;
    do {
        cy.get('#skip-button')
        .should('have.attr', 'class')
        .and('contains', 'hidden')
        cy.wait(1000);
        i++;
    } while (i<5)
})

Cypress.Commands.add("validateTheVideo", () => {
    let i = 0;
    do {
        // Validate that the video is visible and running
        cy.get('#video-player')
        .should('be.visible')
        .should('have.attr', 'preload')
        .and('equal', 'auto');
        // Validate that the resume video button is hidden
        cy.get('#play-button')
        .should('have.attr', 'class')
        .and('contains', 'hidden');
        // Validate that the end card is hidden
        cy.get('#landing-page')
        .should('have.attr', 'class')
        .and('contains', 'hidden');
        cy.wait(1000);
        i++;
    } while (i<3)
})