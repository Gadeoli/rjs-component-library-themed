export interface CardProps {
    children: React.ReactNode;
    loading?: boolean;
    type?: "danger" | "primary" | "secondary" | "success";
    className?: string;
    style?: object;
}