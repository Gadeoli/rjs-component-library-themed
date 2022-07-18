import React, { MouseEventHandler } from "react";

export interface RadioProps {
    disabled?: boolean;
    className?: string;
    style?: object;
    onChange: MouseEventHandler<HTMLButtonElement>;
    value: any;
    selectedValue: any;
    size?: string;
    text: string;
    type?: "danger" | "primary" | "secondary" | "success";
    children?: React.ReactNode
}