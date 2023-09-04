import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '../../models/todo';
import { produce } from 'immer';
import { Guid } from 'guid-typescript';

const TODO_STORAGE_KEY = 'todos'

interface TodosState {
	todos: ITodo[]
}

const initialState: TodosState = {
	todos: JSON.parse(localStorage.getItem(TODO_STORAGE_KEY) ?? '[]')
}

const saveInLocalStorage = (todos: ITodo[]) => {
	localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos))
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		getTodos(state) {
			console.log('here')
		},
		addTodo(state, action: PayloadAction<string>) {
			state.todos = [...state.todos, {
				id: Guid.create().toString(),
				name: action.payload,
				done: false
			}]
			saveInLocalStorage(state.todos)
		},
		removeTodo(state, action: PayloadAction<string>) {
			state.todos = state.todos.filter(x => x.id !== action.payload)
			saveInLocalStorage(state.todos)
		},
		toggleTodo(state, action: PayloadAction<string>) {
			state.todos = state.todos.map(x => {
				if (x.id !== action.payload) {
					return x;
				}
				return {
					...x,
					done: !x.done
				}
			})
			saveInLocalStorage(state.todos)
		}
	}
})

export const todosActions = todosSlice.actions
export const todosReducer = todosSlice.reducer
