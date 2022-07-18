import React, { MouseEventHandler } from "react";

export interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
    type?: "clean" | "danger" | "link" | "primary" | "secondary" | "success";
    className?: string;
    style?: object;
    loading?: boolean;
}