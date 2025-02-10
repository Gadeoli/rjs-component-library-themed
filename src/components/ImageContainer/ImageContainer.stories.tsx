import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ImageContainer from './ImageContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/ImageContainer",
} as Meta<typeof ImageContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ImageContainer> = (args) => <ImageContainer {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    src: "https://avatars.githubusercontent.com/u/29583897?v=4",
    width: "300px",
    height: "300px",
    opacityEffect: false,
    loading: false,
    type: "primary",
    className: "",
    style: {},
}   

Default.argTypes = {
    src: {
        description: 'image source'
    },
    alt: {
        description: 'a alt img text'
    },
    width: {
        type: {name: 'string', required: false},
        defaultValue: '150px',
        description: 'value + unity'
    },
    height: {
        type: {name: 'string', required: false},
        defaultValue: '150px',
        description: 'value + unity'
    },
    opacityEffect: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Apply a opacity effect over the image. Remove it on hover'
    },
    loading: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Loading effect, if true add a class: loading-effect to component'
    },
    type: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'danger | primary | secondary | success'
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
    }
}