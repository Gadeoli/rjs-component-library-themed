import React from "react";
import { render } from "@testing-library/react"

import Button from "./Button";

const compName = "Button"

describe(compName, () => {
    test(`Renders the ${Button} component`, () => {
        render(<Button text="Hey!" onClick={() => console.log('Hey!')}/>);
    })
})