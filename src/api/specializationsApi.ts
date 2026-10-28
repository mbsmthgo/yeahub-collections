import {httpClient, type RequestOptions} from "@/api/apiClient.ts";
import type {PaginatedResponse} from "@/types/api.ts";
import type {Specialization} from "@/types/common.ts";

export const fetchSpecializations = (options?: RequestOptions): Promise<PaginatedResponse<Specialization>> => {
    return httpClient('/specializations', options)
}