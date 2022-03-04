import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useFetch } from '../../hooks/useFetch'

import '../../views/Todos.css'
import TodoDetailStat from './TodoDetailStat/TodoDetailStat'
import TodoDetailList from './TodoDetailList/TodoDetailList'

const TodoDetail = () => {
	const { id } = useParams()
	const { data, loading } = useFetch(process.env.REACT_APP_API_URL)
	const { total, done, delayed } = data

	const todosData = useSelector(state =>
		state.todosData.todos.filter(todoList => {
			return todoList.id === Number(id)
		})
	)[0]

	return (
		<>
			<h2>Detail of Todolist {id}</h2>
			<Link to='/todos'>Go back</Link>
			<TodoDetailStat
				total={total}
				done={done}
				delayed={delayed}
				loading={loading}
			/>

			{todosData && <TodoDetailList todos={todosData.todos} />}
		</>
	)
}

export default TodoDetail
