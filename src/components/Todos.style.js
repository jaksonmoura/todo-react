import styled from "styled-components";

export const BoxWrapper = styled.div`
	background: #fff;
	border-radius: 6px;
	box-shadow: 15px 15px 30px rgba(23, 2, 36, 0.2);
	padding: 1rem;
`;

export const TodosColletion = styled.div`
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		text-align: left;
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
			background: indigo;
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
		background: red;
		z-index: 1;
	}
`;
