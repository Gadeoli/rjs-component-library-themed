import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import TitleH1 from "./TitleH1";

const compName = "TitleH1"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <TitleH1 type="danger">abc</TitleH1>
        </App4Test>);
    })
})