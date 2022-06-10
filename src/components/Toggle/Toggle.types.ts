import React, { MouseEventHandler } from "react";

export interface ToggleProps {
    //use html codes for icons
    icon?: boolean,
    value: any,
    checkedValue: any,
    uncheckedValue: any,
    size?: number,
    disabled?: boolean;
    onChange: MouseEventHandler<HTMLButtonElement>;
    type?: "danger" | "primary" | "secondary" | "success";
    className?: string;
    style?: object;
}