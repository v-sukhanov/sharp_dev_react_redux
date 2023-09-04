import { setupListeners } from '@reduxjs/toolkit/query';
import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos/todos.slice';
import { todosApi } from './todos/todos.api';

export const store = configureStore({
	reducer: {
		[todosApi.reducerPath]: todosApi.reducer,
		todos: todosReducer
	},
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
