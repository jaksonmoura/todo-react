import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "./components/todosSlice";
import filtersSlice from "./components/filtersSlice";

const store = configureStore({
	reducer: {
		todos: todosSlice,
		filters: filtersSlice,
	},
});

export default store;
