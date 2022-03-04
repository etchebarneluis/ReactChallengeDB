import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
	name: 'todosData',

	initialState: {
		todos: [],
	},
	reducers: {
		save: (state, action) => {
			state.todos = state.todos.concat({ ...action.payload })
		},
	},
})

export const todoActions = todoSlice.actions

export default todoSlice
