import React, { useState, useEffect } from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Card from "./Card";

const compName = "Card"

describe(compName, () => {

        const [loading, setLoading] = useState(true);

        useEffect(() => {
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }, []);

        test(`Renders the ${compName} component`, () => {

        render(<App4Test>
            <Card loading={loading} type="danger">
                {!loading ? <span>abc</span> : ''}
            </Card>
        </App4Test>);
    })
});