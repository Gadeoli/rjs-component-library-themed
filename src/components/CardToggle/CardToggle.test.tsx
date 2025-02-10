import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import CardToggle from "./CardToggle";

const compName = "CardToogle"

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <CardToggle toggleTrigger={(trigger: any) => (<button onClick={() => trigger()}>triggerMe</button>)}>
                MyToggleContent
            </CardToggle>
        </App4Test>);
    });
});