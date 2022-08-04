import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { statusFilters, statusChanged } from "./filtersSlice";
import { FooterWrapper } from "./Footer.styles";

const Footer = () => {
	const [toggleCompleted, setToggleCompleted] = useState(true);
	const dispatch = useDispatch();

	const handleCompleted = (e) => {
		e.preventDefault();
		// todos
		let status = toggleCompleted ? statusFilters.Completed : statusFilters.All;
		dispatch(statusChanged(status));
		setToggleCompleted(!toggleCompleted);
		console.log(toggleCompleted);
	};

	return (
		<FooterWrapper>
			<button onClick={handleCompleted} disabled={toggleCompleted ? "" : "disabled"}>
				Completed only
			</button>
			<button onClick={handleCompleted} disabled={toggleCompleted ? "disabled" : ""}>
				Show all
			</button>
		</FooterWrapper>
	);
};

export default Footer;
