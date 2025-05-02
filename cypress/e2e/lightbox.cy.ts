import '@testing-library/cypress/add-commands';

describe("Testing Lightbox PDF Rendering Configuration", () => {

    beforeEach(() => {
        cy.viewport(1920, 1080);
    });
    it("Should visit the deployed canary lightbox static page", () => {
        cy.visit(Cypress.env("BASE_URL") + '#/light');
        cy.findByTestId('test-link').contains('Test').scrollIntoView({
            duration: 1000
        });

    });

    it("Should visit the deployed canary lightbox page and toggle pdf view", () => {
        cy.visit(Cypress.env("BASE_URL") +'#/light');
        
        cy.wait(5000);
       
        //listen for network
        cy.contains('Toggle Light Box').click();
        

       
        cy.get('iframe#iframe-pdf-div').should('exist');
     
    });
});