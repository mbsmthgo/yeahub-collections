export interface PaginatedResponse<T> {
    data: T[]
    page: number;
    limit: number;
    total: number;
}

// export interface ApiError {
//     statusCode: number;
//     message?: string;
//     description?: string;
// }