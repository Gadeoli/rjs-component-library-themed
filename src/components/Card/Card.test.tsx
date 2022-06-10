import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Card from "./Card";

const compName = "Card"
const loading = false;

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {

    render(<App4Test>
        <Card loading={loading} type="danger">
            <span>{!loading ? "abc" : ""}</span>
        </Card>
    </App4Test>);});
});