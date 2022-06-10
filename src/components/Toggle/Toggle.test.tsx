import React, { useState } from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Toggle from "./Toggle";

const compName = "Toggle"

describe(compName, () => {
    const [toogle, setToggle] = useState('abc');

    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <Toggle 
                value={toogle}
                checkedValue={'abc'}
                uncheckedValue={'cde'}
                onChange={(value: any) => {
                    console.log(value);
                    setToggle(value);
                }}
                type={'primary'}
            />
        </App4Test>);
    })
})