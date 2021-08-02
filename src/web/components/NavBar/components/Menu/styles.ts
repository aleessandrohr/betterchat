import NextImage from "next/image";

import styled from "styled-components";

import { Button } from "web/components/Button";

export const Container = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 75vw;
	max-width: 35rem;
	height: 100%;
	background: var(--background);
	color: var(--secondary);
	padding: 2rem;
	overflow-y: auto;
`;

export const User = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const Avatar = styled(NextImage)`
	width: 7.2rem;
	height: 7.2rem;
	border-radius: 50%;
`;

export const Name = styled.span`
	margin: 2rem 0 0.5rem 0;
`;

export const Email = styled.span`
	color: var(--gray-600);
	font-size: 1.4rem;
	margin-bottom: 2rem;
`;

export const Login = styled(Button)`
	display: flex;
	align-items: center;
	border-radius: 40px;
	padding: 1rem 1.6rem;
	gap: 1rem;

	> svg {
		width: 1.8rem;
		height: 1.8rem;
		fill: var(--white);
	}
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: 40% 60%;
	align-items: center;
`;

export const SwitchContainer = styled.div`
	display: flex;
	align-items: center;
	grid-column-start: 2;
	justify-self: end;
	color: var(--gray-800);
	font-size: 1.4rem;
	gap: 0.5rem;

	> .MuiSwitch-root {
		.MuiSwitch-track,
		.MuiSwitch-thumb {
			background: var(--gray-400);
		}

		.MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track,
		.Mui-checked .MuiSwitch-thumb {
			background: var(--main);
		}
	}
`;
