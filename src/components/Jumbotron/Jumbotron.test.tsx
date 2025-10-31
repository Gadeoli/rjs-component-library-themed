import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Jumbotron from "./Jumbotron";

const compName = "Jumbotron"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <Jumbotron type="danger">abc</Jumbotron>
        </App4Test>);
    })
})