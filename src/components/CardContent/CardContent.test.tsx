import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import CardContent from "./CardContent";

const compName = "CardContent"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <CardContent>abc</CardContent>
        </App4Test>);
    })
})