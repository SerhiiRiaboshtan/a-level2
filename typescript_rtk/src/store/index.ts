import { configureStore } from "@reduxjs/toolkit";
import todoReducer  from './todoSlice';
import exp from "constants";

const store = configureStore({
    reducer: {
        todos: todoReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;