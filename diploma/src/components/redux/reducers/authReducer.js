import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode} from "../../../utils/jwtDecode";
import { api } from '../../rtkQuery';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {token: null, payload: null},
    reducers: {
        login(state, {payload:token}){
            const payload = jwtDecode(token);
            if (payload){
                state.payload = payload;
                state.token   = token;
                }
        },
        logout(state){
            console.log('LOGOUT state before->', state)
            state.payload = null;
            state.token   = null;
        }
    }
})

export const actionFullLogin = (login, password) =>
    async dispatch => {
        const token = await dispatch(api.endpoints.login.initiate(login, password));       
        if (token?.data?.login){
            dispatch(authSlice.actions.login(token.data.login));
            await dispatch(actionUserInfo());
        }
    }

export const actionUserInfo = () => 
    async (dispatch, getState) => {
        const {auth} = getState();
        console.log("auth->", auth);
        if (auth.payload){
            const {id} = auth.payload.sub;
            const {data} = await dispatch(api.endpoints.getUserById.initiate({_id: id}));
            console.log("data from actionUserInfo", data);
        }
    }


export const actionLogout = () => 
    dispatch => {
        dispatch(authSlice.actions.logout());
    } 
    