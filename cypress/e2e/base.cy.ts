import '@testing-library/cypress/add-commands';

describe("Basic Configured Testing of Usage with Rendering PDF that is same in testing paths as the unit tests", () => {
  beforeEach(() => {
    //set the viewport to 1920 x 1080
    cy.viewport(1920, 1080);

  })

  it("Should visit the deployed canary static page", () => {

    cy.visit(Cypress.env("BASE_URL") + Cypress.env("DEFAULT_PATH"));

    cy.findByTestId('test-link').contains('Test').scrollIntoView({
      duration: 1000
    });


  });

  it("Should visit the deployed canary, then navigate via the header to the home page", () => {
    cy.visit(Cypress.env("BASE_URL") + Cypress.env("DEFAULT_PATH"));

    cy.findByTestId('test-link').contains('Test').scrollIntoView();

    cy.findByTestId('test-link').contains('Test').scrollIntoView().click();

    cy.location(
      "pathname"
    ).hash().should("eq", "#/home");

    cy.findByTestId("react-adobe-embed-handholding-adobe-api-loading-idiocy-initial").should('exist').scrollIntoView({
      duration: 2000,
    })

  });

  it('Should visit deployed canary, and renavigate via header to the home page to trigger a nested-rerender cycle of the react component', () => {
    cy.task('logToConsole', {
      message: "Should visit deployed canary, and renavigate via header to the home page to trigger a nested-rerender cycle of the react component",
      header: "Starting Test:",
    });
    cy.task('logToConsole', {
    message:'Visit the default route of the deployed canary page using the latest react adobe component, that is default due to not using the react adobe embed component' 
    });
    cy.log("Visit the default route of the deployed canary page using the latest react adobe component, that is default due to not using the react adobe embed component");
    cy.visit(Cypress.env("BASE_URL") + Cypress.env("DEFAULT_PATH"));
    cy.findByTestId('test-link').contains('Test').scrollIntoView();
    cy.log("Navigating to Home react route, using React Link which is a view that contains a react-adobe-embed component");
    cy.task('logToConsole', {
      message:  'Navigating to Home react route, using React Link which is a view that contains a react-adobe-embed component',
      header: (new Date()).toLocaleTimeString(),
    });
    cy.findByTestId('test-link').contains('Test').scrollIntoView({
      duration: 5000,
    }).click();
    cy.location(
      "pathname"
    ).hash().should("eq", "#/home");
    cy.log("Navigating back to the default path, which is just a static page without any react-adobe-embed components");
    cy.task('logToConsole', {
      message:  'Navigating back to the default path, which is just a static page without any react-adobe-embed components',
      header: (new Date()).toLocaleTimeString(),
    });

    cy.findByTestId('home-link').contains('Home').scrollIntoView({
      duration: 3000,
    }).click();
    cy.log("Checking for correct route change after clicking Test");
    cy.task('logToConsole', {
      message:  'Checking for correct route change after clicking Test',
      header: (new Date()).toLocaleTimeString(),
    });
    cy.location(
      "pathname"
    ).hash().should("eq", "#/test");
    cy.findByTestId('test-link').contains('Test').scrollIntoView({
      duration: 1000,
    }).click();

    cy.location(
      "pathname"
    ).hash().should("eq", "#/home");



    cy.log("Check that the react component has re-rendered through the setting of a data-testid  attribute showcasing the react component noticing it render, following an already known initial render");
    cy.task('logToConsole', {
      message:  'Check that the react component has re-rendered through the setting of a data-testid  attribute showcasing the react component noticing it render, following an already known initial render',
      header: (new Date()).toLocaleTimeString(),
    });
    cy.findByTestId("react-adobe-embed-handholding-adobe-api-loading-idiocy-reused").should('exist').scrollIntoView({
      duration: 1000,
    })

  }
  );
});