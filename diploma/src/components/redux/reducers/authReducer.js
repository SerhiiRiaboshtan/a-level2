import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode} from "../../../utils/jwtDecode";
import { api } from '../../rtkQuery';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {token: null, payload: null},
    reducers: {
        login(state, {payload:token}){
            // console.log('LOGIN', state, token)
            const payload = jwtDecode(token)
            if (payload){
                state.payload = payload
                state.token   = token
            }
            // return {payload, token}
        },
        logout(state){
            // console.log('LOGOUT', state)
            state.payload = null
            state.token   = null
        }
    }
})
export const actionAuthLogin  = token => ({type: 'AUTH_LOGIN', token});
export const actionAuthLogout = ()    => ({type: 'AUTH_LOGOUT'});

export const actionFullLogin = (login, password) =>
    async dispatch => {
        const token = await dispatch(api.endpoints.login.initiate({login, password}))       
        console.log(token)
        if (token?.data?.login){
            dispatch(authSlice.actions.login(token.data.login))
        }
    }