import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import SpinnerRipple from "./SpinnerRipple";

const compName = "SpinnerRipple"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <SpinnerRipple size={60} type="danger" />
        </App4Test>);
    })
})