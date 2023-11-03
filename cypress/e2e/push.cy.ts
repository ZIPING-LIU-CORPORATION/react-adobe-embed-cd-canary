import '@testing-library/cypress/add-commands';




describe("Check that the canary accessed deployed page is the deployment from the lastest code deployment in react-adobe-embed", () => {

    before(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
    })

    it("Should visit the deployed canary static page", () => {

        cy.visit(Cypress.env("BASE_URL") + Cypress.env("DEFAULT_PATH"));
    
        cy.findByTestId('test-link').contains('Test').scrollIntoView({
          duration: 250
        });
    });



    it("should visit the deployed canary static page with verification that the page has the latest code deployment", () => {
      cy.task('logToConsole', {
        message: "should visit the deployed canary static page with verification that the page has the latest code deployment",
        header: "Starting Test:",
      });   
        

        cy.visit(Cypress.env("BASE_URL") + Cypress.env("DEFAULT_PATH"));
        cy.findByTestId('test-link').contains('Test').scrollIntoView({
          duration: 500
        });
        

       
        cy.get('meta[property="article:modified_time"]'
            ).then(($meta) => {
              const modifiedTimeValue = $meta.attr('content');
              cy.task('logToConsole', {
                message: `Comparing date modified tag found with value: ${modifiedTimeValue} to the date modified value from the code deployment: ${Cypress.env("DATEMODIFIED_CODE_DEPLOYED")}`,
              })
            })
        cy.get('meta[property="article:modified_time"]'
            ).should('have.attr', 'content', Cypress.env("DATEMODIFIED_CODE_DEPLOYED"));
    })
});