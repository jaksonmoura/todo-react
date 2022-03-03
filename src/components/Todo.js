import React from "react";

const Todo = ({ id, text, completed }) => {
	return (
		<li id={`todo_${id}`} className={completed ? "completed" : ""}>
			{text}
		</li>
	);
};

export default Todo;
