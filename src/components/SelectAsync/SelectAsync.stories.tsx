import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import SelectAsync, { handleValuesAsync } from './SelectAsync';
// import { apiDataToSelect } from '../Select';
import Card from "../Card";
import Span from "../Span";
import { SelectAsyncProps } from "./SelectAsync.types";
import { CardContent } from "../../styled-components/Common/Common";
import { fruitData } from "../../data";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/SelectAsync",
} as Meta<typeof SelectAsync>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<SelectAsyncProps> = (args) => {
    const [vs, setVs] = useState<any>([]);
    const [selectSearching, setSelectSearching] = useState(false);

    const handleSelectSearchCall = (search: string) => {
        //make axios call or something /users?search=search
        setSelectSearching(true);

        setTimeout(() => {
            const newVs = fruitData.filter((fd : any) => (fd.value.indexOf(search) !== -1)) || [];

            const newValues = handleValuesAsync({
                oldValues: vs, 
                newValues: newVs //use apiDataToSelect if necessary. need a array of key value objects [{key: 1, value: "my value"}] 
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
                        console.log(selected);
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
        table: { type: { summary: 'any'} },
        defaultValue: '',
        description: 'A array of values. This field is not required'
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
    styles: {
        table: { type: { summary: 'any'} },
        defaultValue: null,
        description: 'custom styles. This field is not required'
    }
}