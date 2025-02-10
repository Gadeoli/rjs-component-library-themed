import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Button",
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    type: "primary",
    className: "",
    loading: false,
    disabled: false,
    style: {},
    onClick: () => {console.log('hey')},
    children: 'abc'
}   

Default.argTypes = {
    type: {
        type: {name: 'string', required: false},
        defaultValue: 'primary',
        description: 'clean | danger | link | primary | secondary | success'
    },
    disabled: {
        type: {name: 'boolean', required: false},
        defaultValue: '',
        description: 'disable click and add style effect',
        size: { control: 'radio' }
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'full;'
    },
    style: {
        type: {name: 'string', required: false},
        defaultValue: null,
        description: 'custom styles'
    },
    onClick: {
        description: 'function to run on onclick event'
    },
    children: {
        description: 'ReactNode'
    },
    loading: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Loading effect, if true add a class: loading-effect to component'
    },
}