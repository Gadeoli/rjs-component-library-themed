import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Checkbox from "./Checkbox";

const compName = "Checkbox";
const toggle = 'abc';

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <Checkbox 
                checkedValue={true}
                uncheckedValue={false}
                onChange={(value: any) => {
                    console.log(value);
                }}
                text="my checkbox"
                type="primary"
                value={false}
            />
        </App4Test>);
    })
})