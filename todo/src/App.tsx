import React, { useState } from 'react';
import './App.css';
import { AddNewItem } from './components/AddNewItem';
import { ITodo } from './models/todo';
import { Guid } from 'guid-typescript';
import { TodoList } from './components/TodoList';



const App = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	const addNewToDo = (todo: string) => {
		setTodos([
			...todos,
			{
				id: Guid.create().toString(),
				name: todo,
				done: false
			}
		])
	}

	const toggleTodo = (id: string) => {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				return {
					...todo,
					done: !todo.done
				}
			}
			return todo
		}))
	}

	const removeTodo = (id: string) => {
		setTodos(todos.filter(todo => {
			return todo.id !== id;
		}))
	}

	return <div className="h-screen flex justify-center">
		<div className=" mt-8 w-2/4">
			<AddNewItem addNewToDo={addNewToDo}/>
			<TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
		</div>
	</div>


}

export default App;
