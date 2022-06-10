import React, { MouseEventHandler } from "react";

export interface CheckboxProps {
    value: any,
    checkedValue: any,
    uncheckedValue: any,
    size?: number,
    type?: "danger" | "primary" | "secondary" | "success";
    disabled?: boolean, 
    text: string,
    className?: string,
    style?: object,
    onChange: MouseEventHandler<HTMLButtonElement>,
    children?: React.ReactNode
}