import React, {useState} from "react";
import { ComponentMeta, Story } from "@storybook/react";
import Checkbox from './Checkbox';
import Card from "../Card";
import { CardContent } from "../../styled-components/Common/Common";
import { CheckboxProps } from "./Checkbox.types";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Checkbox",
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof App4Test> = (args) => <App4Test><Button {...args} /></App4Test>;
const Template: Story<CheckboxProps> = (args) => {
    const [value, setValue] = useState();

    return(<Card><CardContent>
        <Checkbox 
            {...args}
            value={value}
            onChange={(value) => {
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
    type: '',
    className: '',
    style: {},
}   

Default.argTypes = {
    name: {
        type: {name: 'string', required: true},
        defaultValue: '',
        description: 'Checkbox name'
    },
    value: {
        type: {name: 'any', required: false},
        defaultValue: '',
        description: 'checkedValue or uncheckedValue'
    },
    checkedValue: {
        type: {name: 'other', required: true},
        defaultValue: '',
        description: 'value === checkedValue => checked',
    },
    uncheckedValue: {
        type: {name: 'other', required: true},
        defaultValue: '',
        description: 'value === uncheckedValue => unchecked',
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
    text: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'Label'
    },
    type: {
        type: {name: 'string', required: false},
        defaultValue: 'primary',
        description: 'danger | primary | secondary | success'
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'full;'
    },
    style: {
        type: {name: 'other', required: false},
        defaultValue: null,
        description: 'custom styles'
    },
    onChange: {
        description: 'function to run on onchange event. this will recieve the value changed'
    },
}