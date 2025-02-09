import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CardToggle from './CardToggle';
import Span from "../Span";
import Button from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/CardToggle",
} as Meta<typeof CardToggle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CardToggle> = (args) => <CardToggle 
    {...args}
    toggleTrigger={(trigger: any) => (<Button onClick={() => trigger()}>triggerMe</Button>)}
/>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    children: <Span>MyToggleContent</Span>,
    className: ''
}   

Default.argTypes = {
    toggleTrigger: {
        description: "Pass the trigger component like a prop. toggleTrigger={(trigger) => <btn onClick={() => trigger()}>triggerme</brn>}"
    },
    children: {
        description: 'ReactNode'
    },
    className: {
        description: ".full (toogle set to 100% width) - className added do toggle container"
    }
}