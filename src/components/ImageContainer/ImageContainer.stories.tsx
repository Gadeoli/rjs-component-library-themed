import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageContainer from './ImageContainer';
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/ImageContainer",
} as ComponentMeta<typeof ImageContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImageContainer> = (args) => <ImageContainer {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    src: "https://avatars.githubusercontent.com/u/29583897?v=4",
    width: "300px",
    height: "300px",
    opacityEffect: false,
    loading: false,
    type: "",
    className: "",
    style: {},
}   

Default.argTypes = {
    width: {
        type: {name: 'string', required: false},
        defaultValue: '150px',
        description: ''
    },
    height: {
        type: {name: 'string', required: false},
        defaultValue: '150px',
        description: ''
    },
    opacityEffect: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Apply a opacity effect over the image. Remove it on hover'
    },
    loading: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Apply a simple css loading effect'
    },
    type: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'danger | primary | secondary | success'
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'full'
    },
    style: {
        type: {name: 'other', required: false},
        defaultValue: null,
        description: 'custom styles'
    }
}