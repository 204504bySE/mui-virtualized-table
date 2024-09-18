import {StorybookConfig} from "@storybook/react-webpack5";

const config: StorybookConfig = {
 stories: [
  '../stories/**/*.stories.@(jsx|tsx)',
 ],

 framework: {
  name: "@storybook/react-vite",
  options: {},
},

 docs: {},

 typescript: {
  reactDocgen: 'react-docgen-typescript'
 },
};
export default config;
