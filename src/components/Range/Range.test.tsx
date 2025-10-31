import React, { useState } from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Range from "./Range";

const compName = "Range"

describe(compName, () => {
    const [value, setValue] = useState(0);

    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <Range name="myRange" onChange={(e: any) => setValue(e.target.value)} value={value}/>
        </App4Test>);
    })
})