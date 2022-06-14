import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import CheckboxMulti from "./CheckboxMulti";

const compName = "CheckboxMulti";

describe(compName, () => {
    const vs = {key: 'maca', value: 'Maça'};
    const data = [
        {key: 'maca',    value: 'Maça'},
        {key: 'banana',  value: 'Banana'},
        {key: 'melao',   value: 'Melão'},
        {key: 'melancia',value: 'Melancia'},
        {key: 'abacate', value: 'Abacate'},
    ];
    
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <CheckboxMulti 
                checkedValues={vs}  
                single={true}  
                values={data}
                onChange={(values) => console.log(values)}
            />
        </App4Test>);
    })
})