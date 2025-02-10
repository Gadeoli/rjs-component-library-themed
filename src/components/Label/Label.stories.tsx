import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import Label from './Label';
import { LabelProps } from "./Label.types";
import Card from "../Card";
import { CardContent } from "../../styled-components/Common/Common";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Label",
} as Meta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<LabelProps> = (args) => {
    return( <Card>
        <CardContent>
            <Label {...args}>{args.children}</Label>
            <br/> <br/> <Span>Card - CardContent - Label</Span>
        </CardContent>
    </Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    htmlFor:"myinput",
    children:"label for my input xpto",
}   

Default.argTypes = {
    htmlFor: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'Input id'
    },
    loading: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Loading effect, if true add a class: loading-effect to component'
    },
    required: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Add a * after label text'
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
    }
}