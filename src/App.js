import { Route, Switch } from 'react-router-dom'

import Todos from './views/Todos'
import TodoDetail from './components/TodoDetail/TodoDetail'
import Todolist from './views/TodoList'
import Home from './views/Home'

import './App.css'

function App() {
	return (
		<div className='App'>
			<div>
				<Switch>
					<Route path='/todos' exact>
						<Todos />
					</Route>
					<Route path='/todoDetail/:id' exact>
						<TodoDetail />
					</Route>
					<Route path='/todo'>
						<Todolist />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</div>
	)
}

export default App
