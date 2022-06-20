import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import RadioMulti from "./RadioMulti";
import { fruitData } from "../../data";

const compName = "RadioMulti";

describe(compName, () => {
    const data = fruitData;
    const vs = {...data[0]};

    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <RadioMulti 
                selectedValue={vs}  
                values={data}
                onChange={(values) => console.log(values)}
            />
        </App4Test>);
    })
})