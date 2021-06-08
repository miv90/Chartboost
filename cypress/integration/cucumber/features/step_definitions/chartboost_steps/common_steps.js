import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CssObjects from '../../../../../support/PageObjects/CssObjects';

const cssObjects = new CssObjects()

// GIVEN
Given('(the user )goes to the page {string}', function (page) {
    cy.visit(page);
    // Verify that the initial loading screen no longer appears
    cy.waitLoadingScreen();
    // Validate that the end card is hidden
    cssObjects.getEndCard()
    .should('have.attr', 'class')
    .and('contains', 'hidden')
})

Given('(the user )goes to the home page', function (page) {
    cy.visit(Cypress.env('url'));
    // Validate that after 5 seconds the skip button appears
    cy.waitSkipButton();
    cssObjects.getSkipButton()
    .should('have.attr', 'class')
    .and('equal', 'skip-btn fade-in')
    // Verify that the initial loading screen no longer appears
    cy.waitLoadingScreen();
    // Validate that the end card is hidden
    cssObjects.getEndCard()
    .should('have.attr', 'class')
    .and('contains', 'hidden')
})


// WHEN
When ('(the user )pauses the video',  () => {
    cy.wait(5000);
    cy.window().should(win => {
        win.Chartboost.EventHandler.handleNativeEvent('onBackground')
    })
})

When ('(the user )clicks to the skip button',  () => {
    cssObjects.getSkipButton().click();
})


// THEN
Then('(the user )should see the pause button',  () => {
    cssObjects.getPlayVideoButton()
    .should('have.attr', 'class')
    .and('equal', 'centrified')
})

Then ('the video should be playing',  () => {
    cy.validateTheVideo();
    cy.wait(1500);
})

Then('the end card is displayed',  () => {
    cy.wait(1500);
    cssObjects.getEndCard()
    .should('have.attr', 'class')
    .and('equal', 'full-size-element')
})

// AND
And ('(the user )makes a call to resume the video',  () => {
    cy.window().should(win => {
        win.Chartboost.EventHandler.handleNativeEvent('onForeground')
    })
})


And ('(the user )waits for {string} seconds', function (seconds) {
    let milliseconds = (Number(seconds)*1000)
    cy.log(milliseconds)
    cy.wait(milliseconds);
})

And ('the close button must be visible',  () => {
    cssObjects.getCloseButton()
    .should('be.visible')
    .should('have.attr', 'class')
    .and('equal', 'screen-close-btn fade-in');
})

And ('(the user )clicks to the close button',  () => {
    cssObjects.getCloseButton().click();
})

