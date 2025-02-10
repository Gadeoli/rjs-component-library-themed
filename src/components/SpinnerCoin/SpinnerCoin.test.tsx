import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import SpinnerCoin from "./SpinnerCoin";

const compName = "SpinnerCoin"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <SpinnerCoin size={60} type="danger" />
        </App4Test>);
    })
})