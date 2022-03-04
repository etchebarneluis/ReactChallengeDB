import '../TodoDetail.css'

const TodoDetailStat = ({ total, done, delayed, loading }) => {
	return (
		<>
			{loading && <div>Loading...</div>}
			<div className='detailTodo'>
				<span>Total: {total}</span>
				<span>Done: {done}</span>
				<span>Delayed: {delayed}</span>
			</div>
		</>
	)
}

export default TodoDetailStat
