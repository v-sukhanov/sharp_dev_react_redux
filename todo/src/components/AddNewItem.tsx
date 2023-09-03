import { useState } from 'react';

export interface IAddNewItem {
	addNewToDo: (item: string) => void
}

export const AddNewItem = ({addNewToDo}: IAddNewItem) => {
	const [newItemName, setNewItemName] = useState('');

	const onAddNewTodo = () => {
		addNewToDo(newItemName);
		setNewItemName('')
	}
	return <div>
		<div>
			<label htmlFor="new_item" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New item</label>
			<input type="text" id="new_item"
			       value={newItemName}
			       onKeyUp={(e) => (e.key === 'Enter' && newItemName) ? onAddNewTodo() : null}
			       onChange={e => setNewItemName(e.target.value)}
			       className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			       placeholder="To do something..."/>
		</div>
		<div>
			<button onClick={onAddNewTodo} disabled={!newItemName} className="disabled:opacity-50 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
				Add
			</button>
		</div>
	</div>
}
