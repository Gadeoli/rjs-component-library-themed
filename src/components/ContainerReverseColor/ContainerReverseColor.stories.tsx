import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ContainerReverseColor from './ContainerReverseColor';
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/ContainerReverseColor",
} as Meta<typeof ContainerReverseColor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ContainerReverseColor> = (args) => <ContainerReverseColor {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    className: "",
    children: <Span>Container Reverse Color(Simple Div) - Span</Span>
}   

Default.argTypes = {
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: ''
    },
    children: {
        description: 'ReactNode'
    }
}