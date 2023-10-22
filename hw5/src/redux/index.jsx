import { applyMiddleware, compose, createStore } from "redux";
import { rootReduser } from "./reducers";
import {createLogger} from 'redux-logger';


const getStore = (initialState={}) => {
    const store = createStore(
        rootReduser,
        initialState,
        compose(
            applyMiddleware(
                createLogger({collapsed: true})
            )
        )
    )
    return store
}

export default getStore