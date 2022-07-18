import React, { MouseEventHandler } from "react";

export interface ToggleProps {
    name: string;
    value: any;
    checkedValue: any;
    uncheckedValue: any;
    size?: number;
    disabled?: boolean;
    onChange: MouseEventHandler<HTMLButtonElement>;
    type?: "danger" | "primary" | "secondary" | "success";
    className?: string;
    style?: object;
    children?: React.ReactNode
}