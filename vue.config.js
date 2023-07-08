const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                @import "./src/assets/styles/variables.scss";
                @import "./src/assets/styles/mixins.scss";
                @import "./src/assets/styles/breakpoints.scss";
            `,
      },
    },
  },
});
