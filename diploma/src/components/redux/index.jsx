import {configureStore } from '@reduxjs/toolkit';
import { api } from '../rtkQuery';

import { authSlice } from './reducers/authReducer';
import { cartReducer } from './reducers/cartReducer';

export const store = configureStore({
    reducer: {  
                [authSlice.name]: authSlice.reducer,
                cartReducer,
                [api.reducerPath]: api.reducer,
             },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})