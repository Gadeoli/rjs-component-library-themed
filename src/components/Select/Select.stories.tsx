import React, { useState } from "react";
import { Story, ComponentMeta } from "@storybook/react";
import Select from './Select';
import Card from "../Card";
import Span from "../Span";
import { SelectProps } from "./Select.types";
import { CardContent } from "../../styled-components/Common/Common";
import { fruitData } from "../../data";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Select",
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SelectProps> = (args) => {
    const [vs, setVs] = useState([...fruitData]);

    return( <Card style={{paddingBottom: '5rem'}}>
        <CardContent>
            <Select 
                {...args}
                emptyText={'select something here...'} 
                values={vs} 
                handleValues={(vs) => {
                    setVs(vs);
                    console.log(vs);
                }}
            />

            <br/> <br/> <Span>Card - CardContent - Select</Span>
        </CardContent>
    </Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.argTypes = {
    multiple: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'If true is allowed to select more than one option',
        size: { control: 'radio' }
    },
    emptyText: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'The text when no values selected'
    },
    values: {
        type: {name: 'array', required: false},
        defaultValue: '',
        description: ''
    },
    handleValues: {
        type: {name: 'any', required: true},
        defaultValue: '',
        description: 'function to run on onchange event. this will recieve all values (selected will have selected param with true). you need to filter (map or something) when needed'
    },
    style: {
        type: {name: 'other', required: false},
        defaultValue: null,
        description: 'custom styles'
    }
}