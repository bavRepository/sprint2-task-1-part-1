import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {counterReducer} from "../model/counter-reducer.ts";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// to be able to access the store in the browser console
// @ts-ignore
window.store = store