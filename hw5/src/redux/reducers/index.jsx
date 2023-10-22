import { combineReducers } from "redux";
import {userReducer} from "./userReducer.jsx";


export const rootReduser = combineReducers({
    user: userReducer,
})
