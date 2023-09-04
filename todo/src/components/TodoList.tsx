import { TodoItem } from './TodoItem';
import { useAppSelector } from '../hooks/redux';
import { useActions } from '../hooks/redux-actions';

export const TodoList = () => {
	const {todos} = useAppSelector(state => state.todos)

	return <div className="py-8">
		{
			todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
		}
	</div>
}
