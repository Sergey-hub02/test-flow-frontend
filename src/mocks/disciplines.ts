import { type DisciplineType } from '@/types/discipline'
import tests from '@/mocks/tests'

const disciplines: DisciplineType[]  = [
    {
        guid: 'e20cd01c-0eff-4fa9-aad1-799597b861d7',
        name: 'Математический анализ',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
        teachers: 'Иванов И.И., Пак С.А.',
        tests: tests.filter(test => test.disciplineId === 'e20cd01c-0eff-4fa9-aad1-799597b861d7'),
    },
    {
        guid: '83f33126-9a66-402d-8e91-3de8946301fb',
        name: 'Линейная алгебра и аналитическая геометрия',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi',
        teachers: 'Сидоров А.А.',
        tests: tests.filter(test => test.disciplineId === '83f33126-9a66-402d-8e91-3de8946301fb'),
    },
    {
        guid: '8fd8b64d-2348-4d43-9b42-e5ce3400ba23',
        name: 'Физика',
        description: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.',
        teachers: 'Петров П.П.',
        tests: tests.filter(test => test.disciplineId === '8fd8b64d-2348-4d43-9b42-e5ce3400ba23'),
    },
    {
        guid: '8aefca14-8103-430c-8823-49eeb5ef6689',
        name: 'Информатика',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right',
        teachers: 'Петров П.П., Пак С.А.',
        tests: tests.filter(test => test.disciplineId === '8aefca14-8103-430c-8823-49eeb5ef6689'),
    },
    {
        guid: '84a29089-f78e-41aa-becc-253302eaef9a',
        name: 'Скотоводство',
        description: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like',
        teachers: 'Сидоров А.А., Иванов И.И.',
        tests: tests.filter(test => test.disciplineId === '84a29089-f78e-41aa-becc-253302eaef9a'),
    },
]

export default disciplines
