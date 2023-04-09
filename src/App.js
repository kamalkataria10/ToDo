import './App.scss'
import 'antd/dist/antd.css'
import Header from './Header'
import AddTodo from './AddTodo'
import { useEffect, useState } from 'react'
import Main from './Main'
import { uid } from 'uid'

function App() {
	const [addTodo, setAddTodo] = useState(false)
	const [todoList, setTodoList] = useState([
		{
			title: 'Popcorn',
			description: 'It should contain caramel.',
			due_date: '2023-04-08',
			tag: ['Kitchen'],
			status: 'Open',
			key: uid(),
			timestamp: new Date().toUTCString(),
		},
		{
			title: 'Homework',
			description: 'Maths.',
			due_date: '2023-04-08',
			tag: ['School', 'Work'],
			status: 'Done',
			key: uid(),
			timestamp: new Date().toUTCString(),
		},
	
	])

	useEffect(() => {
		console.log(todoList)
	}, [todoList])

	return (
		<div className='App'>
			{addTodo ? (
				<AddTodo
					setTodoList={setTodoList}
					todoList={todoList}
					setAddTodo={setAddTodo}
					addTodo={addTodo}
				/>
			) : (
				<></>
			)}
			<Header setAddTodo={setAddTodo} addTodo={addTodo} />
			<Main setTodoList={setTodoList} todoList={todoList} />
		</div>
	)
}

export default App
