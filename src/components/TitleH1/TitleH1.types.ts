import React from "react";

export interface TitleH1Props {
    type?: "danger" | "link" | "primary" | "secondary" | "success";
    className?: string;
    style?: object;
    children: React.ReactNode;
    loading?: boolean;
}