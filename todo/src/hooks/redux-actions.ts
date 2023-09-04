import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import { todosActions } from '../store/todos/todos.slice';

const actions = {
	...todosActions
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
