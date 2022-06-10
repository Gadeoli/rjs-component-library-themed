import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Textarea from "./Textarea";

const compName = "Button"

describe(compName, () => {
    
        test(`Renders the ${compName} component`, () => {

        render(<App4Test>
            <Textarea />
        </App4Test>);
    })
})