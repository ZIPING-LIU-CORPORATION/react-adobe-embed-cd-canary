import '@testing-library/cypress/add-commands';

describe("Testing Lightbox PDF Rendering Configuration", () => {

    beforeEach(() => {
        cy.viewport(1920, 1080);
    });
    it("Should visit the deployed canary static page", () => {
        cy.visit(Cypress.env("BASE_URL") + Cypress.env("DEFAULT_PATH"));
        cy.findByTestId('test-link').contains('Test').scrollIntoView({
            duration: 1000
        });

    });

    it("Should visit the deployed canary, then navigate via the header to the lightbox page route", () => {
        cy.visit(Cypress.env("BASE_URL") + Cypress.env("DEFAULT_PATH"));
        cy.findByTestId('test-link').click();
        cy.contains('Lightbox').click();
        cy.addEventListenerAdobeReady().then((ready: any) => {
            cy.spy(ready.AdobeDC, 'View').as('adobeDCSpy');
        } );
        //listen for network
        cy.intercept('POST', 'https://viewlicense.adobe.io/viewsdklicense/jwt').as('getLicense');
        cy.contains('Toggle Light Box').click();

        
        cy.wait('@getLicense',{
            timeout: 10000,
        }).then((_interception: any) => {
        
            cy.get('@adobeDCSpy').should('be.calledOnce');
        });
        // go to previous page
        cy.go('back');
        cy.location(
            "pathname"
        ).hash().should("eq", "#/test");
        cy.wait(1000); // adding wait only the lengthen the test duration 
        cy.go('forward');
        cy.location(
            "pathname"
        ).hash().should("eq", "#/light");
        cy.contains('Toggle Light Box').should('be.visible');
    });
});