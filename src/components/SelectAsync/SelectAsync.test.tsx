import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import SelectAsync from "./SelectAsync";

const compName = "Button"

const vs = [
    {key: 1, value: 'abc'},
    {key: 2, value: 'cde'}
];

describe(compName, () => {
    
        test(`Renders the ${compName} component`, () => {

        render(<App4Test>
            <SelectAsync
                name="myselect"
                multiple={true}
                emptyText={'select something here...'} 
                values={vs} 
                handleValues={({selected, values}) => {
                    // console.log(selected, values)
                }}
            />
        </App4Test>);
    })
})