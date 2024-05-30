import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import ContainerReverseXPM from "./ContainerReverseXPM";

const compName = "ContainerReverseXPM"

describe(compName, () => {
    
        test(`Renders the ${compName} component`, () => {

        render(<App4Test>
            <ContainerReverseXPM>abc</ContainerReverseXPM>
        </App4Test>);
    })
})