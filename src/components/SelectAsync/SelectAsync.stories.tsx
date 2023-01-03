import React, { useCallback, useState } from "react";
import { Story, ComponentMeta } from "@storybook/react";
import SelectAsync, { handleValuesAsync } from './SelectAsync';
// import { apiDataToSelect } from '../Select';
import Card from "../Card";
import Span from "../Span";
import { SelectAsyncProps } from "./SelectAsync.types";
import { CardContent } from "../../styled-components/Common/Common";
import { fruitData } from "../../data";
import Input from "../Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/SelectAsync",
} as ComponentMeta<typeof SelectAsync>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SelectAsyncProps> = (args) => {
    const [vs, setVs] = useState<any>([]);
    const [selectSearching, setSelectSearching] = useState(false);

    const handleSelectSearchCall = (search: string) => {
        //make axios call or something
        setSelectSearching(true);

        setTimeout(() => {
            const newValues = handleValuesAsync({
                oldValues: vs, 
                newValues: fruitData, //use apiDataToSelect if necessary. need a array of key value objects [{key: 1, value: "my value"}] 
                search: search
            });

            setVs([...newValues]);
            setSelectSearching(false);
        }, Math.random() * 1000);
    };

    return( <Card>
        <CardContent>
            <form>
                <SelectAsync 
                    {...args}
                    name="myselect"
                    className="full"
                    emptyText={'select something here...'} 
                    values={vs} 
                    multiple={false}
                    handleValues={({selected, values}) => {
                        setVs(values);
                    }}
                    handleSelect={(s) => handleSelectSearchCall(s)}
                    isSearching={selectSearching}
                    inlineDrawer={true}
                />
            </form>
            

            <br/> <br/> <Span>Card - CardContent - Select Async</Span>
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
    }
}