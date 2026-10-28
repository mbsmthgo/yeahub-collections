import type {Author, Skill, Specialization} from "./common.ts";

export interface Question {
    id: number;
    title: string;
    slug: string;
    description: string;
    code: string;
    imageSrc: string;
    keywords: string[];
    longAnswer: string;
    shortAnswer: string;
    status: string;
    rate: number;
    complexity: number;
    createdById: string;
    updatedById: string;
    questionSpecializations: Specialization[];
    questionSkills: Skill[];
    questionTopics: Skill[];
    createdAt: string;
    updatedAt: string;
    createdBy: Author;
    updatedBy: Author;
}