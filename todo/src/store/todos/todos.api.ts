import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ServerResponse } from 'http';
import { ITodo } from '../../models/todo';

export const todosApi = createApi({
	reducerPath: 'todos/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5000'
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		getTodos: build.query<ITodo[], string>({
			query: () => ({
				url: `list`
			}),
		}),

	})
})

export const {useGetTodosQuery, useLazyGetTodosQuery} = todosApi
