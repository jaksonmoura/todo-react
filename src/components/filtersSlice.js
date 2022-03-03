import { createSlice } from "@reduxjs/toolkit";

export const statusFilters = {
	All: "all",
	Completed: "completed",
};
const initialState = {
	status: statusFilters.All,
};

const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		statusChanged(state, action) {
			console.log(state);
			return {
				...state,
				status: action.payload,
			};
		},
	},
});

export const { statusChanged } = filtersSlice.actions;
export default filtersSlice.reducer;
