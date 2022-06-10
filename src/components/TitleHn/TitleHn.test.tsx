import React, { useEffect } from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import TitleHn from "./TitleHn";

const compName = "TitleHn"

describe(compName, () => {
        test(`Renders the ${compName} component`, () => {

        render(<App4Test>
            <TitleHn>abc</TitleHn>
        </App4Test>);
    })
})