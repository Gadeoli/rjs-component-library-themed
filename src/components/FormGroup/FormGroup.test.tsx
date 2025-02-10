import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import FormGroup from "./FormGroup";

const compName = "FormGroup"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <FormGroup>abc</FormGroup>
        </App4Test>);
    })
})