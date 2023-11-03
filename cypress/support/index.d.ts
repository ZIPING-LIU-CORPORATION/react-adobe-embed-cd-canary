/// <reference types="cypress" />


declare namespace Cypress {
  export interface Chainable {
 
      'task': {
          cypressLogToNodeConsole(value: {
              key: string,
              value: any
          }): boolean
      }
  }
}