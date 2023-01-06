import React, { MouseEventHandler } from "react";

export interface SpanProps {
    id?: string;
    type?: "danger" | "link" | "primary" | "secondary" | "success";
    className?: string;
    style?: object;
    children: React.ReactNode;
    loading?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}