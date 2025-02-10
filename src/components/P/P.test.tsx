import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import P from "./P";

const compName = "P"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <P type="danger">abc</P>
        </App4Test>);
    })
})