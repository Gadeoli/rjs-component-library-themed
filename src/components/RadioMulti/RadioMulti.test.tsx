import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import RadioMulti from "./RadioMulti";

const compName = "RadioMulti";

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <RadioMulti 
                 className= ''
                 selectedValue= ''
                 size= '.75rem'
                 text= 'Apple'
                 value= 'apple'
                 type='primary'
            />
        </App4Test>);
    })
})