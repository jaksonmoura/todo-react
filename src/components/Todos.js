import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { filteredTodos } from "./todosSlice";
import { TodosColletion } from "./Todos.style";

const Todos = () => {
	// const state = useSelector((state) => state);
	const todos = useSelector(filteredTodos);

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
