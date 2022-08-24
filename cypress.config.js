const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 50000,
  e2e: {
    baseUrl: "https://novus.zakaz.ua/en",
    watchForFileChanges: false
  },
});
