import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Button from "./Button";

const compName = "Button"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <Button type="danger" onClick={() => console.log('Hey!')}>abc</Button>
        </App4Test>);
    })
})