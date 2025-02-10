import { MouseEventHandler } from "react";

export interface InputProps {
    onChange: MouseEventHandler<HTMLButtonElement>;
    onKeyDown?: MouseEventHandler<HTMLButtonElement>;
    onBlur?: MouseEventHandler<HTMLButtonElement>;
    onFocus?: MouseEventHandler<HTMLButtonElement>;
    id?: string;
    name: string;
    type: "text" | "number" | "password" | "hidden";
    value: any;    
    disabled?: boolean;
    className?: string;
    style?: object;
    loading?: boolean;
    placeholder?: string;
    autocomplete?: string;
}