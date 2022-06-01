import React from "react";

export interface ContainerProps {
    children: React.ReactNode;
    type?: "danger" | "primary" | "secondary" | "success";
    className?: string;
    style?: object;
}