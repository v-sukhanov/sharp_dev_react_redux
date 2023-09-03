import { ITodo } from '../models/todo';
import { TodoItem } from './TodoItem';

export interface ITodoList {
	todos: ITodo[]
	toggleTodo: (todoId: string) => void
	removeTodo: (todoId: string) => void

}

export const TodoList = ({ todos, toggleTodo, removeTodo }: ITodoList) => {
	return <div className="py-8">
		{
			todos.map(todo => <TodoItem todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>)
		}

	</div>
}
