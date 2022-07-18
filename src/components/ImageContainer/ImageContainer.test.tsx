import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import ImageContainer from "./ImageContainer";

const compName = "ImageContainer";

describe(compName, () => {
    
        test(`Renders the ${compName} component`, () => {

        render(<App4Test>
            <ImageContainer width="300px" height="300px" type="danger" alt={'image test'}/>
        </App4Test>);
    })
})