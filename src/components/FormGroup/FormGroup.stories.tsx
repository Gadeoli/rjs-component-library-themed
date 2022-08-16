import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormGroup from './FormGroup';
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/FormGroup",
} as ComponentMeta<typeof FormGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormGroup> = (args) => <FormGroup {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    className: "",
    style: {},
    children: <Span>FormGroup (Simple Flex Div For Label + Input)</Span>
}   

Default.argTypes = {
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'full;'
    },
    style: {
        type: {name: 'other', required: false},
        defaultValue: null,
        description: 'custom styles'
    },
    children: {
        description: 'ReactNode'
    }
}