/// <reference types="cypress" />

Cypress.Commands.add('getAdobeDCGlobal', () => {

    cy.window().then((win) => {
        cy.log('win', win);
        cy.log('win.AdobeDC', (win as any).AdobeDC);
        const adobeDC = (win as any).AdobeDC;

        return cy.wrap(adobeDC);
    }).as('adobeDC');


    return cy.get('@adobeDC');


})

Cypress.Commands.add('addEventListenerAdobeReady', () => {


 
        // Listen for global even adobe_dc_view_sdk.ready
      cy.window().then((win) => {
          
           cy.wrap(new Cypress.Promise((resolve, reject) => {
                win.addEventListener('adobe_dc_view_sdk.ready', () => {


                
                 resolve(win);



            }
            )
        })).as('adobeDCReady');
        })
 


 

    return cy.get('@adobeDCReady');




})
