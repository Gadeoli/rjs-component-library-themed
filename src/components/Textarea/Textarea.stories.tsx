import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import Textarea from './Textarea';
import { TextareaProps } from "./Textarea.types";
import Card from "../Card";
import { CardContent } from "../../styled-components/Common/Common";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Textarea",
} as Meta<typeof Textarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<TextareaProps> = (args) => {
    const [value, setValue] = useState();

    return( <Card>
        <CardContent>
            <Textarea 
                {...args}
                value={value}
                name="mytextarea"
                onChange={(e: any) => {
                    setValue(e.target.value);
                    console.log(e.target.value)
                } }
            />

            <br/> <br/> <Span>Card - CardContent - Textarea</Span>
        </CardContent>
    </Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    disabled: false,
    loading: false
}   

Default.argTypes = {
    name: {
        type: {name: 'string', required: true},
        defaultValue: '',
        description: 'Textarea name'
    },
    loading: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Loading effect, if true add a class: loading-effect to component'
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