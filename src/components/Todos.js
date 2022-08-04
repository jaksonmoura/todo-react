import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { TodosColletion } from "./Todos.style";

const Todos = () => {
	const state = useSelector((state) => state);
	const todos =
		state.filters.status === "completed" ? state.todos.filter((todo) => todo.completed === true) : state.todos;

	return (
		<TodosColletion>
			<ul>
				{todos.map((todo) => (
					<Todo key={todo.id} {...todo} />
				))}
			</ul>
		</TodosColletion>
	);
};

export default Todos;
