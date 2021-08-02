import styled from "styled-components";

export const Container = styled.button<{ isOutlined?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	max-height: 5rem;
	background: ${({ isOutlined }) =>
		isOutlined ? "var(--background)" : "var(--main)"};
	color: ${({ isOutlined }) =>
		isOutlined ? "var(--secondary)" : "var(--white)"};
	font-weight: 500;
	border-radius: 7px;
	border: ${({ isOutlined }) => isOutlined && "1px solid var(--main)"};
	padding: 1.2rem 1.6rem;
	transition: filter 0.2s ease-out, opacity 0.2s ease-out;
	cursor: pointer;

	&:not(:disabled):hover,
	&:not(:disabled):focus,
	&:not(:disabled):active {
		filter: brightness(0.9);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
