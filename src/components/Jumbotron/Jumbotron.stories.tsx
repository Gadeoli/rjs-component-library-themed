import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Jumbotron from './Jumbotron';
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Jumbotron",
} as Meta<typeof Jumbotron>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Jumbotron> = (args) => <Jumbotron {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    className: "",
    style: {},
    children: <Span>Jumbotron (Simple Colored Div) - Span</Span>
}   

Default.argTypes = {
    type: {
        type: {name: 'string', required: false},
        defaultValue: '',
        control: {
            type: 'select'
        },
        options: ['danger', 'primary', 'secondary', 'success', 'custom'],
        description: 'default primary'
    },
    color: {
        type: {name: 'string', required: false},
        defaultValue: '#3A6F43',
        description: 'only applyed when type = `custom`'
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
    },
    children: {
        description: 'ReactNode'
    }
}