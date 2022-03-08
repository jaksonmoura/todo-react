import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { statusFilters, statusChanged } from "./filtersSlice";
import { FooterWrapper } from "./Footer.styles";

const Footer = () => {
	const [showAll, setShowAll] = useState(true);
	const dispatch = useDispatch();

	const handleCompleted = (e) => {
		e.preventDefault();
		// todos
		let status = showAll ? statusFilters.Completed : statusFilters.All;
		dispatch(statusChanged(status));
		setShowAll(!showAll);
	};

	return (
		<FooterWrapper>
			<button
				onClick={handleCompleted}
				disabled={showAll ? "" : "disabled"}
			>
				Completed only
			</button>
			<button
				onClick={handleCompleted}
				disabled={showAll ? "disabled" : ""}
			>
				Show all
			</button>
		</FooterWrapper>
	);
};

export default Footer;
