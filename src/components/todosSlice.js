import { createSelector, createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./filtersSlice";

const initialState = [{ id: 1, text: "test", completed: true }];

const nextTodoId = (todos) => {
	const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
	return maxId + 1;
};

const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		todoAdded(state, action) {
			state.push({
				id: nextTodoId(state),
				text: action.payload,
				completed: false,
			});
		},
		todoToggled(state, action) {
			const todo = state.find((todo) => todo.id === action.payload);
			todo.completed = !todo.completed;
		},
		todosCleanUp(state, action) {
			state.todos = state.todos.filter(
				(todo) => todo.completed === false,
			);
		},
	},
});

export const { todoAdded, todoToggled, todosCleanUp } = todosSlice.actions;
export default todosSlice.reducer;

const selectTodos = (state) => state.todos;

export const filteredTodos = createSelector(
	selectTodos,
	(state) => state.filters,
	(todos, filters) => {
		console.log(filters);
		if (filters.status === statusFilters.All) {
			return todos;
		}
		return todos.filter((todo) => todo.completed === true);
	},
);
