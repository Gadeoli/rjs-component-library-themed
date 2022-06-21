import React, { MouseEventHandler } from "react";

export interface InputProps {
    onChange: MouseEventHandler<HTMLButtonElement>,
    name: string,
    type: "text" | "number",
    value: "text" | "number",    
    disabled?: boolean;
    className?: string;
    style?: object;
}