import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Container from "./Container";

const compName = "Container"

describe(compName, () => {
    
        test(`Renders the ${compName} component`, () => {

        render(<App4Test>
            <Container type="danger">abc</Container>
        </App4Test>);
    })
})