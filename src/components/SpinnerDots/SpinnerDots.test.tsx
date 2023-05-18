import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import SpinnerDots from "./SpinnerDots";

const compName = "SpinnerDots"

describe(compName, () => {
        test(`Renders the ${compName} component`, () => {

        render(<App4Test>
            <SpinnerDots size={60} type="danger" />
        </App4Test>);
    })
})