import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from './Button';
import App4Test from "../Test/App4Test";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Button",
    component: Button,
    argTypes: { handleClick: { action: "handleClick" } }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof App4Test> = (args) => <App4Test><Button {...args} /></App4Test>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Simple = Template.bind({});
Simple.args = {
    children: <span>abc</span>,
    onClick: () => {console.log('hey')}
}   