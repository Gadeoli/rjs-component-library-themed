import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import ContainerReverseColor from "./ContainerReverseColor";

const compName = "ContainerReverseColor"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <ContainerReverseColor>abc</ContainerReverseColor>
        </App4Test>);
    })
})