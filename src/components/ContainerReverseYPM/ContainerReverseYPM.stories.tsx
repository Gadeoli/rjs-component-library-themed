import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ContainerReverseYPM from './ContainerReverseYPM';
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/ContainerReverseYPM",
} as Meta<typeof ContainerReverseYPM>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ContainerReverseYPM> = (args) => <ContainerReverseYPM {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    className: "",
    children: <Span>Container (Simple Div) - Span</Span>
}   

Default.argTypes = {
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'full;'
    },
    children: {
        description: 'ReactNode'
    }
}