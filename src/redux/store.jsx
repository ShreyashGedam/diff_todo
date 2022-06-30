import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./todos/reducer";

const rootReducer = combineReducers( {
    createTask : todoReducer
})

export const store = createStore(rootReducer,
    applyMiddleware(thunk))

    // console.log(store.getState())