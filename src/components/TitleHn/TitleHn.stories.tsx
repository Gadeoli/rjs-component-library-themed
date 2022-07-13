import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TitleHn from './TitleHn';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/TitleHn",
} as ComponentMeta<typeof TitleHn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TitleHn> = (args) => <TitleHn {...args}>Title N</TitleHn>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    n: 1,
    type: undefined,
    className: "",
    style: {}
}   

Default.argTypes = {
    n: {
        type: {name: 'number', required: false},
        defaultValue: 1,
        description: "font-size is equal: <br> n = 1 theme.fontSize.subtitle x 1; <br> n = 2 theme.fontSize.subtitle x 0.9;  <br>... <br> n = 9 theme.fontSize.subtitle x 0.1"
    },
    type: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'danger | link | primary | secondary | success'
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: ''
    },
    style: {
        type: {name: 'other', required: false},
        defaultValue: null,
        description: 'custom styles'
    }
}