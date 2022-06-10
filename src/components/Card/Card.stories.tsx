import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from './Card';
import { CardContent } from "../../styled-components/Common/Common";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Card",
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    type: "",
    loading: false,
    className: "",
    style: {},
    children: <CardContent><Span>Card - CardContent - Span</Span></CardContent>
}   

Default.argTypes = {
    type: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'danger | primary | secondary | success'
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: ''
    },
    style: {
        type: {name: 'other', required: false},
        defaultValue: null,
        description: 'custom styles'
    },
    loading: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Loading card make mirror loading effect inside: h2, h3, h4, p, span, image, div.loading-effect'
    }
}