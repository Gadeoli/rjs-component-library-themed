import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Checkbox from "./Checkbox";

const compName = "Checkbox";

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <Checkbox 
                name="mycheckbox"
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