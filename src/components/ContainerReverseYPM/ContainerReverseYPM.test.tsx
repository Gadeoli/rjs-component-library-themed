import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import ContainerReverseYPM from "./ContainerReverseYPM";

const compName = "ContainerReverseYPM"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <ContainerReverseYPM>abc</ContainerReverseYPM>
        </App4Test>);
    })
})