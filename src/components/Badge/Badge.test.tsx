import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Badge from "./Badge";

const compName = "Badge"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <Badge type="danger">abc</Badge>
        </App4Test>);
    })
})