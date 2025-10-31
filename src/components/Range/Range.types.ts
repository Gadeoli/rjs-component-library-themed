import { MouseEventHandler } from "react";

export interface RangeProps {
    onChange: MouseEventHandler<HTMLButtonElement>;
    id?: string;
    name: string;
    value?: number;    
    min?: number;
    max?: number;
    step?: number;
    type?: "danger" |"primary" | "secondary" | "success";
    disabled?: boolean;
    className?: string;
    style?: object;
    loading?: boolean;
}