import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "./todosSlice";

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
			<h1>TODO</h1>
			<form action="/" onSubmit={handleSubmit}>
				<input
					autoFocus
					type="text"
					value={newTodo}
					onChange={handeChange}
				/>
			</form>
		</header>
	);
};

export default Header;
