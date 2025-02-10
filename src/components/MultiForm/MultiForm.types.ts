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

interface MultiFormObjProps {
    header: (arg0?: any) => React.ReactNode | string | number;
    disabled?: boolean;
}

export interface ContextProps {
    next: () => any; 
    canNext: boolean,
    prev: () => any;
    canPrev: boolean;
    currentStep: number;
}