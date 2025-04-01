export interface ImageContainerProps {
    alt?: string;
    width?: string;
    height?: string;
    fill?: boolean;
    opacityEffect?: boolean;
    src?: any;
    loading?: boolean;
    type?: "danger" | "primary" | "secondary" | "success";
    className?: string;
    style?: object;
}