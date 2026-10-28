import {httpClient, type RequestOptions} from "./apiClient.ts";
import type {Collection} from "@/types/collection.ts";
import type {PaginatedResponse} from "@/types/api.ts";

export const fetchCollections = (options?: RequestOptions): Promise<PaginatedResponse<Collection>> => {
    return httpClient('/collections/public', options)
}

export const fetchCollectionById = (collectionId: string | undefined, options?: RequestOptions): Promise<Collection> => {
    return httpClient(`/collections/${collectionId}/public`, options)
}