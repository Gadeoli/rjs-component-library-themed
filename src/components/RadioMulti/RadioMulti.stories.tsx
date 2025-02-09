import React, {useState} from "react";
import { StoryFn, Meta } from "@storybook/react";
import RadioMulti from './RadioMulti';
import Card from "../Card";
import { CardContent } from "../../styled-components/Common/Common";
import { RadioMultiProps } from "./RadioMulti.types";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/RadioMulti",
} as Meta<typeof RadioMulti>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: StoryFn<typeof App4Test> = (args) => <App4Test><Button {...args} /></App4Test>;
const Template: StoryFn<RadioMultiProps> = (args) => {
    const [v, setV] = useState({key: 1, value: 'apple'})

    return(<Card><CardContent>
        <RadioMulti 
            {...args}
            selectedValue={v}
            onChange={(value) => {
                setV(value.key)
                console.log(value)
            }}
        />    
        <br/><Span>Card - CardContent - RadioMulti</Span>
    </CardContent></Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    size: '.75rem',
    values: [{key: 1, value: 'apple'}, {key: 2, value: 'watermelon'}],
    selectedValue: {key: 1, value: 'apple'}, 
    className: '',
    direction: 'column',
    style: {},
}   

Default.argTypes = {
    values: {
        type: {name: 'other', required: false},
        defaultValue: null,
        description: 'Array of objects (same as checkedvalue)',
    },
    selectedValue: {
        type: {name: 'other', required: false},
        defaultValue: '',
        description: "a ONLY object {key: 1, value: 'abc'}",
    },
    size: {
        type: {name: 'string', required: false},
        defaultValue: '.75rem',
        description: 'Size in string with unity (px etc)',
    },
    disabled: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: '',
        size: { control: 'radio' }
    },
    direction: {
        type: {name: 'string', required: false},
        defaultValue: 'column',
        description: 'column | row'
    },
    type: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'danger | primary | secondary | success'
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'full'
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