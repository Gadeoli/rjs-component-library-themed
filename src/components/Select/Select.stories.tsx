import React, { useState } from "react";
import { Story, ComponentMeta } from "@storybook/react";
import Select, { apiDataToSelect } from './Select';
import Card from "../Card";
import Span from "../Span";
import { SelectProps } from "./Select.types";
import { CardContent } from "../../styled-components/Common/Common";
import { fruitData, candyData } from "../../data";
import Input from "../Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Select",
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SelectProps> = (args) => {
    const [vs, setVs] = useState([...fruitData]);
    const [value, setValue] = useState();

    const aux = apiDataToSelect({
        data: candyData, 
        key: 'id', 
        value: ['name', 'extra.color']
    });
    const [candies, setCandies] = useState(aux);
    const [candie, setCandie] = useState();

    return( <Card>
        <CardContent>
            <form>
                <Select 
                    {...args}
                    name="myselect"
                    className="full"
                    emptyText={'select something here...'} 
                    values={vs} 
                    handleValues={({selected, values}) => {
                        setVs(values);
                    }}
                    handleSelect={(s) => {
                        // console.log(s)
                    }}
                    inlineDrawer={true}
                />

                <br />

                <Select 
                    {...args}
                    name="myselect2"
                    className="full"
                    emptyText={'select something here...'} 
                    values={candies} 
                    handleValues={({selected, values}) => {
                        setCandies(values);
                        setCandie(selected);
                    }}
                    handleSelect={(s) => {
                        // console.log(s)
                    }}
                    inlineDrawer={true}
                />
            </form>
            
            <div style={{paddingTop: '500px'}}>
                <Select 
                    {...args}
                    name="myselect"
                    className="full"
                    emptyText={'select something here...'} 
                    values={vs} 
                    handleValues={({selected, values}) => {
                        setVs(values);
                    }}
                    handleSelect={(s) => {
                        // console.log(s)
                    }}
                    inlineDrawer={true}
                />

            </div>

            <br/> <br/> <Span>Card - CardContent - Select</Span>
        </CardContent>
    </Card>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.argTypes = {
    name: {
        type: {name: 'string', required: true},
        defaultValue: '',
        description: 'Select name'
    },
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
    handleSearch: {
        type: {name: 'any', required: false},
        defaultValue: '',
        description: 'function to run on onsearch event. this will recieve the search value'
    },
    isSearching: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'If true show a loading content on search field',
        size: { control: 'radio' }
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'full;'
    },
    style: {
        type: {name: 'other', required: false},
        defaultValue: null,
        description: 'custom styles'
    },
    enableSearch: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'enable search input'
    }
}