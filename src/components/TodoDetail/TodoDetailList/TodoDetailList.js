import './TodoDetailList.css'

const TodoDetailList = ({ todos }) => {
	return (
		<div className='todoListDetail'>
			{todos.map((todo, index) => {
				return <p key={`list-det-${index}`}>{todo.description}</p>
			})}
		</div>
	)
}

export default TodoDetailList
