
interface ErrorResponse {
    message?: string;
    errors?: Record<string,string[]>;
}
import { AxiosError } from 'axios';

interface HandledError {
    message: string;
    statusCode?: number;
    isServerError: boolean;
    isNetworkError: boolean;
    isClientError: boolean;
}

export const handleError = (error: unknown) => {
    // Handle Axios errors
    if (typeof error === 'object' && error !== null && 'isAxiosError' in error) {
        const axiosError = error as AxiosError;
        return {
            message: (axiosError.response?.data as any)?.message || axiosError.message,
            status: axiosError.response?.status,
            isAxiosError: true
        };
    }

    // Handle standard Error objects
    if (error instanceof Error) {
        return { message: error.message };
    }

    // Handle primitive types (string, number, etc.)
    return { message: String(error) };
}