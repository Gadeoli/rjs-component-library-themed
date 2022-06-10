import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GlobalStyle from './GlobalStyle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/GlobalStyle",
} as ComponentMeta<typeof GlobalStyle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof App4Test> = (args) => <App4Test><GlobalStyle {...args} /></App4Test>;
const Template: ComponentStory<typeof GlobalStyle> = (args) => <GlobalStyle {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {}   

Default.argTypes = {}