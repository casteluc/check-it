export const signIn = (credentials) => ({
    type: 'user/signIn',
    payload: credentials
})

export const signUp = (credentials) => ({
    type: 'user/signUp',
    payload: credentials
})