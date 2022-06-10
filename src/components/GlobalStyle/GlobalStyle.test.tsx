import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import GlobalStyle from "./GlobalStyle";

const compName = "Body"

describe(compName, () => {
    
        test(`Renders the ${compName} component`, () => {

        render(<App4Test>
            <GlobalStyle />
        </App4Test>);
    })
})