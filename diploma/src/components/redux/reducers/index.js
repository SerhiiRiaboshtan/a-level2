import { combineReducers } from "redux";

import localStoredReducer from "./localStoredReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";

export const rootReducer = combineReducers({
    auth: localStoredReducer( authReducer, 'authToken'),
    cart: cartReducer,
})