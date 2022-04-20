import { createStore, Store } from "redux";
import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const reducers = combineReducers({
    todo: todoReducer,
});

export type RootState = ReturnType<typeof reducers>

const store: Store = createStore(reducers);

export type AppDispatch = typeof store.dispatch

export default store;