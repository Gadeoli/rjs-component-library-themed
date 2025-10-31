import React from "react";

export interface JumbotronProps {
    children: React.ReactNode;
    type?: "danger" | "primary" | "secondary" | "success" | "custom";
    color?: string;
    className?: string;
    style?: object;
}