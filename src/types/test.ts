import type { AttemptType } from '@/types/attempt'

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
