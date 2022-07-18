import React, { MouseEventHandler } from "react";

export interface CheckboxMultiProps {
    checkedValues: any;                             //If single equals to TRUE this will be a STRING (or a single representative value), otherwise (FALSE) this will be a ARRAY (a array of values) 
    onChange: MouseEventHandler<HTMLButtonElement>; //send up the new values (control in the father component)
    type?: "danger" | "primary" | "secondary" | "success";
    direction?: "row" | "column";
    values: any;                                    //Each value (string or number etc) need a view content (string, component etc). Use a object like the falow for each value: {key: myvalue, value: SomeViewContent}
    disabled?: boolean;
    single?: boolean;                               //If true only one checkbox can be selected
    style?: object;
    size?: string;
    className?: string
}