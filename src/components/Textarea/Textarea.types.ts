import React from "react";

export interface TextareaProps {
    (onChange: any) : any,
    type: "text" | "number",
    value: "text" | "number",    
    disabled?: boolean;
    className?: string;
    style?: object;
}