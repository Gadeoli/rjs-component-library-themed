import React, {useState} from "react";
import { StoryFn, Meta } from "@storybook/react";
import Checkbox from './Checkbox';
import Card from "../Card";
import { CardContent } from "../../styled-components/Common/Common";
import { CheckboxProps } from "./Checkbox.types";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Checkbox",
} as Meta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: StoryFn<typeof App4Test> = (args) => <App4Test><Button {...args} /></App4Test>;
const Template: StoryFn<CheckboxProps> = (args) => {
    const [value, setValue] = useState();

    return(<Card><CardContent>
        <Checkbox 
            {...args}
            value={value}
            onChange={(value: any) => {
                setValue(value);
                console.log('changed: ', value);
            } }
        />    
        <br/> <Span>Card - CardContent - Checkbox</Span>
    </CardContent></Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    name: "",
    checkedValue:true,
    uncheckedValue:false,
    value: true,
    size: '.75rem',
    disabled: false,
    text: 'My checkbox',
    type: 'primary',
    className: '',
    style: {},
    checkedIcon: false
}   

Default.argTypes = {
    name: {
        table: { type: { summary: 'any'} },
        // type: {name: 'string', required: true},
        defaultValue: '',
        description: 'Checkbox name. This field is required'
    },
    value: {
        table: { type: { summary: 'any'} },
        defaultValue: '',
        description: 'checkedValue or uncheckedValue. This field is not required'
    },
    checkedValue: {
        table: { type: { summary: 'any'} },
        defaultValue: '',
        description: 'value === checkedValue => checked. This field is not required',
    },
    uncheckedValue: {
        table: { type: { summary: 'any'} },
        defaultValue: '',
        description: 'value === uncheckedValue => unchecked. This field is not required',
    },
    size: {
        type: {name: 'string', required: false},
        defaultValue: '.75rem',
        description: 'Square size',
    },
    disabled: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Click disabled and styled effects add',
        size: { control: 'radio' }
    },
    checkedIcon: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Show the html check symbol when checked',
        size: { control: 'radio' }
    },
    text: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'Label'
    },
    type: {
        type: {name: 'string', required: false},
        control: {
            type: 'select'
        },
        options: ['danger', 'primary', 'secondary', 'success'],
        defaultValue: 'primary',
        description: ''
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
    },
    onChange: {
        description: 'function to run on onchange event. this will recieve the value changed'
    },
}