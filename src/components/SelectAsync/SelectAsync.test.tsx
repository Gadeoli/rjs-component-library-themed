import React, { useState } from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import SelectAsync, { handleValuesAsync } from "./SelectAsync";

const compName = "Button"

const vs = [
    {key: 1, value: 'abc'},
    {key: 2, value: 'cde'}
];

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        const [vs, setVs] = useState<any>([]);
        const [selectSearching, setSelectSearching] = useState(false);

        const handleSelectSearchCall = (search: string) => {
            //make axios call or something /users?search=search
            setSelectSearching(true);
    
            setTimeout(() => {
                const newVs = vs.filter((fd : any) => (fd.value.indexOf(search) !== -1)) || [];
    
                const newValues = handleValuesAsync({
                    oldValues: vs, 
                    newValues: newVs //use apiDataToSelect if necessary. need a array of key value objects [{key: 1, value: "my value"}] 
                });
    
                setVs([...newValues]);
                setSelectSearching(false);
            }, Math.random() * 1000);
        };

        render(<App4Test>
            <SelectAsync
                name="myselect"
                multiple={true}
                emptyText={'select something here...'} 
                values={vs} 
                handleValues={({selected, values}) => {
                    console.log(selected);
                    setVs(values);
                }}
                handleSelect={(s) => handleSelectSearchCall(s)}
                isSearching={selectSearching}
            />
        </App4Test>);
    })
})