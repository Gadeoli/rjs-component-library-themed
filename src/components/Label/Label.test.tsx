import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Label from "./Label";

const compName = "Label"

describe(compName, () => {
    
        test(`Renders the ${compName} component`, () => {

        render(<App4Test>
            <Label>label para o input XPTO</Label>
        </App4Test>);
    })
})