import React, { MouseEventHandler } from "react";

export interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    style?: object;
}