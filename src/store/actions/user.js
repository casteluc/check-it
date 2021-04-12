export const signIn = (user) => ({
    type: 'user/signIn',
    payload: user
})

export const signUp = (credentials) => ({
    type: 'user/signUp',
    payload: credentials
})