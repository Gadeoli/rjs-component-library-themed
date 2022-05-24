import { MouseEventHandler } from "react";

export interface ButtonProps {
    label: string;
    disabled: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}