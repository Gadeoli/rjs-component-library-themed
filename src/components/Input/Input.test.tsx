import React, { useState } from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Input from "./Input";

const compName = "Input"

describe(compName, () => {
    const [value, setValue] = useState(null);

    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <Input name="myinput" type="text" onChange={(e: any) => setValue(e.target.value)} value={value}/>
        </App4Test>);
    })
})