import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Spinner from "./Spinner";

const compName = "Spinner"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <Spinner size={60} type="danger" />
        </App4Test>);
    })
})