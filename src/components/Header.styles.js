import styled from "styled-components";

export const NewTodo = styled.div`
	position: relative;
	padding: 1rem;
	input {
		background: #fff;
		padding: 1rem;
		border-radius: 6px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		text-indent: 1.75rem;
		font-size: 1.2rem;
		width: 100%;
	}

	&:before {
		content: "";
		position: absolute;
		top: calc(50% - 9px);
		left: 1.75rem;
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
		left: calc(2rem + 2px);
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
