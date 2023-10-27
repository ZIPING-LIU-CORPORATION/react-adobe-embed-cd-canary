import '@testing-library/cypress/add-commands';

describe("Basic Configured Testing of Usage with Rendering PDF that is same in testing paths as the unit tests", () => {
  before(() => {
    //set the viewport to 1920 x 1080
    cy.viewport(1920, 1080);

  })

  it("Should visit the deployed canary static page", () => {

    cy.visit(Cypress.env("BASE_URL") + Cypress.env("DEFAULT_PATH"));

    cy.findByTestId('test-route').contains('Test').scrollIntoView({
      duration: 1000
    });


  });

  it("Should visit the deployed canary, then navigate via the header to the home page", () => {
    cy.visit(Cypress.env("BASE_URL") + Cypress.env("DEFAULT_PATH"));

    cy.findByTestId('test-route').contains('Test').scrollIntoView();

    cy.get('#app > header > nav > div > div > div > ul > li:nth-child(2) > a').contains('Home').scrollIntoView({
      duration: 500,
    }).click();


    cy.location(
      "pathname"
    ).hash().should("eq", "#/home");

    cy.findByTestId("react-adobe-embed-handholding-adobe-api-loading-idiocy-initial").should('exist').scrollIntoView({
      duration: 2000,
    })
  
  });

  it('Should visit deployed canary, and renavigate via header to the home page to trigger a nested-rerender cycle of the react component', () => {
    cy.log("Visit the default route of the deployed canary page using the latest react adobe component, that is default due to not using the react adobe embed component");
    cy.visit(Cypress.env("BASE_URL") + Cypress.env("DEFAULT_PATH"));
    cy.findByTestId('test-route').contains('Test').scrollIntoView();
    cy.log("Navigating to Home react route, using React Link which is a view that contains a react-adobe-embed component");
    cy.get('#app > header > nav > div > div > div > ul > li:nth-child(2) > a').contains('Home').scrollIntoView({
      duration: 5000,
    }).click();
    cy.location(
      "pathname"
    ).hash().should("eq", "#/home");
    cy.log("Navigating back to the default path, which is just a static page without any react-adobe-embed components");
    cy.get('#app > header > nav > div > div > div > ul > li:nth-child(1) > a').contains('Test').scrollIntoView({
      duration: 3000,
    }).click();
    cy.log("Checking for correct route change after clicking Test");
    cy.location(
      "pathname"
    ).hash().should("eq", "#/test");
    cy.get('#app > header > nav > div > div > div > ul > li:nth-child(2) > a').contains('Home').scrollIntoView({
      duration: 1000,
    }).click();

    cy.location(
      "pathname"
    ).hash().should("eq", "#/home");



    cy.log("Check that the react component has re-rendered through the setting of a data-testid  attribute showcasing the react component noticing it render, following an already known initial render");
    cy.findByTestId("react-adobe-embed-handholding-adobe-api-loading-idiocy-reused").should('exist').scrollIntoView({
      duration: 1000,
    })

  }
  );
});