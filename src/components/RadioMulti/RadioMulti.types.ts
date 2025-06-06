import { MouseEventHandler } from "react";

export interface RadioMultiProps {
    onChange: MouseEventHandler<HTMLButtonElement>;       // A useState-set-function or similar to control the value outsite (on father component)       
    values: any;         // [{key: 1, value: 'apple'}, {key: 2, value: 'watermelon'}]
    selectedValue: any;  // {key: 1, value: 'apple'}
    className?: string;
    direction?: "row" | "column";
    style?: object;  //some custom style
    size?: string;
    type?: "danger" | "primary" | "secondary" | "success";
    disabled?: boolean;
    selectedIcon?: boolean;
}