import type { TaskType } from '@/types/task'

export type ProblemType = {
    guid: string,
    wording: string,
    tasks: TaskType[],
}
