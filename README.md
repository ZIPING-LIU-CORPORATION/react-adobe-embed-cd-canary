# React-Adobe-Embed-CD-Canary

## Intro

[![Cypress E2E Testing of Deployed React Adobe Embed Component as a Heartbeat Canary](https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed-cd-canary/actions/workflows/cypress-canary.yaml/badge.svg)](https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed-cd-canary/actions/workflows/cypress-canary.yaml)
 - This status badge icon is based on the [github workflow within](https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed-cd-canary/blob/main/.github/workflows/cypress-canary.yaml#L8) which schedules the running of the cypress specs at a specified interval, thus running the tests indefinitely in order to maintain a heartbeat status.
   - The cypress tests are also ran whenever there is a code deployment on the [react-adobe-embed](https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed) repository, via a repository dispatch action intiated from react-adobe-embed.
  
The cypress specs are written as end to end tests that test the full functionality of the react-adobe-embed component through an entire usecase. End to End testing is necessitated by the following:
 - React Adobe Embed depends on an external service api, adobe embed api, and thus requires full testing to encorporate testing to include the dependent service api
 - The external service api is prone to code changes that may result in incompatibility issues with the react-adobe-embed component
 - Integration tests mock out the external api
   - [![wakatime](https://wakatime.com/badge/user/e012350f-8b4a-4ec4-ae89-56e558bfec5d/project/91c0617a-04ed-419d-9221-d5086d1bfbf6.svg)](https://wakatime.com/badge/user/e012350f-8b4a-4ec4-ae89-56e558bfec5d/project/91c0617a-04ed-419d-9221-d5086d1bfbf6)  ![actionworfklow](https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed/actions/workflows/main.yml/badge.svg)
  

## Tests
  - base.cy.ts
    - This test tests for the most basic usecase with the react-adobe-embed component, in which checks that the adobe pdf is rendered properly as well as re-rendered properly given that the react-adobe-embed requires proper handling to trigger re-rerenders as a custom react component.
  - push.cy.ts
    - This test runs only when there is a new code push on react-adobe-embed's repository, and checks that the loaded testing page contains the latest code deployment from react-adobe-embed. This is done to ensure that whenever there is a new code deployment on react-adobe-embed, that the deployment is viewable by the end to end testing canary as well, to ensure a synchronous handling in maintaining a continuous integration of code with continuous deployments.

For more information regarding the testing endpoint, or any other info regarding the use of this canary end to end testing as scheduled and triggered workflows, please visit the [react-adobe-embed repository]([https://](https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed)https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed) and be sure to also check out its workflows that not only trigger workflows in this repository, but also deploys a testing endpoint through github static pages. `Notice: The implementation of continuous deployment and integrated testing development pipeline is a distinctive feature offered by Github's enterprise-level services. It is important to clarify that the continuous deployment workflows and implementations of continuous deployment are not in any way associated with or referenced to Github's own enterprise-level services. Github's enterprise-level services do not have any rights or permissions to utilize the code within or related repositories as a reference, inspiration, or for use in its "continuous deployment" services.`
 

