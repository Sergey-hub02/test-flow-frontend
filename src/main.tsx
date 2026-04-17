import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import App from '@/pages/App'
import Login from '@/pages/auth/login/Login'
import Register from '@/pages/auth/register/Register'
import Disciplines from '@/pages/disciplines/Disciplines'
import UserDisciplines from '@/pages/disciplines/UserDisciplines'

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
