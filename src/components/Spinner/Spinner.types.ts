import React from "react";

export interface SpinnerProps {
    type?: "danger" | "link" | "primary" | "secondary" | "success";
    size: number;
    className?: string;
    style?: object;
    color?: string;
    backgroundColor?: string;
}

