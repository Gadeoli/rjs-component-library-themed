import React, { useEffect } from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Body from "./Body";

const compName = "Body"

describe(compName, () => {
    
        test(`Renders the ${compName} component`, () => {

        render(<App4Test>
            <Body>content</Body>
        </App4Test>);
    })
})