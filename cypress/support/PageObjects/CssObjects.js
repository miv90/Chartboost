class CssObjects {
    getLoadingScreen() {
        return cy.get('#loading-screen') 
    }

    getVideoCards() {
        return cy.get('#video-player') 
    }

    getPlayVideoButton() {
        return cy.get('#play-button') 
    }

    getSkipButton() {
        return cy.get('#skip-button') 
    }   

    getEndCard() {
        return cy.get('#landing-page') 
    }  

    getCloseButton() {
        return cy.get('#close-button')
    }  

}
export default CssObjects;