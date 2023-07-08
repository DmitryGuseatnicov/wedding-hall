import type { StorybookConfig } from "@storybook/vue3-webpack5";
const custom = require('../node_modules/@vue/cli-service/webpack.config.js');
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config) => {
    return { 
      ...config, 
      module: { 
        ...config.module, rules: custom.module.rules, 
      },
      resolve: {
        ...config.resolve,
        ...custom.resolve,
        alias: {
          ...config.resolve.alias,
          ...custom.resolve.alias,
        }
      } 
    };
  },
};
export default config;
