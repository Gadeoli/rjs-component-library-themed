import React from "react";

export interface TitleHnProps {
    n?: number;
    type?: "danger" | "link" | "primary" | "secondary" | "success";
    className?: string;
    style?: object;
    children: React.ReactNode
}