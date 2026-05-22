import type { VariantType } from '@/types/variant'

export type TaskType = {
    guid: string,
    wording: string,
    type: string,
    variants?: VariantType[],
}
