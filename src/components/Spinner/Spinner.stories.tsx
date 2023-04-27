import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spinner from './Spinner';
import Card from "../Card";
import CardContent from "../CardContent";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Spinner",
} as ComponentMeta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = (args) => <Card>
    <CardContent>
        <Spinner {...args} />
        <Span>Card - CardCotent - Spinner</Span>
    </CardContent>
</Card>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    size: 2,
    type: undefined,
    className: "",
    style: {},
    backgroundColor: '',
    color: ''
}   

Default.argTypes = {
    size: {
        type: {name: 'number', required: true},
        defaultValue: '',
        description: ''
    },
    type: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: ''
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
    backgroundColor: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: ''
    },
    color: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: ''
    }
}