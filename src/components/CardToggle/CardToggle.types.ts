export interface CardToggleProps {
    toggleTrigger: any;
    toggleUpper?: any;
    initialToggle?: boolean;
    children: React.ReactNode;
    className?: string;
    xOverride?: "left" | "right";
    yOverride?: "top" | "bottom";
    parentToggleStateControl?: any;
    fullToogle?: boolean;
    index?:number;
}