import React, { useState } from "react";
import { ComponentMeta, Story } from "@storybook/react";
import Label from './Label';
import { LabelProps } from "./Label.types";
import Card from "../Card";
import { CardContent } from "../../styled-components/Common/Common";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Label",
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LabelProps> = (args) => {
    return( <Card>
        <CardContent>
            <Label {...args}>{args.text}</Label>
            

            <br/> <br/> <Span>Card - CardContent - Label</Span>
        </CardContent>
    </Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    htmlFor:"myinput",
    text:"label for my input xpto",
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
    text: {
        type: {name: 'string', required: true},
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
    }
}