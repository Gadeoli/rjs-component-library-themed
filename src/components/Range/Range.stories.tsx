import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import Range from './Range';
import { RangeProps } from "./Range.types";
import Card from "../Card";
import Span from "../Span";
import Label from "../Label";
import CardContent from "../CardContent";
import FormGroup from "../FormGroup";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Range",
} as Meta<typeof Range>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<RangeProps> = (args) => {
    const [value, setValue] = useState(20);

    return( <Card>
        <CardContent>
            <FormGroup>
                <Label htmlFor="myRange">myRange label</Label>
                <Range 
                    {...args}
                    value={value}
                    onChange={(e: any) => setValue(e.target.value) }
                />
            </FormGroup>
            
            <br/> <br/> <Span>Card - CardContent - FormGroup - Label + Range</Span>
        </CardContent>
    </Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    id:"myRange",
    name:"myRange",
    type: "secondary",
    disabled: false,
    loading: false
}   

Default.argTypes = {
    id: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'Range id'
    },
    name: {
        type: {name: 'string', required: true},
        defaultValue: '',
        description: 'Range name'
    },
    type: {
        type: {name: 'string', required: false},
        defaultValue: 'primary',
        description: 'primary | secondary | error | danger'
    },
    loading: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Loading effect, if true add a class: loading-effect to component'
    },
    value: {
        type: {name: 'number', required: false},
        defaultValue: 0,
        description: ''
    },
    min: {
        type: {name: 'number', required: false},
        defaultValue: 0,
        description: ''
    },
    max: {
        type: {name: 'number', required: false},
        defaultValue: 100,
        description: ''
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'full;'
    },
    disabled: {
        type: {name: 'boolean', required: false},
        defaultValue: '',
        description: 'custom styles',
        size: { control: 'radio' }
    },
    onChange: {
        description: 'function to run on onchange event. this will recieve the event'
    }
}