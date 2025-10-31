import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Container from './Container';
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Container",
} as Meta<typeof Container>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Container> = (args) => <Container {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    className: "",
    style: {},
    children: <Span>Container (Simple Div) - Span</Span>
}   

Default.argTypes = {
    type: {
        type: {name: 'string', required: false},
        defaultValue: '',
        control: {
            type: 'select'
        },
        options: ['danger', 'primary', 'secondary', 'success'],
        description: ''
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'full;'
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