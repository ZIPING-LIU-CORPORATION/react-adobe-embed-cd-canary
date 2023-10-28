import '@testing-library/cypress/add-commands';




describe("Check that the canary accessed deployed page is the deployment from the lastest code deployment in react-adobe-embed", () => {

    before(() => {

        cy.clearLocalStorage();
        cy.clearCookies();



    })

    it("Should visit the deployed canary static page", () => {

        cy.visit(Cypress.env("BASE_URL") + Cypress.env("DEFAULT_PATH"));
    
        cy.findByTestId('test-route').contains('Test').scrollIntoView({
          duration: 250
        });
    });



    it("should visit the deployed canary static page with verification that the page has the latest code deployment", () => {
        cy.visit(Cypress.env("BASE_URL") + Cypress.env("DEFAULT_PATH"));
        cy.findByTestId('test-route').contains('Test').scrollIntoView({
          duration: 500
        });
        cy.get('meta[property="article:modified_time"]'
            ).should('have.attr', 'content', Cypress.env("DATEMODIFIED_CODE_DEPLOYED"));
    })
});