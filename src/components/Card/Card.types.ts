export interface CardProps {
    children: React.ReactNode;
    loading?: boolean;
    type?: "clean" | "reverse" | "danger" | "primary" | "secondary" | "success";
    className?: string;
    style?: object;
    forceBorder?: boolean;
}