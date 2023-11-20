import { configureStore } from '@reduxjs/toolkit';


import { api } from '../rtkQuery';
import { cartReducer } from './reducers/cartReducer';
import { jwtDecode } from "../../utils";

// import authSlice from './reducers/authReducer';
import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
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

export const store = configureStore({
    reducer: {  
                [authSlice.name]: authSlice.reducer,
                cartReducer,
                [api.reducerPath]: api.reducer,
             },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})