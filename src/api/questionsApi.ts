import {httpClient, type RequestOptions} from "@/api/apiClient.ts";
import type {PaginatedResponse} from "@/types/api.ts";
import type {Question} from "@/types/question.ts";

export const fetchQuestions = (options?: RequestOptions): Promise<PaginatedResponse<Question>> => {
    return httpClient('/questions/public-questions', options)
}

export const fetchQuestionById = (questionId: string | undefined, options?: RequestOptions): Promise<Question> => {
    return httpClient(`/questions/public-questions/${questionId}`, options)
}