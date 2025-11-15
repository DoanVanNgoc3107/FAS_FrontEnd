export interface ApiResponse<T> {
    // Backend returns `status` (number) and wraps payload in `data`
    status: number;
    message: string;
    error?: any;
    path?: string;
    data?: T;
    timestamp?: string;
}