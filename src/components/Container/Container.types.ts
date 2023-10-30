import React from "react";

export interface ContainerProps {
    children: React.ReactNode;
    type?: "clean" | "reverse" | "danger" | "primary" | "secondary" | "success";
    className?: string;
    style?: object;
}