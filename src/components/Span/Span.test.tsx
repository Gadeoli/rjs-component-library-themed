import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Span from "./Span";

const compName = "Span"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <Span type="danger">abc</Span>
        </App4Test>);
    })
})