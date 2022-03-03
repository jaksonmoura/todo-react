import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { filteredTodos } from "./todosSlice";

const Todos = () => {
	// const state = useSelector((state) => state);
	const todos = useSelector(filteredTodos);

	return (
		<ul>
			{todos.map((todo) => (
				<Todo key={todo.id} {...todo} />
			))}
		</ul>
	);
};

export default Todos;
