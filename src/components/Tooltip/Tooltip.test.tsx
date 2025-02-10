import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Tooltip from "./Tooltip";

const compName = "Button"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <Tooltip
                tipcontent={"abc"}
            >xpto</Tooltip>
        </App4Test>);
    })
})