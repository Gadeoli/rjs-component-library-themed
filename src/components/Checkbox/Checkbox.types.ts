import React, { MouseEventHandler } from "react";

export interface CheckboxProps {
    name: string;
    value: any;
    checkedValue: any;
    uncheckedValue: any;
    size?: string;
    type?: "danger" | "primary" | "secondary" | "success";
    disabled?: boolean; 
    text?: string;
    className?: string;
    style?: object;
    onChange: any;
    children?: React.ReactNode;
    checkedIcon?: boolean;
}