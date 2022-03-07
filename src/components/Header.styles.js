import styled from "styled-components";

export const NewTodo = styled.div`
	position: relative;
	margin-bottom: 1.5rem;
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
		left: 0.75rem;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 1px solid rgba(0, 0, 0, 0.2);
		background: red;
		z-index: 1;
	}
`;
