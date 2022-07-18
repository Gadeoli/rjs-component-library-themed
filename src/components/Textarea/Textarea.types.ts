import React, { MouseEventHandler } from "react";

export interface TextareaProps {
    onChange: MouseEventHandler<HTMLButtonElement>;
    type: "text" | "number";
    value: "text" | "number";    
    disabled?: boolean;
    className?: string;
    style?: object;
    name: string;
}