import { createSlice } from '@reduxjs/toolkit';


import { jwtDecode} from "../../../utils/jwtDecode";
import { api } from '../../rtkQuery';
import { cartSlice } from './cartReducer';
import { catSlice } from "./categoryReducer";


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
            state.payload = null;
            state.token   = null;
        },
        userDetails(state, {payload:{_id, login, nick, acl, avatar}}){
            // console.log("userDetails->", _id, login, nick, acl, avatar);
            state.payload.sub = {...state.payload.sub, 'nick':nick, 'avatar':avatar};
        },
    }
})

export const actionFullLogin = (login, password) =>
    async dispatch => {
        const token = await dispatch(api.endpoints.login.initiate(login, password));       
        if (token?.data?.login){
            dispatch(authSlice.actions.login(token.data.login));
            await dispatch(actionUserInfo());
        }else if (!(token?.data?.login)) {
            alert('Нет такого пользователя и(или) пароля');
        }
    }
export const actionFullRegistration = (login, password) =>
    async dispatch => {
        const data = await dispatch(api.endpoints.registration.initiate(login, password));
        if(Object.hasOwn(data, 'error')){
            const errorText=data.error.message.slice(0,data.error.message.indexOf(':')-1)
            alert('Ошибка регистрации: '+errorText);
        }
        else {
            // console.log("data from actionFullRegistration->", data);
            dispatch(actionFullLogin(login, password));
            
        } 
        
    }

const actionUserInfo = () => 
    async (dispatch, getState) => {
        const {auth} = getState();
        // console.log("auth->", auth);
        if (auth.payload){
            const {id} = auth.payload.sub;
            const {data} = await dispatch(api.endpoints.getUserById.initiate({_id: id}));
            // console.log("data from actionUserInfo", data.UserFindOne);
            dispatch (authSlice.actions.userDetails(data.UserFindOne));
        }
    }

export const actionLogout = () => 
    dispatch => {
        dispatch(authSlice.actions.logout());
        dispatch(cartSlice.actions.cartClear());
        dispatch(catSlice.actions.clear());
        
    } 

export const actionSetNick = ({_id, nick}) =>
    async dispatch => {
        const {data} = await dispatch(api.endpoints.setUserNick.initiate({_id, nick}));
        console.log("data from actionSetNick->", data);
        await dispatch(actionUserInfo());
    }

    