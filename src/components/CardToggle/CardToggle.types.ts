export interface CardToggleProps {
    toggleTrigger: any;
    initialToggle?: boolean;
    children: React.ReactNode;
    className?: string;
    xOverride?: "left" | "right";
    yOverride?: "top" | "bottom";
    parentToggleStateControl?: any;
}