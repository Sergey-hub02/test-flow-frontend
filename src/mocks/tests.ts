import { type TestType } from '@/types/test'

const tests: TestType[] = [
    {
        guid: '53955589-8f57-476d-9e0c-aa489a8f95d6',
        name: 'Тест на дауна',
        description: 'Очень интересный тест. Даун вы или же нет? Пройдите тест и узнайте!',
        problems: ['Вы даун?', 'Вы аутист?', 'Вы мудила?', 'Вы ебланище?'],
        duration: 120,
        attemptsCount: 2,
        disciplineId: 'e20cd01c-0eff-4fa9-aad1-799597b861d7',
        attempts: [
            {
                guid: '27a2b49a-2af2-43d2-b7fc-c02af7d2d8f4',
                linearGrade: 3.45,
                nonLinearGrade: 4.32,
                finalGrade: 4,
                createdAt: new Date('2026-04-21T22:08:00'),
                updatedAt: new Date('2026-04-21T23:08:00')
            },
            {
                guid: '1af260ed-5ccb-43b1-ac18-7c384006ef93',
                linearGrade: 5.0,
                nonLinearGrade: 5.0,
                finalGrade: 5,
                createdAt: new Date('2026-04-19T20:00:00'),
                updatedAt: new Date('2026-04-19T21:00:00')
            },
            {
                guid: 'd5950356-5d24-411f-b3fb-3b1874601ccc',
                linearGrade: 4.30,
                nonLinearGrade: 4.82,
                finalGrade: 5,
                createdAt: new Date('2026-04-10T15:30:00'),
                updatedAt: new Date('2026-04-10T16:00:00')
            },
        ],
    },
    {
        guid: '7bd65c78-5c50-46a0-beae-2785ebc0a99d',
        name: 'Тест на аутиста',
        description: 'Очень интересный тест. Аутист вы или же нет? Пройдите тест и узнайте!',
        problems: ['Абсолютное уёбище?', 'Жалкая пародия человека', 'Центр карьеры'],
        duration: 120,
        attemptsCount: 1,
        disciplineId: '84a29089-f78e-41aa-becc-253302eaef9a',
    },
    {
        guid: 'e298aab3-fa9b-4ab5-8805-aa6b19c61d78',
        name: 'Тест на ебланище',
        description: 'Очень интересный тест. Ебланище вы или же нет? Пройдите тест и узнайте!',
        problems: ['Просто конченный уебан', 'Говнище', 'Центр карьеры', 'Пидор'],
        duration: 120,
        attemptsCount: 3,
        disciplineId: 'e20cd01c-0eff-4fa9-aad1-799597b861d7',
    },
    {
        guid: '3f4ea11d-9fec-449c-853c-8993d29994d7',
        name: 'Тест на петуха',
        description: 'Очень интересный тест. Петух вы или же нет? Пройдите тест и узнайте!',
        problems: ['Заебал', 'Центр карьеры', 'Кусок говна'],
        duration: 120,
        attemptsCount: 5,
        disciplineId: '84a29089-f78e-41aa-becc-253302eaef9a',
        attempts: [
            {
                guid: '5b95d4c6-ead8-44a2-9171-eb09e1cab9fa',
                createdAt: new Date('2026-03-13T10:30:00'),
                updatedAt: new Date('2026-03-13T12:00:00')
            },
        ],
    },
    {
        guid: '0fcac215-d467-46df-9dde-b62936c29420',
        name: 'Тест на мудилище',
        description: 'Очень интересный тест. Мудилище вы или же нет? Пройдите тест и узнайте!',
        problems: ['Центр карьеры', 'Какое уёбище передало центр карьеры нам?'],
        duration: 120,
        attemptsCount: 1,
        disciplineId: '8aefca14-8103-430c-8823-49eeb5ef6689',
    },
]

export default tests
