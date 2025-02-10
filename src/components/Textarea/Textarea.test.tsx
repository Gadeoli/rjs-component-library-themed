import React, { useState } from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Textarea from "./Textarea";

const compName = "Button"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        const [value, setValue] = useState<any>('');

        render(<App4Test>
            <Textarea name="mytextarea" onChange={(e) => setValue(e)} value={value}/>
        </App4Test>);
    })
})