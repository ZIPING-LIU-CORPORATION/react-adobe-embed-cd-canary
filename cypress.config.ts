
import { defineConfig } from "cypress";
import path from 'path';
import tasks from './cypress/plugins/tasks';

import configE from 'dotenv';

/**
 * Given undefined expected github secret,
 * environment then assumed as local development
 */
if(process.env.CYPRESS_RECORD_KEY === undefined) {
    configE.config();
} 

const nodeEvents = (on: Cypress.PluginEvents, config: Cypress.ConfigOptions<any>) => {
    // implement node event listeners here


    config.projectId = process.env.CYPRESS_PROJECT_ID;

 
    config.retries = 3;
    on('task', tasks);
}

const config = defineConfig({
 
    
    fixturesFolder: false,
    video: true,

    videoCompression: false,
    setupNodeEvents: nodeEvents,

    
    e2e: {
        env: {
            BASE_URL: 'https://ziping-liu-corporation.github.io/react-adobe-embed',
            DEFAULT_PATH: "#/test",
            DATEMODIFIED_CODE_DEPLOYED:  process.env.DATEMODIFIED_CODE_DEPLOYED,
            CYPRESS_BASE_URL: 'https://ziping-liu-corporation.github.io/react-adobe-embed',
        },
    
        "waitForAnimations": true,
        video: true,
        videoCompression: false,
        projectId:  process.env.CYPRESS_PROJECT_ID,
        setupNodeEvents: nodeEvents,
        
        supportFile: path.resolve(__dirname, 'cypress/support/commands.ts'),
        
    },
});


export default config;