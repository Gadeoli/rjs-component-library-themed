import React, { useCallback, useEffect, useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import Select, { apiDataToSelect } from './Select';
import Card from "../Card";
import Span from "../Span";
import { SelectProps } from "./Select.types";
import { CardContent } from "../../styled-components/Common/Common";
import { fruitData, candyData } from "../../data";
import CardToggle from "../CardToggle";
import Button from "../Button";
import Container from "../Container";
import P from "../P";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Select2", //test card overlapping when drawer is not present in initial render
} as Meta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<SelectProps> = (args) => {
    const [vs, setVs] = useState<any>([]);
    const [showContent, setShowContent] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setShowContent(true);
        }, 500);

        setTimeout(() => {
            setVs([...fruitData]);
            console.log('"fetched" on scroll')
        }, 1000);
    }, []);

    return( <Card style={{display: `${showContent ? 'block' : 'none'}`}}>
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
            </form>
                    
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
    closeDrawerOnSelect: {
        type: {name: 'string', required: false},
        defaultValue: null,
        description: "(on | off) If not setted the default value will be 'on' to single select and 'off' to multiple",
        size: { control: 'radio' }
    },
    inlineDrawer: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Control how the draw itens are showed',
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
    handleSelect: {
        table: { type: { summary: 'any'} },
        defaultValue: '',
        description: 'function to run on search event. This field is not required'
    },
    handleFinishScroll: {
        table: { type: { summary: 'any'} },
        defaultValue: '',
        description: 'funtion to run when last item on drawer got visible'
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
    disabled: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'disable select actions (open drawer)'
    },
    enableSearch: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'enable search input'
    },
    enableInfiniteScroll: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'enable infinite scroll. manual hasMore is necessary. Also set your handleFinishScroll Fn'
    },
    hasMore: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'use this to lock when `can` |` can not` load more when infinite scroll `on`',
        size: { control: 'radio' }
    },
    searchText: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: "The text to use in input search' placeholder"
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