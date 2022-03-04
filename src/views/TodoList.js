import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './TodoList.css'
import Items from '../components/Items/Items'
import { todoActions } from '../redux/actions/Slice'

function TodoList() {
	const [todos, setTodos] = useState([])

	const dispatch = useDispatch()

	const history = useHistory()

	const handleSubmit = e => {
		e.preventDefault()
		const todoValue = e.target[0].value

		if (!todoValue) return

		const newTodo = { description: todoValue, done: false }
		setTodos([...todos, newTodo])
		e.target[0].value = ''
	}

	const handleClose = e => {
		const { name } = e.target
		const updateTodos = todos.map(todo => ({
			...todo,
			done: todo.description === name ? true : todo.done,
		}))
		setTodos(updateTodos)
	}

	const handleSave = () => {
		let randomId = Math.floor(Math.random() * 100)
		const todoList = { id: randomId, todos: todos }
		dispatch(todoActions.save(todoList))
		history.push('/todos')
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type='text' name='todo' placeholder='Enter a todo' />
				<button type='submit'>Add</button>
				<button
					type='button'
					onClick={handleSave}
					className='saveButton'
				>
					Save
				</button>
			</form>

			{todos.length === 0 && (
				<span>Don't have todos yet :( please add one!</span>
			)}
			<div className='todoList'>
				{todos.map((todo, index) => {
					return (
						!todo.done && (
							<Items
								key={`item-${index}`}
								todo={todo}
								close={handleClose}
							/>
						)
					)
				})}
			</div>
		</>
	)
}

export default TodoList
