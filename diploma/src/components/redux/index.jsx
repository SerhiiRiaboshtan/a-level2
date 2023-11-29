import {configureStore } from '@reduxjs/toolkit';
import { api } from '../rtkQuery';

import { authSlice } from './reducers/authReducer';
import { cartSlice } from './reducers/cartReducer';
import { catSlice } from './reducers/categoryReducer';

export const store = configureStore({
    reducer: {  
                [authSlice.name]: authSlice.reducer,
                [catSlice.name]: catSlice.reducer,
                [cartSlice.name]: cartSlice.reducer,
                [api.reducerPath]: api.reducer,
             },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})