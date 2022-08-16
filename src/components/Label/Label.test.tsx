import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Label from "./Label";

const compName = "Label"

describe(compName, () => {
    
        test(`Renders the ${compName} component`, () => {

        render(<App4Test>
            <Label text="label para o input XPTO"/>
        </App4Test>);
    })
})