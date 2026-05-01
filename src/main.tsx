import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import App from '@/pages/App'
import Login from '@/pages/auth/login/Login'
import Register from '@/pages/auth/register/Register'
import Disciplines from '@/pages/disciplines/Disciplines'
import UserDisciplines from '@/pages/my-disciplines/UserDisciplines'
import DetailDiscipline from '@/pages/my-disciplines/DetailDiscipline'
import DetailTest from '@/pages/my-disciplines/tests/DetailTest'
import TestAttempt from '@/pages/tests/TestAttempt'
import Grades from '@/pages/grades/Grades'

import { AuthProvider } from '@/contexts/AuthContext'

import './styles/custom-bootstrap.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App title="Профиль" />,
    },
    {
        path: '/disciplines/',
        element: <Disciplines title="Дисциплины" />
    },
    {
        path: '/my-disciplines/',
        element: <UserDisciplines title="Мои дисциплины" />,
    },
    {
        path: '/my-disciplines/:disciplineId',
        element: <DetailDiscipline />,
        loader: ({ params }) => {
            return { disciplineId: params.disciplineId }
        },
    },
    {
        path: '/my-disciplines/:disciplineId/tests/:testId',
        element: <DetailTest />,
        loader: ({ params }) => {
            return {
                disciplineId: params.disciplineId,
                testId: params.testId,
            }
        },
    },
    {
        path: '/tests/:testId',
        element: <TestAttempt />,
        loader: ({ params }) => {
            return { testId: params.testId }
        },
    },
    {
        path: '/tests/:testId/problems/:problemId',
        element: <TestAttempt />,
        loader: ({ params }) => {
            return {
                testId: params.testId,
                problemId: params.problemId,
            }
        },
    },
    {
        path: '/grades/',
        element: <Grades title="Итоговые оценки" />,
    },
    {
        path: '/auth/login/',
        element: <Login title="Вход в систему" />,
    },
    {
        path: '/auth/register/',
        element: <Register title="Регистрация в системе" />,
    },
])

// createRoot(document.getElementById('root')!).render(
//     <RouterProvider router={router} />,
// )

createRoot(document.getElementById('root')!).render(
    (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    )
)
