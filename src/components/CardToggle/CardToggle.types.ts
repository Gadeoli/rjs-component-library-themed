export interface CardToggleProps {
    toggleTrigger: any;
    toggleUpper?: any;
    initialToggle?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
    xOverride?: "left" | "right";
    yOverride?: "top" | "bottom";
    parentToggleStateControl?: any;
    forcedToggle?:boolean;
    forceRefresh?:number;
    fullToogle?: boolean;
    index?:number;
}

export type CardToggleHandle = {
  toggle: () => void;
};