import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { statusFilters, statusChanged } from "./filtersSlice";
import { FooterWrapper } from "./Footer.styles";

const Footer = () => {
	const [toggleCompleted, setToggleCompleted] = useState(false);
	const dispatch = useDispatch();

	const handleCompleted = (e) => {
		e.preventDefault();
		// todos
		let status = toggleCompleted
			? statusFilters.Completed
			: statusFilters.All;
		dispatch(statusChanged(status));
		setToggleCompleted(!toggleCompleted);
		console.log(toggleCompleted);
	};

	return (
		<footer>
			<button
				onClick={handleCompleted}
				disabled={toggleCompleted ? "" : "disabled"}
			>
				Completed only
			</button>
			<button
				onClick={handleCompleted}
				disabled={toggleCompleted ? "disabled" : ""}
			>
				Show all
			</button>
		</footer>
	);
};

export default Footer;
