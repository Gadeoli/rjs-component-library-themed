import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import P from './P';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/P",
} as Meta<typeof P>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof P> = (args) => <P {...args}>abc</P>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    type: "danger",
    loading: false,
    className: "",
    style: {},
    onClick: () => {console.log('hey')}
}   

Default.argTypes = {
    type: {
        type: {name: 'string', required: false},
        defaultValue: 'primary',
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