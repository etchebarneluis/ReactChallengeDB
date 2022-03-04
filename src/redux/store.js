import { configureStore } from '@reduxjs/toolkit'

import todoSlice from './actions/Slice'

const store = configureStore({
	reducer: {
		todosData: todoSlice.reducer,
	},
})

export default store
