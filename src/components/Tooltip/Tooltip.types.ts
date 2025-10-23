import React, { MouseEventHandler } from "react";

export interface TooltipProps {
    onBlur?: MouseEventHandler<HTMLButtonElement>;
    onFocus?: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    parentRef?: React.RefObject<HTMLElement | null>;
    tipcontent: any;
    position?: "top" | "bottom" | "left" | "right";
    type?: "default" | "danger" | "link" | "primary" | "secondary" | "success";
    index?: number; 
    className?: string;
    style?: object;
    loading?: boolean;
}