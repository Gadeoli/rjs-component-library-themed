import React from "react";

export interface TabsProps {
    className?: string;
    style?: object;
    tabs: Array<TabsObjProps>;
    maxWidth?: string;
    scrollOrWrap?: 'scroll' | 'wrap';
    noneText: string;
    spinnerSize?: number;
    loading: boolean; 
    onChange: any;
    emphasisActive?: boolean;
    body: React.ReactNode;
}

interface TabsObjProps{
    key: any;
    header: (arg0?: any) => React.ReactNode | string | number;
    disabled?: boolean;
    active: boolean;
}
