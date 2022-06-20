import React, {useState} from "react";
import { ComponentMeta, Story } from "@storybook/react";
import CheckboxMulti from "./CheckboxMulti";
import Card from "../Card";
import { CardContent } from "../../styled-components/Common/Common";
import { CheckboxMultiProps } from "./CheckboxMulti.types";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/CheckboxMulti",
} as ComponentMeta<typeof CheckboxMulti>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof App4Test> = (args) => <App4Test><Button {...args} /></App4Test>;
const Template: Story<CheckboxMultiProps> = (args) => {
    const [vs, setVs] = useState()

    console.log(vs);

    return(<Card><CardContent>
        <CheckboxMulti 
            {...args}
            checkedValues={vs}
            onChange={(values) => {
                setVs(values);
                console.log('changed: ', values);
            }}
        />    
        <br/> <Span>Card - CardContent - CheckboxMulti</Span>
    </CardContent></Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    checkedValues: {key: 'apple', value: 'Apple'},
    single: true,
    values: [
        {key: 'apple',      value: 'Apple'},
        {key: 'banana',     value: 'Banana'},
        {key: 'watermelon', value: 'watermelon'},
        {key: 'orange',     value: 'Orange'},
    ]
}   

Default.argTypes = {
    checkedValues: {
        checked: {name: 'other', required: false},
        defaultValue: '',
        description: 'Array of objects if multiple, a ONLY object if single',
    },
    single: {
        type: {name: 'boolean', required: false},
        defaultValue: true,
        description: 'Set false if are multiple check answers (checkedValue need to be a array) - not working in storybook',
        size: { control: 'radio' }
    },
    size: {
        type: {name: 'string', required: false},
        defaultValue: '.75rem',
        description: 'The checkbox square size',
    },
    values: {
        type: {name: 'other', required: false},
        defaultValue: null,
        description: 'Array of key values',
    },
    disabled: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Disable click && add opacity style',
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
        description: 'Same checkbox'
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'Same checkbox'
    },
    style: {
        type: {name: 'other', required: false},
        defaultValue: null,
        description: 'Same checkbox'
    },
    onChange: {
        description: 'function to run on onchange event. this will recieve the value changed'
    },
}