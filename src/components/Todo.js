import React from "react";
import { TodoItem } from "./Todos.style";
import { useDispatch, useSelector } from "react-redux";
import { todoToggled, selectTodoById } from "./todosSlice";

const Todo = ({ id, text, completed }) => {
	const dispatch = useDispatch();

	const changeStatus = () => {
		dispatch(todoToggled(id));
	};

	return (
		<TodoItem
			id={`todo_${id}`}
			onClick={changeStatus}
			className={completed ? "completed" : ""}
		>
			{text}
		</TodoItem>
	);
};

export default Todo;
