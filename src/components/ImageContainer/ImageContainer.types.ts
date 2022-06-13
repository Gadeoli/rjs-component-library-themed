export interface ImageContainerProps {
    width?: string;
    height?: string;
    opacityEffect?: boolean;
    src?: any;
    loading?: boolean;
    type?: "danger" | "primary" | "secondary" | "success";
    className?: string;
    style?: object;
}