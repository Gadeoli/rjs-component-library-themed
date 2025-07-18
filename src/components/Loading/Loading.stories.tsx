import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Loading from './Loading';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Loading",
} as Meta<typeof Loading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Loading> = (args) => <Loading {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});
export const ExampleTwo = Template.bind({});

Default.args = {
    text: "...",
    timeout: 500,
    type: "danger",
    cursor: false,
    className: "",
    style: {}
}   

ExampleTwo.args = {
    text: "Can be a text writer too : )",
    timeout: 150,
    type: "danger",
    cursor: true,
    className: "",
    style: {}
}   

Default.argTypes = {
    text: {
        type: {name: 'string', required: true},
        defaultValue: '',
        description: 'The content that will be written/rewritten'
    },
    align: {
        type: {name: 'string', required: false},
        defaultValue: 'center',
        description: ''
    },
    timeout: {
        type: {name: 'number', required: false},
        defaultValue: 500,
        description: 'time between effects'
    },
    cursor: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'A cursor after the text'
    },
    type: {
        type: {name: 'string', required: false},
        defaultValue: 'primary',
        control: {
            type: 'select'
        },
        options: ['danger', 'link', 'primary', 'secondary', 'success'],
        description: ''
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: ''
    },
    style: {
        table: { type: { summary: 'any'} },
        defaultValue: null,
        description: 'custom styles. This field is not required'
    }
}