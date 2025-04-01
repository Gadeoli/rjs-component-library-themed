import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import Tooltip from './Tooltip';
import { TooltipProps } from "./Tooltip.types";
import Card from "../Card";
import { CardContent } from "../../styled-components/Common/Common";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Tooltip",
} as Meta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<TooltipProps> = (args) => {
    const [value, setValue] = useState();

    return( <Card>
        <CardContent>
            <Tooltip
                {...args}
                tipcontent={<><Span>abc</Span></>}
            >
                <Span>xpto <br/> xptop <br/> xptop <br/> xptop<br/> xptop</Span>
            </Tooltip>
            <br/> <br/> <Span>Card - CardContent - Tooltip [content: Span]</Span>
        </CardContent>
    </Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    position: "bottom",
    type: "success",
    onBlur: () => {console.log("tooltip blured")},
    onFocus: () => {console.log("tooltip focused")}
}   

Default.argTypes = {
    position: {
        type: {name: 'string', required: false},
        defaultValue: 'bottom',
        description: 'top|bottom|left|right'
    },
    type: {
        type: {name: 'string', required: false},
        defaultValue: 'default',
        description: 'default | danger | link | primary | secondary | success'
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'full'
    },
    style: {
        table: { type: { summary: 'any'} },
        defaultValue: null,
        description: 'custom styles. This field is not required'
    },
    children: {
        description: 'ReactNode'
    },
    tipcontent: {
        description: 'The tooltip context'
    },
    onBlur: {
        description: 'function to run on onblur event. this will recieve the value changed'
    },
    onFocus: {
        description: 'function to run on onblur event. this will recieve the value changed'
    },
    loading: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Loading effect, if true add a class: loading-effect to component'
    },
}