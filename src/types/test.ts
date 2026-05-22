import type { AttemptType } from '@/types/attempt'
import type { ProblemType } from '@/types/problem'

export type TestType = {
    guid: string,
    name: string,
    description: string,
    fullDescription?: string,
    problems?: string[],
    duration: number,
    attemptsCount: number,
    disciplineId: string,
    attempts?: AttemptType[],
    finalGrade?: number,
}

export type TestWithTasksType = {
    guid: string,
    name: string,
    duration: number,
    problems: ProblemType[],
}
