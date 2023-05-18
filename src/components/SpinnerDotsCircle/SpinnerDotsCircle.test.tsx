import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import SpinnerDotsCircle from "./SpinnerDotsCircle";

const compName = "SpinnerDotsCircle"

describe(compName, () => {
        test(`Renders the ${compName} component`, () => {

        render(<App4Test>
            <SpinnerDotsCircle size={60} type="danger" />
        </App4Test>);
    })
})