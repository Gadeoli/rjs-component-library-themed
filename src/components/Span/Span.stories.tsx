import React from 'react';
import { StoryFn, Meta } from "@storybook/react";
import Span from './Span';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Span",
} as Meta<typeof Span>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Span> = (args) => <Span {...args}>abc</Span>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    type: "danger",
    className: "",
    loading: false,
    style: {},
    onClick: () => {console.log('hey')}
}   

Default.argTypes = {
    id: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: ''
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
        type: {name: 'string', required: false},
        defaultValue: null,
        description: 'custom styles'
    }
}