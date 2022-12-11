import React from "react";

export interface TabsProps {
    className?: string;
    style?: object;
    tabs: Array<TabsObjProps>;
    noneText: string;
    spinnerSize?: number;
    loading: boolean; 
    onChange: any;
    emphasisActive?: boolean;
    body: React.ReactNode;
}

interface TabsObjProps{
    key: any;
    header: React.ReactNode;
    disabled?: boolean;
    active: boolean;
}
