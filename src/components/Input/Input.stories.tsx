import React, { useState } from "react";
import { ComponentMeta, Story } from "@storybook/react";
import Input from './Input';
import { InputProps } from "./Input.types";
import Card from "../Card";
import { CardContent } from "../../styled-components/Common/Common";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Input",
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<InputProps> = (args) => {
    const [value, setValue] = useState();

    return( <Card>
        <CardContent>
            <Input 
                {...args}
                value={value}
                name="myinput"
                onChange={(value) => setValue(value) }
            />

            <br/> <br/> <Span>Card - CardContent - Input</Span>
        </CardContent>
    </Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    id:"myinput",
    name:"myinput",
    type: "text",
    placeholder: "",
    disabled: false,
    loading: false
}   

Default.argTypes = {
    id: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'Input id'
    },
    name: {
        type: {name: 'string', required: true},
        defaultValue: '',
        description: 'Input name'
    },
    type: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'text | number | password | hidden'
    },
    loading: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Loading effect, if true add a class: loading-effect to component'
    },
    value: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'text | number | password | hidden'
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
        description: 'function to run on onchange event. this will recieve the value changed'
    },
    onFocus: {
        description: 'not required. function to run on onfocus event. this will recieve the event'
    },
    onBlur: {
        description: 'not required. function to run on onblur event. this will recieve the event'
    },
}