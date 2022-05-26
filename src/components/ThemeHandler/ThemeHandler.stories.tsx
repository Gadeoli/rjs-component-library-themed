import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ThemeHandler from './ThemeHandler';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/ThemeHandler",
    component: ThemeHandler,
} as ComponentMeta<typeof ThemeHandler>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemeHandler> = (args) => <ThemeHandler {...args}>abc</ThemeHandler>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});