import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import Select, { apiDataToSelect } from './Select';
import Card from "../Card";
import Span from "../Span";
import { SelectProps } from "./Select.types";
import { CardContent } from "../../styled-components/Common/Common";
import { fruitData, candyData } from "../../data";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Select",
} as Meta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<SelectProps> = (args) => {
    const [vs, setVs] = useState([...fruitData]);
    const [vsMulti, setVsMulti] = useState([...fruitData]);

    const aux = apiDataToSelect({
        data: candyData, 
        key: 'id', 
        value: ['name', 'extra.color']
    });
    const [candies, setCandies] = useState(aux);
    const [candie, setCandie] = useState();

    const [candiesMulti, setCandiesMulti] = useState(aux);
    const [candieMulti, setCandieMulti] = useState();

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

                <br />

                <Select 
                    {...args}
                    name="myselect3"
                    className="full"
                    emptyText={'select something here (multivalue)...'} 
                    multiple={true}
                    values={vsMulti} 
                    handleValues={({selected, values}) => {
                        setVsMulti(values);
                    }}
                    handleSelect={(s) => {
                        // console.log(s)
                    }}
                    inlineDrawer={false}
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
        table: { type: { summary: 'any'} },
        defaultValue: '',
        description: 'This field is not required'
    },
    handleValues: {
        table: { type: { summary: 'any'} },
        defaultValue: '',
        description: 'function to run on onchange event. this will recieve all values (selected will have selected param with true). you need to filter (map or something) when needed. This field is required'
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
    enableSearch: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'enable search input'
    },
    toggleX: {
        type: {name: 'string', required: false},
        defaultValue: null,
        description: 'set the drawer position in the x axis top | bottom (default auto - not 100 working)'
    },
    toggleY: {
        type: {name: 'string', required: false},
        defaultValue: null,
        description: 'set the drawer position in the y axis left | right (default auto - not 100 working)'
    }
}