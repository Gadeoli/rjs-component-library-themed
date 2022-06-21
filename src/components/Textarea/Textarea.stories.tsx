import React, { useState } from "react";
import { ComponentMeta, Story } from "@storybook/react";
import Textarea from './Textarea';
import { TextareaProps } from "./Textarea.types";
import Card from "../Card";
import { CardContent } from "../../styled-components/Common/Common";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Textarea",
} as ComponentMeta<typeof Textarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TextareaProps> = (args) => {
    const [value, setValue] = useState();

    return( <Card>
        <CardContent>
            <Textarea 
                {...args}
                value={value}
                name="mytextarea"
                onChange={(value) => {
                    setValue(value);
                    console.log(value)
                } }
            />

            <br/> <br/> <Span>Card - CardContent - Textarea</Span>
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
    name: {
        type: {name: 'string', required: true},
        defaultValue: '',
        description: 'Textarea name'
    },
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
    },
    onChange: {
        description: 'function to run on onchange event. this will recieve the value changed'
    },
}