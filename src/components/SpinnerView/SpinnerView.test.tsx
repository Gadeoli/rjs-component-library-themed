import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import SpinnerView from "./SpinnerView";

const compName = "SpinnerView"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <SpinnerView size={60} type="danger" />
        </App4Test>);
    })
})