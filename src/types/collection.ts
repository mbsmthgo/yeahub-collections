import type {Author, Specialization} from "./common.ts";

export interface Company {
    id: string;
    title: string;
    legalName: string;
    description: string;
    imageSrc: string;
    inn: string;
    kpp: string;
    createdAt: string;
    updatedAt: string;
    createdBy: Author
}

export interface Collection {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    createdAt: string;
    updatedAt: string;
    createdBy: Author,
    isFree: boolean;
    keywords: string[];
    company: Company;
    questionsCount: number;
    tasksCount: number;
    testQuestionsCount: number;
    specializations: Specialization[];
}