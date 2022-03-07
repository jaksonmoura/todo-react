import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "./todosSlice";
import { NewTodo } from "./Header.styles";

const Header = () => {
	const dispatch = useDispatch();
	const [newTodo, setNewTodo] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(newTodo);
		dispatch(todoAdded(newTodo));
		setNewTodo("");
	};

	const handeChange = (e) => {
		setNewTodo(e.target.value);
	};

	return (
		<header>
			<form action="/" onSubmit={handleSubmit}>
				<NewTodo>
					<input type="text" value={newTodo} onChange={handeChange} />
				</NewTodo>
			</form>
		</header>
	);
};

export default Header;
