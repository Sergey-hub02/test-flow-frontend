export type UserType = {
    guid: string,
    photo?: string,
    lastName: string,
    firstName: string,
    secondName?: string,
    birthday: Date,
    role: string,
}

export type UserContextType = {
    user: UserType,
    loading: boolean,
    login?: (token: string) => void,
    logout?: () => void,
}
