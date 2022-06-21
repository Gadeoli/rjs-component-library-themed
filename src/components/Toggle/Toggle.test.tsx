import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Toggle from "./Toggle";

const compName = "Toggle";
const toggle = 'abc';

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <Toggle 
                name="mytoggle"
                value={toggle}
                checkedValue={'abc'}
                uncheckedValue={'cde'}
                onChange={(value: any) => {
                    console.log(value);
                }}
                type={'primary'}
            />
        </App4Test>);
    })
})