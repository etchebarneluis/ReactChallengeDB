import './Items.css'

function Items(props) {
	const { todo, close } = props

	return (
		<div className='item'>
			{todo.description}
			{todo.done ? null : (
				<button
					name={todo.description}
					className='close'
					onClick={close}
				>
					x
				</button>
			)}
		</div>
	)
}

export default Items
