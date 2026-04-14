import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import App from './pages/App'
import Login from './pages/auth/login/Login'
import Register from './pages/auth/register/Register'

import './styles/custom-bootstrap.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App title="Профиль" />,
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

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
