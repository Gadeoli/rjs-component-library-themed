import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TitleH1 from './TitleH1';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/TitleH1",
} as Meta<typeof TitleH1>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof TitleH1> = (args) => <TitleH1 {...args}>Main Title</TitleH1>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    type: "primary",
    className: "",
    style: {},
    loading: false
}   

Default.argTypes = {
    type: {
        type: {name: 'string', required: false},
        defaultValue: '',
        control: {
            type: 'select'
        },
        options: ['danger', 'link', 'primary', 'secondary', 'success'],
        description: ''
    },
    loading: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Loading effect, if true add a class: loading-effect to component'
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