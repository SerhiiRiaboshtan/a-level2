export const SET_USER_TOKEN = 'SET_USER_TOKEN'

const defaultState = {
    token: '',
    login: '',
}

export function userReducer(state=defaultState, action){
    switch (action.type) {
        case SET_USER_TOKEN:
            return {
                ...state,
                token: action.payload.token,
                login: action.payload.login
            }
        default:
            return state
    }
}

export const setUserTokenAC = (token, login) => ({
    type: SET_USER_TOKEN,
    payload:{token, login},
})