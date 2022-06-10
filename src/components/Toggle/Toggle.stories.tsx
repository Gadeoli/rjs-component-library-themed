import React, {useState} from "react";
import { ComponentMeta, Story } from "@storybook/react";
import Toggle from './Toggle';
import Card from "../Card";
import { CardContent } from "../../styled-components/Common/Common";
import { ToggleProps } from "./Toggle.types";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Toggle",
} as ComponentMeta<typeof Toggle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof App4Test> = (args) => <App4Test><Button {...args} /></App4Test>;
const Template: Story<ToggleProps> = (args) => {
    const [value, setValue] = useState();

    return(<Card><CardContent>
        <Toggle 
            {...args}
            value={value}
            onChange={(value) => setValue(value) }
        />    
        <br/> <Span>Card - CardContent - Toggle</Span>
    </CardContent></Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    icon: false,
    checkedValue:true,
    uncheckedValue:false,
    size: 40,
    disabled: false,
    type: '',
    className: '',
    style: {},
}   

Default.argTypes = {
    icon: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Active small cicle content (children)',
        size: { control: 'radio' }
    },
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