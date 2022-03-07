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
		<FooterWrapper>
			<ul>
				{/* <li>
					<a href="#remove-completed">Clean up list</a>
				</li> */}
				<li>
					<a href="#show-completed" onClick={handleCompleted}>
						{toggleCompleted ? "Completed only" : "Show All"}
					</a>
				</li>
			</ul>
		</FooterWrapper>
	);
};

export default Footer;
