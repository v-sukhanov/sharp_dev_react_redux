import React, { useState } from 'react';
import './App.css';
import { AddNewItem } from './components/AddNewItem';
import { ITodo } from './models/todo';
import { Guid } from 'guid-typescript';
import { TodoList } from './components/TodoList';
import { useActions } from './hooks/redux-actions';



const App = () => {

	return <div className="h-screen flex justify-center">
		<div className=" mt-8 w-2/4">
			<AddNewItem/>
			<TodoList/>
		</div>
	</div>


}

export default App;
