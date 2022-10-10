import { ReactNode } from "react";

export interface LabelProps {
    htmlFor?: string;
    children: ReactNode;
    className?: string;
    style?: object; 
    loading?: boolean;
    required?: boolean;
}