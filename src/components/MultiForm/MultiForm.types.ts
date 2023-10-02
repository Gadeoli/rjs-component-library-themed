import React from "react";

export interface MultiFormProps {
    className?: string;
    style?: object;
    steps: Array<MultiFormObjProps>;
    noneText: string;
    spinnerSize?: number;
    loading: boolean; 
    // onChange: any;
    current: number;
    body: React.ReactNode;
}

interface MultiFormObjProps{
    header: React.ReactNode;
    disabled?: boolean;
}