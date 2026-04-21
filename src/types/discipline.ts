import { type TestType } from '@/types/test'

export type DisciplineType = {
    guid: string,
    name: string,
    photo?: string,
    teachers: string,
    description: string,
    fullDescription?: string,
    tests?: TestType[]
}
