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
                onChange={(value) => setValue(value) }
            />

            <br/> <br/> <Span>Card - CardContent - Input</Span>
        </CardContent>
    </Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    type: "text",
    disabled: false
}   

Default.argTypes = {
    type: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'text | number'
    },
    value: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'text | number'
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'full'
    },
    disabled: {
        type: {name: 'boolean', required: false},
        defaultValue: '',
        description: 'custom styles',
        size: { control: 'radio' }
    }
}