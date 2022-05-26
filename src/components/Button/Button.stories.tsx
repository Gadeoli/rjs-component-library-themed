import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Simple = Template.bind({});
Simple.args = {
    children: <>abc</>
}
Simple.argTypes = {
    onClick: {
        action: 'clicked'
    }
};