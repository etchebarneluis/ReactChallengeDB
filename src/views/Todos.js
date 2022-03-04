import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './Todos.css'

const Todos = () => {
	const todosData = useSelector(state => state.todosData.todos)
	return (
		<div className='todoslist'>
			<h2>List of Todos</h2>
			<Link to='/todo'>Add new Todolist</Link>
			{todosData.map(todoList => {
				return (
					<div key={todoList.id} className='todoListItem'>
						{todoList.todos.map(todo => {
							return (
								<p key={todo.description}>{todo.description}</p>
							)
						})}
						<Link
							to={`/todoDetail/${todoList.id}`}
							className='details'
						>
							See details
						</Link>
					</div>
				)
			})}
		</div>
	)
}

export default Todos
