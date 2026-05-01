import { type TestWithTasksType } from '@/types/test'

const test: TestWithTasksType = {
    guid: 'a71fa286-d9bf-4f3e-91c8-389ed76851b2',
    name: 'Тест на дауна',
    duration: 120,
    problems: [
        {
            guid: 'b566a55f-7fcb-4fa7-b042-a9acd1c68b2f',
            wording: 'Lorem ipsum dolor sit amet',
            tasks: [
                {
                    guid: '410768d3-cbb8-48fb-a84f-1d2a8ec86daf',
                    wording: 'Даун 1',
                    type: 'SingleAnswerTask',
                    variants: [
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 1',
                        },
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 2',
                        },
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 3',
                        },
                    ],
                },
                {
                    guid: '410768d3-cbb8-48fb-a84f-1d2a8ec86daf',
                    wording: 'Даун 2',
                    type: 'MultipleAnswersTask',
                    variants: [
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 1',
                        },
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 2',
                        },
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 3',
                        },
                    ],
                },
                {
                    guid: '410768d3-cbb8-48fb-a84f-1d2a8ec86daf',
                    wording: 'Даун 3',
                    type: 'TextAnswerTask',
                },
            ],
        },
        {
            guid: '3c2c5eea-53ee-404f-8684-2ff338d39697',
            wording: 'Я устал',
            tasks: [
                {
                    guid: '410768d3-cbb8-48fb-a84f-1d2a8ec86daf',
                    wording: 'Даун 1',
                    type: 'SingleAnswerTask',
                    variants: [
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 1',
                        },
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 2',
                        },
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 3',
                        },
                    ],
                },
                {
                    guid: '410768d3-cbb8-48fb-a84f-1d2a8ec86daf',
                    wording: 'Даун 2',
                    type: 'MultipleAnswersTask',
                    variants: [
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 1',
                        },
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 2',
                        },
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 3',
                        },
                    ],
                },
                {
                    guid: '410768d3-cbb8-48fb-a84f-1d2a8ec86daf',
                    wording: 'Даун 3',
                    type: 'TextAnswerTask',
                },
            ],
        },
        {
            guid: '0ebf81bc-c50c-4f78-bb4d-61f998530444',
            wording: 'Я не устал',
            tasks: [
                {
                    guid: '410768d3-cbb8-48fb-a84f-1d2a8ec86daf',
                    wording: 'Даун 1',
                    type: 'SingleAnswerTask',
                    variants: [
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 1',
                        },
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 2',
                        },
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 3',
                        },
                    ],
                },
                {
                    guid: '410768d3-cbb8-48fb-a84f-1d2a8ec86daf',
                    wording: 'Даун 2',
                    type: 'MultipleAnswersTask',
                    variants: [
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 1',
                        },
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 2',
                        },
                        {
                            guid: 'd8896c41-a95f-44fd-a653-29e766ba623c',
                            wording: 'Под даун 3',
                        },
                    ],
                },
                {
                    guid: '410768d3-cbb8-48fb-a84f-1d2a8ec86daf',
                    wording: 'Даун 3',
                    type: 'TextAnswerTask',
                },
            ],
        },
    ],
}

export default test
