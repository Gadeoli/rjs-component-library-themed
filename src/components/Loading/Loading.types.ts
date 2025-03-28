export interface LoadingProps {
    cursor?: boolean;
    timeout?: number;
    text: string;
    type?: "danger" | "link" | "primary" | "secondary" | "success";
    className?: string;
    style?: object;
    align?: string;
}