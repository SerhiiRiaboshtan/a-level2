import {configureStore } from '@reduxjs/toolkit';
import { api } from '../rtkQuery';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';

import { authSlice } from './reducers/authReducer';
import { cartSlice } from './reducers/cartReducer';
import { catSlice } from './reducers/categoryReducer';

export const store = configureStore({
    reducer: {  
                [authSlice.name]: persistReducer({key: 'auth', storage}, authSlice.reducer),
                [catSlice.name]: persistReducer({key: 'cat', storage}, catSlice.reducer),
                [cartSlice.name]: persistReducer({key: 'cart', storage}, cartSlice.reducer),
                [api.reducerPath]: api.reducer,
             },
             middleware: (getDefaultMiddleware) => [
                ...getDefaultMiddleware({serializableCheck: {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}}),
                    api.middleware],         
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(api.middleware)
})

const persistor = persistStore(store);console.log(persistor);