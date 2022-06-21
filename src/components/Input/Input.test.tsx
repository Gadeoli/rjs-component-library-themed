import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Input from "./Input";

const compName = "Button"

describe(compName, () => {
    
        test(`Renders the ${compName} component`, () => {

        render(<App4Test>
            <Input name="myinput"/>
        </App4Test>);
    })
})