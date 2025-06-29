import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import InputColor from './InputColor';
import { InputColorProps } from "./InputColor.types";
import Card from "../Card";
import Span from "../Span";
import Label from "../Label";
import CardContent from "../CardContent";
import FormGroup from "../FormGroup";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/InputColor",
} as Meta<typeof InputColor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<InputColorProps> = (args) => {
    const [value, setValue] = useState('');

    return( <Card>
        <CardContent>
            <FormGroup>
                <Label htmlFor="myInputColor">myInputColor label</Label>
                <InputColor 
                    {...args}
                    value={value}
                    onChange={(e: any) => setValue(e.target.value) }
                />
            </FormGroup>

            <br/> <br/> <Span>Card - CardContent - FormGroup - Label + InputColor</Span>
        </CardContent>
    </Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    id:"myInputColor",
    name:"myInputColor",
    autocomplete: "off",
    disabled: false,
    loading: false,
    width: '2.5rem',
    height: '2rem'
}   

Default.argTypes = {
    id: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'InputColor id'
    },
    name: {
        type: {name: 'string', required: true},
        defaultValue: '',
        description: 'InputColor name'
    },
    loading: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Loading effect, if true add a class: loading-effect to component'
    },
    value: {
        type: {name: 'string', required: false},
        defaultValue: '',
        control: {
            type: 'select'
        },
        options: ['text', 'number', 'password', 'hidden'],
        description: ''
    },
    width: {
        type: {name: 'string', required: false},
        defaultValue: '2.5rem',
        description: "The input' width",
    },
    height: {
        type: {name: 'string', required: false},
        defaultValue: '2rem',
        description: "The input' height",
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'full;'
    },
    autocomplete: {
        type: {name: 'string', required: false},
        defaultValue: 'off',
        description: ''
    },
    disabled: {
        type: {name: 'boolean', required: false},
        defaultValue: '',
        description: 'custom styles',
        size: { control: 'radio' }
    },
    onChange: {
        description: 'function to run on onchange event. this will recieve the event'
    },
    onFocus: {
        description: 'not required. function to run on onfocus event. this will recieve the event'
    },
    onBlur: {
        description: 'not required. function to run on onblur event. this will recieve the event'
    },
    onKeyDown: {
        description: 'not required. function to run on keydown event. this will recieve the event'
    },
}