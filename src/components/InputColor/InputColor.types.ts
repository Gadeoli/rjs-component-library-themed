import { MouseEventHandler } from "react";

export interface InputColorProps {
    onChange: MouseEventHandler<HTMLButtonElement>;
    onKeyDown?: MouseEventHandler<HTMLButtonElement>;
    onBlur?: MouseEventHandler<HTMLButtonElement>;
    onFocus?: MouseEventHandler<HTMLButtonElement>;
    id?: string;
    name: string;
    value: any;    
    disabled?: boolean;
    className?: string;
    style?: object;
    loading?: boolean;
    autocomplete?: string;
    width?: string;
    height?: string;
}