import styled from "styled-components";

export const BoxWrapper = styled.div`
	background: #fff;
	border-radius: 6px;
	box-shadow: 15px 15px 30px rgba(23, 2, 36, 0.2);
	${"" /* padding: 1rem; */}
	overflow: hidden;
`;

export const TodosColletion = styled.div`
	padding: 1rem;
	overflow-x: visible;
	overflow-y: auto;
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		text-align: left;
		min-height: 200px;
		max-height: 50vh;
	}
`;

export const TodoItem = styled.li`
	font-size: 1.2rem;
	position: relative;
	padding: 1rem 0 1rem 1.7rem;
	color: #555;
	&:not(:last-of-type) {
		border-bottom: 1px solid #e5e5e5;
	}

	&:first-of-type {
		${"" /* padding-top: 0; */}
	}

	&.completed {
		&:before {
			background: green;
		}
		&:after {
			border: 2px solid #fff;
			border-top: 0;
			border-left: 0;
		}
	}

	&:before {
		content: "";
		position: absolute;
		top: calc(50% - 9px);
		left: -0.25rem;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 1px solid rgba(0, 0, 0, 0.2);
		background: #e5e5e5;
		z-index: 1;
	}

	&:after {
		content: "";
		position: absolute;
		top: calc(50% - 6px);
		left: 2px;
		width: 6px;
		height: 10px;
		border: 2px solid #999;
		border-top: 0;
		border-left: 0;
		background: transparent;
		z-index: 1;
		transform: rotate(45deg);
	}
`;
