
      const { defineConfig } = require('cypress');
      module.exports = defineConfig({
          reporter: 'cypress-mochawesome-reporter',
          e2e: {
              baseUrl: 'https://qaarena.online',
              experimentalWebKitSupport: true,
              setupNodeEvents(on, config) {
                  require('cypress-mochawesome-reporter/plugin')(on);
              }
          }
      });
    