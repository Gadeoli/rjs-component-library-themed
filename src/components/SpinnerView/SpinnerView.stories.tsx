import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import SpinnerView from './SpinnerView';
import Card from "../Card";
import CardContent from "../CardContent";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/SpinnerView",
} as Meta<typeof SpinnerView>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SpinnerView> = (args) => <Card>
    <CardContent>
        <Span>Card - CardContent - SpinnerView</Span><br/>
        <SpinnerView {...args} />
    </CardContent>
</Card>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    size: 30,
    type: undefined,
    className: "",
    style: {}
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
        table: { type: { summary: 'any'} },
        defaultValue: null,
        description: 'custom styles. This field is not required'
    },
    customColor: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: ''
    }
}