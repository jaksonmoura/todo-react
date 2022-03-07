import styled from "styled-components";

export const FooterWrapper = styled.footer`
	background: #fff;
	border-radius: 6px;
	box-shadow: 0 0 15px rgba(23, 2, 36, 0.07);
	padding: 1rem;

	display: inline-flex;
	align-items: center;
	justify-content: center;
	list-style-type: none;
	width: 100%;
	gap: 1rem;

	button {
		color: #555;
		background: #f5f5f5;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 6px;

		&:before {
			content: "⏺";
			display: inline-block;
			margin-right: 0.5rem;
		}

		&:not(:disabled) {
			cursor: pointer;

			&:hover {
				background: #f9f9f9;
			}
		}

		&:disabled {
			&:before {
				color: #6f3ce9;
			}
		}
	}
`;
