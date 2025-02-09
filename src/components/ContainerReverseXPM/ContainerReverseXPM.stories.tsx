import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ContainerReverseXPM from './ContainerReverseXPM';
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/ContainerReverseXPM",
} as Meta<typeof ContainerReverseXPM>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ContainerReverseXPM> = (args) => <ContainerReverseXPM {...args} />;

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