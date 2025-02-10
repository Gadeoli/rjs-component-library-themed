import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import CheckboxMulti from "./CheckboxMulti";
import { fruitData } from "../../data";

const compName = "CheckboxMulti";

describe(compName, () => {
    const data = fruitData;
    const vs = {...data[0]};
    
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <CheckboxMulti 
                checkedValues={vs}  
                single={true}  
                values={data}
                onChange={(values: any) => {
                    console.log(values)
                }}
            />
        </App4Test>);
    })
})