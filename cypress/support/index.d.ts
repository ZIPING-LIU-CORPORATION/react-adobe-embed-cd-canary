
/// <reference types="cypress" />
declare namespace Cypress {
    export interface Chainable {
        getAdobeDCGlobal(): Chainable<any>;
        addEventListenerAdobeReady(): any;
    }
}