import React, {useState} from "react";
import { ComponentMeta, Story } from "@storybook/react";
import Radio from './Radio';
import Card from "../Card";
import { CardContent } from "../../styled-components/Common/Common";
import { RadioProps } from "./Radio.types";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Radio",
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof App4Test> = (args) => <App4Test><Button {...args} /></App4Test>;
const Template: Story<RadioProps> = (args) => {

    return(<Card><CardContent>
        <Radio 
            {...args}
        />    
        <br/> <Span>Card - CardContent - Radio</Span>
    </CardContent></Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    className: '',
    style: {},
    selectedValue: 'apple',
    size: '15px',
    text: 'Apple',
    value: 'apple',
    onChange: (v) => console.log(v)
}   

Default.argTypes = {
    text: {
        type: {name: 'string', required: true},
        defaultValue: '',
        description: 'Text is more likely THE LABEL'
    },
    value: {
        type: {name: 'other', required: true},
        defaultValue: '',
        description: ''
    },
    selectedValue: {
        type: {name: 'other', required: true},
        defaultValue: '',
        description: ''
    },
    size: {
        type: {name: 'string', required: true},
        defaultValue: '15px',
        description: 'Size in string with unity (px etc)',
    },
    disabled: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: '',
        size: { control: 'radio' }
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
    }
}