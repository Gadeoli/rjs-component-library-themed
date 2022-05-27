import React, { useEffect } from "react";
import { render } from "@testing-library/react"

import ThemeHandler4Test from "../ThemeHandler/ThemeHandler4Test";
import Button from "./Button";

const compName = "Button"

describe(compName, () => {
    
        test(`Renders the ${compName} component`, () => {

        render(<ThemeHandler4Test>
            <Button onClick={() => console.log('Hey!')}><span>abc</span></Button>
        </ThemeHandler4Test>);
    })
})