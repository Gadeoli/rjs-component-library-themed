import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Body from './Body';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Body",
} as ComponentMeta<typeof Body>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof App4Test> = (args) => <App4Test><Body {...args} /></App4Test>;
const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    className: "",
    style: {},
    children: <span>content</span>
}   

Default.argTypes = {
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: ''
    },
    style: {
        type: {name: 'other', required: false},
        defaultValue: null,
        description: 'custom styles'
    }
}