import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CardContent from './CardContent';
import Span from "../Span";
import Card from "../Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/CardContent",
} as Meta<typeof CardContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CardContent> = (args) => <Card><CardContent {...args} /></Card>

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    className: "",
    style: {},
    children: <Span>Card - Card Content (Simple Div with padding) - Span</Span>
}   

Default.argTypes = {
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
    children: {
        description: 'ReactNode'
    }
}