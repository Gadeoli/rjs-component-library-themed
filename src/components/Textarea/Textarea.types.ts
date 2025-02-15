import { MouseEventHandler } from "react";

export interface TextareaProps {
    onChange: MouseEventHandler<HTMLButtonElement>;
    onKeyDown?: MouseEventHandler<HTMLButtonElement>;
    onBlur?: MouseEventHandler<HTMLButtonElement>;
    onFocus?: MouseEventHandler<HTMLButtonElement>;
    id?: string;
    name: string;
    value: any;    
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    readonly?: boolean;
    rows?: number;
    style?: object;
    loading?: boolean;
}