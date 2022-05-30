import React from "react";

export interface SpanProps {
    type?: "danger" | "link" | "primary" | "secondary" | "success";
    className?: string;
    style?: object;
    children: React.ReactNode
}