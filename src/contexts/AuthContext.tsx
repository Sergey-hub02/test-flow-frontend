import { createContext, useState, useEffect, type PropsWithChildren } from 'react'
import { jwtDecode, type JwtPayload } from 'jwt-decode'
import Cookies from 'js-cookie'
import { type UserType, type UserContextType } from '@/types/user'

export const AuthContext = createContext({} as UserContextType)

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState({} as UserType)
    const [loading, setLoading] = useState(true)

    const setUserFromToken = (jwtToken: string) => {
        try {
            const decoded = jwtDecode<JwtPayload & UserType>(jwtToken)

            // TODO: добавить проверку на протухший токен

            setUser({
                guid: decoded.sub!,
                photo: decoded.photo,
                lastName: decoded.lastName,
                firstName: decoded.firstName,
                secondName: decoded.secondName,
                birthday: new Date(decoded.birthday),
                role: decoded.role,
            })
        }
        catch (error) {
            console.error(error)
            setUser({} as UserType)
        }
    }

    const login = (token: string) => {
        Cookies.set('accessJWT', token)
        setUserFromToken(token)
    }

    const logout = () => {
        Cookies.remove('accessJWT')
        setUser({} as UserType)
    }

    useEffect(() => {
        const jwt = Cookies.get('accessJWT')

        if (!jwt) {
            setUser({} as UserType)
            return;
        }

        setUserFromToken(jwt)
        setLoading(false)
    }, [])

    const value = {
        user: user,
        loading: loading,
        login: login,
        logout: logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
