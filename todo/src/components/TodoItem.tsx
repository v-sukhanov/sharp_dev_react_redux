import { ITodo } from '../models/todo';
import classNames from 'classnames';

export interface ITodoItem {
	todo: ITodo;
	toggleTodo: (todoId: string) => void
	removeTodo: (todoId: string) => void
}

let uniqCheckboxId = 0

export const TodoItem = ({ todo, toggleTodo, removeTodo }: ITodoItem) => {
	uniqCheckboxId++;
	return <div
		className={classNames("mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 ")}>
		<div className="mb-3 text-gray-900  dark:text-gray-300">
			{todo.name}
		</div>
		<div className="flex justify-between">
			<div className="flex items-center">
				<input onChange={() => toggleTodo(todo.id)} checked={todo.done} id={`todoDone-${uniqCheckboxId}`} type="checkbox"
				       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
				<label htmlFor={`todoDone-${uniqCheckboxId}`}
				       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Done</label>
			</div>
			<button onClick={() => removeTodo(todo.id)} className="disabled:opacity-50 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
				Remove
			</button>
		</div>

	</div>
}
