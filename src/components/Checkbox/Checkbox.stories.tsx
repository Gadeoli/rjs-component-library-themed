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
            onChange={(value) => setValue(value) }
        />    
        <br/> <Span>Card - CardContent - Checkbox</Span>
    </CardContent></Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    checkedValue:true,
    uncheckedValue:false,
    size: 15,
    disabled: false,
    type: '',
    className: '',
    style: {},
}   

Default.argTypes = {
    checkedValue: {
        type: {name: 'other', required: true},
        defaultValue: '',
        description: '',
    },
    uncheckedValue: {
        type: {name: 'other', required: true},
        defaultValue: '',
        description: '',
    },
    size: {
        type: {name: 'number', required: false},
        defaultValue: 40,
        description: 'Size in pixels',
    },
    disabled: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: '',
        size: { control: 'radio' }
    },
    type: {
        type: {name: 'string', required: false},
        defaultValue: 'primary',
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