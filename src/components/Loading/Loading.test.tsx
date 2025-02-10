import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Loading from "./Loading";

const compName = "Loading"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <Loading text="..." type="danger" />
        </App4Test>);
    })
})